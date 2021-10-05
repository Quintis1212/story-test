import * as React from 'react'

import { GraphHeader } from './GraphComponents/GraphHeader'
import { GraphRecursiveNavItem } from './GraphComponents/GraphRecursiveNavItem'
import { GraphWrapper } from './GraphComponents/GraphWrapper'
import { data } from './data'
import './index.css'

export interface IProps {}
export const Example: React.FC<IProps> = () => (
  <>
    <GraphWrapper>
      <GraphHeader />
      {data.map((navItem) => {
        return (
          <GraphRecursiveNavItem
            link={navItem.link}
            subLink={navItem.subLink}
            key={navItem.link}
          />
        )
      })}
    </GraphWrapper>
  </>
)
