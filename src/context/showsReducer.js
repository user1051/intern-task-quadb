import { SET_SINGLE_SHOW } from "./types";

const showsReducer = (state, action) => {
	switch (action.type) {
		case SET_SINGLE_SHOW:
			return {
				...state,
				singleShow: action.payload,
			};
		default:
			return state;
	}
};

export default showsReducer;
