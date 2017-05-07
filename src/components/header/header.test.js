/* eslint-disable */

import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header', () => {
  it('should contain the header class', () => {
    const renderedComponent = shallow(
      <Header />
    );

    const result = renderedComponent.hasClass('header');

    expect(result).toBe(true);
  });
});
