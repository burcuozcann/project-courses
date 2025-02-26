import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import {courses} from './data'
import Course from './Course'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header></Header>
      {
        courses?.map((course)=>(
          <Course key={course.id} course={course}/>
        ))
         
       

      }
      
    </div>
  )
}

export default App
