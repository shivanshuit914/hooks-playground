import React from 'react';
import {render, fireEvent} from 'react-testing-library';
import Button from './Button';

it('Click button with hooks', () => {
  const {container} = render(<Button />);
  const button = container.firstChild;
  expect(button.textContent).toBe('Click here');
  fireEvent.click(button);
  expect(button.textContent).toBe('Clicked!');
});
