import React from 'react';
import {connect} from 'react-redux';
import './Footer.css'

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const Footer = (props) => (
  <>
  {props.user.id &&
  <footer>
    &copy; Dijkstra Inc
  </footer>}
  </>
);

const mapStateToProps = (reduxStore) => ({
  user: reduxStore.user
})

export default connect(mapStateToProps)(Footer);
