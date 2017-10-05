import { connect } from 'react-redux';
import MemeDetail from '../components/MemeDetail';
import { createMeme } from '../actions';

const mapDispatchToProps = dispatch => {
  return {
    createMeme: () => dispatch(createMeme()),
  }
}

export default connect(null, { createMeme })(MemeDetail);
