import * as React from 'react'
import {shallow} from 'enzyme'
import App from '../App'

describe('App component exist', () => {
	test('shoud render App', () => {
		const Wrapper = shallow(<App testMessage="Hello" />)

		expect(Wrapper.exists()).toBe(true)
	})
})
