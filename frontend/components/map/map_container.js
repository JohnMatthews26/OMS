import { connect } from 'react-redux';
import {GoogleApiWrapper} from 'google-maps-react';
import { logout } from '../../actions/session_actions';
import Map from './map';

const mapStateToProps = ({  }) => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);
