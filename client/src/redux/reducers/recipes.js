import { ADD_RECIPE, UPDATE_RECIPE, DELETE_RECIPE } from "../actionTypes";

const initialState = {
	allIds: [],
	byIds: {},
};

export default function recipes(state = initialState, action) {
	switch (action.type) {
		case ADD_RECIPE: {
			const recipe = action.payload;
			return {
				...state,
				allIds: [...state.allIds, recipe.id],
				byIds: {
					...state.byIds,
					[recipe.id]: recipe,
				},
			};
		}
		case UPDATE_RECIPE: {
			const recipe = action.payload;
			// Replace the recipe object w/ same ID as payload object
			// This is the same as ADD_RECIPE, but uses an existing ID rather than adding a unique one
			return {
				...state,
				byIds: {
					...state.byIds,
					[recipe.id]: recipe,
				},
			};
		}
		case DELETE_RECIPE: {
			const idToDelete = action.payload;
			// To filter out the recipe from the state.byIds object, we get a list of all key/value pairs using Objects.entries, filter out the object to delete, and then, from the new, filtered list of key/value pairs, create a new object via Object.fromEntries.
			return {
				...state,
				allIds: state.allIds.filter((id) => id !== idToDelete),
				byIds: Object.fromEntries(
					Object.entries(state.byIds).filter(
						([key, value]) => key !== idToDelete
					)
				),
			};
		}
		default:
			return state;
	}
}
