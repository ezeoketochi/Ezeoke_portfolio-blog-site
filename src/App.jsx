import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootRoute from "./components/RootRoute";
import Posts from "./pages/Posts";
import Categories from "./pages/Categories";
import About from "./pages/About";
import { PostContext } from "./contexts/PostContext";
import { useState } from "react";
import { postDetails } from "./data/db";
import EditPost from "./pages/EditPost";
import NewPost from "./pages/NewPost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootRoute />,

    children: [
      { path: "/", element: <Posts /> },
      { path: "/categories", element: <Categories /> },
      { path: "/about", element: <About /> },
      { path: "/edit/:id", element: <EditPost /> },
      { path: "/newpost", element: <NewPost /> },
    ],
  },
]);

function App() {

  const [postDetailState, setPostDetailState] = useState(postDetails);

  function deleteSelectedPost(selected_id) {
    setPostDetailState((prevState) => {
      let filteredPosts = prevState.posts.filter((post) => {
        return post.id != selected_id;
      });

      console.log(filteredPosts);

      return { ...prevState, posts: filteredPosts };
    });
  }

  function addNewPost({ data }) {
    setPostDetailState((prevState) => {
      const newPost = {
        title: data["title"],
        description: data["description"],
        // image: data['image'],
        image: URL.createObjectURL(data["image"]),

        createdAt: new Date().toISOString(),
        category: data["category"],
        id: postDetailState.posts.length + 1,
      };

      return {
        ...prevState,
        posts: [...prevState["posts"], newPost],
      };
    });
  }

 

  function editSelectedPost( {data , selected_id} ) {
    setPostDetailState((prevState) => {
      const editedPost = {
        title: data["title"],
        description: data["description"],
        image: URL.createObjectURL(data["image"]),      
        createdAt: new Date().toISOString(),
        category: data["category"],
      };

      console.log(` selectedId is ${selected_id} and data is ${data}`);

      return {
        ...prevState,
        posts: prevState.posts.map((post) =>
          post.id == selected_id ? { ...editedPost, id: post.id } : post
      ),
      };
    });

  }

  const ctxValue = {
    postDetailState: postDetailState,
    addNewPost: addNewPost,
    editSelectedPost: editSelectedPost,
    deleteSelectedPost: deleteSelectedPost,
  };

  return (
    <>
      <PostContext.Provider value={ctxValue}>
        <RouterProvider router={router} />
      </PostContext.Provider>
    </>
  );
}

export default App;
