import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Input, InputProps } from '@/components/ui/Input/Input'

const meta = {
  argTypes: {
    disabled: { control: 'boolean' },
  },
  component: Input,
  tags: ['autodocs'],
  title: 'Components/UI/Input',
} satisfies Meta<InputProps> // если красный обновить webstorm typeof button

export default meta
type Story = StoryObj<typeof Input>

export const InputStory: Story = {
  args: {
    disabled: false,
  },
  render: ({ disabled }) => {
    const [value, setValue] = useState<string>('')

    return <Input disabled={disabled} onChange={setValue} value={value} />
  },
}

export const InputStoryWithEye: Story = {
  args: {
    disabled: false,
    password: true,
  },
  render: ({ disabled, password }) => {
    const [value, setValue] = useState<string>('')

    return <Input disabled={disabled} onChange={setValue} password={password} value={value} />
  },
}

export const InputStoryWithSearch: Story = {
  args: {
    disabled: false,
    search: true,
  },
  render: ({ disabled, search }) => {
    const [value, setValue] = useState<string>('')

    return <Input disabled={disabled} onChange={setValue} search={search} value={value} />
  },
}
