import React from 'react'
import {
  TheContent,
  TheSidebar,
} from './index'

const TheLayout = () => {

  return (
    <div className="c-app c-default-layout">
      <TheSidebar/>
      <div className="c-wrapper">
        {/*<TheHeader/>*/}
        <div className="-body">
          <TheContent/>
        </div>
        
      </div>
    </div>
  )
}

export default TheLayout
