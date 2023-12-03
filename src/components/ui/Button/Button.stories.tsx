import type { Meta, StoryObj } from '@storybook/react'

import { Button, ButtonProps, ButtonVariant } from '@/components/ui/Button/Button'

import buttonIcon from '../../../styles/buttonIcon.svg'

const meta = {
  argTypes: {
    disabled: { control: 'boolean' },
    variant: {
      control: { type: 'radio' },
      options: ButtonVariant,
    },
  },
  component: Button,
  tags: ['autodocs'],
  title: 'Components/UI/Button',
} satisfies Meta<ButtonProps> // если красный обновить webstorm typeof Button

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    children: 'Button primary',
    disabled: false,
    variant: 'primary',
  },
}
Primary.storyName = 'Primary Button'

export const PrimaryWithIcon: Story = {
  args: {
    children: 'Button primary',
    disabled: false,
    variant: 'primary',
  },
  render: ({ disabled }) => (
    <Button disabled={disabled}>
      <img alt={'Button Icon'} src={buttonIcon} />
      Button primary
    </Button>
  ),
}
export const Secondary: Story = {
  args: {
    children: 'Button secondary',
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
    children: 'Link-Button',
    disabled: false,
    variant: 'link',
  },
}

export const FullWidth: Story = {
  args: {
    // ...Primary.args, те что ниже перезаписывают свойства из Primary
    children: 'Full Width Button',
    disabled: false,
    fullWidth: true,
    variant: 'primary',
  },
}

export const AsLink: Story = {
  args: {
    as: 'a',
    children: 'Link looks like a Button',
    variant: 'primary',
  },
}
