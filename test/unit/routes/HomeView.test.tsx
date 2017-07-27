import 'mocha'
import * as React from 'react'
import * as assert from 'power-assert'
import { shallow } from 'enzyme'
import HomeView from '../../../src/routes/HomeView'

describe('test Home view', () => {
  it('should render #home element.', () => {
    const wrapper = shallow(<HomeView />)
    assert(wrapper.find('#home').length === 1)
  })
})
