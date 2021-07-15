import * as Actions from '../actions';

const initialState = {
	allProblems: [
		{
			key : 0, 
			item : 'Abdominal distension (gaseous) (R14.0)', 
			cc: "chronic",
			hpi: true,
			pmh: false,
			ass: ""
		},
		{
			key : 1, 
			item : 'Abdominal weight gain (R63.5)',
			cc: "chronic",
			hpi: true,
			pmh: false,
			ass: ""
		},
		{
			key : 2, 
			item : 'Chills (without fever) (R68.83)',
			cc: "chronic",
			hpi: true,
			pmh: false,
			ass: ""
		}
	],
	problems: [],
	problemSelection: []
};

const problemsReducer = (state = initialState, action) => {
	switch (action.type) { 
		case Actions.SET_PROBLEMS: {
			return {
				...state,
				problems: action.payload
			};
		}
		case Actions.SAVE_PROBLEMS: {
			return {
				...state,
				problemSelection: action.payload
			};
		}
		default: {
			return state;
		}
	}
};

export default problemsReducer;
