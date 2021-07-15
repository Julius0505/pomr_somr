import * as Actions from '../actions';

const initialState = {
    dialogue : {
        free_text : false,
        simple_text : false,
        macro : false,
        meds : false,
        full : false
    },
    allMedsDatas: [
		{
			key : 0, 
			name : 'Alpha-1-antitrypsin, total (82.103)'
		},
		{
			key : 1, 
			name : 'Amylase (82.150)'
		},
		{
			key : 2, 
			name : 'Anesthesia for pelvic exenteration (00.848)'
        },
        {
			key : 3, 
			name : 'Anesthesia for radical hysterectomy (00.846)'
        },
        {
			key : 4, 
			name : 'Anti-Sm (86.235)'
		},
        {
			key : 5, 
			name : 'Basic metabolic panel (80.048)'
		},
        {
			key : 6, 
			name : 'C-reative protein; high sensitivity (hsCRP) (86.141)'
		}
	],
	selectedMedsDatas: [],
}

const medsReducer = (state = initialState,action) => {
    switch (action.type){

        case Actions.OPEN_MEDS_DIALOGUE : 
            return {
                ...state,
                dialogue : {
                    simple_text : false,free_text : false, macro : false, meds : true, full : false
                }
            }

        case Actions.CLOSE_MEDS_DIALOGUE : 
            return {
                ...state,
                dialogue : {
                    simple_text : false,free_text : false, macro : false, meds : false, full : false
                }
            }

        case Actions.SET_MEDS :
            return {
                ...state,
                selectedMedsDatas: action.payload
            }
        
        default : 
            return state;
    }
}

export default medsReducer;