import type { Meta, StoryObj } from '@storybook/react'

import { Card } from '@/components/ui/Card/Card'

const meta = {
  component: Card,
  tags: ['autodocs'],
  title: 'Components/UI/Card',
} satisfies Meta<typeof Card> // если красный обновить webstorm

export default meta
type Story = StoryObj<typeof Card>

export const CardStory: Story = {
  args: {},
}
