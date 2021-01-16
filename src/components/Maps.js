import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsMap from "highcharts/modules/map";
import mapDataIE from "@highcharts/map-collection/countries/gr/gr-all.geo.json";
import "./map.css";
highchartsMap(Highcharts);

const Maps = ({ data, clickOnMap }) => {
  const mapOptions = {
    chart: {
      stylemode: true,
      map: mapDataIE,
    },

    title: {
      text: "Wines of Greece",
    },

    plotOptions: {
      series: {
        point: {
          events: {
            click: clickOnMap,
          },
        },
      },
    },

    mapNavigation: {
      enabled: true,
      buttonOptions: {
        verticalAlign: "bottom",
      },
    },

    series: [
      {
        data: data,
        name: "Winemakers",
        states: {
          hover: {
            color: "#BADA55",
          },
        },
        dataLabels: {
          enabled: false,
          format: "{point.name}",
        },
      },
    ],
  };

  return (
    <div id="container">
      <HighchartsReact
        constructorType={"mapChart"}
        highcharts={Highcharts}
        options={mapOptions}
      />
    </div>
  );
};

export default Maps;
