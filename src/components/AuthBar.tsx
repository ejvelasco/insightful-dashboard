import * as React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import colors from "../constants/colors";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        style={{
          margin: 0
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Insightful{" "}
            <span
              style={{
                fontWeight: 300,
                color: colors.lightGreen
              }}
            >
              {" "}
              v1
            </span>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(ButtonAppBar);
