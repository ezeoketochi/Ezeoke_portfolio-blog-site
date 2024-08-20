import { Link } from "react-router-dom";

export default function AboutRow({title, detail , isFile}) {
  return (
    <>
      <div className="flex flex-col px-5 gap-3">
        <div className="h-[1px] bg-slate-300 w-full"></div>
        {!isFile ? <div className="flex flex-col md:flex-row  justify-between mb-3">
          <h1 className="uppercase font-bold ">{title}</h1>
          <h1 className="w-4/6">{detail}</h1>
        </div> : <Link to={"/resume/resume.pdf"} target="_blank" download>Download resume</Link>  }
      </div>
    </>
  );
}
