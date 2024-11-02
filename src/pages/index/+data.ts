import { fetchMainPage } from '../../api/loaders'

export async function data () {
  return (await fetchMainPage()).data
}

export type Data = Awaited<ReturnType<typeof data>>
