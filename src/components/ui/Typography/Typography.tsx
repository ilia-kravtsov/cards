import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './Typography.module.scss'

export type TypographyProps<T extends ElementType> = {
  as?: T
  className?: string
  href?: string
  target?: string
  to?: string
} & ComponentPropsWithoutRef<T>
/**
 * Typography components description
 */
export const Typography = <T extends ElementType = 'div'>(props: TypographyProps<T>) => {
  const { as: Component = 'div', className, ...rest } = props

  return (
    <Component className={s[className!]} {...rest}>
      <span>{'Carosserie Test Zürich\n' + 'Stauffacherstrasse 31\n' + '8004 Zürich, ZH, CH'}</span>
    </Component>
  )
}
