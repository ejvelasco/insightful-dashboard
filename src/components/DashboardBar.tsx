import * as React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import colors from "../constants/colors";
import { Link } from "react-router-dom";

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
          <Link
            to="/dashboard/home"
            style={{
              textDecoration: "none",
              color: colors.white
            }}
          >
            <Button color="inherit">Home</Button>
          </Link>
          <Link
            to="/dashboard/account"
            style={{
              textDecoration: "none",
              color: colors.white
            }}
          >
            <Button color="inherit">Account</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(ButtonAppBar);
