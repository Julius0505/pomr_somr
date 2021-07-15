// import axios from 'axios';

export const SET_MEDS = 'SET MEDS';
export const OPEN_MEDS_DIALOGUE = 'OPEN MEDS DIALOGUE';
export const CLOSE_MEDS_DIALOGUE = 'CLOSE MEDS DIALOGUE';

export function setMeds(meds) {
    return {
		type: SET_MEDS,
		payload: meds
	};
}

export function openMedsDialogue(){
    return {
        type : OPEN_MEDS_DIALOGUE
    }
}

export function closeMedsDialogue(){
    return {
        type : CLOSE_MEDS_DIALOGUE
    }
}