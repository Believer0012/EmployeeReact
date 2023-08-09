import {React,useEffect,useState} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';




function Edit() {

  const [id,setId]=useState('')
  const [uname,setUname]=useState('')
  const [age,setAge]=useState(0)
  const [desig,setDesig]=useState('')
  const [salary,setSalary]=useState(0)


// object for hook 
  const params= useParams()
  // console.log(params.id);

  const fetchEmp=async ()=>{
       const result=await axios.get('http://localhost:8001/getAnEmp/'+params.id)
console.log(result.data.employee);

setId(result.data.employee.id)
setUname(result.data.employee.uname)
setAge(result.data.employee.age)
setDesig(result.data.employee.designation)
setSalary(result.data.employee.salary)

// console.log(id);
// console.log(uname);

  }

  const location =useNavigate()
  
const handleUpdate=async (e)=>{
  e.preventDefault()
 
const body={
  id,
  uname,
  age,
  desig,
  salary
}
   const result=await axios.post('http://localhost:8001/editEmp',body)
alert(result.data.message)
location('/')
}


  useEffect(()=>{
fetchEmp()
  },[])

  return (
    <div>
          <p>A job description contains the following components: job title, job purpose, job duties and responsibilities, required qualifications, preferred qualifications, and working conditions.</p>

<h3 style={{textAlign:'center',fontSize:'60px'}}>Edit Employee</h3>


<Form className='p-5  w-50 container text-center card' >
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
<Form.Label><h5>UserName</h5></Form.Label>
<Form.Control   type="text" placeholder="username" value={uname}
onChange={(e)=>setUname(e.target.value)}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
<Form.Label><h5>Age</h5></Form.Label>
<Form.Control   type="text" placeholder="age" value={age}
onChange={(e)=>setAge(e.target.value)}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
<Form.Label> <h5>Designation</h5></Form.Label>
<Form.Control   type="text" placeholder="designation" value={desig}
onChange={(e)=>setDesig(e.target.value)}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
<Form.Label><h5>Salary </h5></Form.Label>
<Form.Control  type="text" placeholder="salary" value={salary}
onChange={(e)=>setSalary(e.target.value)}/>
  </Form.Group>
  <Button onClick={(e)=>handleUpdate(e)} style={{textAlign:'center'}}  className="mt-3" variant="primary">Update</Button>

</Form>


    </div>
  )
}

export default Edit