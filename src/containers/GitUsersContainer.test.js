/* eslint-disable */

import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import storeMock from '../../__mocks__/storeMock';
import { githubData } from '../../__mocks__/githubUserDataMock';
import GitUsersContainer from './GitUsersContainer';

describe('GitUsersContainer', () => {
  let Component;
  let GitUsersComponent;

  beforeEach(() => {
    const stateMock = {
      githubUser: {
        githubData,
      },
    };

    const store = storeMock(stateMock);

    const wrapper = mount(
      <Provider store={store}>
        <GitUsersContainer />
      </Provider>,
    );

    Component = wrapper.find(GitUsersContainer);
    GitUsersComponent = wrapper.find('GitUsers');
  });

  it('should render own container component', () => {
    expect(Component.length).toBeTruthy();
  });

  it('should render sub-component GitUsers', () => {
    expect(GitUsersComponent.length).toBeTruthy();
  });
});
