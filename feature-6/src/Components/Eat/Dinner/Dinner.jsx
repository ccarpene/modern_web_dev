import { useNavigate } from "react-router-dom";
import Map from "./../../Map/Map.jsx"
import "./dinner.css";

const Dinner = () => {
  const navigate = useNavigate();
  return (
    <div>
        {/* "Dinner" will appear at top of page (header) */}
        <h1 class="title">Dinner</h1>
        <p className="intro">South Bend restaurants offer a variety of cuisines, such as Italian, Asian, and Jamaican! Make sure to check these favorite hits! </p>

        {/*  Menu of restaurants and links */}
        <h2 class="category">Casual:</h2>
        <main>
        <article><a href="https://evilczech.com/">Evil Czech Brewery</a></article>
        <article><a href="https://thelauber.com/">The Lauber</a></article>
        <article><a href="https://crookedewe.com/">Crooked Ewe</a></article>
        <article>
            <a
            href="https://www.bruburgerbar.com/location/bru-burger-bar-south-bend-in/">Bru Burger</a>
        </article>
        </main>
        <h2 class="category">Upscale:</h2>
        <main>
        <article>
            <a href="https://www.roselilysouthbend.com/">Roselily</a>
        </article>
        <article>
            <a href="https://www.eatno6.com/">No. 6 Scratch Kitchen</a>
        </article>
        <article><a href="https://www.cafenavarre.co/">Cafe Navarre</a></article>
        <article>
            <a href="https://www.lasallegrill.com/">LaSalle Grill</a>
        </article>
        </main>
  
        {/* Place map */}
        <h2 className="map_title">Check out these places on the map!</h2>
        <Map style="mapbox://styles/ccarpene/cm9sm77ew00x001s58a5414lm" layer="dinner" lat="-86.220" long="41.680" zoom="12.3"/>

        {/* Button to return to home page */}
        <button onClick={() => navigate("/")}>Return Home</button>
    </div>
  );
};

export default Dinner;