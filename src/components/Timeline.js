import React, { Component } from "react";
import "../App.css";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

class Timeline extends Component {
  componentDidMount() {
    let chart = am4core.create("chartdiv", am4charts.XYChart);

    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.paddingRight = 30;
    chart.dateFormatter.inputDateFormat = "yyyy-MM-dd HH:mm";

    var colorSet = new am4core.ColorSet();
    colorSet.saturation = 0.4;

    chart.data = [
      {
        name: "foot.com",
        fromDate: "2018-01-01 08:00",
        toDate: "2018-01-01 10:00",
        color: colorSet.getIndex(0).brighten(0)
      },
      {
        name: "woot.com",
        fromDate: "2018-01-01 12:00",
        toDate: "2018-01-01 15:00",
        color: colorSet.getIndex(0).brighten(0.4)
      },
      {
        name: "awesome.com",
        fromDate: "2018-01-01 15:30",
        toDate: "2018-01-01 21:30",
        color: colorSet.getIndex(0).brighten(0.8)
      },

      {
        name: "please.com",
        fromDate: "2018-01-01 09:00",
        toDate: "2018-01-01 12:00",
        color: colorSet.getIndex(2).brighten(0)
      },
      {
        name: "doe.com",
        fromDate: "2018-01-01 13:00",
        toDate: "2018-01-01 17:00",
        color: colorSet.getIndex(2).brighten(0.4)
      },

      {
        name: "jane.com",
        fromDate: "2018-01-01 11:00",
        toDate: "2018-01-01 16:00",
        color: colorSet.getIndex(4).brighten(0)
      },
      {
        name: "jim.com",
        fromDate: "2018-01-01 16:00",
        toDate: "2018-01-01 19:00",
        color: colorSet.getIndex(4).brighten(0.4)
      },

      {
        name: "sam.com",
        fromDate: "2018-01-01 16:00",
        toDate: "2018-01-01 20:00",
        color: colorSet.getIndex(6).brighten(0)
      },
      {
        name: "google.com",
        fromDate: "2018-01-01 20:30",
        toDate: "2018-01-01 24:00",
        color: colorSet.getIndex(6).brighten(0.4)
      },
      {
        name: "cam.com",
        fromDate: "2018-01-01 13:00",
        toDate: "2018-01-01 24:00",
        color: colorSet.getIndex(8).brighten(0)
      },
      {
        name: "bar.com",
        fromDate: "2018-01-01 13:00",
        toDate: "2018-01-01 24:00",
        color: colorSet.getIndex(2).brighten(0)
      },
      {
        name: "baz.com",
        fromDate: "2018-01-01 13:00",
        toDate: "2018-01-01 24:00",
        color: colorSet.getIndex(1).brighten(0)
      },
      {
        name: "tar.com",
        fromDate: "2018-01-01 13:00",
        toDate: "2018-01-01 24:00",
        color: colorSet.getIndex(5).brighten(0)
      },
      {
        name: "taz.com",
        fromDate: "2018-01-01 13:00",
        toDate: "2018-01-01 24:00",
        color: colorSet.getIndex(6).brighten(0)
      },
      {
        name: "wong.com",
        fromDate: "2018-01-01 13:00",
        toDate: "2018-01-01 24:00",
        color: colorSet.getIndex(8).brighten(0)
      },
      {
        name: "sizzle.com",
        fromDate: "2018-01-01 13:00",
        toDate: "2018-01-01 24:00",
        color: colorSet.getIndex(9).brighten(0)
      },
      {
        name: "nodes.com",
        fromDate: "2018-01-01 13:00",
        toDate: "2018-01-01 24:00",
        color: colorSet.getIndex(1).brighten(0)
      },
      {
        name: "for.com",
        fromDate: "2018-01-01 13:00",
        toDate: "2018-01-01 13:00",
        color: colorSet.getIndex(8).brighten(0)
      },
      {
        name: "all.com",
        fromDate: "2018-01-01 13:00",
        toDate: "2018-01-01 24:00",
        color: colorSet.getIndex(8).brighten(0)
      },
      {
        name: "sample.com",
        fromDate: "2018-01-01 13:00",
        toDate: "2018-01-01 24:00",
        color: colorSet.getIndex(8).brighten(0)
      },
      {
        name: "example.com",
        fromDate: "2018-01-01 13:00",
        toDate: "2018-01-01 24:00",
        color: colorSet.getIndex(8).brighten(0)
      },
      {
        name: "tent.com",
        fromDate: "2018-01-01 13:00",
        toDate: "2018-01-01 24:00",
        color: colorSet.getIndex(8).brighten(0)
      },
      {
        name: "cave.com",
        fromDate: "2018-01-01 13:00",
        toDate: "2018-01-01 24:00",
        color: colorSet.getIndex(8).brighten(0)
      },
      {
        name: "camel.com",
        fromDate: "2018-01-01 13:00",
        toDate: "2018-01-01 24:00",
        color: colorSet.getIndex(8).brighten(0)
      },
      {
        name: "sig.com",
        fromDate: "2018-01-01 13:00",
        toDate: "2018-01-01 24:00",
        color: colorSet.getIndex(8).brighten(0)
      },
      {
        name: "alpha.com",
        fromDate: "2018-01-01 13:00",
        toDate: "2018-01-01 24:00",
        color: colorSet.getIndex(8).brighten(0)
      },
      {
        name: "beta.com",
        fromDate: "2018-01-01 13:00",
        toDate: "2018-01-01 24:00",
        color: colorSet.getIndex(8).brighten(0)
      },
      {
        name: "charlie.com",
        fromDate: "2018-01-01 13:00",
        toDate: "2018-01-01 24:00",
        color: colorSet.getIndex(8).brighten(0)
      },
      {
        name: "delta.com",
        fromDate: "2018-01-01 13:00",
        toDate: "2018-01-01 24:00",
        color: colorSet.getIndex(8).brighten(0)
      },
      {
        name: "echo.com",
        fromDate: "2018-01-01 13:00",
        toDate: "2018-01-01 24:00",
        color: colorSet.getIndex(8).brighten(0)
      },
      {
        name: "foxtrot.com",
        fromDate: "2018-01-01 06:00",
        toDate: "2018-01-01 24:00",
        color: colorSet.getIndex(8).brighten(0)
      },
      {
        name: "helio.com",
        fromDate: "2018-01-01 13:00",
        toDate: "2018-01-02 24:00",
        color: colorSet.getIndex(8).brighten(0)
      },
      {
        name: "golf.com",
        fromDate: "2018-01-01 09:30",
        toDate: "2018-01-01 09:30",
        color: colorSet.getIndex(8).brighten(0)
      }
    ];

    var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "name";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.inversed = true;

    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.dateFormatter.dateFormat = "yyyy-MM-dd HH:mm";
    dateAxis.renderer.minGridDistance = 70;
    dateAxis.baseInterval = { count: 30, timeUnit: "minute" };
    dateAxis.max = new Date(2018, 0, 1, 30, 0, 0, 0).getTime();
    dateAxis.strictMinMax = true;
    dateAxis.renderer.tooltipLocation = 0;

    var series1 = chart.series.push(new am4charts.ColumnSeries());
    series1.columns.template.width = am4core.percent(80);
    series1.columns.template.tooltipText = "{name}: {openDateX} - {dateX}";

    series1.dataFields.openDateX = "fromDate";
    series1.dataFields.dateX = "toDate";
    series1.dataFields.categoryY = "name";
    series1.columns.template.propertyFields.fill = "color"; // get color from data
    series1.columns.template.propertyFields.stroke = "color";
    series1.columns.template.strokeOpacity = 1;

    let scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(series1);
    chart.scrollbarX = scrollbarX;

    chart.scrollbarY = new am4core.Scrollbar();

    chart.scrollbarX.parent = chart.bottomAxesContainer;

    // Add cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.lineX.stroke = am4core.color("#333");
    chart.cursor.lineX.strokeWidth = 4;
    chart.cursor.lineX.strokeOpacity = 0.2;
    chart.cursor.lineX.strokeDasharray = "";
    chart.cursor.behavior = "panXY";

    this.chart = chart;
  }

  componentDidUpdate(oldProps) {
    if (oldProps.paddingRight !== this.props.paddingRight) {
      this.chart.paddingRight = this.props.paddingRight;
    }
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return (
      <div className="Timeline">
        <div id="chartdiv" style={{ width: "100%", height: "700px" }} />
      </div>
    );
  }
}

export default Timeline;
