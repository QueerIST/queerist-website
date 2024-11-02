import { fetchEventsPage } from '../../api/loaders'

export async function data () {
  return (await fetchEventsPage()).data
}

export type Data = Awaited<ReturnType<typeof data>>
