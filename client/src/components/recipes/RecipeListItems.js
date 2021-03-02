import recipes from "../../testData";

export default function RecipeListItems() {
	return (
		<ol>
			{recipes.map((recipe) => {
				return (
					<li>
						<button className="recipe-list__button" key={recipe.title}>
							{recipe.title}
						</button>
					</li>
				);
			})}
		</ol>
	);
}
