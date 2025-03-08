import Parse from "parse";

// READ operation - Get all comments
export const getAllSuggestions = () => {
    const Suggestion = Parse.Object.extend("Suggestion");
    const query = new Parse.Query(Suggestion);
    return query.find().then((results) => {
      // returns array of Suggestion objects
      return results;
    });
};
