import React, { useState } from 'react'

import adjust from '../../img/adjust.png'
import arrow from '../../img/arrow.png'
import graph from '../../img/graph-icon.png'

type GraphRecursiveNavItemProps = {
  link: string
  subLink: GraphRecursiveNavItemProps | string
  paddingLeft: boolean
}

export const GraphRecursiveNavItem = (props: GraphRecursiveNavItemProps) => {
  const [isShow, setShow] = useState(false)

  const [isMouseDown, setIsMouseDown] = useState(false)

  const subLinkRender = (subLinkItem: string | GraphRecursiveNavItemProps) => {
    if (typeof subLinkItem === 'object') {
      return <GraphRecursiveNavItem {...subLinkItem} paddingLeft={true} />
    }
    return (
      <div className="sub-wrapper">
        <div className={`sub-item padding-left-30`}>
          <div className={`sub-item-graph-icon`}>
            <img src={graph} alt="graph" />
          </div>
          <a href="#top">{subLinkItem}</a>
        </div>
        <div
          onMouseDown={() => setIsMouseDown(true)}
          onMouseUp={() => setIsMouseDown(false)}
          className={`sub-item-adjust-icon ${isMouseDown && 'focused'}`}
        >
          <img src={adjust} alt="adjust" />
        </div>
      </div>
    )
  }

  return (
    <ul>
      <li className={`link ${props.paddingLeft && 'padding-left-25'}`}>
        <div className={`link-image-container ${isShow && 'rotate45deg'}`}>
          <a href="#top">
            <img src={arrow} alt="arrow" />
          </a>
        </div>
        <a href="#top" onClick={() => setShow(!isShow)}>
          {props.link}
        </a>
      </li>
      <li>
        <div className={`wrapper-subitem ${isShow && 'show sub-link'} `}>
          {subLinkRender(props.subLink)}
        </div>
      </li>
    </ul>
  )
}
