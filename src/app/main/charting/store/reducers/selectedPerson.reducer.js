import * as Actions from '../actions';

const initialState = {
	selectedPerson: {},
	isFixed: false,
	isHidden: false,
	weight: 160,
	height: 60
};

const selectedPerson = (state = initialState, action) => {
	switch (action.type) {
		case Actions.SET_PERSON: {
			return {
				...state,
				selectedPerson: action.payload
			};
		}
		case Actions.SET_FIXED: {
			return {
				...state,
				isFixed: action.payload
			};
		}
		case Actions.SET_HIDDEN: {
			return {
				...state,
				isHidden: action.payload
			};
		}
		case Actions.CHANGE_WEIGHT: {
			return {
				...state,
				weight: action.payload
			};
		}
		case Actions.CHANGE_HEIGHT: {
			return {
				...state,
				height: action.payload
			};
		}
		default: {
			return state;
		}
	}
};

export default selectedPerson;
