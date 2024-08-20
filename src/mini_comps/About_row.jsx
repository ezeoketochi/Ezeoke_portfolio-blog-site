import { Link } from "react-router-dom";

export default function AboutRow({ title, detail, isFile, link, siteName }) {
  return (
    <>
      <div className="flex flex-col px-5 gap-3">
        <div className="h-[1px] bg-slate-300 w-full"></div>
        {!isFile ? (
          <div className="flex flex-col md:flex-row  justify-between mb-3">
            <h1 className="uppercase font-bold text-center ">{title}</h1>
            <h1 className=" text-center md:w-4/6 md:text-start">{detail}</h1>
          </div>
        ) : (
          <Link to={"/resume/Ezeoke_Tochukwu_CV.png"} target="_blank" download>
            Download Resume image
          </Link>
        )}

        {link && <a className="flex justify-center underline" href={link} target="_blank" >go to {siteName}</a>}
      </div>
    </>
  );
}
