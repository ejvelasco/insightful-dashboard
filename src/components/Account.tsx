import * as React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";
import colors from "../constants/colors";
import Divider from "@material-ui/core/Divider";
import { Link } from "react-router-dom";

const styles = theme => ({
  main: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    marginTop: "100px",
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
});

function Account(props) {
  const { classes } = props;

  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <Icon>person</Icon>
        </Avatar>
        <Typography component="h1" variant="h5">
          Account
        </Typography>
        <List>
          <Divider />
          <ListItem
            style={{
              backgroundColor: colors.lightGreen.fade(0.9)
            }}
          >
            <ListItemIcon>
              <Icon>mail</Icon>
            </ListItemIcon>
            <ListItemText primary="eduardo@ordermygear.com" />
          </ListItem>
          <Divider />
          <ListItem
            style={{
              backgroundColor: colors.lightGreen.fade(0.9)
            }}
          >
            <ListItemIcon>
              <Icon>security</Icon>
            </ListItemIcon>
            <Typography
              style={{
                fontSize: "12px"
              }}
            >
              YFRVNSH-ZNS4PYK-M428QJ4-JBDG7VH
            </Typography>
          </ListItem>
          <Divider />
        </List>
        <Link to="/sign-in" style={{
          textDecoration: "none",
          width: "70%"
        }}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign out
          </Button>
        </Link>
      </Paper>
    </main>
  );
}

export default withStyles(styles)(Account);
