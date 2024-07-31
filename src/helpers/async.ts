/* eslint-disable @typescript-eslint/no-throw-literal */
import { type AxiosResponse } from 'axios'

export function wrapPromise<T> (promise: () => Promise<AxiosResponse<T>>) {
  let status = 'pending'
  let result: T
  const suspend = promise().then(
    (res) => {
      status = 'success'
      result = res.data
    },
    (err) => {
      status = 'error'
      result = err
    }
  )
  return () => {
    if (status === 'pending') {
      throw suspend
    } else if (status === 'error') {
      throw result
    } else if (status === 'success') {
      return result
    }
  }
}
