import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import MyForm from '../components/MyForm';
import * as MyFormActions from '../actions/form';


const mapStateToProps = state => ({
});


const mapDispatchToProps = dispatch =>
  bindActionCreators(MyFormActions, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(MyForm);
