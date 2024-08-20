import { useContext, useState } from "react";
import { PostContext } from "../contexts/PostContext";
import AppButton from "../mini_comps/Button";
import { useNavigate } from "react-router-dom";

export default function NewPost() {
  const [image, setImage] = useState();

  const navigate = useNavigate();

  const ctx = useContext(PostContext);

  // let posts = ctx.postDetailState.posts;
  let categories = ctx.postDetailState.categories;

  function handleSubmitNewPost(event) {
    event.preventDefault();


    const fd = new FormData(event.target);

    const data = Object.fromEntries(fd.entries());

    ctx.addNewPost({data})


    event.target.reset();
    setImage(null);

    navigate("/")

  }

  function handleImageChange(e) {
    setImage(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <form onSubmit={handleSubmitNewPost}>
      <div className="h-[85vh] flex flex-col justify-around gap-3 items-center p-3 ">
        <div className="w-4/5">
          <h1 className="text-4xl font-extrabold">Post Title : {}</h1>
        </div>

        <div className="w-4/5 ">
          <h1 className="text-lg font-bold mb-2">Image</h1>
          <div className="h-[400px] w-100% ">
            <input type="file" onChange={handleImageChange} name="image" required></input>
            <img
              className="h-full w-full object-contain rounded-md"
              src={image}
              alt=""
            />
          </div>
        </div>

        <div className="w-4/5 mt-8">
          <h1 className="text-lg font-bold mb-2">Title</h1>
          <input
            className="w-full p-2 outline outline-2 outline-slate-200"
            type="text"
            name="title"
            required
          />
        </div>

        <div className="w-4/5 ">
          <h1 className="text-lg font-bold mb-2">Category</h1>
          <select required name="category" className="w-full p-2 outline-none" >
            <option value="">--Please choose an option--</option>

            {categories.map((cat) => {
              return (
                <option key={cat.id} value={cat.name}>
                  {cat.name}
                </option>
              );
            })}
          </select>
        </div>

        <div className="w-4/5 h-[150px]">
          <h1 className="text-lg font-bold mb-2">Description</h1>
          <textarea
            required
            name="description"
            // onChange={handleChange}
            className="w-full resize-none h-[70%] p-2 outline outline-2 outline-slate-200 leading-tight"
          />
        </div>

        <AppButton>
          <h1 className="text-white p-2">Submit</h1>
        </AppButton>
      </div>
    </form>
  );
}
