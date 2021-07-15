// import axios from 'axios';

export const SET_PSH = 'SET PSH';
export const OPEN_PSH_DIALOGUE = 'OPEN PSH DIALOGUE';
export const CLOSE_PSH_DIALOGUE = 'CLOSE PSH DIALOGUE';

export function setPSH(psh) {
    return {
		type: SET_PSH,
		payload: psh
	};
}

export function openPSHDialogue(){
    
    return {
        type : OPEN_PSH_DIALOGUE
    }
}

export function closePSHDialogue(){
    return {
        type : CLOSE_PSH_DIALOGUE
    }
}