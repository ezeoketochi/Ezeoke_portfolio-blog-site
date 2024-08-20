import PageTitle from "../pages/PageTitle";

export default function LocalGist() {
  return (
    <div className="flex flex-col text-4xl text-center justify-center items-center m-3">
      <PageTitle pageTitle={"Local Gist Chronicles"} />
      <h2 className="mt-6 text-lg text-gray-600">
        You might not control what you see but you surely can control what you
        believe
      </h2>
    </div>
  );
}
