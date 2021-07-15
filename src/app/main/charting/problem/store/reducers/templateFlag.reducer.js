import * as Actions from '../actions';

const initialState = {
    templateFlag: false
}

const templateFlagReducer = (state = initialState, action) => {
    switch (action.type) {
		case Actions.SET_TEMPLATE_FLAG: {
			return {
				...state,
				templateFlag: true
			};
		}
		default: {
			return state;
		}
	}
}

export default templateFlagReducer;