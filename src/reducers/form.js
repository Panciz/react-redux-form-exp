import createReducer from '../utils/createReducer';
import { SUBMIT_FORM } from '../actions/form';


const preloadedState = {
	user: {name: ''}

} ;

const myForm = createReducer(preloadedState, {
});


export default myForm;
