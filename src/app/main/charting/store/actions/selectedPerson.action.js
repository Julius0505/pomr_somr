// import axios from 'axios';

export const SET_PERSON = 'SET PERSON';
export const SET_FIXED = 'SET FIXED';
export const SET_HIDDEN = 'SET HIDDEN';
export const CHANGE_WEIGHT = 'CHANGE WEIGHT';
export const CHANGE_HEIGHT = 'CHANGE HEIGHT';

export function setPerson(selectedPerson) {

  return {
		type: SET_PERSON,
		payload: selectedPerson
	};
}

export function setFixed(isFix) {

  return {
		type: SET_FIXED,
		payload: isFix
	};
}

export function setHidden(isHidden) {

  return {
		type: SET_HIDDEN,
		payload: isHidden
	};
}

export function changeWeight(weight) {
  return {
		type: CHANGE_WEIGHT,
		payload: weight
	};
}

export function changeHeight(height) {
  return {
		type: CHANGE_HEIGHT,
		payload: height
	};
}