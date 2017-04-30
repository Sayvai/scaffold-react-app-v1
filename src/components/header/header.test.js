import React from 'react'
import { shallow } from 'enzyme'
import Header from './Header.jsx'

describe('Header', () => {
  it('should contain the header class', () => {
    const renderedComponent = shallow(
      <Header/>
    )

    const result = renderedComponent.hasClass('header')

    expect(result).toBe(true)
  })
})