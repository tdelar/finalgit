import logo from "./logo.svg";
import "./App.css";
import * as React from "react";
import Map from "react-map-gl";

function App() {
  return (
    <div className="bg-blue-50">
      <h1 className="text-3xl font-bold text-center">
        How location effects real estate prices throughout united states and
        factors Influencing prices
      </h1>

      <h1 className="text-3xl font-bold underline px-4">Overview</h1>

      <p className="px-10 py-1">
        Location plays a key role in real estate prices and rents throughout the
        country. A one bedroom place in New York City has a median cost of
        _______ and a one bedroom place in ______ has a median cost of ____.
        This guide will take you through the distribution of these price
        differences and the factors that cause them. It will also show you how
        you can analyze real estate prices with the Location Analysis console.
        This guide is specifically useful for people looking to rent or buy
        housing in an area to see how their costs compare to others. It will
        show you how rents and prices are distributed for 1 bedroom, 2 bedroom,
        3 bedroom housing and other important area factors such as median
        incomes, population and unemployment rates.
      </p>
      <h1 className="text-3xl font-bold underline px-4 ">
        How are housing prices distributed throughout the country:
      </h1>
      <p className="px-10">
        There are clear trends when it comes to how housing prices are
        distributed throughout the country. Both the east coast and the west
        coast generally are significantly more expensive than the center of the
        country for both housing cost and rent. Another trend we can see is that
        higher density areas are significantly more expensive than lower density
        areas. To see this distribution select the boundary has County and
        choropleth type as population. You can then select a specific county by
        clicking on it and seeing there counties information in the side bar.
      </p>

      <h1 className="text-3xl font-bold underline ">
        Location Analysis Console
      </h1>
      <p>(tutorial on how to use below)</p>

      <h1 className="text-3xl font-bold underline bg-slate-400"></h1>

      <div className="h-screen w-full">
        <iframe
          className="w-full h-5/6 outline-dashed"
          // width="50%"
          // height="500"
          src="https://finalprojframe.vercel.app/"
          title="description"
        ></iframe>
      </div>
      <h1 className="text-3xl font-bold underline ">Tutorial</h1>
      <p>1. Select Boundary type either County or Zip Code</p>
      <p>2. Select Chlorpleth on what feature</p>
      <p>
        3. Select county or zipcode by clicking on area and seeing area data on
        side panel
      </p>
    </div>
  );
}

export default App;
