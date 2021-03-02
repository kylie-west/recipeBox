import { connect } from "react-redux";
import AddRecipe from "./AddRecipe";
import EditRecipe from "./EditRecipe";
import DeleteRecipe from "./DeleteRecipe";
import EditLabels from "./EditLabels";
import {
	ADD_RECIPE,
	EDIT_RECIPE,
	DELETE_RECIPE,
	EDIT_LABELS,
} from "./modalModes";

function Modal({ visible, mode }) {
	if (!visible) return null;
	return (
		<div className="modal">
			{mode === ADD_RECIPE ? (
				<AddRecipe />
			) : mode === EDIT_RECIPE ? (
				<EditRecipe />
			) : mode === DELETE_RECIPE ? (
				<DeleteRecipe />
			) : mode === EDIT_LABELS ? (
				<EditLabels />
			) : null}
		</div>
	);
}

const mapStateToProps = (state) => {
	const { visible, mode } = state;
	return { visible, mode };
};

export default connect(mapStateToProps)(Modal);
