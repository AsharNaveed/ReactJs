import "./navbar.css";
import avatar from "../../assets/avatar.svg";

const Navbar = ({sidebarOpen, opensidebar}) => {
    return (
        <nav className="navbar">
            <div className="nav_icon" onClick={() => opensidebar()}>
                <i className="fa fa-bars"></i>
            </div>
            <div className="navbar__left">
                <a href="#">Services</a>
                <a href="#">Help Center</a>
                <a href="#">Visit Website</a>
                <a className="active_link" href="#">Admin</a>
            </div>
            <div className="navbar__right">
                <a href="#">
                    <i className="fa fa-search"></i>
                </a>
                <a href="#">
                    <i className="fa fa-phone"></i>
                </a>
                <a href="#">
                    <img width="30" src={avatar} alt="avatar"/>
                </a>
            </div>
        </nav>
    );
}

export default Navbar;