import React from "react";
import "./App.scss";
import { connect } from "react-redux";
import { getPhotos } from "./redux/photos/photo.actions";
import PhotoContainer from "./components/photoContainer/photoContainer.component";
import { Switch, Route } from "react-router-dom";
import FormInputContainer from "./components/form/form.component";
import Parallax from "./components/parallax/parallax.component";
import { withRouter } from "react-router";
import { selectHideSelector } from "./redux/hideAndShow/hideAndShow.selector";
import { createStructuredSelector } from "reselect";
import TestLayout from "./components/layout/TestLayout.component";
import { BrowserRouter } from "react-router-dom";
import WebSocket from "./components/websocket/chat.component";
import MyStepper from "./components/integrationScenario/stepper/stepper.component";

class App extends React.Component {
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then(response => response.json())
      .then(photos => this.props.triggerSetPhotos(photos));
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          {this.props.location.pathname !== "/parallax" ? (
            <div className="myapp">
              <div className="row">
                <div className="col-sm">
                  <h1 className="sample">Feelgood</h1>
                </div>
              </div>
            </div>
          ) : null}

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/form" component={FormInputContainer} />

            <Route exact path="/cards" component={PhotoContainer} />
            <Route path="/cards/home2" component={Home2} />
              <Route path="/parallax" component={Parallax}/>
              <Route path="/testlayout" component={TestLayout}/>
              <Route exact path="/websocket" component={WebSocket}/>
              <Route exact path="/stepper" component={MyStepper}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const Home = () => (
  <div>
    <h1>Home</h1>
  </div>
);

const Home2 = () => (
  <div>
    <h1>Home2</h1>
  </div>
);

const mapDispatchToProps = dispatch => ({
  triggerSetPhotos: photos => dispatch(getPhotos(photos))
});

export default withRouter(connect(null, mapDispatchToProps)(App));
