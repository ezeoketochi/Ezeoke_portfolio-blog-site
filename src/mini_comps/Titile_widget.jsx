export default function TitleWidget({children}){
    return <>
      <div className="w-4/5 h-[150px]">
        <h1 >Description</h1>
        {children}
        <textarea  value={selectedPost.description} className="w-full h-full  "/>
      </div>
    </>
}