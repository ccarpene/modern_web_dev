import React from "react";
import { useNavigate } from "react-router-dom";
import "./stay.css";

export default function Stay() {
  const navigate = useNavigate();

  return (
    <div>
      {/* "Where to Stay" will appear large at top of the page*/}
      <h1 className="title">Where to Stay?</h1>

      <img
        src="../Images/stay.jpg"
        width="300"
        height="200"
        className="img"
        alt="
        Stay in South Bend"
      />

      {/* Menu of recommended hotels in South Bend with links*/}
      <main>
        <article>
          <a href="https://morrisinn.nd.edu/">Morris Inn</a>
        </article>
        <article>
          <a href="https://innatsaintmarys.com/">Inn at Saint Mary's</a>
        </article>
        <article>
          <a href="https://www.hilton.com/en/hotels/sbneses-embassy-suites-south-bend-at-notre-dame/?SEO_id=GMB-AMER-ES-SBNESES&y_source=1_MTA0NTc4NDAtNzE1LWxvY2F0aW9uLndlYnNpdGU%3D">
            Embassy Suites by Hilton
          </a>
        </article>
        <article>
          <a href="https://www.marriott.com/search/findHotels.mi?searchType=InCity&destinationAddress.city=South+Bend&destinationAddress.stateProvince=IN&destinationAddress.country=US&marriottBrands=FI&showMore=true&nst=paid&cid=PAI_GLB0004YXD_GLE000BIM7_GLF000OETB&ppc=ppc&pId=ustbppc&gad_source=1&gclid=CjwKCAiA-ty8BhA_EiwAkyoa3xnBA_fUg4Xs3cmkOJNGK_UiI8UPoGEVz4a-7amO7Y9tHd8U1TjA1xoCYg4QAvD_BwE&gclsrc=aw.ds&deviceType=desktop-web&view=list#/0/">
            Fairfield Inn & Suites
          </a>
        </article>
        <article>
          <a href="https://www.marriott.com/search/findHotels.mi?pageType=advanced&searchType=NearAddress&destinationAddress.location=Aloft+South+Bend&nst=paid&cid=PAI_GLB0004YXD_GLE000BIM5_GLF000OETA&ppc=ppc&pId=ustbppc&gad_source=1&gclid=CjwKCAiA-ty8BhA_EiwAkyoa37CWOxGivPQ11mqz0zkOVbj4_7TX0HdaH148w7MmaT4N5XaVNAf5uBoCSFQQAvD_BwE&gclsrc=aw.ds&deviceType=desktop-web&view=list">
            Aloft South Bend
          </a>
        </article>
      </main>
      {/* Button to return to home page */}
      <button onClick={() => navigate("/")}>Return Home</button>
    </div>
  );
}
