export const SUBMIT_FORM = 'SUBMIT_FORM';



export const submit = () => ({
  type: SUBMIT_FORM,
});



export const submitFrom= () =>
  (dispatch, getState) => {
    console.log('submit') 
    dispatch(submit());
  };


