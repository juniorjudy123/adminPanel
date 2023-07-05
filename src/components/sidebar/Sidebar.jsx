import "./sidebarStyles.css"
import LineStyleIcon from "@mui/icons-material/LineStyle"
import TimelineIcon from "@mui/icons-material/Timeline"
import TrendingUpIcon from "@mui/icons-material/TrendingUp"

import React from "react"

export default function Sidebar() {
	return (
		<div className="sidebar">
			<div className="sidebarWrapper">
				<div className="sidebarMenu">
					<div className="sidebarTitle">
						<ul className="sidebarList">
							<li className="sidebarListItem active">
								<LineStyleIcon />
								Home
							</li>
							<li className="sidebarListItem">
								<TimelineIcon />
								Analytics
							</li>
							<li className="sidebarListItem">
								<TrendingUpIcon />
								Sales
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}
