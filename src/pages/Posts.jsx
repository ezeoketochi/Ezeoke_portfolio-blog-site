import LocalGist from "../components/LocalGist";
import NewPostRow from "../components/NewPostRow";
import PostItemsSection from "../sections/PostItemsSection";

export default function Posts() {
  return (
    <>
      <LocalGist />
      <NewPostRow/>
      <PostItemsSection/>
    </>
  );
}
