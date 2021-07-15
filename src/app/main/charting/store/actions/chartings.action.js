//free text dialogue
export const GET_FREE_TEXT_DIALOGUE_STATE = 'GET FREE TEXT DIALOGUE STATE';
export const OPEN_FREE_TEXT_DIALOGUE = 'OPEN FREE TEXT DIALOGUE';
export const CLOSE_FREE_TEXT_DIALOGUE = 'CLOSE FREE TEXT DIALOGUE';
export const SET_FREE_TEXT_DATA = 'SET FREE TEXT DATA';

//simple text dialogue
export const OPEN_SIMPLE_TEXT_DIALOGUE = 'OPEN SIMPLE TEXT DIALOGUE';
export const CLOSE_SIMPLE_TEXT_DIALOGUE = 'CLOSE SIMPLE TEXT DIALOGUE';
export const SET_SIMPLE_TEXT_DATA = 'SET SIMPLE TEXT DATA';
export const GET_SIMPLE_TEXT_DATA = 'GET SIMPLE TEXT DATA';

//marco dialogue
export const OPEN_MACRO_DIALOGUE = 'OPEN MACRO DIALOGUE';
export const CLOSE_MACRO_DIALOGUE = 'CLOSE MACRO DIALOGUE';

//CC dialogue
export const OPEN_CC_DIALOGUE = 'OPEN CC DIALOGUE';
export const CLOSE_CC_DIALOGUE = 'CLOSE CC DIALOGUE';
export const GET_LIST_DATA = 'GET LIST DATA';

export const ADD_LIST_ITEM = 'ADD LIST ITEM';

//Full screen dialogue
export const OPEN_FULL_SCREEN_DIALOGUE = 'OPEN FULL SCREEN DIALOGUE';
export const CLOSE_FULL_SCREEN_DIALOGUE = 'CLOSE FULL SCREEN DIALOGUE';


let simple_text = ['','','',''];
let simple_index;

/**
 * Action functions for Free Text Dialogue
 */
export function getFreeTextDilaogueState(){
  return {
    type : GET_FREE_TEXT_DIALOGUE_STATE
  }
}

export function openFreeTextDialogue(){
  return {
    type : OPEN_FREE_TEXT_DIALOGUE,
    payload : true
  }
}

export function closeFreeTextDialogue(){
  return {
    type : CLOSE_FREE_TEXT_DIALOGUE
  }
}

export function setFreeTextData(data){
  return {
    type : SET_FREE_TEXT_DATA,
    payload : data
  }
}

/**
 * 
 * Action functions for simple input text dialogue
 */
export function openSimpleTextDialogue(i){
  simple_index = i;
  return {
    type : OPEN_SIMPLE_TEXT_DIALOGUE,
    index : i
  }
}

export function closeSimpleTextDialogue(){
  return {
    type : CLOSE_SIMPLE_TEXT_DIALOGUE
  }
}

export function setSimpleTextData(value){
  simple_text[simple_index] = value;
  return {
    type : SET_SIMPLE_TEXT_DATA,
    payload : simple_text,
  }
}

/**
 * Action funcitons for macro dialogue
 */
export function openMacroDialogue(){
  return {
    type : OPEN_MACRO_DIALOGUE
  }
}

export function closeMacroDialogue(){
  return {
    type : CLOSE_MACRO_DIALOGUE
  }
}

/**
 * Action functions for CC dialogue
 */
export function openCCDialogue(value){
  return {
    type : OPEN_CC_DIALOGUE,
    payload: value
  }
}

export function closeCCDialogue(){
  return {
    type : CLOSE_CC_DIALOGUE
  }
}

export function getListData(){
  const data = [
    {
      key : 0, item : 'Abdominal distension (gaseous) (R14.0)'
    },
    {
      key : 1, item : 'Abdominal weight gain (R63.5)',
    },
    {
      key : 2, item : 'Chills (without fever) (R68.83)'
    }
  ];
  return {
    type : GET_LIST_DATA,
    payload : { data }
  }
}

export function addListItem(value){
  return {
    type : ADD_LIST_ITEM,
    payload : value
  }
}

/**
 * Actions for full screen dialogue
 */
export function openFullScreenDialogue(){
  return {
    type : OPEN_FULL_SCREEN_DIALOGUE
  }
}

export function closeFullScreenDialogue(){
  return {
    type : CLOSE_FULL_SCREEN_DIALOGUE
  }
}