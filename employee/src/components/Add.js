import {React,useState,useEffect} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import uuid from 'react-uuid';
import axios from 'axios';
import { useNavigate ,Link} from 'react-router-dom';

function Add() {
  const [id,setId]=useState(0)
  const [uname,setUname]=useState('')
  const [age,setAge]=useState(0)
  const [designation,setDesig]=useState('')
  const [salary,setSalary]=useState(0)

  useEffect(()=>{
   setId( uuid().slice(0,3))
  },[])

  let location = useNavigate()

 const addEmployee= async(e)=>{
  e.preventDefault()
 setId(uuid().slice(0,3));
const body={
  id,
  uname,
  age,
  designation,
  salary

}
// console.log(body);
const result= await axios.post('//localhost:8001/addEmployee',body)
alert(result.data.message)

//redirect
location('/')

}


  
 
  return (
    <div>   <h2 className='mt-5'>
    <i class="fa-solid fa-circle-user me-3">
        Employee Managment App
    </i>
      
    </h2>


       <h5 className='mt-5'>
    <i class=" text-center fa-solid fa-circle-user me-4 mt-5">
       + ADD New Employee
    </i>
      
    </h5>
    <div style={{}} className=" p-5 container w-50 mt-4 mb-4 text-center">

      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>User Name</Form.Label>
          <Form.Control onChange={(e)=>setUname(e.target.value)} type="text" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Age</Form.Label>
          <Form.Control onChange={(e)=>setAge(e.target.value)}  type="text" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Designation</Form.Label>
          <Form.Control onChange={(e)=>setDesig(e.target.value)}  type="text" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Salary</Form.Label>
          <Form.Control onChange={(e)=>setSalary(e.target.value)}  type="email" placeholder="" />
        </Form.Group>
        <Button onClick={(e)=>addEmployee(e)} className='ms-5' variant="secondary">Add</Button>
      <Link to={'/'}><Button className='ms-5' variant="secondary">Cancel</Button></Link>
      </Form>
 
    </div>

</div>
  )
}

export default Add