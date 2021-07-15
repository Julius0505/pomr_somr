// import axios from 'axios';

export const SET_ADR = 'SET ADR';
export const OPEN_ADR_DIALOGUE = 'OPEN ADR DIALOGUE';
export const CLOSE_ADR_DIALOGUE = 'CLOSE ADR DIALOGUE';

export function setAdr(adr) {
    return {
		type: SET_ADR,
		payload: adr
	};
}

export function openAdrDialogue(){
    return {
        type : OPEN_ADR_DIALOGUE
    }
}

export function closeAdrDialogue(){
    return {
        type : CLOSE_ADR_DIALOGUE
    }
}