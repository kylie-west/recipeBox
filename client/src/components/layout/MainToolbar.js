export default function MainToolbar() {
	return (
		<nav className="main-toolbar">
			<div className="main-toolbar__group">
				<button className="main-toolbar__button" aria-label="Add recipe">
					Add
				</button>
				<button className="main-toolbar__button" aria-label="View labels">
					Labels
				</button>
			</div>
			<div className="main-toolbar__group">
				<button className="main-toolbar__button" aria-label="View my profile">
					Profile
				</button>
				<button className="main-toolbar__button" aria-label="Log out">
					Log Out
				</button>
			</div>
		</nav>
	);
}
