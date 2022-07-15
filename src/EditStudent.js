import React, { useEffect } from 'react'
import {useState,useContext}from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useNavigate,useParams} from 'react-router-dom';
import {StudentContext} from '../src/App'
import axios from "axios";

function EditStudent(props) {
  let context = useContext(StudentContext)
  let params = useParams()
  let [name,setName]=useState('')
  let [email,setEmail]=useState('')
  let [mobile,setMobile]=useState('')
  let [batch,setBatch]=useState('')
  let[teacher,setTeacher] = useState('')
  let navigate = useNavigate()
  let getData = async ()=>{
    let res = await axios.get(`https://61d28882da87830017e595ee.mockapi.io/students/${params.id}`)
    setName(res.data.name)
    setEmail(res.data.email)
    setMobile(res.data.mobile)
    setBatch(res.data.batch)
    setTeacher(res.data.teacher)
  }
  useEffect(()=>{
  getData()
  },[])
  let handleSubmit= async()=>{
    
    
     let data = {
        name,
        email,
        mobile,
        batch
      }
      await axios.put(`https://61d28882da87830017e595ee.mockapi.io/students/${params.id}`,data)
      navigate('/dashboard')
  }
  return (
   
    <div    
    className="w3-animate-top"> 
     <Form>

<Form.Group className="mb-3">
   <Form.Label>Name</Form.Label>
   <Form.Control type="text" value={name} placeholder="Enter Name" onChange={(e)=>{setName(e.target.value)}}/>
 </Form.Group>

 <Form.Group className="mb-3">
   <Form.Label>Email address</Form.Label>
   <Form.Control type="email" value={email} placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
 </Form.Group>

 <Form.Group className="mb-3">
   <Form.Label>Mobile</Form.Label>
   <Form.Control type="text" value={mobile} placeholder="Mobile" onChange={(e)=>setMobile(e.target.value)} />
 </Form.Group>

 <Form.Group className="mb-3">
   <Form.Label>Batch</Form.Label>
   <Form.Control type="text" value={batch} placeholder="Batch" onChange={(e)=>setBatch(e.target.value)} />
 </Form.Group>

 <Form.Group className="mb-3">
   <Form.Label>Teacher</Form.Label>
   <Form.Control type="text" value={teacher} placeholder="Teacher" onChange={(e)=>setTeacher(e.target.value)} />
 </Form.Group>


 <Button variant="primary" onClick={()=>handleSubmit()}>
   Submit
 </Button>
</Form>
    </div>
  )
}

export default EditStudent