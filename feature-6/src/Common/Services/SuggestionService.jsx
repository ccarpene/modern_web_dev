import Parse from "parse";

//get all comments from database
export const getAllSuggestions = () => {
    const Suggestion = Parse.Object.extend("Suggestion");
    const query = new Parse.Query(Suggestion);
    return query.find().then((results) => {
      return results;
    });
};

// CREATE operation - Create a new comment
export const createSuggestion = async (text) => {
  const Suggestion = Parse.Object.extend("Suggestion");
  const suggestion = new Suggestion();

  suggestion.set("text", text);
  suggestion.set("dateSubmitted", new Date()); // (optional) Add timestamp field

  try {
    const savedSuggestion = await suggestion.save();
    console.log("Suggestion saved successfully:", savedSuggestion);
    return savedSuggestion;
  } catch (error) {
    console.error("Error while creating suggestion:", error);
    throw error;
  }
};