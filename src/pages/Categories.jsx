import { useContext } from "react";
import { PostContext } from "../contexts/PostContext";
import CatergoryItem from "../mini_comps/CategoryItem";
import PageTitle from "./PageTitle";

export default function Categories() {
  const categories = useContext(PostContext).postDetailState.categories;
  console.log(categories);

  return (
    <>
      <PageTitle pageTitle={"Categories"}/>

      <div className="flex justify-center  flex-wrap">
        {categories.map((cat) => {
          return (
              <CatergoryItem key={cat.id} title={cat.name} description={cat.description} />
          );
        })}
      </div>
    </>
  );
}
