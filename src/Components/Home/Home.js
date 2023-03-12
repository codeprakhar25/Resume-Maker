import React from 'react'
import { Link } from 'react-router-dom'
import "./home.css"

const Home = () => {
  return (
    <div className='home-container'>
        <div className="heading-home">
            <h1>Create a winning first impression resume with our CollegeResume app - because your career deserves the best!</h1>
            <Link to="/template1">   <button className="create-resume">Create Your Resume</button> </Link>
        </div>
        <h1>TEMPLATES</h1>
        <div className="templates-container">
         
          <Link to="/template1"> <div className="template1">
             <img src="https://www.resumemaker.in/assets/uploads/templates/simple-type2-bullet-noimage-left-tabullar-exp.png" alt="" />
            </div></Link> 
            <Link to="/template1"> <div className="template1">
             <img src="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/383/persistent-resource/santiago-resume-templates.jpg" alt="" />
            </div></Link>
            <Link to="/template1">   <div className="template1">
             <img src="https://www.jobseeker.com/api/media/documents/00aeb02c-a276-48c3-a7ea-58f62bfd4f9a/Resume-example-Modern.svg?v=1678112999290" alt="" />
            </div> </Link>
            <Link to="/template1">      <div className="template1">
             <img src=" https://www.jobseeker.com/api/media/documents/a7c3029e-f6aa-44c4-8f10-7e340ed110a6/Resume-example-Luxe.svg?v=1678113081899" alt="" />
            </div>
           </Link>

        </div>
    </div>
  )
}

export default Home