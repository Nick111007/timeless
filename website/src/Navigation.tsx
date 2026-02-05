import {Link, Outlet} from "react-router";
import './Navigation.css'
import logos_img from '../src/images/logo.png'

function Navigation()
{
    return (
        <>
            <div className="navbar">
                <img className="navbar_logo" src={logos_img} alt=""/>
                <div className="navbar_pages">
                    <Link to="/" style={{height: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}><div className="navbar_page">Home</div></Link>
                    <Link to="/website/src/Calander" style={{height: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}><div className="navbar_page">Calander</div></Link>
                    <Link to="" style={{height: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}><div className="navbar_page">About</div></Link>
                </div>

                <Link to="/website/src/Calander" style={{color: "white"}}>
                    <button className="navbar_calander">View Calander</button>
                </Link>
            </div>
            <Outlet/>
        </>
    )
}


export default Navigation