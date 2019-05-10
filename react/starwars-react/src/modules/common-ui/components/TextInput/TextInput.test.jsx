import React from 'react';
import TestRenderer from 'react-test-renderer';

import { TextInput } from '.';

it('renders correctly a TextInput component', () => {
  const testRenderer = TestRenderer.create(<TextInput />);
  expect(testRenderer.toJSON()).toMatchSnapshot();
});

it('renders correctly a TextInput component with onChange', () => {
  const mockOnChange = jest.fn();
  const testRenderer = TestRenderer.create(<TextInput placeHolder="placeholder" onChange={mockOnChange} />);
  const input = testRenderer.root.findByType('input');

  expect(input.props.placeholder).toBe('placeholder');

  input.props.onChange();

  expect(mockOnChange).toHaveBeenCalled();
});

it('renders correctly a TextInput component with password', () => {
  const mockOnChange = jest.fn();
  const testRenderer = TestRenderer.create(
    <TextInput placeHolder="placeholder" type="password" onChange={mockOnChange} />
  );
  const input = testRenderer.root.findByType('input');

  expect(input.props.type).toBe('password');
});
