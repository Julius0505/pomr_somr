import * as Actions from '../actions';

const initialState = {
    charting: "/charting",
    flowsheets: "/flowsheets",
    patients: "/flowsheets/patients",
    subFlag: false
}

const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.SET_SUB_FLAG: {
            return {
                ...state,
                subFlag: true
            }
        }
        case Actions.REMOVE_SUB_FLAG: {
            return {
                ...state,
                subFlag: false
            }
        }
        default: {
            return state;
        }
    }
}

export default headerReducer;