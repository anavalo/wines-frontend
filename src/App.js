/* eslint-disable no-console */
import React, { useState, useEffect } from "react";
import Maps from "./components/Maps";
import regionService from "./services/regions";
// import Producer from "./components/Producer";
import useProducer from "./hooks/useProducer";

function App() {
  const [fetchedRegions, setFetchedRegions] = useState();
  const [region, setRegion] = useState("");
  const [currentProducer, ProducerDropdown, setCurrentProducer] = useProducer(
    "",
    fetchedRegions,
    region
  );

  const wineData = [
    ["gr-as", 0],
    ["gr-ii", 1],
    ["gr-at", 2],
    ["gr-pp", 3],
    ["gr-ts", 4],
    ["gr-an", 5],
    ["gr-gc", 6],
    ["gr-cr", 7],
    ["gr-mc", 8],
    ["gr-ma", 9],
    ["gr-mt", 10],
    ["gr-gw", 11],
    ["gr-mw", 12],
    ["gr-ep", 0],
  ];

  useEffect(() => {
    regionService
      .getAll()
      .then((fetchedData) => setFetchedRegions(fetchedData));
  }, []);

  const clickOnMap = (e) => {
    setCurrentProducer("");
    setRegion(e.point.name);
  };
  console.log(currentProducer);

  return (
    <div>
      <div>
        <h1 className="main-title">Wines of Greece</h1>
      </div>

      <div className="map">
        <Maps data={wineData} clickOnMap={clickOnMap} />
      </div>

      <div>
        <ProducerDropdown />
      </div>
    </div>
  );
}

export default App;
