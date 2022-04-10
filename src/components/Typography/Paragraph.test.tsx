import React from 'react';
import { screen } from '@testing-library/react';
import { Paragraph } from './Paragraph';
import { renderComponent } from '@root/testUtils';

test('renders header correctly', () => {
  renderComponent(<Paragraph variant="body">Body</Paragraph>);
  const heading = screen.getByText(/Body/i);
  expect(heading.nodeName).toBe('p');
});
