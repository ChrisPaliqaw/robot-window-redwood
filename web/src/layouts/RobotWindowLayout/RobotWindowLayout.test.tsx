import { render } from '@redwoodjs/testing/web'

import RobotWindowLayout from './RobotWindowLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('RobotWindowLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RobotWindowLayout />)
    }).not.toThrow()
  })
})
