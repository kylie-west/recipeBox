import { TOGGLE_MODAL, SET_MODAL_MODE } from "../actionTypes";

const initialState = {
	visible: false,
	mode: null,
};

export default function modals(state = initialState, action) {
	switch (action.type) {
		case TOGGLE_MODAL: {
			const { visible } = state;
			return {
				...state,
				visible: !visible,
			};
		}
		case SET_MODAL_MODE: {
			const mode = action.payload;
			return {
				...state,
				mode,
			};
		}
		default:
			return state;
	}
}
