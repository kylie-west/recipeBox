export default function MainToolbar() {
	return (
		<nav className="main-toolbar">
			<div className="main-toolbar__group">
				<button className="main-toolbar__button" aria-label="Add recipe">
					<i className="material-icons">add_circle</i>
				</button>
				<button className="main-toolbar__button" aria-label="View labels">
					<i className="material-icons">label</i>
				</button>
			</div>
			<div className="main-toolbar__group">
				<button className="main-toolbar__button" aria-label="View my profile">
					<i className="material-icons">account_circle</i>
				</button>
				<button className="main-toolbar__button" aria-label="Log out">
					<i className="material-icons">logout</i>
				</button>
			</div>
		</nav>
	);
}
