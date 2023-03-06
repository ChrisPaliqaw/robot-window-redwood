import type { ComponentMeta, ComponentStory } from '@storybook/react'

import RobotWindowLayout from './RobotWindowLayout'

export const generated: ComponentStory<typeof RobotWindowLayout> = (args) => {
  return <RobotWindowLayout {...args} />
}

export default {
  title: 'Layouts/RobotWindowLayout',
  component: RobotWindowLayout,
} as ComponentMeta<typeof RobotWindowLayout>
