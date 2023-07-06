import "./sidebarStyles.css"
import LineStyleIcon from "@mui/icons-material/LineStyle"
import TimelineIcon from "@mui/icons-material/Timeline"
import TrendingUpIcon from "@mui/icons-material/TrendingUp"
import PeopleIcon from "@mui/icons-material/People"
import InventoryIcon from "@mui/icons-material/Inventory"
import PaidIcon from "@mui/icons-material/Paid"
import AssessmentIcon from "@mui/icons-material/Assessment"
import ContactMailIcon from "@mui/icons-material/ContactMail"
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed"
import ChatIcon from "@mui/icons-material/Chat"
import WorkOutlineIcon from "@mui/icons-material/WorkOutline"
import ReportIcon from "@mui/icons-material/Report"

import React from "react"

export default function Sidebar() {
	return (
		<div className="sidebar">
			<div className="sidebarWrapper">
				<div className="sidebarMenu">
					<h3 className="sidebarTitle">Dashboard</h3>
					<ul className="sidebarList">
						<li className="sidebarListItem active">
							<LineStyleIcon className="sidebarIcon" />
							Home
						</li>
						<li className="sidebarListItem">
							<TimelineIcon className="sidebarIcon " />
							Analytics
						</li>
						<li className="sidebarListItem">
							<TrendingUpIcon className="sidebarIcon" />
							Sales
						</li>
					</ul>
				</div>
				<div className="sidebarMenu">
					<h3 className="sidebarTitle">Quick Menu</h3>
					<ul className="sidebarList">
						<li className="sidebarListItem ">
							<PeopleIcon className="sidebarIcon" />
							Users
						</li>
						<li className="sidebarListItem">
							<InventoryIcon className="sidebarIcon " />
							Products
						</li>
						<li className="sidebarListItem">
							<PaidIcon className="sidebarIcon" />
							Transactions
						</li>
						<li className="sidebarListItem">
							<AssessmentIcon className="sidebarIcon" />
							Reports
						</li>
					</ul>
				</div>

				<div className="sidebarMenu">
					<h3 className="sidebarTitle">Notifications</h3>
					<ul className="sidebarList">
						<li className="sidebarListItem ">
							<ContactMailIcon className="sidebarIcon" />
							Mail
						</li>
						<li className="sidebarListItem">
							<DynamicFeedIcon className="sidebarIcon " />
							Feedback
						</li>
						<li className="sidebarListItem">
							<ChatIcon className="sidebarIcon" />
							Messages
						</li>
					</ul>
				</div>
				<div className="sidebarMenu">
					<h3 className="sidebarTitle">Staff</h3>
					<ul className="sidebarList">
						<li className="sidebarListItem ">
							<WorkOutlineIcon className="sidebarIcon" />
							Manage
						</li>
						<li className="sidebarListItem">
							<TimelineIcon className="sidebarIcon " />
							Analytics
						</li>
						<li className="sidebarListItem">
							<ReportIcon className="sidebarIcon" />
							Reports
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
