import { fetchAboutPage } from '../../api/loaders'

export async function data () {
  return (await fetchAboutPage()).data
}

export type Data = Awaited<ReturnType<typeof data>>
