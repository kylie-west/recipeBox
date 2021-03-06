export default function RecipeDetails() {
	return (
		<article className="recipe">
			<header className="recipe__section">
				<h1>Title</h1>
				<p>Description</p>
			</header>

			<section className="recipe__section">
				<h2>Ingredients</h2>
				<hr />
				<ul>
					<li>Ingredient 1</li>
					<li>Ingredient 2</li>
					<li>Ingredient 3</li>
				</ul>
			</section>

			<section className="recipe__section">
				<h2>Directions</h2>
				<hr />
				<ol>
					<li>Step 1</li>
					<li>Step 2</li>
					<li>Step 3</li>
				</ol>
			</section>
		</article>
	);
}
