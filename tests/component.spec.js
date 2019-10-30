import React from 'react';
import { shallow } from 'enzyme';
import ReactPagination from '../src/main';

describe('Basic Test', () => {
  it('renders to document', () => {
    const component = shallow(<BoilerplateReactCompnent />);
    const cnt = component.find('.react-component');
    cnt.simulate('click');
    expect(cnt).toMatch(/Hello React/);
  });
});


