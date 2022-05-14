import React from 'react';
import { screen } from '@testing-library/react';
import { Paragraph } from './Paragraph';
import { renderComponent } from '@root/test/testUtils';

test('renders header correctly', () => {
  renderComponent(<Paragraph variant="s">Body</Paragraph>);
  const heading = screen.getByText(/Body/i);
  expect(heading.nodeName).toBe('p');
});
