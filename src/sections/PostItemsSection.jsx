import { useContext } from "react";
import { PostContext } from "../contexts/PostContext";
import PostItem from "../components/PostItem";

export default function PostItemsSection() {
  const ctx = useContext(PostContext);

  let posts = ctx.postDetailState.posts;



  return (
    <>
      <div className="my-5 w-screen">
        <div className="flex justify-center flex-wrap">
          {posts && posts.map((post) => {
            return (
              <PostItem
                key={post.id}
                imgsrc={post.image}
                description={post.description}
                date={post.createdAt}
                title={post.title}
                id={post.id}
                category={post.category}
                deleteSelectedPost={() => ctx.deleteSelectedPost(post.id)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
