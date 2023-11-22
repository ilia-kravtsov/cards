import type { Meta, StoryObj } from '@storybook/react'

import { Typography, TypographyVariant } from '@/components/ui/Typography/Typography'

const meta = {
  argTypes: {
    variant: {
      options: TypographyVariant,
    },
  },
  component: Typography,
  tags: ['autodocs'],
  title: 'Components/UI/Typography',
} satisfies Meta<typeof Typography> // если красный обновить webstorm

export default meta
type Story = StoryObj<typeof meta>

export const large: Story = {
  args: {
    as: 'h1',
    className: 'large',
    text: 'Carosserie Test Zürich\n' + 'Stauffacherstrasse 31\n' + '8004 Zürich, ZH, CH',
    variant: 'large',
  },
}

export const h1: Story = {
  args: {
    as: 'h1',
    className: 'h1',
    text: 'Carosserie Test Zürich\n' + 'Stauffacherstrasse 31\n' + '8004 Zürich, ZH, CH',
    variant: 'h1',
  },
}

export const h2: Story = {
  args: {
    as: 'h2',
    className: 'h2',
    text: 'Carosserie Test Zürich\n' + 'Stauffacherstrasse 31\n' + '8004 Zürich, ZH, CH',
    variant: 'h2',
  },
}

export const h3: Story = {
  args: {
    as: 'h3',
    className: 'h3',
    text: 'Carosserie Test Zürich\n' + 'Stauffacherstrasse 31\n' + '8004 Zürich, ZH, CH',
    variant: 'h3',
  },
}

export const body_1: Story = {
  args: {
    as: 'body_1',
    className: 'body_1',
    text: 'Carosserie Test Zürich\n' + 'Stauffacherstrasse 31\n' + '8004 Zürich, ZH, CH',
    variant: 'body_1',
  },
}

export const body_2: Story = {
  args: {
    as: 'body_2',
    className: 'body_2',
    text: 'Carosserie Test Zürich\n' + 'Stauffacherstrasse 31\n' + '8004 Zürich, ZH, CH',
    variant: 'body_2',
  },
}

export const subtitle_1: Story = {
  args: {
    as: 'subtitle_1',
    className: 'subtitle_1',
    text: 'Carosserie Test Zürich\n' + 'Stauffacherstrasse 31\n' + '8004 Zürich, ZH, CH',
    variant: 'subtitle_1',
  },
}

export const subtitle_2: Story = {
  args: {
    as: 'subtitle_2',
    className: 'subtitle_2',
    text: 'Carosserie Test Zürich\n' + 'Stauffacherstrasse 31\n' + '8004 Zürich, ZH, CH',
    variant: 'subtitle_2',
  },
}

export const caption: Story = {
  args: {
    as: 'caption',
    className: 'caption',
    text: 'Carosserie Test Zürich\n' + 'Stauffacherstrasse 31\n' + '8004 Zürich, ZH, CH',
    variant: 'caption',
  },
}

export const overline: Story = {
  args: {
    as: 'overline',
    className: 'overline',
    text: 'Carosserie Test Zürich\n' + 'Stauffacherstrasse 31\n' + '8004 Zürich, ZH, CH',
    variant: 'overline',
  },
}

export const link_1: Story = {
  args: {
    as: 'link_1',
    className: 'link_1',
    text: 'Carosserie Test Zürich\n' + 'Stauffacherstrasse 31\n' + '8004 Zürich, ZH, CH',
    variant: 'link_1',
  },
}

export const link_2: Story = {
  args: {
    as: 'link_2',
    className: 'link_2',
    text: 'Carosserie Test Zürich\n' + 'Stauffacherstrasse 31\n' + '8004 Zürich, ZH, CH',
    variant: 'link_2',
  },
}
