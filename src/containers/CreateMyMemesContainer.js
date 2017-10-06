import { connect } from 'react-redux';
import CreateMyMemes from '../components/CreateMyMemes';
import { deleteMeme } from '../actions';

function mapStateToProps(state) {
  return {
    myOwnMemes: state.myOwnMemes
  };
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteMeme: () => dispatch(deleteMeme()),
  }
}

export default connect(mapStateToProps, { deleteMeme })(CreateMyMemes);
