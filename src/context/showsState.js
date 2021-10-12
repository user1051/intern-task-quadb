import { useReducer } from "react";
import axios from "axios";
import ShowsContext from "./showsContext";
import ShowsReducer from "./showsReducer";
import { SET_SINGLE_SHOW } from "./types";

const ShowsState = (props) => {
	const initialState = {
		shows: [],
		singleShow: {},
	};

	const [state, dispatch] = useReducer(ShowsReducer, initialState);

	const getSingleShow = async (id) => {
		const { data } = await axios.get(`https://api.tvmaze.com/shows/${id}`);

		console.log(data);

		dispatch({
			type: SET_SINGLE_SHOW,
			payload: data,
		});
	};

	return (
		<ShowsContext.Provider
			value={{
				shows: state.shows,
				singleShow: state.singleShow,
				getSingleShow,
			}}
		>
			{props.children}
		</ShowsContext.Provider>
	);
};

export default ShowsState;
