import type { ComponentMeta } from '@storybook/react'

import TasksPage from './TasksPage'

export const generated = () => {
  return <TasksPage />
}

export default {
  title: 'Pages/TasksPage',
  component: TasksPage,
} as ComponentMeta<typeof TasksPage>
