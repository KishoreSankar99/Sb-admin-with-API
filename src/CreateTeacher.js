
import React ,{useState,useContext}from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useNavigate} from 'react-router-dom';
import {StudentContext} from '../src/App'


function CreateTeacher() {
    let navaigate = useNavigate()
    let context = useContext(StudentContext)
    console.log(context)
    let [teacher,setTeacher]=useState('')
    let handleSubmit=()=>{
        let data ={
          teacher
        }
        
        let Tempteacher = [...context.teacher]
        Tempteacher.push(data)
        context.setTeacher(Tempteacher)
        console.log(context.teacher)
        navaigate('/dashboard')
        //console.log(teacher,Tempteacher)
        
    
      }
  return (
    <div>
        <Form className='w3-animate-bottom'>
        <Form.Group className="mb-3">
        <Form.Label>Enter Teacher Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Teacher Name" onChange={(e)=>setTeacher(e.target.value)}/>
        </Form.Group>

        <Button variant="primary" onClick={()=>handleSubmit()}>
        Submit
        </Button>
        </Form>
    </div>
  )
}

export default CreateTeacher