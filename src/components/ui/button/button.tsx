import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import clsx from 'clsx'

import s from './button.module.scss'

export const ButtonVariant = ['link', 'primary', 'secondary', 'tertiary'] as const

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  children?: ReactNode
  className?: string
  disabled?: boolean
  fullWidth?: boolean
  title?: string
  variant?: (typeof ButtonVariant)[number]
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(
  props: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>
) => {
  const { as: Component = 'button', className, fullWidth, variant = 'primary', ...rest } = props

  const classNames = clsx(s.button, s[variant], fullWidth && s.fullWidth, className)

  return <Component {...rest} className={classNames} />
}
