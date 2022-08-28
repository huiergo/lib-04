import React from 'react';
// import { render, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Button from './index';
import { render } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Button', () => {
  it('renders correctly', () => {
    const wrapper = render(<Button>foo</Button>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  // it('icon', () => {
  //   const wrapper = render(
  //     <Button icon={<img alt="" src="https://zarm.design/images/logo.ce68565d.svg" />}>foo</Button>,
  //   );
  //   expect(toJson(wrapper)).toMatchSnapshot();
  // });

  // it('disabled', () => {
  //   const wrapper = render(<Button disabled>foo</Button>);
  //   expect(toJson(wrapper)).toMatchSnapshot();
  // });

  // it('onClick', () => {
  //   // const onClick = jest.fn();
  //   const onclick=()=>console.log('diaoyognle')
  //   const wrapper = shallow(<Button onClick={onclick}>foo</Button>);
  //   wrapper.simulate('click');
  //   expect(onclick).toBeCalled();
  // });

  // it('onClick when disabled', () => {
  //   const onClick = jest.fn();
  //   const wrapper = shallow(
  //     <Button disabled onClick={onClick}>
  //       foo
  //     </Button>,
  //   );
  //   wrapper.simulate('click');
  //   expect(onClick).not.toBeCalled();
  // });

  // it('onTouchStart in NativeButton', () => {
  //   const wrapper = shallow(<Button>foo</Button>);
  //   wrapper.simulate('touchstart');
  // });
});
