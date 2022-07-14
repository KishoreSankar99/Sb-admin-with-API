import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { StudentContext } from "../src/App";
import Dropdown from "react-bootstrap/Dropdown";

function CreateStudent(props) {
  let context = useContext(StudentContext);
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [mobile, setMobile] = useState("");
  let [batch, setBatch] = useState("");
  let [teacher, setTeacher] = useState("");
  let navaigate = useNavigate();
  let handleSubmit = () => {
    let data = {
      name,
      email,
      mobile,
      batch,
      teacher,
    };

    let students = [...context.students];
    students.push(data);
    context.setStudents(students);
    console.log(context.students);
    navaigate("/dashboard");
  };
  let handleSetTeacher = (e) => {
    setTeacher(e);
  };
  return (
    <div className="container">
      <div className="col-lg-6">
        <Form className="w3-animate-bottom">
          <Form.Group className="mb-3">
            <Form.Label>Enter Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="text"
              placeholder="Mobile"
              onChange={(e) => setMobile(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Batch</Form.Label>
            <Form.Control
              type="text"
              placeholder="Batch"
              onChange={(e) => setBatch(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Teacher</Form.Label>
            <Form.Control
              value={teacher}
              type="text"
              disabled={true}
              placeholder="Select Teacher Below"
            />
          </Form.Group>

  
          <Form.Group className="mb-3">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Select Teacher
              </Dropdown.Toggle>

              <Dropdown.Menu>
                   {
                    context.teacher.map((e)=>{
                return <Dropdown.Item href="#/action-1" onClick={()=>handleSetTeacher(e.teacher)}>{e.teacher}</Dropdown.Item>

                    })
                   }
              </Dropdown.Menu>
            </Dropdown>
          </Form.Group>

          <Button variant="primary" onClick={() => handleSubmit()}>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default CreateStudent;
