import s from './card.module.scss'

export type CardProps = {}
/**
 * Card component description
 */
export const card = (props: CardProps) => {
  const { ...rest } = props

  return (
    <div {...rest} className={s.cardContainer}>
      <div className={s.card}></div>
    </div>
  )
}
