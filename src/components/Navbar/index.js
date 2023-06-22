import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";

import { RiAccountCircleFill } from "react-icons/ri";

import { BiHomeAlt } from "react-icons/bi";

import { ImMusic } from "react-icons/im";

import { MdQueueMusic } from "react-icons/md";


import { RxCross1 } from "react-icons/rx";


import "./index.css";
import { useState } from "react";

const Navbar = () =>{ 
    const [toggetHam , setToggleHam] = useState(false)

    const onclickHam = () => {
        setToggleHam(p => !p)
    }
 return(
	<nav className="nav-container">
		<div className="nav-head">
			<img
				src="https://res.cloudinary.com/dnmaskg3n/image/upload/v1686209648/Vector_1_wokspy.png"
				alt="nav logo"
			/>
			{toggetHam ? <button type="button" className="ham-btn" onClick={onclickHam}>
				<RxCross1 className="ham-icon" />
			</button> : <button type="button" className="ham-btn" onClick={onclickHam}>
				<GiHamburgerMenu className="ham-icon" />
			</button>}
		</div>
		{toggetHam ? <ul className="sm-nav-items">
			<NavLink to="/profile" exact activeClassName = 'active' className = 'nav-link'>
				<li>
					<RiAccountCircleFill className="nav-item-icon" />
				</li>
			</NavLink>
			<NavLink to="/" exact activeClassName = 'active' className = 'nav-link'>
				<li>
					<BiHomeAlt className="nav-item-icon" />
				</li>
			</NavLink>
			<NavLink to="/yourmusic" exact activeClassName = 'active' className = 'nav-link'>
				<li>
					<ImMusic className="nav-item-icon" />
				</li>
			</NavLink>
			<NavLink to="/playlists" exact activeClassName = 'active' className = 'nav-link'>
				<li>
					<MdQueueMusic className="nav-item-icon" />
				</li>
			</NavLink>
		</ul> : ''}
        <ul className="lg-nav-items">
			<NavLink to="/profile" exact activeClassName = 'active' className = 'nav-link'>
				<li>
					<RiAccountCircleFill className="nav-item-icon" />
                    <p>Profile</p>
				</li>
			</NavLink>
			<NavLink to="/" exact activeClassName = 'active' className = 'nav-link'>
				<li>
					<BiHomeAlt className="nav-item-icon" />
                    <p>Home</p>
				</li>
			</NavLink>
			<NavLink to="/yourmusic" exact activeClassName = 'active' className = 'nav-link'>
				<li>
					<ImMusic className="nav-item-icon" />
                    <p>Your Music</p>
				</li>
			</NavLink>
			<NavLink to="/playlists" exact activeClassName = 'active' className = 'nav-link'>
				<li>
					<MdQueueMusic className="nav-item-icon" />
                    <p>Playlists</p>
				</li>
			</NavLink>
		</ul>
	</nav>
)
 }

export default Navbar;
