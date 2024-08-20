import { useParams, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { PostContext } from "../contexts/PostContext";
import AppButton from "../mini_comps/Button";

export default function EditPost() {
  const [image, setImage] = useState();
  const params = useParams();

  const navigate = useNavigate();

  const ctx = useContext(PostContext);

  let posts = ctx.postDetailState.posts;
  let categories = ctx.postDetailState.categories;

  let filteredPosts = posts.filter((post) => {
    return post.id == params.id;
  });

  let selectedPost = filteredPosts[0];

  function handleImageChange(e) {
    setImage(URL.createObjectURL(e.target.files[0]));
  }

  function handleEditSubmit(event) {
    event.preventDefault();

    const fd = new FormData(event.target);

    const data = Object.fromEntries(fd.entries());

    const selected_id = params.id;

    ctx.editSelectedPost({ data, selected_id });

    event.target.reset();
    setImage(null);

    navigate("/");
  }

  return (
    <form onSubmit={handleEditSubmit}>
      <div className="h-[85vh] flex flex-col justify-around gap-3 items-center p-3 ">
        <div className="w-4/5">
          <h1 className="text-4xl font-extrabold">
            Post Title : {selectedPost.title}
          </h1>
        </div>

        <div className="w-4/5 ">
          <h1 className="text-lg font-bold mb-2">Image</h1>
          <div className="h-[400px] w-100% ">
            <input
              type="file"
              onChange={handleImageChange}
              name="image"
              accept="image/*"
              ></input>

            <img
              className="h-full w-full object-contain rounded-md"
              src={image ? image : selectedPost.image}
              alt=""
            />
          </div>
        </div>

        <div className="w-4/5 mt-10">
          <h1 className="text-lg font-bold mb-2">Title</h1>
          <input
            className="w-full p-2 outline outline-2 outline-slate-200"
            defaultValue={selectedPost.title}
            type="text"
            name="title"
          />
        </div>

        <div className="w-4/5 ">
          <h1 className="text-lg font-bold mb-2">Category</h1>
          <select
            className="w-full p-2 outline-none"
            name="category"
            defaultValue={selectedPost.category}
          >
            {categories.map((cat) => {
              return (
                <option
                  key={cat.id}
                  // defaultValue={cat.name}
                  // selected={cat.name === selectedPost.category}
                >
                  {cat.name}
                </option>
              );
            })}
          </select>
        </div>

        <div className="w-4/5 h-[150px]">
          <h1 className="text-lg font-bold mb-2">Description</h1>
          <textarea
            defaultValue={selectedPost.description}
            name="description"
            // onChange={handleChange}
            className="w-full resize-none h-[70%] p-2 outline outline-2 outline-slate-200 leading-tight"
          />
        </div>

        <AppButton type="submit">
          <h1 className="text-white p-2">Submit</h1>
        </AppButton>
      </div>
    </form>
  );
}
