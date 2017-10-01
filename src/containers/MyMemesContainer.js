import { connect } from 'react-redux';
import MyMemes from '../components/MyMemes';
import { deleteMeme } from '../actions';

function mapStateToProps(state) {
  return {
    myOwnMemes: state.myOwnMemes
  };
}

export default connect(mapStateToProps, { deleteMeme })(MyMemes);
