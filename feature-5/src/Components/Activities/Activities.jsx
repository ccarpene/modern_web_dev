import { useNavigate } from "react-router-dom";
import "./activities.css";

const Activities = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="title">What to Do?</h1>

      <img
        src="/Images/activities.jpeg"
        width="300"
        height="200"
        className="img"
        alt="What to Do?"
      />

      {/* Menu of activities with external links */}
      <main>
        <article>
          <a href="https://visithowardpark.com/">Howard Park</a>
        </article>
        <article>
          <a href="https://eastracewaterway.com/">Whitewater Rafting</a>
        </article>
        <article>
          <a href="https://potawatomizoo.org/">Potawatomi Zoo</a>
        </article>
        <article>
          <a href="https://www.indianadinosaurmuseum.org/">
            Indiana Dinosaur Museum
          </a>
        </article>
        <article>
          <a href="https://southbendfarmersmarket.com/">
            South Bend Farmers Market
          </a>
        </article>
      </main>

      {/* Button to return to home page */}
      <button onClick={() => navigate("/")}>Return Home</button>
    </div>
  );
};

export default Activities;