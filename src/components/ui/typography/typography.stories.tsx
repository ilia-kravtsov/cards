import type { Meta, StoryObj } from '@storybook/react'

import { BrowserRouter, Link } from 'react-router-dom'

import { Typography, TypographyProps } from './typography'

const meta = {
  argTypes: {},
  component: Typography,
  tags: ['autodocs'],
  title: 'Components/UI/typography',
} satisfies Meta<TypographyProps> // если красный обновить webstorm

export default meta
type Story = StoryObj<typeof Typography>

export const large: Story = {
  args: {
    as: 'h1',
    children: 'Causerie Test Zürich\n' + 'Stauffacherstrasse 31\n' + '8004 Zürich, ZH, CH',
    variant: 'large',
  },
}

export const h1: Story = {
  args: {
    as: 'h1',
    children: 'Carosserie Test Zürich\n' + 'Stauffacherstrasse 31\n' + '8004 Zürich, ZH, CH',
    variant: 'h1',
  },
}

export const h2: Story = {
  args: {
    as: 'h2',
    children: 'Carosserie Test Zürich\n' + 'Stauffacherstrasse 31\n' + '8004 Zürich, ZH, CH',
    variant: 'h2',
  },
}

export const h3: Story = {
  args: {
    children: 'Causerie Test Zürich\n' + 'Stauffacherstrasse 31\n' + '8004 Zürich, ZH, CH',
    variant: 'h3',
  },
}

export const body_1: Story = {
  args: {
    children: 'Causerie Test Zürich\n' + 'Stauffacherstrasse 31\n' + '8004 Zürich, ZH, CH',
    variant: 'body_1',
  },
}

export const body_2: Story = {
  args: {
    children: 'Causerie Test Zürich\n' + 'Stauffacherstrasse 31\n' + '8004 Zürich, ZH, CH',
    variant: 'body_2',
  },
}

export const subtitle_1: Story = {
  args: {
    children: 'Causerie Test Zürich\n' + 'Stauffacherstrasse 31\n' + '8004 Zürich, ZH, CH',
    variant: 'subtitle_1',
  },
}

export const subtitle_2: Story = {
  args: {
    children: 'Causerie Test Zürich\n' + 'Stauffacherstrasse 31\n' + '8004 Zürich, ZH, CH',
    variant: 'subtitle_2',
  },
}

export const caption: Story = {
  args: {
    children: 'Causerie Test Zürich\n' + 'Stauffacherstrasse 31\n' + '8004 Zürich, ZH, CH',
    variant: 'caption',
  },
}

export const overline: Story = {
  args: {
    children: 'Causerie Test Zürich\n' + 'Stauffacherstrasse 31\n' + '8004 Zürich, ZH, CH',
    variant: 'overline',
  },
}

export const link_1: Story = {
  args: {
    as: 'a',
    children: 'Causerie Test Zürich\n' + 'Stauffacherstrasse 31\n' + '8004 Zürich, ZH, CH',
    href: 'https://www.google.com',
    target: '_blank',
    variant: 'link_1',
  },
}

export const link_2: Story = {
  args: {
    as: 'a',
    children: 'Causerie Test Zürich\n' + 'Stauffacherstrasse 31\n' + '8004 Zürich, ZH, CH',
    href: 'https://www.google.com',
    target: '_blank',
    variant: 'link_2',
  },
}

export const link_3: Story = {
  args: {
    as: Link,
    children: 'Causerie Test Zürich\n' + 'Stauffacherstrasse 31\n' + '8004 Zürich, ZH, CH',
    target: '_blank',
    to: 'https://www.google.com',
    variant: 'link_2',
  },
  render: args => (
    <BrowserRouter>
      <Typography {...args} />
    </BrowserRouter>
  ),
}
