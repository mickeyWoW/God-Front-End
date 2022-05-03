import Banner from './Banner';
import React from 'react';
import { connect } from 'react-redux';
import {
} from '../../constants/actionTypes';

const Promise = global.Promise;

const mapStateToProps = state => ({
  ...state.home,
  appName: state.common.appName,
  token: state.common.token
});

const mapDispatchToProps = dispatch => ({
});

class Home extends React.Component {

  componentDidMount() {
    console.log('Home.js');
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <>
      <section className="hero section center-content illustration-section-01">

        <Banner token={this.props.token} appName={this.props.appName} />

        <div className="container page">
          <div className="row">
            <img src='./image.png'></img>
          </div>
          <div className="row">
            <img src='./image.png'></img>
          </div>
          <div className="row">
            <img src='./image.png'></img>
          </div>
          <div className="row">
            <img src='./image.png'></img>
          </div>
          <div className="row">
            <img src='./image.png'></img>
          </div>
          <div className="row">
            <img src='./image.png'></img>
          </div>
          <div className="row">
            <img src='./image.png'></img>
          </div>
          <div className="row">
            <img src='./image.png'></img>
          </div>
          <div className="row">
            <img src='./image.png'></img>
          </div>
          <div className="row">
            <img src='./image.png'></img>
          </div>
          <div className="row">
            <img src='./image.png'></img>
          </div>
          <div className="row">
            <img src='./image.png'></img>
          </div>
          <div className="row">
            <img src='./image.png'></img>
          </div>
          <div className="row">
            <img src='./image.png'></img>
          </div>
        </div>

      </section>
      <section className="section home-page">

        <Banner token={this.props.token} appName={this.props.appName} />

        <div className="container page">
          <div className="row">
            <img src='./image.png'></img>
          </div>
          <div className="row">
            <img src='./image.png'></img>
          </div>
          <div className="row">
            <img src='./image.png'></img>
          </div>
          <div className="row">
            <img src='./image.png'></img>
          </div>
          <div className="row">
            <img src='./image.png'></img>
          </div>
          <div className="row">
            <img src='./image.png'></img>
          </div>
          <div className="row">
            <img src='./image.png'></img>
          </div>
          <div className="row">
            <img src='./image.png'></img>
          </div>
          <div className="row">
            <img src='./image.png'></img>
          </div>
          <div className="row">
            <img src='./image.png'></img>
          </div>
          <div className="row">
            <img src='./image.png'></img>
          </div>
          <div className="row">
            <img src='./image.png'></img>
          </div>
          <div className="row">
            <img src='./image.png'></img>
          </div>
          <div className="row">
            <img src='./image.png'></img>
          </div>
        </div>

      </section>
      <section className="section home-page">

        <Banner token={this.props.token} appName={this.props.appName} />

        <div className="container page">
          <div className="row">
            <img src='./image.png'></img>
          </div>
          <div className="row">
            <img src='./image.png'></img>
          </div>
          <div className="row">
            <img src='./image.png'></img>
          </div>
          <div className="row">
            <img src='./image.png'></img>
          </div>
          <div className="row">
            <img src='./image.png'></img>
          </div>
          <div className="row">
            <img src='./image.png'></img>
          </div>
          <div className="row">
            <img src='./image.png'></img>
          </div>
          <div className="row">
            <img src='./image.png'></img>
          </div>
          <div className="row">
            <img src='./image.png'></img>
          </div>
          <div className="row">
            <img src='./image.png'></img>
          </div>
          <div className="row">
            <img src='./image.png'></img>
          </div>
          <div className="row">
            <img src='./image.png'></img>
          </div>
          <div className="row">
            <img src='./image.png'></img>
          </div>
          <div className="row">
            <img src='./image.png'></img>
          </div>
        </div>

      </section>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
