import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from "@/components/ui/button"



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>hi</h1>
      <h1 class="text-3xl font-bold underline">
    Hello world!
  
    </h1>
    <Button>Click me</Button>
    </div>
  )
}

export default App
