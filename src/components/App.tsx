import * as React from "react";
import Grid from "./Grid";
import Bar from "./Bar";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
        main: "#353A48",
    },
    secondary: {
      main: '#89B448',
    },
  },
});

export default class App extends React.Component<any, any> {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Bar />
        <Grid />
      </MuiThemeProvider>
    );
  }
}
