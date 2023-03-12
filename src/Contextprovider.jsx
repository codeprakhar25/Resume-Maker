import React, { useState } from 'react'
import dataContext from './DataContext'

const ContextProvider = (props) => {
    const [skill, setSkill] = useState("")
    const [skilll, setSkilll] = useState("")
    const [addskill, setAddskill] = useState(false)
    const [education, seteducation] = useState("")
    const [addeducation, setAddeducation] = useState(false)
    const [firstname, setFirstName] = useState("")
    const [lastname, setLastname] = useState("")
    const [jobtitle, setJobtitle] = useState("")
    const [email , setEmail] = useState("")
    const [contact, setContact] = useState("")
    const [summary, setSummary] = useState("")
    const [ work, setWork]=useState(true)
    const [company,setCompany ] = useState("")
    const [jobexp,setJobexp ] = useState("")
    const [startd,setStartd ] = useState("")
    const [endd,setEndd ] = useState("")
    const [projectname,setProjectname ] = useState("")
    const [projectdesc,setProjectdesc ] = useState("")
    const [dob, setDob]=useState("")
    const[fathername,setFathername]=  useState("")
    const [martial,setMartial] = useState("")

    return (
        <div>
          <dataContext.Provider value={{skill,setSkill,skilll,setSkilll,company,setCompany,addskill,addeducation,setAddeducation,setAddskill,education,seteducation,firstname,lastname,contact,email,summary,setSummary,setEmail,setJobtitle,setLastname,setContact,work,setWork,jobtitle,setFirstName,jobexp,setDob,setCompany,setEndd,setFathername,setStartd,setJobexp,setProjectdesc,setStartd,setProjectdesc,setFathername,setProjectname,startd,endd,projectdesc,projectname,dob,fathername,martial,setMartial}} >
            {props.children}
          </dataContext.Provider>
        </div>
      )
    }
    
    export default ContextProvider