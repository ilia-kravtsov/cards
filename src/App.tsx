import { Link } from 'react-router-dom'

import { Typography } from '@/components/ui/Typography'

export function App() {
  return (
    <div>
      {/*<Button as={'a'} href={'/link'} variant={'primary'}>*/}
      {/*  Hello*/}
      {/*</Button>*/}
      <Typography as={Link} target={'_blank'} to={'https://www.google.com'} />
    </div>
  )
}
