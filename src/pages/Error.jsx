import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <>
      <div className="flex flex-col h-screen m-auto justify-center items-center gap-6">
        <h1 className="text-3xl text-slate-500">Opps, This page doesn't exist</h1>
        <Link className="underline" to={"/about"}>Click to view the Dev details</Link>
      </div>
    </>
  );
}
