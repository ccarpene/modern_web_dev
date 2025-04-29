import Parse from "parse";

// READ operation - Get all likes for each suggestion
export const getAllLikes = () => {
    const Like = Parse.Object.extend("Like");
    const query = new Parse.Query(Like);
    return query.find().then((results) => {
      // returns array of Like objects
      return results;
    });
};

// CREATE operation - new like for a suggestion
export const createLike = (suggestion) => {
  const Like = Parse.Object.extend("Like");
  const like = new Like();
  like.set("suggestion", suggestion);
  like.set("dateLiked", new Date());
  return like.save()
};