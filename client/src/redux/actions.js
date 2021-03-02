import * as actionTypes from "./actionTypes";

export const addRecipe = (newRecipe) => ({
	type: actionTypes.ADD_RECIPE,
	payload: newRecipe,
});

export const updateRecipe = (editedRecipe) => ({
	type: actionTypes.UPDATE_RECIPE,
	payload: editedRecipe,
});

export const deleteRecipe = (id) => ({
	type: actionTypes.DELETE_RECIPE,
	payload: id,
});

export const toggleModal = () => ({
	type: actionTypes.TOGGLE_MODAL,
	payload: null,
});

export const setModalMode = (mode) => ({
	type: actionTypes.SET_MODAL_MODE,
	payload: mode,
});
