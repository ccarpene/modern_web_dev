import { Link, useNavigate } from "react-router-dom";
import "./eat.css";

const Eat = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="title">Where to Eat?</h1>

      {/* User chooses breakfast or dinner */}
      <main>
        <article>
          <Link to="/eat/breakfast">Breakfast</Link>
        </article>
        <article>
          <Link to="/eat/dinner">Dinner</Link>
        </article>
      </main>

      <br />
    </div>
  );
};

export default Eat;