import { fetchProjectsPage } from '../../api/loaders'

export async function data () {
  return (await fetchProjectsPage()).data
}

export type Data = Awaited<ReturnType<typeof data>>
