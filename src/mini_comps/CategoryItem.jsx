import { useContext } from "react";
import { PostContext } from "../contexts/PostContext";

export default function CatergoryItem({ title, description }) {
  return (
    <>
      <div className="p-3 bg-slate-200 w-4/5 md:w-1/3  h-[200px m-2 text-center rounded-md">
        <h1 className="text-black text-2xl font-bold">{title}</h1>
        <h1 className="text-slate-400">{description}</h1>
      </div>
    </>
  );
}
