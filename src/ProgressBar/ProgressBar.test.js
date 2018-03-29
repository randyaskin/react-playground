import React from 'react';
import ReactDOM from 'react-dom';

// For using enzyme to stub a component
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import ProgressBar from './ProgressBar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProgressBar />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('has a default progress value', () => {
  const pb = shallow(<ProgressBar />);
  expect(pb.state(['progress'])).toEqual(0);
});

it('updates state from prop', () => {
  const pb = shallow(<ProgressBar progress={40} />);
  expect(pb.state(['progress'])).toEqual(40);
});

it('handles strings appropriately', () => {
  const pb = shallow(<ProgressBar progress="40" />);
  expect(pb.state(['progress'])).toEqual(40);
});

it('updates when the progress input changes', () => {
  const pb = shallow(<ProgressBar progress={40} />),
        input = pb.find('input'),
        evt = { target: input };
  expect(pb.state(['progress'])).toEqual(40);
  input.value = 10;
  input.simulate('change', evt);
  expect(pb.state(['progress'])).toEqual(10);
});