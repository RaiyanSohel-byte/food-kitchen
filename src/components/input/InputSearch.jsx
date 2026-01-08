"use client";

import { useRouter, useSearchParams } from "next/navigation";

import React from "react";

const InputSearch = () => {
  const router = useRouter();
  const params = useSearchParams();
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchText = e.target.search.value;
    const newParams = new URLSearchParams(params.toString());
    newParams.set("search", searchText);
    router.push(`?${newParams.toString()}`);
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)} className="mb-15 text-center">
      <input
        name="search"
        type="text"
        placeholder="Search Food"
        className="p-2 border-2 border-black w-2xl rounded"
      />
      <button className="p-2.5 rounded bg-yellow-500 text-black font-bold">
        Search
      </button>
    </form>
  );
};

export default InputSearch;
