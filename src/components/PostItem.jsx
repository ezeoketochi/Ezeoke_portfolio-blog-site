import { useContext } from "react";
import { PostContext } from "../contexts/PostContext";
import { Link } from "react-router-dom";


export default function PostItem({imgsrc,description,date,title,id, deleteSelectedPost , ...props}) {
 


    const {posts} = useContext(PostContext); 

    // console.log(posts);


  return (
    <>
      <div {...props} className=" flex flex-col h-full w-[370px] gap-3 p-2 m-3">
        <div className=" h-[300px] w-[350px] rounded-md">
          <img
            className="h-full w-full object-cover rounded-md "
            src={imgsrc}
            alt="img"
          />
        </div>
        <div>
          
          <h1 className="text-sm text-gray-500">{date}</h1>{" "}
        </div>
        <div>
          <div>
            <h1 className="text-2xl font-bold mb-2 text-center ">{title}</h1>
          </div>
          <div>
            <h1 className="text-gray-500 text-center ">
             {description}
            </h1>
          </div>
        </div>
        <div className="h-[1px] bg-gray-300 w-full"> </div>
        <div className="flex justify-end gap-2">
          <Link to={`/edit/${id}`} className="text-blue-500 underline">Edit</Link>
          <button onClick={deleteSelectedPost} className="text-red-500 underline">Delete</button>
        </div>
      </div>
    </>
  );
}
