import React from 'react'
import { shallow } from 'enzyme'

import GitUsers from './GitUsers.jsx'

describe('GitUsers', () => {
	const userData = {
    login: 'Sayvai',
    avatar_url: 'https://avatars0.githubusercontent.com/u/7581546?v=3'
  }
	const onSubmit = jasmine.createSpy('onSubmit')
	let Component

	beforeEach(() => {
		Component = shallow(
			<GitUsers
				onSubmit={onSubmit}
				userData={userData}
			/>
		)
	})

	it('should render own component', () => {
		expect(Component.length).toBeTruthy();

		expect(Component.find('GitUserSearch').length).toBeTruthy;
	})
})