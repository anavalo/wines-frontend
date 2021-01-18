import React, { useState } from "react";

const useProducer = (defaultState, generalOptions, specificOptions) => {
  const [currentProducer, setCurrentProducer] = useState(defaultState);

  const ShowProducer = () => {
    if (specificOptions) {
      let uniqueProducersPerRegion = [
        ...new Set(generalOptions[specificOptions].map((x) => x.producer)),
      ];
      return (
        <>
          <div>
            <div>
              <h2>Region: {specificOptions}</h2>
              <h3>Producers:</h3>
            </div>
            <div>
              {uniqueProducersPerRegion.map((uniqueProducer) => (
                <ul key={uniqueProducer}>
                  <li>
                    <button
                      onMouseEnter={() => setCurrentProducer(uniqueProducer)}
                    >
                      {uniqueProducer}
                    </button>
                  </li>
                </ul>
              ))}
            </div>
          </div>
          <div>
            {currentProducer && <h3>Wines of {currentProducer}:</h3>}
            {currentProducer &&
              generalOptions[specificOptions]
                .filter((m) => m.producer === currentProducer)
                .map((x) => (
                  <ul key={x.name}>
                    <li>Name: {x.name}</li>
                    <li>Year: {x.year}</li>
                    <li>Variety: {x.variety}</li>
                  </ul>
                ))}
          </div>
        </>
      );
    }
    return <h4>Click on the map to search regional producers</h4>;
  };
  return [currentProducer, ShowProducer, setCurrentProducer];
};

export default useProducer;
