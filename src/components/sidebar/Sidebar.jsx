import "./sidebarStyles.scss"

export default function Sidebar() {
	return (
		<div className="sidebar">
			<div className="top">
				<span className="logo">adminTracker</span>
			</div>
			<hr></hr>
			<div className="center">
				<ul>
					<li>
						<span>Dashboard</span>
					</li>
					<li>
						<span>Dashboard</span>
					</li>
					<li>
						<span>Dashboard</span>
					</li>
					<li>
						<span>Dashboard</span>
					</li>
				</ul>
			</div>
			<div className="bottom">color options</div>
		</div>
	)
}
