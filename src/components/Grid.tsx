import * as React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Line } from "react-chartjs-2";
import colors from "../constants/colors";
import { Typography } from "@material-ui/core";
import Tabs from "./Tabs";

const successData = {
  labels: ["January", "February", "March", "April"],
  datasets: [
    {
      backgroundColor: colors.info.fade(0.5).toString(),
      borderColor: colors.info.fade(0.5).toString(),
      data: [4, 1, 3, 2],
      fill: true
    }
  ]
};

const errorData = {
  labels: ["January", "February", "March", "April"],
  datasets: [
    {
      backgroundColor: colors.error.fade(0.5).toString(),
      borderColor: colors.error.fade(0.5).toString(),
      data: [2, 1, 0, 2],
      fill: true
    }
  ]
};

function buildChartOptions(title: string) {
  const options = {
    responsive: true,
    legend: {
      display: false
    },
    title: {
      display: true
    },
    tooltips: {
      mode: "index",
      intersect: false
    },
    hover: {
      mode: "nearest",
      intersect: true
    },
    scales: {
      xAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "Month"
          }
        }
      ],
      yAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "Value"
          }
        }
      ]
    }
  };
  return options;
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: "10px",
    marginTop: "80px"
  }
});

function FullWidthGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6} style={{}}>
          <Typography variant="h6" color="inherit" gutterBottom={true}>
            Success Rate
          </Typography>
          <Tabs color={colors.info} />
        </Grid>
        <Grid item xs={12} sm={6} style={{}}>
          <Typography variant="h6" color="inherit" gutterBottom={true}>
            Error Rate
          </Typography>
          <Tabs color={colors.error} />
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(FullWidthGrid);
