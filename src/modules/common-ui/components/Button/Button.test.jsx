import React from 'react';
import TestRenderer from 'react-test-renderer';

import { Button } from '.';

it('renders correctly a Button component', () => {
  const testRenderer = TestRenderer.create(<Button>Test Button</Button>);
  expect(testRenderer.toJSON()).toMatchSnapshot();
});

it('renders correctly a Button component with onClick', () => {
  const mockOnClick = jest.fn();
  const testRenderer = TestRenderer.create(<Button onClick={mockOnClick}>Test Button</Button>);
  const testInstance = testRenderer.root;
  const { props } = testInstance.children[0];
  expect(props.className).toBe('button');

  props.onClick();

  expect(mockOnClick).toHaveBeenCalled();
});

it('renders correctly a Button component with secondary style', () => {
  const testRenderer = TestRenderer.create(<Button secondary>Test Button</Button>);
  const testInstance = testRenderer.root;
  expect(testInstance.children[0].props.className).toBe('button secondary');
});
