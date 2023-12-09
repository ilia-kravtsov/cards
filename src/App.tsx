import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

export function App() {
  return (
    <div>
      <Button as={'a'} href={'https://www.google.com'} variant={'primary'}>
        link
      </Button>
      <Typography
        as={'a'}
        className={'link_1'}
        href={'https://www.google.com'}
        target={'_blank'}
        variant={'link_1'}
      >
        Causerie Test Zürich Stauffacherstrasse
      </Typography>
    </div>
  )
}
