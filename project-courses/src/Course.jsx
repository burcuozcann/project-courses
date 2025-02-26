import React from 'react'

function Course({course}) {
  
  const{id,title,descripton,link,image}=course;

  return (
    <div className='course'>
      <div>
        <h2>--{title}--</h2>
        <img src={image} width={250} height={150}></img>    
        <h5>{descripton}</h5>
       <a href={link} target='blank'>Go To Course</a>
      </div>
    </div>
  )
}

export default Course