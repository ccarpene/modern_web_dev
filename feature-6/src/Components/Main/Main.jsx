import React, { useState } from "react";
import Slideshow from "./../Slideshow/Slideshow.jsx"
import { createSuggestion } from "/src/Common/Services/SuggestionService.jsx";
import MainList from "./MainList.jsx";
import './Main.css'

const Main = () => {

  const [comment, setComment] = useState(""); //track user's comment

  const handleInputChange = (event) => {
    setComment(event.target.value); //update comment state when typing
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (comment.trim() === "") {
      alert("Please enter a comment before submitting!");
      return;
    }
  
    try {
      await createSuggestion(comment); //wait until suggestion is actually saved
      setComment(""); //clear textarea
      window.location.reload(); //reload after successful save
    } catch (error) {
      console.error("Failed to create suggestion:", error);
      alert("There was a problem submitting your comment. Please try again.");
    }
  };

  return (
    <div>

      <Slideshow />

      <p className="intro">
        When I first moved to South Bend from the NYC area, I wasn't sure what
        to expect. Used to the endless energy of the city, I craved things to
        do, but I quickly realized this place has its own unique charm. Welcome to my 
        personal guide to South Bend, I'm happy to share all of my favorites with you!
      </p>

      <br />
      <hr className="divider" />
      
      {/* Space for users to interact with website */}
      <form onSubmit={handleSubmit}>
        <p className="text">Leave me a comment of what you would like to see added:</p>
        <textarea
           name="comments"
          cols="20"
          rows="4"
          value={comment}
          onChange={handleInputChange}
          placeholder="Enter your comments..."
        />
        <br />
        <button type="submit" className="submit">Submit</button>
      </form>

      {/* Render MainList component, which will fetch and display comments */}
      <MainList />

    </div>
    );
  };
  
  export default Main;