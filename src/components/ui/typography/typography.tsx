import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './typography.module.scss'

export type TypographyVariant =
  | 'body_1'
  | 'body_2'
  | 'caption'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'large'
  | 'link_1'
  | 'link_2'
  | 'overline'
  | 'subtitle_1'
  | 'subtitle_2'

export type TypographyProps<T extends ElementType = 'div'> = {
  as?: T
  /** Variant */
  variant: TypographyVariant
} & ComponentPropsWithoutRef<T>
/**
 * typography components description
 */
export const Typography = <T extends ElementType = 'div'>(
  props: TypographyProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof TypographyProps<T>>
) => {
  const { as: Component = 'div', children, variant = 'body_1', ...rest } = props

  return (
    <Component {...rest} className={s[variant]}>
      {children}
    </Component>
  )
}
