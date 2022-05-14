import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Heading } from './Heading';

export default {
  title: 'Typography/Heading',
  component: Heading,
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args}>I am a heading</Heading>
);

export const Heading1 = Template.bind({});
Heading1.args = {
  level: 1,
};

export const Heading2 = Template.bind({});
Heading2.args = {
  level: 2,
};

export const Heading3 = Template.bind({});
Heading3.args = {
  level: 3,
};

export const Heading4 = Template.bind({});
Heading4.args = {
  level: 4,
};

export const Heading5 = Template.bind({});
Heading5.args = {
  level: 5,
};

export const Heading6 = Template.bind({});
Heading6.args = {
  level: 6,
};
