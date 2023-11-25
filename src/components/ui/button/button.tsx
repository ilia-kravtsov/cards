import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import clsx from 'clsx'

import s from './button.module.scss'

export const ButtonVariant = ['link', 'primary', 'secondary', 'tertiary'] as const

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  children: ReactNode
  className?: string
  /**
   * add width: 100% to the `button` element
   */
  fullWidth?: boolean
  // variant?: 'link' | 'primary' | 'secondary' | 'tertiary'
  variant?: (typeof ButtonVariant)[number]
} & ComponentPropsWithoutRef<T>
/**
 * Button components description
 */
export const Button = <T extends ElementType = 'button'>(
  props: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>
) => {
  const { as: Component = 'button', className, fullWidth, variant = 'primary', ...rest } = props
  const classNames = clsx(s[variant], className, fullWidth && s.fullWidth)

  return <Component className={classNames} {...rest} />
}
