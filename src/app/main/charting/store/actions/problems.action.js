// import axios from 'axios';

export const SET_PROBLEMS = 'SET PROBLEMS';
export const SAVE_PROBLEMS = 'SAVE PROBLEMS';

export function setProblems(problems) {
    return {
		type: SET_PROBLEMS,
		payload: problems
	};
}

export function saveProblems(problems) {
    return {
		type: SAVE_PROBLEMS,
		payload: problems
	};
}