import logo from "./logo.svg";
import "./App.css";
import * as React from "react";
import Map from "react-map-gl";

function App() {
  return (
    <div className="bg-blue-50">
      <h1 className="text-3xl font-bold text-center">
        Real Estate Price and Rent Distributions in The United States.
      </h1>

      <h1 className="text-3xl font-bold underline px-4">Overview</h1>

      <p className="px-10 py-1">
        Location plays a key role in real estate prices and rents throughout the
        country. A one bedroom place in New York City has a median cost of
        $767425 and a one bedroom place in Memphis has a median cost of $118965.
        This guide will take you through the distribution of these price
        differences. It will also show you how you can analyze real estate
        prices with the Location Analysis console. This guide is specifically
        useful for people looking to rent or buy housing in an area to see how
        their costs compare to others. It will show you how rents and prices are
        distributed for 1 bedroom, 2 bedroom, 3 bedroom housing and other
        important area factors such as poverty rates, population and
        unemployment rates.
      </p>
      <h1 className="text-3xl font-bold underline px-4 ">
        How are housing prices distributed throughout the country?
      </h1>
      <p className="px-10">
        There are clear trends when it comes to how housing prices are
        distributed throughout the country. Both the east coast and the west
        coast generally are significantly more expensive than the center of the
        country for both housing cost and rent. Another trend we can see is that
        higher density areas are significantly more expensive than lower density
        areas. To see this distribution select the boundary as County and
        choropleth type as population. You can then select a specific County by
        clicking on it and seeing the Counties information in the side bar.
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
      <h1 className="text-3xl font-bold underline px-4">Tutorial</h1>
      <p className="px-10">1. Select Boundary type either County or Zip Code</p>
      <p className="px-10">2. Select Chlorpleth on what feature</p>
      <p className="px-10">
        3. Select County or Zip Code by clicking on area and seeing area data on
        side panel
      </p>

      <h1 className="text-3xl font-bold underline px-4">
        Where is the Data From?
      </h1>
      <p className="px-10">
        The Location Analysis Consoles data is from a few sources. The
        population, poverty rate, and unemployment rate data is from Open Intro
        which takes American Community Survey data. The Housing prices come from
        Zillows open data sets. Finally, rental prices come from Hud User fair
        market rent values.
      </p>
      <h1 className="text-3xl font-bold underline px-4">Design Decisions</h1>
      <p className="px-10">
        I chose to use an interactive map as my only visualization technique
        because I believe it was the only tool necessary to show price and rent
        distributions in the United States. In the map I choose to use lighter
        and darker blue for the choropleth to show how smaller and larger values
        were distributed. I did this because It is a good way to show
        quantitative data distribution and how it compares. I decided to not use
        another interactive visualization technique because of time limits and
        didn’t feel any would help draw much more insights. One design I
        considered was the ability to compare different Zip Codes with a bar
        graph for each of the features. I decided not to do this because I think
        it would add complexity without much benefit.
      </p>

      <h1 className="text-3xl font-bold underline px-4">Development Process</h1>
      <p className="px-10">
        I did this project solo and spent 50-60 hours on it. Most of the work
        was spent on creating the Location Analysis console. I used react-map-gl
        to do this, which is a Mapbox library used for creating React Mapbox
        applications. To create it I first found CSV data sets from Zillow, Hud
        User, and Open Intro. I then transformed Census shape files to GeoJSON
        so I could merge the datasets into the geojson property feature. I did
        this by putting the CSV files into MySql and merging them into the
        GeoJSON files with Express. I then could add these GeoJSON files into
        Mapbox which created Tilesets that are the layers shown on the map. To
        style the side bar and dropdowns that display the data I used Tailwind
        UI. The hardest part of the project was figuring out how I was actually
        going to implement the location console and learning how to use the
        right tools to do it. I eventually settled on using mapbox but it took
        significant time understanding how to use the library. Another part that
        was difficult was merging the CSV files into the GeoJSON files. This
        took significant Javascript code and many attempts to actually format it
        correctly.
      </p>
    </div>
  );
}

export default App;
