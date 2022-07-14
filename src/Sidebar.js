import React, { useContext } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import swal from 'sweetalert'
import { StudentContext } from './App'

function Sidebar() {
    let navigate = useNavigate()
    let context = useContext(StudentContext)
  return (
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div class="sidebar-brand-icon rotate-n-15">
                    <i class="fas fa-laugh-wink"></i>
                </div>
                <div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </a>

            <hr class="sidebar-divider my-0"/>

            <li class="nav-item active">
            <div class="nav-link collapsed">
                    <i class="fas fa-fw fa-cog"></i>
                    <Link to='/dashboard'><span style={{'color':'white'}}>Dashboard</span></Link>
                </div>
            </li>

            <hr class="sidebar-divider"/>

            

            <li class="nav-item">
                

                

                <div class="nav-link collapsed">
                    <i class="fas fa-fw fa-cog"></i>
                    <span style={{'color':'white' , 'fontSize' : '20px','cursor':'pointer'}} onClick={()=>{
                        if(context.teacher.length>0){
                            navigate('/createstudent')
                        } else{
                            swal('Add atLeast 1 Teacher First')
                        }
                    }}>Create Student</span>
                </div>

                <div class="nav-link collapsed">
                    <i class="fas fa-fw fa-cog"></i>
                    <Link to='/createteacher'><span style={{'color':'white', 'fontSize' : '20px'}}>Create Teacher</span></Link>
                </div>

                
            </li>
        </ul>
  )
}

export default Sidebar