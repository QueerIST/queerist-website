import axios from 'axios'
import type { WP_REST_API_Post } from 'wp-types'

import { type APIResponseCollection, type APIResponseSingle, type GetValues } from '../types/strapi'

type Params<Key extends string = string> = {
  readonly [key in Key]: string | undefined;
}

export type YoastPost = WP_REST_API_Post & {
  yoast_head_json: {
    title: string
    canonical: string
    og_title: string
    og_description: string
    og_url: string
    og_site_name: string
    article_published_time: string
    article_modified_time: string
    og_image: Array<{
      width: number
      height: number
      url: string
      type: string
    }>
  }
}

export type YoastPosts = YoastPost[]

const DYNAMIC_ZONE = {
  on: {
    'blocks.text-block': {
      populate: ['Button', 'Button.Link', 'Button.Link.File']
    },
    'blocks.big-banner': {
      populate: ['Image', 'Button', 'Button.Link', 'Button.Link.File']
    },
    'blocks.small-banners-list': {
      populate: ['Banners', 'Banners.Logo', 'Banners.Button', 'Banners.Button.Link', 'Banners.Button.Link.File']
    },
    'blocks.icons-list': {
      populate: ['Icons', 'Icons.Logo']
    },
    'blocks.highlightbox': { populate: ['Button', 'Button.Link', 'Button.Link.File'] },
    'blocks.text-boxes-list': { populate: '*' },
    'blocks.html': { populate: '*' },
    'blocks.separator': { populate: '*' }
  }
}

export async function fetchMainPage () {
  return await axios.get<APIResponseSingle<'api::main-page.main-page'>>('https://queerist.tecnico.ulisboa.pt/a/pi/main-page', {
    params: {
      populate: {
        Meta: { populate: '*' },
        Body: DYNAMIC_ZONE
      }
    }
  })
}

export async function fetchAboutPage () {
  return await axios.get<APIResponseSingle<'api::about-page.about-page'>>('https://queerist.tecnico.ulisboa.pt/a/pi/about-page', {
    params: {
      populate: {
        Meta: { populate: '*' },
        Separator: { populate: '*' },
        Body: DYNAMIC_ZONE
      }
    }
  })
}

export async function fetchEventsPage () {
  return await axios.get<APIResponseSingle<'api::event-page.event-page'>>('https://queerist.tecnico.ulisboa.pt/a/pi/event-page', {
    params: {
      populate: {
        Meta: { populate: '*' },
        Series: { populate: ['Image', 'Logo', 'Events', 'Events.Image'] },
        Body: DYNAMIC_ZONE
      }
    }
  })
}

export async function fetchProjectsPage () {
  return await axios.get<APIResponseSingle<'api::project-page.project-page'>>('https://queerist.tecnico.ulisboa.pt/a/pi/project-page', {
    params: {
      populate: {
        Meta: { populate: '*' },
        Hubs: { populate: ['Image', 'Logo', 'Events', 'Events.Image'] },
        Body: DYNAMIC_ZONE
      }
    }
  })
}

export async function fetchHub ({ params }: { params: Params<string> }) {
  return await axios.get<APIResponseSingle<'api::hub.hub'>>(`https://queerist.tecnico.ulisboa.pt/a/pi/slugify/slugs/hub/${params.hub}`, {
    params: {
      populate: {
        Image: { populate: '*' },
        Logo: { populate: '*' },
        Body: DYNAMIC_ZONE,
        Series: { populate: ['Image', 'Logo', 'Events', 'Events.Image'] }
      }
    }
  })
}

export async function fetchSeries ({ params }: { params: Params<string> }) {
  return await axios.get<APIResponseSingle<'api::serie.serie'>>(`https://queerist.tecnico.ulisboa.pt/a/pi/slugify/slugs/serie/${params.serie}`, {
    params: {
      populate: {
        Image: { populate: '*' },
        Logo: { populate: '*' },
        Hub: { populate: '*' },
        Events: { populate: ['Image', 'Media'], sort: ['Date:desc'] },
        Body: DYNAMIC_ZONE
      }
    }
  })
}

export async function fetchEvent ({ params }: { params: Params<string> }) {
  return await axios.get<APIResponseSingle<'api::event.event'>>(`https://queerist.tecnico.ulisboa.pt/a/pi/slugify/slugs/event/${params.event}`, {
    params: {
      populate: {
        Image: { populate: '*' },
        Media: { populate: '*' },
        Series: { populate: ['Hub'] },
        Body: DYNAMIC_ZONE
      }
    }
  })
}

export async function fetchSubPage ({ params }: { params: Params<string> }) {
  return await axios.get<APIResponseSingle<'api::subpage.subpage'>>(`https://queerist.tecnico.ulisboa.pt/a/pi/slugify/slugs/subpage/${params.subpage}`, {
    params: {
      populate: {
        Image: { populate: '*' },
        Parent: { populate: '*' },
        Body: DYNAMIC_ZONE
      }
    }
  })
}

export async function fetchAllEvents () {
  return await axios.get<APIResponseCollection<'api::event.event'>>('https://queerist.tecnico.ulisboa.pt/a/pi/events', {
    params: {
      populate: {
        Image: { populate: '*' },
        Series: { populate: ['Image', 'Events', 'Events.Image', 'Hub', 'Hub.Image'] }
      },
      pagination: { pageSize: 6 },
      sort: ['Date:desc']
    }
  })
}

export async function fetchImage (id: number) {
  return await axios.get<GetValues<'plugin::upload.file'>>(`https://queerist.tecnico.ulisboa.pt/a/pi/upload/files/${id}`)
}

export async function fetchAllWPPosts () {
  return await axios.get<YoastPosts>('https://queerist.tecnico.ulisboa.pt/blog/wp-json/wp/v2/posts', { params: { context: 'embed' } })
}
