import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Paragraph } from './Paragraph';

export default {
  title: 'Typography/Paragraph',
  component: Paragraph,
} as ComponentMeta<typeof Paragraph>;

const Template: ComponentStory<typeof Paragraph> = (args) => (
  <Paragraph {...args}>I am a paragraph</Paragraph>
);

export const ParagraphBody = Template.bind({});
ParagraphBody.args = {
  variant: 'body',
};

export const ParagraphSmall = Template.bind({});
ParagraphSmall.args = {
  variant: 's',
};

export const ParagraphExtraSmall = Template.bind({});
ParagraphExtraSmall.args = {
  variant: 'xs',
};
