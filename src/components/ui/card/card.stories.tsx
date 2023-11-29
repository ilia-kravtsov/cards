import type { Meta, StoryObj } from '@storybook/react'

import { card } from '@/components/ui/card/card'

const meta = {
  component: card,
  tags: ['autodocs'],
  title: 'Components/UI/card',
} satisfies Meta<typeof card> // если красный обновить webstorm

export default meta
type Story = StoryObj<typeof card>

export const Card: Story = {
  args: {},
}
