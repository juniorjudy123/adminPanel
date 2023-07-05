import "./navbarStyles.css"
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone"
import LanguageIcon from "@mui/icons-material/Language"
import SettingsIcon from "@mui/icons-material/Settings"

export default function Navbar() {
	return (
		<div className="navbar">
			<div className="navbarWrapper">
				<div className="topLeft">
					<span className="logo">daniboard</span>
				</div>

				<div className="topRight">
					<div className="toprightIconContainer">
						<NotificationsNoneIcon />
						<span className="toprightIconBadge">2</span>
					</div>

					<div className="toprightIconContainer">
						<LanguageIcon />
						<span className="toprightIconBadge">2</span>
					</div>

					<div className="toprightIconContainer">
						<SettingsIcon />
					</div>

					<img
						src="https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=400"
						alt="profileimg"
						className="topAvatar"
					/>
				</div>
			</div>
		</div>
	)
}
