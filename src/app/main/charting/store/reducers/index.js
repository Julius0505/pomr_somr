import {combineReducers} from 'redux';
import chartings from './chartings.reducer';
import wellness from './wellness.reducer';
import selectedPerson from './selectedPerson.reducer';
import problems from './problems.reducer';
import psh from './psh.reducer';
import meds from './meds.reducer';
import adr from './adr.reducer';

const reducer = combineReducers({
  chartings,
  wellness,
  selectedPerson,
  problems,
  psh,
  meds,
  adr
});

export default reducer;