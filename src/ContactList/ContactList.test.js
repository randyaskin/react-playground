import React from 'react';
import ReactDOM from 'react-dom';

// For using enzyme to stub a component
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import ContactList from './ContactList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ContactList />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('contains 5 children', () => {
  const cl = shallow(<ContactList />);
  expect(cl.find('li')).toHaveLength(5);
});