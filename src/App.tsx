import { Button } from '@/components/ui/button'

export function App() {
  return (
    <div>
      <Button as={'a'} href={'/link'} variant={'primary'}>
        Hello
      </Button>
      {/*<Button href={'/link'} variant={'primary'}>*/}
      {/*  Hello*/}
      {/*</Button>*/}
    </div>
  )
}
