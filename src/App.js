import "./App.css";
import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import CreateStudent from "./CreateStudent";
import EditStudent from "./EditStudent";
import CreateTeacher from "./CreateTeacher";
import React, {useState} from 'react'
import Table from 'react-bootstrap/Table';
import {data,DBstudents,DBteacher} from './DataBase'



export let StudentContext = React.createContext()

function App() {
  

  let [students,setStudents] = useState(DBstudents)
  let [teacher,setTeacher] = useState(DBteacher)
  return (
   <BrowserRouter>
    <div id="wrapper">
       <StudentContext.Provider value={{data,students,setStudents,teacher,setTeacher}}>
      <Sidebar />
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <Topbar />
          <div class="container-fluid">
           
            <div class="row">
            
            <Routes>
              <Route path="/dashboard" element={<Dashboard />}/>
              <Route path="/createstudent" element={<CreateStudent  />}/>
              <Route path="/createteacher" element={<CreateTeacher  />}/>
              <Route path="/editstudent/:id" element={<EditStudent  />}/>
              <Route path="/" element={<Dashboard />}/>

            </Routes>
            
           
            </div>
          </div>
        </div>
      </div>
      </StudentContext.Provider>
    </div>
    </BrowserRouter>
    
    
  );
}

export default App;
