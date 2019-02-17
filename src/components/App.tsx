import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Dashboard from "./Dashboard";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import AuthBar from "./AuthBar";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#353A48"
    },
    secondary: {
      main: "#89B448"
    }
  }
});

export default class App extends React.Component<any, any> {
  render() {
    return (
      <Router>
        <MuiThemeProvider theme={theme}>
          <AuthBar />
          <Route path="/sign-in" exact component={SignIn} />
          <Route path="/sign-up" exact component={SignUp} />
          <Route path="/" exact component={Dashboard} />
        </MuiThemeProvider>
      </Router>
    );
  }
}
