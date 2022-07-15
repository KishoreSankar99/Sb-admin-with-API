import React, { useContext, useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { StudentContext } from "../src/App";
import swal from "sweetalert";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function Dashboard(props) {
    let[Apidata,setApidata] =useState([])
    let getApidata= async ()=>{
       let res = await axios.get('https://61d28882da87830017e595ee.mockapi.io/students')
       console.log(res.data)
       setApidata(res.data)
        }
        useEffect(()=>{
            getApidata()
        },[])
  const notify = () =>
    toast.error("Deleted Successfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  let context = useContext(StudentContext);
  //console.log(context)
  let navigate = useNavigate();
  let handleDelete = async (i) => {
    
        await axios.delete(`https://61d28882da87830017e595ee.mockapi.io/students/${i}`)
        getApidata()
        notify();
      
      
    };
  
  let handleDeleteTeacher = (i) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        let Tempteacher = [...context.teacher];
        Tempteacher.splice(i, 1);
        context.setTeacher(Tempteacher);
        notify();
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };
  return (
    <>
      <div class="col-xl-3 col-md-6 mb-4 w3-animate-left">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <div class="card border-left-primary shadow h-100 py-2">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                  Earnings (Monthly)
                </div>
                <div class="h5 mb-0 font-weight-bold text-gray-800">
                  ${context.data.earningsMonthly}
                </div>
              </div>
              <div class="col-auto">
                <i class="fas fa-calendar fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xl-3 col-md-6 mb-4 w3-animate-bottom">
        <div class="card border-left-success shadow h-100 py-2">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                  Earnings (Annual)
                </div>
                <div class="h5 mb-0 font-weight-bold text-gray-800">
                  ${context.data.earningsAnnual}
                </div>
              </div>
              <div class="col-auto">
                <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xl-3 col-md-6 mb-4 w3-animate-top">
        <div class="card border-left-info shadow h-100 py-2">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div class="text-xs font-weight-bold text-info text-uppercase mb-1">
                  Tasks
                </div>
                <div class="row no-gutters align-items-center">
                  <div class="col-auto">
                    <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                      {context.data.tasks}
                    </div>
                  </div>
                  <div class="col">
                    <div class="progress progress-sm mr-2">
                      <div
                        class="progress-bar bg-info"
                        role="progressbar"
                        style={{
                          width: `${context.data.tasks}%`,
                          ariaValuenow: context.data.tasks,
                          ariaValuemin: "0",
                          ariaValuemax: "100",
                        }}
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-auto">
                <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xl-3 col-md-6 mb-4 w3-animate-right">
        <div class="card border-left-warning shadow h-100 py-2">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                  Pending Requests
                </div>
                <div class="h5 mb-0 font-weight-bold text-gray-800">
                  {context.data.pendingRequests}
                </div>
              </div>
              <div class="col-auto">
                <i class="fas fa-comments fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1>Students Table</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Teacher</th>
            <th>Batch</th>
          </tr>
        </thead>
        <tbody>
          {context.students.length === 0 ? (
            <>
              <h4>No students has been added</h4>
              <Button
                onClick={() => {
                  context.teacher.length === 0
                    ? swal("Add Teachers First")
                    : navigate("/createstudent");
                }}
              >
                Add Students
              </Button>
            </>
          ) : (
            Apidata.map((e) => {
                
              return (
                <tr>
                  <td>{e.id}</td>
                  <td>{e.name}</td>
                  <td>{e.email}</td>
                  <td>{e.mobile}</td>
                  <td>{e.teacher}</td>
                  <td>{e.batch}</td>
                  <td>
                    <Button
                      variant="primary"
                      onClick={() => navigate(`/editstudent/${e.id}`)}
                    >
                      Edit
                    </Button>
                    &nbsp;&nbsp;
                    <Button variant="danger" onClick={() => handleDelete(e.id)}>
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </Table>
      <h1>Teachers Table</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Teacher</th>
          </tr>
        </thead>
        <tbody>
          {context.teacher.length === 0 ? (
            <>
              <h4>No Teachers has been added</h4>
              <Button
                onClick={() => {
                  navigate("/createteacher");
                }}
              >
                Add Teachers
              </Button>
            </>
          ) : (
            context.teacher.map((e, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{e.teacher}</td>
                  <td>
                    &nbsp;&nbsp;
                    <Button
                      variant="danger"
                      onClick={() => handleDeleteTeacher(i)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </Table>
    </>
  );
}

export default Dashboard;
