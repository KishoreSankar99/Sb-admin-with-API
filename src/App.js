import "./App.css";
import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import CreateStudent from "./CreateStudent";
import EditStudent from "./EditStudent";
import {useState} from 'react'
import Table from 'react-bootstrap/Table';

function App() {
  let data={
    earningsMonthly:'40,000',
    earningsAnnual:'215,000',
    tasks:40,
    pendingRequests:18
  }

  let [students,setStudents] = useState([
    {
      name:'Raj',
      email:'raj@gmail.com',
      mobile:'123456789',
      batch:"B36WD"
    },
    {
      name:'Abi',
      email:'raj@gmail.com',
      mobile:'123456789',
      batch:"B36WD"
    },
    {
      name:'Jeeva',
      email:'raj@gmail.com',
      mobile:'123456789',
      batch:"B36WD"
    }
  ]
  )
  return (
    <BrowserRouter>
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <Topbar />
          <div class="container-fluid">
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
              <a href="#"
                class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                <i class="fas fa-download fa-sm text-white-50"></i> Generate
                Report
              </a>
            </div>
            <div class="row">
            
            <Routes>
              <Route path="dashboard" element={<Dashboard data={{data,students,setStudents}}/>}/>
              <Route path="createstudent" element={<CreateStudent/>}/>
              <Route path="editstudent" element={<EditStudent/>}/>
              <Route path="/" element={<Dashboard data={{data,students,setStudents}}/>}/>

            </Routes>
            
           
            </div>
          </div>
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
