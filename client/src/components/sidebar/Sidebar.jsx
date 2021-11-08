import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">
                    ABOUT ME
                </span>
                <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrkJ2ucdBKcrAUeZ2jlvhZ6QizfaWWRQ_mCQ&usqp=CAU"
                alt="" 
                />
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Expedita, ipsum.
                </p>
            </div>  
            <div className="sidebarItem">
                <span className="sidebarTitle">
                    CATEGORIES
                </span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sports</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Cinema</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                <i className="sidebarIcon fab fa-facebook-square"></i>
                <i className="sidebarIcon fab fa-twitter-square"></i>
                <i className="sidebarIcon fab fa-pinterest-square"></i>
                <i className="sidebarIcon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    )
}