import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Dashboard from "./Dashboard";
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
          <Route path="/sign*" component={AuthBar} />
          <Route path="/sign-in" exact component={SignIn} />
          <Route path="/sign-up" exact component={SignUp} />
          <Route path="/dashboard*" component={Dashboard} />
        </MuiThemeProvider>
      </Router>
    );
  }
}
