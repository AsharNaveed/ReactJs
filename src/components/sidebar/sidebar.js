import "./sidebar.css";
import logo from "../../assets/logo2.png";

const Siderbar = ({ sidebarOpen, closeSidebar }) => {
    return (
        <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
            <div className="sidebar__title">
                <div className="sidebar__img">
                    <img src={logo} alt="logo"/>
                    <h1>Four Geeks</h1>
                    
                </div>
                <i className="fa fa-times" id="sidebarIcon" onClick={() => closeSidebar()}></i>
            </div>
            <div className="sidebar__menu">
                <div className="sidebar__link active_menu_link">
                    <i className="fa fa-home"></i>
                    <a href="#">Dashboard</a>
                </div>
                
                <h2>Main</h2>
                <div className="sidebar__link">
                    <i className="fa fa-globe"></i>
                    <a href="#">Domain Managment</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-cloud"></i>
                    <a href="#">Hosting Managment</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-file"></i>
                    <a href="#">Project Managment</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-user"></i>
                    <a href="#">Client Managment</a>
                </div>
                
                <h2>Invoice</h2>
                <div className="sidebar__link">
                    <i className="fa fa-envelope"></i>
                    <a href="#">Messages</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-question"></i>
                    <a href="#">Tickets</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-files-o"></i>
                    <a href="#">Apply for leave</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-sign-out"></i>
                    <a href="#">Terms &amp; Conditions</a>
                </div>

                <h2>Account</h2>
                <div className="sidebar__link">
                    <i className="fa fa-cogs"></i>
                    <a href="#">Settings</a>
                </div>
                <div className="sidebar__logout">
                    <i className="fa fa-power-off"></i>
                    <a href="#">Logout</a>
                </div>
            </div>
        </div>
    );

}

export default Siderbar;