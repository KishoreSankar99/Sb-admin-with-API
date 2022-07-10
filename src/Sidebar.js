import React from 'react'
import {Link} from 'react-router-dom'

function Sidebar() {
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

            <div class="sidebar-heading">
                Interface
            </div>

            <li class="nav-item">
                <div class="nav-link collapsed">
                    <i class="fas fa-fw fa-cog"></i>
                    <span>Components</span>
                </div>

                

                <div class="nav-link collapsed">
                    <i class="fas fa-fw fa-cog"></i>
                    <Link to='/createstudent'><span style={{'color':'white'}}>Create Strudent</span></Link>
                </div>

                
            </li>
        </ul>
  )
}

export default Sidebar