import React from "react";
import MainList from "./MainList.jsx";
import './Main.css'

const Main = () => {
    return (
    <div>
 
      <img src="/Images/South Bend.jpg" width="500" height="300" className="img" />

      <p className="intro">
        When I first moved to South Bend from the NYC area, I wasn't sure what
        to expect. Used to the endless energy of the city, I craved things to
        do, but I quickly realized this place has its own unique charm.
      </p>

      <br />
      <p>*************************************************</p>

      {/* Space for users to interact with website */}
      <form>
        <p>Leave me a comment of what you would like to see added:</p>
        <textarea name="comments" cols="20" rows="4" defaultValue="Enter your comments..."></textarea>
        <br />
        <button type="submit">Submit</button>
      </form>

      {/* Render MainList component, which will fetch and display comments */}
      <MainList />

      {/* Option for users to share the webpage */}
      <form action="#">
        <button>
          <img src="Images/share.gif" alt="share" width="100" height="100" />
        </button>
        <input type="hidden" name="bookmark" value="lyrics" />
      </form>
    </div>
    );
  };
  
  export default Main;