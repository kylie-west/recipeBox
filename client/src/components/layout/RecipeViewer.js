import ViewerToolbar from "./ViewerToolbar";
import RecipeDetails from "../recipes/RecipeDetails";

export default function RecipeViewer() {
	return (
		<section className="recipe-viewer">
			<ViewerToolbar />
			<RecipeDetails />
		</section>
	);
}
