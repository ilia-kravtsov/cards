import type { Meta, StoryObj } from '@storybook/react'

import buttonIcon from '../../../styles/buttonIcon.svg'
import { Button, ButtonProps, ButtonVariant } from './button'

const meta = {
  argTypes: {
    disabled: { control: 'boolean' },
    title: {
      control: { type: 'text' },
    },
    variant: {
      control: { type: 'radio' },
      options: ButtonVariant,
    },
  },
  component: Button,
  tags: ['autodocs'],
  title: 'Components/UI/button',
} satisfies Meta<ButtonProps> // если красный обновить webstorm typeof button

export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    children: 'button primary',
    disabled: false,
    variant: 'primary',
  },
}
Primary.storyName = 'Primary button'

export const PrimaryWithIcon: Story = {
  args: {
    children: 'button primary',
    disabled: false,
    variant: 'primary',
  },
  render: ({ disabled }) => (
    <Button disabled={disabled}>
      <img alt={'button Icon'} src={buttonIcon} />
      Button primary
    </Button>
  ),
}
export const Secondary: Story = {
  args: {
    children: 'button secondary',
    disabled: false,
    variant: 'secondary',
  },
}
export const Tertiary: Story = {
  args: {
    children: 'Tertiary',
    disabled: false,
    variant: 'tertiary',
  },
}
export const Link: Story = {
  args: {
    children: 'Link-button',
    disabled: false,
    variant: 'link',
  },
}

export const FullWidth: Story = {
  args: {
    // ...Primary.args, те что ниже перезаписывают свойства из Primary
    children: 'Full Width button',
    disabled: false,
    fullWidth: true,
    variant: 'primary',
  },
}

export const AsLink: Story = {
  args: {
    as: 'a',
    children: 'Link looks like a button',
    variant: 'primary',
  },
}
