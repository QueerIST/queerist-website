import { fetchImage } from '../../api/loaders'

const ERROR_IMAGE_ID = 219

export async function data () {
  try {
    return (await fetchImage(ERROR_IMAGE_ID)).data
  } catch (error) {

  }
}

export type Data = Awaited<ReturnType<typeof data>>
