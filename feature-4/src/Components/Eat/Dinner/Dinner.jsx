import { useNavigate } from "react-router-dom";
import "./dinner.css";

const Dinner = () => {
  const navigate = useNavigate();
  return (
    <div>
        {/* "Dinner" will appear at top of page (header) */}
        <h1 class="title">Dinner</h1>
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
  
        {/* Button to return to home page */}
        <button onClick={() => navigate("/")}>Return Home</button>
    </div>
  );
};

export default Dinner;