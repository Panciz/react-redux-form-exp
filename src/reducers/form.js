import { combineForms } from 'react-redux-form';
import { SUBMIT_FORM } from '../actions/form';
import { createStore } from 'redux';

const preloadedState = {name: 'Prova'};

const form = combineForms({user:preloadedState},'user');


export default form;
