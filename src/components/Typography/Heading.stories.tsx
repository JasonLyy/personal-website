import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Heading } from '../Typography/Heading';

export default {
  title: 'Example/Heading',
  component: Heading,
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args}>I am a heading</Heading>
);

export const Heading1 = Template.bind({});
Heading1.args = {
  variant: 'heading1',
};

export const Heading2 = Template.bind({});
Heading2.args = {
  variant: 'heading2',
};

export const Heading3 = Template.bind({});
Heading3.args = {
  variant: 'heading3',
};

export const Heading4 = Template.bind({});
Heading4.args = {
  variant: 'heading4',
};

export const Heading5 = Template.bind({});
Heading5.args = {
  variant: 'heading5',
};

export const Heading6 = Template.bind({});
Heading6.args = {
  variant: 'heading6',
};
