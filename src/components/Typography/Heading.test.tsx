import React from 'react';
import { screen } from '@testing-library/react';
import { Heading } from './Heading';
import { renderComponent } from '@root/test/testUtils';

test('renders header correctly', () => {
  renderComponent(<Heading level={1}>Heading</Heading>);
  const heading = screen.getByText(/Heading/i);
  expect(heading.nodeName).toBe('H1');
});

test('renders other header variant correctly', () => {
  renderComponent(<Heading level={3}>Heading2</Heading>);
  const heading = screen.getByText(/Heading2/i);
  expect(heading.nodeName).toBe('H3');
});
