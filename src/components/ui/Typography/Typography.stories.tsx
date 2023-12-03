import type { Meta, StoryObj } from '@storybook/react'

import { BrowserRouter, Link } from 'react-router-dom'

import { Typography } from './Typography'

const meta = {
  component: Typography,
  tags: ['autodocs'],
  title: 'Components/UI/Typography',
} satisfies Meta<typeof Typography> // если красный обновить webstorm

export default meta
type Story = StoryObj<typeof Typography>

export const large: Story = {
  args: {
    as: 'h1',
    className: 'large',
  },
}

export const h1: Story = {
  args: {
    as: 'h1',
    className: 'h1',
  },
}

export const h2: Story = {
  args: {
    as: 'h2',
    className: 'h2',
  },
}

export const h3: Story = {
  args: {
    className: 'h3',
  },
}

export const body_1: Story = {
  args: {
    className: 'body_1',
  },
}

export const body_2: Story = {
  args: {
    className: 'body_2',
  },
}

export const subtitle_1: Story = {
  args: {
    className: 'subtitle_1',
  },
}

export const subtitle_2: Story = {
  args: {
    className: 'subtitle_2',
  },
}

export const caption: Story = {
  args: {
    className: 'caption',
  },
}

export const overline: Story = {
  args: {
    className: 'overline',
  },
}

export const link_1: Story = {
  args: {
    as: 'a',
    className: 'link_1',
    href: 'https://www.google.com',
    target: '_blank',
  },
}

export const link_2: Story = {
  args: {
    as: 'a',
    className: 'link_2',
    href: 'https://www.google.com',
    target: '_blank',
  },
}

export const link_3: Story = {
  render: () => (
    <BrowserRouter>
      <Typography as={Link} className={'link_2'} target={'_blank'} to={'https://www.google.com'} />
    </BrowserRouter>
  ),
}
