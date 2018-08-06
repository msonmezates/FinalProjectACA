import { connect } from 'react-redux';
import ListOfMemes from '../components/ListOfMemes';

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, null)(ListOfMemes);
