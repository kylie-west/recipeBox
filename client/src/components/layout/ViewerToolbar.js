export default function ViewerToolbar() {
	return (
		<nav className="viewer-toolbar">
			<div className="viewer-toolbar__group">
				<button className="viewer-toolbar__button" aria-label="Delete recipe">
					Delete
				</button>
				<button className="viewer-toolbar__button" aria-label="Edit recipe">
					Edit
				</button>
				<button className="viewer-toolbar__button" aria-label="Edit labels">
					Labels
				</button>
			</div>
		</nav>
	);
}
