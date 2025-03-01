import { useSelector } from "react-redux";
import PostsExcerpt from "./PostsExcerpt";
import { getPostsError, getPostsStatus, selectPostIds } from "./postsSlice";

const PostsList = () => {
  const orderedPostIds = useSelector(selectPostIds);
  const postStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  let content;
  if (postStatus === "loading") {
    content = <p>Loading...</p>;
  } else if (postStatus === "succeeded") {
    content = orderedPostIds.map((post) => (
      <PostsExcerpt key={post} postId={post} />
    ));
  } else if (postStatus === "failed") {
    content = <p>{error}</p>;
  }

  return <section>{content}</section>;
};
export default PostsList;
