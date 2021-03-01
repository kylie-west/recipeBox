import RecipeListItems from "../recipes/RecipeListItems";

export default function RecipeList() {
	return (
		<section className="recipe-list">
			<header>
				<h1>My Recipes</h1>
			</header>
			<RecipeListItems />
		</section>
	);
}
