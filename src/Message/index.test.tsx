import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Message from './index';

describe('<Message />', () => {
  it('render Message with dumi', () => {
    const msg = 'dumi';

    render(<Message kind='info'/>);
    expect(screen.queryByText(msg)).toBeInTheDocument();
  });

  test('should render default',()=>{
    const {container} =render(<Message>default</Message>)
    expect(container).toMatchSnapshot()
  })
  test('should render alert with type',()=>{
    const kinds: any[] = ['info', 'warning', 'positive', 'negative'];
    const { getByText } = render(
      <>
        {kinds.map((k) => (
          <Message kind={k} key={k}>
            {k}
          </Message>
        ))}
      </>,
    );
    kinds.forEach((k) => {
      expect(getByText(k)).toMatchSnapshot();
    });
  })
});
