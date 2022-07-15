import React from 'react'
import { Link, Outlet ,useNavigate} from 'react-router-dom'
import Button from "react-bootstrap/Button";

function NestedRoute() {
    let navigate = useNavigate()
  return (<>
    <div>NestedRoute</div>
    <Button variant='primary' onClick={()=>{navigate('kishore')}}>Kishore</Button>
    <hr/>
    <Link to={'/nestedroute/abi'} ><Button variant='primary'>Abi</Button></Link>
    <hr/>
    <Outlet/>
    </>
  )
}

export default NestedRoute