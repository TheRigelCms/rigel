import React from "react";
import dynamic from "next/dynamic";
import Details from "../../../components/Details";

const Editor = dynamic(() => import("../../../components/Editor"), {
  ssr: false,
});

const ArticlesDetail = () => (
  <div className="p-5">
    <div className="flex flex-col mb-6">
      <label className="text-sm font-semibold ">Title</label>
      <small className="text-gray-400">Name your blog post </small>
      <input
        className="input-form my-2 border-medium_muted lowercase"
        name="email"
        type="text"
      />
    </div>
    <div className="flex flex-col mb-6">
      <label className="text-sm font-semibold ">Slug</label>
      <small className="text-gray-400">
        Select a slug for this post, such as post-1, post-2...
      </small>
      <input
        className="input-form my-2 border-medium_muted lowercase"
        name="email"
        type="text"
      />
    </div>
    <div className="flex flex-col">
      <label className="text-sm font-semibold ">Content</label>
      <small className="text-gray-400 mb-5">Write your post </small>
      <div className="border rounded">
        <Editor />
      </div>
    </div>
  </div>
);

const Seo = () => (
  <div className="p-5">
    <div className="text-2xl font-semibold">Seo</div>
  </div>
);

const Id = () => {
  return (
    <>
      <Details
        title="Yours articles"
        subtitle="Edit or delete your article"
        childrenA={<ArticlesDetail />}
        childrenB={<Seo />}
      />
    </>
  );
};

export default Id;
