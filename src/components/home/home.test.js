import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import Home from './Home.jsx'

describe('Home', () => {
  it('should render own component snapshot', () => {
    // Snapshot test
    const tree = renderer.create(
      <Home/>
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should contain the home class', () => {
    const mainDiv = shallow(
      <Home />
    )

    const classes = mainDiv.find('div').hasClass('home')

    expect(classes).toBe(true)
  })
})