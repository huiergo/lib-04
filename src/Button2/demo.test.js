import { sum } from './demo';

import { render } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

describe('sum', () => {
  test.only('sum求和正确', () => {
    expect(sum(1 + 2)).toEqual(3);
  });
});
