import React, { useState } from 'react'

import plusIcon from '../../img/plus-icon.png'

export const GraphHeader = () => {
  const [isMouseDown, setIsMouseDown] = useState(false)

  const [isMouseOver, setIsMouseOver] = useState(false)

  return (
    <div className="graph-header">
      <h3 className="graph-header-title">Saved graphs</h3>
      <div
        onMouseDown={() => setIsMouseDown(true)}
        onMouseUp={() => setIsMouseDown(false)}
        onMouseOver={() => setIsMouseOver(true)}
        onMouseOut={() => setIsMouseOver(false)}
        className={`graph-header-image-wrapper  ${isMouseOver && 'hovered'} ${
          isMouseDown && 'focused'
        }`}
      >
        <div className="graph-header-image-container">
          <a href="#top">
            <img src={plusIcon} alt="plus-icon" />
          </a>
        </div>
      </div>
    </div>
  )
}
