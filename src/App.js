import "./App.css";
import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

function App() {
  let data={
    earningsMonthly:'40,000',
    earningsAnnual:'215,000',
    tasks:40,
    pendingRequests:18
  }
  return (
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
            <Dashboard data={data}/>
           
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
