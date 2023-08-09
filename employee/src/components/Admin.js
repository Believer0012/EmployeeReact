import {React , useState,useEffect} from 'react'
import Table from 'react-bootstrap/Table';
import './Admin.css'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Admin() {

  const [allEmployees,setAllEmployees]=useState([])
  const fetchData=async()=>{
    const result =await axios.get('http://localhost:8001/getAllEmployee')
    setAllEmployees(result.data.employees);
  }
  const handleDelete = async(id)=>{
  const result = await axios.delete('http://localhost:8001/deleteEmployee/'+id)
  alert(result.data.message)
  fetchData()

  }

  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div>
        <div className='text-end mt-4 me-4'>
          <Link to={'/add'}>  <Button  variant="outline-light- me-5 "><i class="fa-solid fa-plus"></i> add Employee</Button></Link>
        
        </div>
       
        <h2 className='mt-5'>
        <i class="fa-solid fa-circle-user me-3">
            Employee Managment App
        </i>
          
        </h2>



        <Table className='w-75 container border mt-5 text-center' striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Age</th>
          <th>Designation</th>
          <th>Salary</th>
          <th>Action</th>

        </tr>
      </thead>
      <tbody>
        {
          allEmployees?.map((item,index)=>(
            <tr>
            <td>{index+1}</td>
            <td>{item.uname}</td>
            <td>{item.age}</td>
            <td>{item.designation}</td>
            <td>{item.salary}/-</td>
            <td> 
<Link to={'edit/'+item.id}>
                 <Button className='edit-button' variant="outline-light me-5"><i class="fa-solid fa-pen-to-square"></i> Edit</Button>
  
</Link>     
       <Link to={'/view/'+item.id}><Button className='view-button' variant="outline-light me-5"><i class="fa-solid fa-eye"></i> View</Button></Link>
           <Button onClick={()=>handleDelete(item.id)} className='delete-button' variant="outline-light me-5"><i class="fa-solid fa-trash"></i> Delete</Button>
  </td>
            
            
          </tr>
          ))
        }
       
      
      </tbody>
    </Table>
    </div>
  )
}

export default Admin