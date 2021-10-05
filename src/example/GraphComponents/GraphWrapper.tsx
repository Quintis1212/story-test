import React from 'react'

type graphWrapperProps = {
  children: React.ReactNode
}

export const GraphWrapper = (props: graphWrapperProps) => {
  return <div className="graph-wrapper">{props.children}</div>
}
