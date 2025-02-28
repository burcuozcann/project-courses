import React from 'react'

function Course({course}) {
  
  const{id,title,descripton,link,image}=course;

  return (
    <div className='course'>
      <div>
        
        <img src={image} width={250} height={150}></img> 
        <h2 className='course-title'>- - - {title} - - -</h2>   
        <p className='course-desc'>{descripton}</p>
       <a href={link} className='course-link' target='blank'>Go To Course</a>
      </div>
    </div>
  )
}

export default Course