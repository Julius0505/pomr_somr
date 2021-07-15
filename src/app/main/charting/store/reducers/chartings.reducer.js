import * as Actions from '../actions';

const initialState = {
  dialogue : {
    free_text : false,
    simple_text : false,
    macro : false,
    cc : false,
    full : false
  },
  free_text_data : {
    data : ''
  },
  simple_text : {
    data : []
  },
  simple_text_index : {
    index : 0
  },
  simple_text_hpi : {
    data : []
  },
  simple_text_index_hpi : {
    index : 0
  },
  cc_list_data : {data : []},
  list_item : {data : ''},
  cc_condition: ""
}

const chartingsReducer = (state = initialState,action) => {
  switch (action.type){
    case Actions.GET_FREE_TEXT_DIALOGUE_STATE : 
      return {
        ...state,
        dialogue : { free_text : false }
      }
    case Actions.OPEN_FREE_TEXT_DIALOGUE : 
      return {
        ...state,
        dialogue : { free_text : true, simple_text : false, macro : false, cc : false, full : false }
      }
    case Actions.CLOSE_FREE_TEXT_DIALOGUE : 
      return {
        ...state,
        dialogue : { free_text : false, simple_text : false , macro : false, cc : false, full : false}
      }
    case Actions.SET_FREE_TEXT_DATA :
      return {
        ...state,
        free_text_data : {data:action.payload}
      }
    case Actions.OPEN_SIMPLE_TEXT_DIALOGUE :
      return {
        ...state,
        dialogue : {simple_text : true, free_text : false, macro : false, cc : false, full : false},
        simple_text_index : {index : action.index}
      }
    case Actions.CLOSE_SIMPLE_TEXT_DIALOGUE :
      return {
        ...state,
        dialogue : {simple_text : false, free_text : false, macro : false, cc : false, full : false}
      }
    case Actions.SET_SIMPLE_TEXT_DATA :
      return {
        ...state,
        simple_text : { data : action.payload},
      }
    case Actions.OPEN_MACRO_DIALOGUE :
      return {
        ...state,
        dialogue : {
          simple_text : false, free_text : false, macro : true, cc : false, full : false
        }
      }
    case Actions.CLOSE_MACRO_DIALOGUE : 
      return {
        ...state,
        dialogue : {
          simple_text : false, free_text : false, macro : false, cc : false, full : false
        }
      }
    case Actions.OPEN_CC_DIALOGUE : 
      return {
        ...state,
        dialogue : {
          simple_text : false,free_text : false, macro : false, cc : true, full : false
        },
        cc_condition: action.payload
      }
    case Actions.CLOSE_CC_DIALOGUE : 
      return {
        ...state,
        dialogue : {
          simple_text : false, free_text : false, macro : false,cc : false, full : false
        }
      }
    case Actions.GET_LIST_DATA : 
      return {
        ...state,
        cc_list_data : {data : action.payload}
      }
    case Actions.ADD_LIST_ITEM :
      return {
        ...state,
        list_item : {data : action.payload}
      }
    case Actions.OPEN_FULL_SCREEN_DIALOGUE : 
      return {
        ...state,
        dialogue  : {
          simple_text : false, free_text : false, macro : false, cc : false, full : true
        }
      }
    case Actions.CLOSE_FULL_SCREEN_DIALOGUE : 
      return {
        ...state,
        dialogue  : {
          simple_text : false, free_text : false, macro : false, cc : false, full : false
        }
      }
    
    default : 
      return state;
  }
}

export default chartingsReducer;