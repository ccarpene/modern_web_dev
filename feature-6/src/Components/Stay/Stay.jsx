import React from "react";
import Map from "./../Map/Map.jsx"
import { useNavigate } from "react-router-dom";
import "./stay.css";

export default function Stay() {
  const navigate = useNavigate();

  return (
    <div>
      {/* "Where to Stay" will appear large at top of the page*/}
      <h1 className="title">Where to Stay?</h1>
      <p className="intro">Check out the popular places to stay while visiting South Bend. If you're coming for a Notre Dame Football Game, make sure to book your room early!</p>

      {/* Menu of recommended hotels in South Bend with links*/}
      <main>
        <article>
          <a href="https://morrisinn.nd.edu/" target="_blank">Morris Inn</a>
        </article>
        <article>
          <a href="https://innatsaintmarys.com/" target="_blank">Inn at Saint Mary's</a>
        </article>
        <article>
          <a href="https://www.hilton.com/en/hotels/sbneses-embassy-suites-south-bend-at-notre-dame/?SEO_id=GMB-AMER-ES-SBNESES&y_source=1_MTA0NTc4NDAtNzE1LWxvY2F0aW9uLndlYnNpdGU%3D" target="_blank">
            Embassy Suites by Hilton
          </a>
        </article>
        <article>
          <a href="https://www.marriott.com/search/findHotels.mi?searchType=InCity&destinationAddress.city=South+Bend&destinationAddress.stateProvince=IN&destinationAddress.country=US&marriottBrands=FI&showMore=true&nst=paid&cid=PAI_GLB0004YXD_GLE000BIM7_GLF000OETB&ppc=ppc&pId=ustbppc&gad_source=1&gclid=CjwKCAiA-ty8BhA_EiwAkyoa3xnBA_fUg4Xs3cmkOJNGK_UiI8UPoGEVz4a-7amO7Y9tHd8U1TjA1xoCYg4QAvD_BwE&gclsrc=aw.ds&deviceType=desktop-web&view=list#/0/" target="_blank">
            Fairfield Inn & Suites
          </a>
        </article>
        <article>
          <a href="https://www.marriott.com/search/findHotels.mi?pageType=advanced&searchType=NearAddress&destinationAddress.location=Aloft+South+Bend&nst=paid&cid=PAI_GLB0004YXD_GLE000BIM5_GLF000OETA&ppc=ppc&pId=ustbppc&gad_source=1&gclid=CjwKCAiA-ty8BhA_EiwAkyoa37CWOxGivPQ11mqz0zkOVbj4_7TX0HdaH148w7MmaT4N5XaVNAf5uBoCSFQQAvD_BwE&gclsrc=aw.ds&deviceType=desktop-web&view=list" target="_blank">
            Aloft South Bend
          </a>
        </article>
      </main>

      {/* Place map */}
      <h2 className="map_title">Check out these places on the map!</h2>
      <Map style="mapbox://styles/ccarpene/cm9snys5c00sw01s6cg9d4mfd" layer="stay" lat="-86.247" long="41.693" zoom="12.3"/>

      {/* Button to return to home page */}
      <button onClick={() => navigate("/")}>Return Home</button>
    </div>
  );
}
