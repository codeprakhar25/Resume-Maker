import React, { useContext } from 'react'
import dataContext from '../../DataContext'
import "./template1.css"
import Template2right from './Template2right'

const Template2 = () => {

  const {skill, setSkill} = useContext(dataContext)
const {skilll, setSkilll} = useContext(dataContext)
const {addskill, setAddskill} = useContext(dataContext)
const {seteducation} = useContext(dataContext)
const {addeducation, setAddeducation,setSummary,setFirstName,setEmail,setLastname,setDob,setCompany,setEndd,setFathername,setJobexp,setProjectdesc,setStartd,setProjectname,setMartial,work,setWork,setJobtitle,setContact} = useContext(dataContext)
 

return (
    <div className='template-container'>
    <div className="template-left">
<h1>General Details</h1>
     <div className="Gen-details">
       <div>
<p>Job-Title</p>
<input type="text" onChange={(e)=>{
setJobtitle(e.target.value)  
}} />
       </div>
       <div>
<p>Email- Id</p>
 <input type="email" onChange={(e)=>{
setEmail(e.target.value)
}}/>
       </div>
       <div>
<p>First Name</p> 
<input type="text" onChange={(e)=>{
setFirstName(e.target.value)
}}/>
       </div>
       <div>
<p>Last Name</p>
<input type="text" name="" id="" onChange={(e)=>{
setLastname(e.target.value)
}} />   
       </div>
       
       <div>
<p>Contact Details</p>
<input type="integer" name="" id="" 
onChange={(e)=>{
setContact(e.target.value)
}}/>
       </div>
     </div>
<h1>Summary</h1>
<div className="brief-desc">
<textarea name="" id="" cols="80" rows="10" placeholder='Enter Brief Description' onChange={(e)=>{
 setSummary(e.target.value)
}}></textarea>
</div>
<h1>Work Experience</h1>
<input type="checkbox" name="" id="" onClick={()=>
{
setWork(!work)
}}/> <span>No Work 
Experince
</span>
{
work ? 
<><h3>Add Experience</h3>
<div className="add-job">
<div>
<p>Company Name</p>
     <input type="text" onChange={(e)=>{
       setCompany(e.target.value)
     }}/> 
</div>
   <div> <p>Job Title</p>
     <input type="text" onChange={(e)=>{
       setJobexp(e.target.value)
     }}/></div>
  <div>
  <p>Start-Date </p>  
    <input type="month" onChange={(e)=>{
       setStartd(e.target.value)
     }}/>
  </div>
<div>        <p>End-Date</p>
      <input type="month" onChange={(e)=>{
       setEndd(e.target.value)
     }}/>        </div>
</div></>
:
""
}

<h1>Project</h1>
<div className="project-container">
<p>Enter-project Name</p>
<input type="text" name="" id="" onChange={(e)=>{
       setProjectname(e.target.value)
     }}/>
<textarea name="" id="" cols="50" rows="10" placeholder='Enter Project Desc' onChange={(e)=>{
       setProjectdesc(e.target.value)
     }}></textarea>
</div>

<h1>Skills</h1>
<div className="skill-container">
<p>Add atleast five of your most important skill to show your talent and knowledge!!</p>

<div className="add-skill" onClick={()=>{
 setAddskill(!addskill)
}}><p>+ ADD SKILL</p></div>
{
addskill ? 
<>
<div className='skills'>
 Skill:
 <input type="text" onChange={(e)=>{
 setSkilll( e.target.value)
 }} />
 <button onClick={()=>{
   setSkill(skill + " " + skilll)
 }}>Add Skill</button>
</div>
</>
:
""
}

</div>

<h1>Education</h1> 
<p>A varied education on your resume shows your learnings and background.</p>
<div className="add-skill" onClick={()=>{
 setAddeducation(!addeducation)
}}><p>+ ADD EDUCATION</p></div>
{
 addeducation ?
 <>
 <p>
   Add College
 </p>
   <input type="text" />
   <p>Add University</p>
<input type="text" name="" id="" />
 <p>Add Degree</p>
 <input type="text" />
 <p>Passing Date</p>
 <input type="text" name="" id="" /> <br /> <br />
 <button onClick={()=>{
 seteducation("")      
 }}>Add Education</button>
 </>
:
""  
}
<h1>Personal Details</h1> 
<p>Date of Birth</p>
<input type="date" name="" id="" onChange={(e)=>{
       setDob(e.target.value)
     }}/>
<p>Father's Name
</p>
<input type="text" name="" id="" onChange={(e)=>{
       setFathername(e.target.value)
     }}/>
     <p>Maritial Status</p>
     <select name="Select Status" id="cars" placeholder='Select Status' onChange={(e)=>{
       setMartial(e.target.value)
     }}>
<option value="married">Married</option>
<option value="single">Single</option>
</select>
     </div> 
    <div className="template-right">
   <Template2right/>

    </div>
 </div>
  )
}

export default Template2