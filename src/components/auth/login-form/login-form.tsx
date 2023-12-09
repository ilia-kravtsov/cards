import { useForm } from 'react-hook-form'

type FormValues = {
  email: string
  password: string
}

export const LoginForm = () => {
  const { handleSubmit, register } = useForm<FormValues>()

  console.log(register)
  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/*<Input {...register('email')} label={'email'} />*/}
      {/*<Input {...register('password')} label={'password'} />*/}
      {/*<button type={'submit'}>Submit</button>*/}
    </form>
  )
}
