import { useNavigate } from "react-router-dom";
import "./breakfast.css";

const Breakfast = () => {
  const navigate = useNavigate();
  return (
    <div>
        {/* "Breakfast" will appear large at top of page (header) */}
        <h1 class="title">Breakfast</h1>

        {/* Menu of restaurants and links */}
        <h2 class="category">Cafes:</h2>
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
        <h2 class="category">Sit Down:</h2>
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
        {/* Button to return to home page */}
        <button onClick={() => navigate("/")}>Return Home</button>
    </div>
  );
};

export default Breakfast;