import React, {ReactNode} from 'react'
import {Container} from '@material-ui/core'

type PageLayoutProps = {
  children: ReactNode
}

const PageLayout = ({children}: PageLayoutProps) => {
  return (
    <div className="pageContainer">
        {children}
    </div>
  )
}

export default PageLayout
