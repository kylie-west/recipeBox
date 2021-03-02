export default function ViewerToolbar() {
	return (
		<nav className="viewer-toolbar">
			<button
				className="viewer-toolbar__button--delete"
				aria-label="Delete recipe">
				<i className="material-icons">delete</i>
			</button>
			<button className="viewer-toolbar__button" aria-label="Edit recipe">
				<i className="material-icons">create</i>
			</button>
			<button className="viewer-toolbar__button" aria-label="Edit labels">
				<i className="material-icons">label</i>
			</button>
		</nav>
	);
}
