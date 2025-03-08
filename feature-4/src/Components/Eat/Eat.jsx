import { Link, useNavigate } from "react-router-dom";
import "./eat.css";

const Eat = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="title">Where to Eat?</h1>

      <img
        src="/Images/Food.jpeg"
        width="300"
        height="200"
        className="img"
        alt="Where to Eat?"
      />

      {/* User chooses breakfast or dinner */}
      <main>
        <article>
          <Link to="/eat/breakfast">Breakfast</Link>
        </article>
        <article>
          <Link to="/eat/dinner">Dinner</Link>
        </article>
      </main>

      {/* Email input for promotion */}
      <form>
        <p>
          Enter email for 10% off one meal:
          <input type="text" name="username" size="15" maxLength="30" />
        </p>
      </form>
      {/* Button to return to home page */}
      <button onClick={() => navigate("/")}>Return Home</button>
    </div>
  );
};

export default Eat;