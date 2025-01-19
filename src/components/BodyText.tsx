import { type PropsWithChildren } from 'react'

import classNames from 'classnames'

import './bodytext.css'

export const BodyText = ({ children, className }: PropsWithChildren<{ className?: string }>) => (
  <div className={classNames('body-text', className)}>
    {children}
  </div>
)
