import { connect } from 'react-redux';
import MemeDetail from '../components/MemeDetail';
import { newMeme } from '../actions';

export default connect(null, { newMeme })(MemeDetail);
