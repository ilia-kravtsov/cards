import { ChangeEvent, useState } from 'react'

import s from './Input.module.scss'

import eyeIcon from '../../../styles/eyeIcon.svg'
import searchIcon from '../../../styles/searchIcon.svg'

export type InputProps = {
  disabled?: boolean | undefined
  label?: string
  onChange: (event: string) => void
  password?: boolean
  search?: boolean
  value?: string
}

export const Input = ({ disabled, label, onChange, password, search, value }: InputProps) => {
  const [error, setError] = useState<null | string>(null)
  const [eye, setEye] = useState<boolean>(false)
  const onChangeCB = (e: ChangeEvent<HTMLInputElement>) => {
    const length = search ? 20 : 25

    if (e.currentTarget.value.length > length) {
      setError('error')
    } else {
      setError(null)
      onChange(e.currentTarget.value)
    }
  }

  const onEyeClick = () => {
    setEye(!eye)
  }

  // eslint-disable-next-line no-nested-ternary
  const type = search ? 'search' : password ? 'password' : 'text'
  // eslint-disable-next-line no-nested-ternary
  const inputClassName =
    error && !search
      ? s.input + ' ' + s.borderError + ' ' + s.error
      : error && search
        ? s.inputSearchError
        : search
          ? s.inputSearch
          : s.input
  const containerClassName = error ? s.container + ' ' + s.borderError : s.container

  return (
    <div>
      <div className={containerClassName}>
        {search && <img alt={'searchIcon'} className={s.searchIcon} src={searchIcon} />}
        <input
          className={inputClassName}
          disabled={disabled}
          onChange={onChangeCB}
          placeholder={label}
          type={eye ? 'text' : type}
          value={value}
        />
        {password && <img alt={'eyeIcon'} className={s.eye} onClick={onEyeClick} src={eyeIcon} />}
      </div>
      {error && <div className={s.error}>{error}</div>}
    </div>
  )
}
