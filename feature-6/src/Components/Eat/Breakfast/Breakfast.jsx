import { useNavigate } from "react-router-dom";
import Map from "./../../Map/Map.jsx"
import "./breakfast.css";

const Breakfast = () => {
  const navigate = useNavigate();

  return (
    <div>
        {/* "Breakfast" will appear large at top of page (header) */}
        <h1 className="title">Breakfast</h1>
        <p className="intro">Check out these great breakfast spots!</p>
        
        {/* Menu of restaurants and links */}
        <h2 className="category">Cafes:</h2>
        <main>
        <article>
            <a href="https://www.theragamuffinbakery.com/" target="_blank">Ragamuffin</a>
        </article>
        <article>
            <a href="https://cloudwalkingcoffee.com/pages/join-our-team" target="_blank">Cloud Walking Coffee</a>
        </article>
        <article><a href="https://www.javasouthbend.com/" target="_blank">Java Cafe</a></article>
        <article>
            <a href="https://www.catladycafesouthbend.com/" target="_blank">Cat Lady Cafe</a>
        </article>
        </main>
        <h2 className="category">Sit Down:</h2>
        <main>
        <article><a href="https://www.peggssouthbend.com/menu" target="_blank">Peggs</a></article>
        <article>
            <a href="https://www.theearlybirdeatery.com/" target="_blank">Early Bird Eatery</a>
        </article>
        <article>
            <a href="https://yellowcatcafe.com/" target="_blank">Yellow Cat Cafe</a>
        </article>
        <article><a href="https://www.daintymaid.co/" target="_blank">Dainty Maid</a></article>
        <article>
            <a href="https://morrisinn.nd.edu/dine-with-us/rohrs/" target="_blank">Rohr's</a>
        </article>
        </main>

        {/* Place map */}
        <h2 className="map_title">Check out these places on the map!</h2>
        <Map style="mapbox://styles/ccarpene/cm9oik31600jy01s6e3pm52ug" layer="breakfast" lat="-86.244" long="41.683" zoom="12.3"/>

        <br />
    </div>
  );
};

export default Breakfast;