import { fetchMainPage } from '../../api/loaders'

export async function data () {
  return (await fetchMainPage()).data
}
