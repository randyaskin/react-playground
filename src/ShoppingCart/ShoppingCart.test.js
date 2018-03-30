import React from 'react';
import ReactDOM from 'react-dom';

// For using enzyme to stub a component
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import ShoppingCart from './ShoppingCart';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ShoppingCart />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('contains 2 items', () => {
  const items = [{"id": 0,"name": "Item 1","price": "$1.00"},{"id": 1,"name": "Item 2","price": "$1.00"}];
  const sc = shallow(<ShoppingCart items={items} />);
  expect(sc.find('li')).toHaveLength(2);
});

it('enters edit mode correctly', () => {
  const items = [{"id": 0,"name": "Item 1","price": "$1.00"},{"id": 1,"name": "Item 2","price": "$1.00"}];
  const sc = shallow(<ShoppingCart items={items} />);
  expect(sc.find('ul').find('button')).toHaveLength(0);
  expect(sc.find('button').at(0).text()).toEqual('Edit');
  sc.setState({editMode: true});
  expect(sc.find('ul').find('button')).toHaveLength(2);
  expect(sc.find('button').at(0).text()).toEqual('Done');
});
