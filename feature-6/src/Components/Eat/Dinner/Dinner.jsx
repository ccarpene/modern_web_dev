import { useNavigate } from "react-router-dom";
import Map from "./../../Map/Map.jsx"
import "./dinner.css";

const Dinner = () => {
  const navigate = useNavigate();
  return (
    <div>
        {/* "Dinner" will appear at top of page (header) */}
        <h1 class="title">Dinner</h1>
        <p className="intro">South Bend restaurants offer a variety of cuisines, such as Italian, Asian, and Jamaican! Make sure to check out these favorite hits. </p>

        {/*  Menu of restaurants and links */}
        <h2 class="category">Casual:</h2>
        <main>
        <article><a href="https://evilczech.com/" target="_blank">Evil Czech Brewery</a></article>
        <article><a href="https://thelauber.com/" target="_blank">The Lauber</a></article>
        <article><a href="https://crookedewe.com/" target="_blank">Crooked Ewe</a></article>
        <article>
            <a
            href="https://www.bruburgerbar.com/location/bru-burger-bar-south-bend-in/" target="_blank">Bru Burger</a>
        </article>
        </main>
        <h2 class="category">Upscale:</h2>
        <main>
        <article>
            <a href="https://www.roselilysouthbend.com/" target="_blank">Roselily</a>
        </article>
        <article>
            <a href="https://www.eatno6.com/" target="_blank">No. 6 Scratch Kitchen</a>
        </article>
        <article><a href="https://www.cafenavarre.co/" target="_blank">Cafe Navarre</a></article>
        <article>
            <a href="https://www.lasallegrill.com/" target="_blank">LaSalle Grill</a>
        </article>
        </main>
  
        {/* Place map */}
        <h2 className="map_title">Check out these places on the map!</h2>
        <Map style="mapbox://styles/ccarpene/cm9sm77ew00x001s58a5414lm" layer="dinner" lat="-86.220" long="41.680" zoom="12.3"/>

        <br />
    </div>
  );
};

export default Dinner;