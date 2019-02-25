import React, { Component } from "react";
import "./App.css";

import Timeline from "./components/Timeline";
import Gantt from "./components/Gantt";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Timeline />
        {/* <Gantt /> */}
      </div>
    );
  }
}

export default App;
