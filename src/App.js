import React from "react";
import "./App.scss";
import { connect } from "react-redux";
import { getPhotos } from "./redux/photos/photo.actions";
import PhotoContainer from "./components/photoContainer/photoContainer.component";
import { Switch, Route, Redirect } from "react-router-dom";
import FormInput from "./components/form/form.component";
import Parallax from "./components/parallax/parallax.component";
import { withRouter } from "react-router";
import { selectHideSelector } from "./redux/hideAndShow/hideAndShow.selector";
import { createStructuredSelector } from "reselect";

class App extends React.Component {
  componentDidMount() {
    console.log("=====================")
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then(response => response.json())
      .then(photos => this.props.triggerSetPhotos(photos));
  }

  render() {
    console.log(this.props.hideOrNot);
    return (
      <div>
        {this.props.hideOrNot === true ? (
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
          <Route path="/form" component={FormInput} />

          <Route exact path="/cards" component={PhotoContainer} />
          <Route path="/cards/home2" component={Home2} />
          <Route path="/parallax" component={Parallax} />
        </Switch>
      </div>
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

const mapStateToProps = createStructuredSelector({
  hideOrNot: selectHideSelector
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
