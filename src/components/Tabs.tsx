import * as React from "react";
import { Line } from "react-chartjs-2";
import colors from "../constants/colors";
import Color from "color";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import Typography from "@material-ui/core/Typography";

interface Props {
  color: Color;
}

interface State {}

function buildChartData(color: Color) {
  const data = {
    labels: ["January", "February", "March", "April"],
    datasets: [
      {
        backgroundColor: color.fade(0.5).toString(),
        borderColor: color.fade(0.5).toString(),
        data: [4, 1, 3, 2],
        fill: true
      }
    ]
  };
  return data;
}

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
      display: false
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
            display: false
          }
        }
      ],
      yAxes: [
        {
          display: true,
          scaleLabel: {
            display: false
          }
        }
      ]
    }
  };
  return options;
}

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

export default class SimpleTabs extends React.Component<Props, State> {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  fetchData = (value: number) => {
    const { color } = this.props;
    return buildChartData(color);
  };

  render() {
    const { value } = this.state;

    return (
      <div
        style={{
          flexGrow: 1
        }}
      >
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Daily" />
            <Tab label="Weekly" />
            <Tab label="Monthly" />
            <Select value="project" style={{
                fontSize: "12px",
                color: "white"
            }}>
              <MenuItem value="project">All Projects</MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </Tabs>
        </AppBar>
        <div
          style={{
            padding: "10px",
            backgroundColor: colors.white
          }}
        >
          <Line
            data={this.fetchData(value)}
            options={buildChartOptions("Success Rate")}
          />
        </div>
      </div>
    );
  }
}
