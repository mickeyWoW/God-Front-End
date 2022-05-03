import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import agent from '../utils/agent';
import Header from './Shared/Header';
import { APP_LOAD } from '../constants/actionTypes';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';
import { store } from '../store';
import LayoutDefault from './Layouts/LayoutDefault';
import AppRoute from '../utils/AppRoute';
import ScrollReveal from '../utils/ScrollReveal';

const mapStateToProps = state => {
  return {
    appLoaded: state.common.appLoaded,
    appName: state.common.appName,
    currentUser: state.common.currentUser,
    redirectTo: state.common.redirectTo
  }};

const mapDispatchToProps = dispatch => ({
  onLoad: (payload, token) =>
    dispatch({ type: APP_LOAD, payload, token, skipTracking: true })
});

class App extends React.Component {

  constructor(props) {
    super(props);
    this.childRef = React.createRef();

  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.redirectTo) {
      // this.context.router.replace(nextProps.redirectTo);
      store.dispatch(push(nextProps.redirectTo));
      this.props.onRedirect();
    }
  }

  componentWillMount() {
    const token = window.localStorage.getItem('jwt');
    if (token) {
      agent.setToken(token);
    }

    this.props.onLoad(token ? agent.Auth.current() : null, token);
  }

  componentDidMount() {
    document.body.classList.add('is-loaded')
  }

  componentDidUpdate() {
    console.log('app');
    this.childRef.current.init();
  }
  
  render() {
    if (this.props.appLoaded) {
      return (
        <ScrollReveal
          ref={this.childRef}
          children={() => (
            <Switch>
              <AppRoute exact path="/" component={Home} layout={LayoutDefault}/>
              <AppRoute path="/login" component={Login} layout={LayoutDefault} />
              <AppRoute path="/register" component={Register} layout={LayoutDefault} />
            </Switch>
          )} />
      );
    }
    return (
      <ScrollReveal
        ref={this.childRef}
        children={() => (
          <div>
            <Header
              appName={this.props.appName}
              currentUser={this.props.currentUser} />
          </div>
        )} />
    );
  }
}

// App.contextTypes = {
//   router: PropTypes.object.isRequired
// };

export default connect(mapStateToProps, mapDispatchToProps)(App);
