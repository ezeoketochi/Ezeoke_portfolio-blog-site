import { Link } from "react-router-dom";

export default function NewPostRow() {
  return (
    <div className="w-screen">
      <div className="flex items-center justify-center gap-5">
        
        <Link to={"/newpost"} className="bg-blue-800 hover:bg-blue-700 hover:shadow-md px-3 rounded-md hover:">
          <h1 className="text-white p-2">New Post</h1>
        </Link>

        <Link to={"/about"} className="hover:underline decoration-slate-500 hover:decoration-2">
          <h1>Learn More...</h1>
        </Link>
      </div>
    </div>
  );
}
