import { Story, Meta } from '@storybook/react'
import React from 'react'

import { Example, IProps } from '.'

export default {
  title: 'Example',
  component: Example,
} as Meta

const Template: Story<IProps> = (args) => (
  <div style={{ backgroundColor: 'lightgrey', padding: 24 }}>
    <Example {...args} />
  </div>
)

export const Primary = Template.bind({})
Primary.args = {}
