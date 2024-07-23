import axios from 'axios'
import { type Params } from 'react-router-dom'

import { type APIResponseSingle } from '../types/strapi'

export async function fetchMainPage () {
  return await axios.get<APIResponseSingle<'api::main-page.main-page'>>('https://queerist.tecnico.ulisboa.pt/a/pi/main-page', {
    params: {
      populate: {
        Meta: { populate: '*' },
        Body: {
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
            'blocks.separator': { populate: '*' }
          }
        }
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
        Body: {
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
            'blocks.separator': { populate: '*' }
          }
        }
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
        Body: {
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
            'blocks.separator': { populate: '*' }
          }
        }
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
        Body: {
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
            'blocks.separator': { populate: '*' }
          }
        }
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
        Body: {
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
            'blocks.separator': { populate: '*' }
          }
        },
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
        Events: { populate: ['Image'] },
        Body: {
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
            'blocks.separator': { populate: '*' }
          }
        }
      }
    }
  })
}

export async function fetchEvent ({ params }: { params: Params<string> }) {
  return await axios.get<APIResponseSingle<'api::event.event'>>(`https://queerist.tecnico.ulisboa.pt/a/pi/slugify/slugs/event/${params.event}`, {
    params: {
      populate: {
        Image: { populate: '*' },
        Body: {
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
            'blocks.separator': { populate: '*' }
          }
        }
      }
    }
  })
}
