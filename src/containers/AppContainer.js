import { connect } from 'react-redux';
import App from '../components/App';
import { fetchMemes } from '../actions';

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, null)(App);
