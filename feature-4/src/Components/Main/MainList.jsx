import React, { useEffect, useState } from "react";
import { getAllSuggestions } from "/src/Common/Services/SuggestionService";
import { createLike, getAllLikes } from "/src/Common/Services/LikeService";
import LikeButton from "./LikeButton.jsx"
import './Main.css'
  
const MainList = () => {

    const [suggestions, setSuggestions] = useState([]);
    const [likes, setLikes] = useState([]);

    // Fetch suggestions from Back4App
    useEffect(() => {
      getAllSuggestions().then((fetchedSuggestions) => {
        console.log("Fetched suggestions:", fetchedSuggestions);
        setSuggestions(fetchedSuggestions);
      });
    }, []);

    // Fetch likes from Back4App
    useEffect(() => {
      getAllLikes().then((fetchedLikes) => {
        console.log("Fetched likes:", fetchedLikes);
        setLikes(fetchedLikes);
      });
    }, []);

    // Function to add a like for a suggestion
    function addLike(suggestion) {
      createLike(suggestion)
        .then((newLike) => {
          setLikes([...likes, newLike]);
        });
    }

    return (
      <div>
        <h3>See what other people are saying:</h3>
        <ul>
        {suggestions.length > 0 ? (
          suggestions.map((suggestion) => {
          // Filter likes where the suggestion matches the suggestion.id
          const suggestionLikes = likes.filter(
          (like) => like.get("suggestion").id === suggestion.id
        );

        // Return the number of likes for that suggestion
        return (
          <div key={suggestion.id}>
            <li key={suggestion.id}>
              {suggestion.get("text")}
            </li>
            <LikeButton likes={suggestionLikes.length} onChildClick={() => addLike(suggestion)}/>
            <br />
            <br />
          </div>
        );
      })
        ) : (
            <p>No suggestions yet!</p>
            )}
        </ul>
      </div>
    );
};
  

export default MainList;
