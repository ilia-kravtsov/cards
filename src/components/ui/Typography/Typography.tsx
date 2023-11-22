import s from './Typography.module.scss'
export const TypographyVariant = [
  'body_1',
  'body_2',
  'caption',
  'link_1',
  'link_2',
  'overline',
  'subtitle_1',
  'subtitle_2',
  'h1',
  'h2',
  'h3',
  'large',
]

export type TypographyProps = {
  as: any
  className?: string
  text: string
  variant?: (typeof TypographyVariant)[number]
}
/**
 * Typography components description
 */
export const Typography = ({
  as: Component,
  className,
  text,
  variant,
  ...rest
}: TypographyProps) => {
  return (
    <Component {...rest} className={`${s[className]}`}>
      <span>{`${Component}`}</span>
      <span>{text}</span>
    </Component>
  )
}
