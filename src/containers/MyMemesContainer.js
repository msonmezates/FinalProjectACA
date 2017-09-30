import { connect } from 'react-redux';
import MyMemes from '../components/MyMemes';

function mapStateToProps(state) {
  return {
    myOwnMemes: state.myOwnMemes
  };
}

export default connect(mapStateToProps, null)(MyMemes);
