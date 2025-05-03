import { useNavigate } from "react-router-dom";
import Map from "./../Map/Map.jsx"
import "./activities.css";

const Activities = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="title">What to Do?</h1>
      <p className="intro">Check out the popular activities to do while visiting South Bend. It's a way to get outside and have some fun!</p>

      {/* Menu of activities with external links */}
      <main>
        <article>
          <a href="https://visithowardpark.com/" target="_blank">Howard Park</a>
        </article>
        <article>
          <a href="https://eastracewaterway.com/" target="_blank">Whitewater Rafting</a>
        </article>
        <article>
          <a href="https://potawatomizoo.org/" target="_blank">Potawatomi Zoo</a>
        </article>
        <article>
          <a href="https://www.indianadinosaurmuseum.org/" target="_blank">
            Indiana Dinosaur Museum
          </a>
        </article>
        <article>
          <a href="https://southbendfarmersmarket.com/" target="_blank">
            South Bend Farmer's Market
          </a>
        </article>
      </main>

      {/* Place map */}
      <h2 className="map_title">Check out these places on the map!</h2>
      <Map style="mapbox://styles/ccarpene/cm9sn50ih00s301rw43sy65e9" layer="activities" lat="-86.287" long="41.689" zoom="11.5"/>

      <br />
    </div>
  );
};

export default Activities;