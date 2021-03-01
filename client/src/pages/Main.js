import MainToolbar from "../components/layout/MainToolbar";
import RecipeList from "../components/layout/RecipeList";
import RecipeViewer from "../components/layout/RecipeViewer";

export default function Main() {
	return (
		<div className="main">
			{/* Toolbar */}
			<MainToolbar />

			{/* RecipeList */}
			<RecipeList />

			{/* RecipeViewer */}
			<RecipeViewer />
		</div>
	);
}
