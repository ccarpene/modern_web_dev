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
            <a href="https://www.theragamuffinbakery.com/">Ragamuffin</a>
        </article>
        <article>
            <a href="https://cloudwalkingcoffee.com/pages/join-our-team"
            >Cloud Walking Coffee</a>
        </article>
        <article><a href="https://www.javasouthbend.com/">Java Cafe</a></article>
        <article>
            <a href="https://www.catladycafesouthbend.com/">Cat Lady Cafe</a>
        </article>
        </main>
        <h2 className="category">Sit Down:</h2>
        <main>
        <article><a href="https://www.peggssouthbend.com/menu">Peggs</a></article>
        <article>
            <a href="https://www.theearlybirdeatery.com/">Early Bird Eatery</a>
        </article>
        <article>
            <a href="https://yellowcatcafe.com/">Yellow Cat Cafe</a>
        </article>
        <article><a href="https://www.daintymaid.co/">Dainty Maid</a></article>
        <article>
            <a href="https://morrisinn.nd.edu/dine-with-us/rohrs/">Rohr's</a>
        </article>
        </main>

        {/* Place map */}
        <h2 className="map_title">Check out these places on the map!</h2>
        <Map style="mapbox://styles/ccarpene/cm9oik31600jy01s6e3pm52ug" layer="breakfast" lat="-86.244" long="41.683" zoom="12.3"/>

        {/* Button to return to home page */}
        <button onClick={() => navigate("/")}>Return Home</button>
    </div>
  );
};

export default Breakfast;