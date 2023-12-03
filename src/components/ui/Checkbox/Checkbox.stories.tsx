import { useState } from 'react'

import { Checkbox } from '@/components/ui/Checkbox/Checkbox'
import { Meta } from '@storybook/react'

export default {
  component: Checkbox,
  title: 'Components/UI/Checkbox',
} as Meta<typeof Checkbox>

export const Default = {
  args: {
    disabled: false,
    label: 'Click here',
  },

  render: (args: any) => {
    const [checked, setChecked] = useState(true)

    return (
      <div>
        <Checkbox {...args} checked={checked} onChange={setChecked} />
        <div>checked: {String(checked)}</div>
      </div>
    )
  },
}
