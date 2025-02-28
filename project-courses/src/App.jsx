import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import {courses} from './data'
import Course from './Course'
import './css/Course.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header></Header>
      <div className="course-main">
         {
        courses?.map((course)=>(
          <Course key={course.id} course={course}/>
        ))      

         }
      </div>
     
      
    </div>
  )
}

export default App
