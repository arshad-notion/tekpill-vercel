import React from "react";

const page = ({ params }: { params: { newsid: string; reviewId: string } }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:px-6 lg:px-8 xl:px-10 bg-white shadow-md">
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4 ">
        <div className=" md:col-span-1 sm:col-span-1">
          Reviews {params.newsid} for news of {params.reviewId}
        </div>
        <div className=" md:col-span-1 sm:col-span-1">2</div>
      </div>
 

 


 </div>


);
}; export default page;
