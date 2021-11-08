import { Link } from "react-router-dom";
import "./topbar.css"

export default function TopBar() {
    const user = true;
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link to="/" className="link">HOME</Link>
                    </li>
                    <li className="topListItem"><Link to="/" className="link">ABOUT</Link></li>
                    <li className="topListItem"><Link to="/" className="link">CONTACT</Link></li>
                    <li className="topListItem"><Link to="/write" className="link">WRITE</Link></li>
                    <li className="topListItem">
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (

                        <img 
                            className="topImg" 
                            src="https://static0.cbrimages.com/wordpress/wp-content/uploads/2020/07/Rem-re-zero-promo-Cropped.jpg?q=50&fit=crop&w=960&h=500&dpr=1.5" 
                            alt="" 
                        />

                    ) : (
                        <ul className="topList">
                        <li className="topListItem">
                        <Link className="link" to="/login">
                            LOGIN
                        </Link>
                        </li>
                        <li className="topListItem">
                        <Link className="link" to="/register">
                            REGISTER
                        </Link>
                        </li>
                        </ul>
                    )
                }
            <i className=" topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
