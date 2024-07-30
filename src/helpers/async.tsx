/* eslint-disable @typescript-eslint/no-throw-literal */
import { useState, type PropsWithChildren } from 'react'

import { type AxiosResponse } from 'axios'

export function WrapDelayed (props: PropsWithChildren<{ load: boolean }>) {
  const { load, children } = props
  const [loaded, setLoaded] = useState(false)

  if (load && !loaded) { setLoaded(true) }

  return loaded && (children)
}

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
