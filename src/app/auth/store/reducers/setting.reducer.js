import * as Actions from '../actions';

const initialState = {
	open: false
};

const setting = (state = initialState, action) => {
	switch (action.type) {
		case Actions.SET_SETTING: {
			return {
				open: true
			};
		}
		case Actions.CANCEL_SETTING: {
			return {
				open: false
			};
		}
		default: {
			return state;
		}
	}
};

export default setting;
