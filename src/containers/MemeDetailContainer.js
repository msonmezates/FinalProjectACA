import { connect } from 'react-redux';
import MemeDetail from '../components/MemeDetail';
import { createMeme } from '../actions';

export default connect(null, { createMeme })(MemeDetail);
