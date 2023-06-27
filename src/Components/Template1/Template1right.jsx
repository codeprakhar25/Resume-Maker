import React from 'react'
import { useContext } from 'react'
import dataContext from '../../DataContext'
import "./template1right.css"

const Template1right = () => {
    const {skill,lastname,martial,education,contact,email,jobexp,startd,endd,projectdesc,projectname,company,dob,fathername,work,firstname,summary,jobtitle} = useContext(dataContext)


  return (
    <div className="main-resume">
  <div className="header">
    <h3>{jobtitle}</h3>
    {firstname} {lastname} <br />
   {email} <br />
   {contact}
  </div>
  <div className="summary-container">
  <h3>Summary</h3>
  <div className="line"></div>
  <div className="summary">
{summary}
  </div>
  </div>

<div className="workexp">
{
    work ?
<>
<div className="workexp-container">
<h3>Work Experience</h3>
<div className="line"></div>
{company}
{jobexp}
{startd}
{endd}
</div>
</>
:
""
}

</div>
<div className="project-details">
<h3>Projects</h3>
<div className="line"></div>    
    {projectname} <br />
    {projectdesc}
</div>
<div className="skills-container">
   <h3>Skill</h3>
   <div className="line"></div>
    {skill}
</div>
<div className="edu-container">
  <h3>Educations</h3>
  <div className="line"></div>
    {education}
</div>
<div className="personal-details">
    <h3>Personal Information</h3>
    <div className="line"></div>
    {dob} <br />
    {fathername}  <br />
    {martial} <br />
</div>
    </div>
  )
}

export default Template1right
