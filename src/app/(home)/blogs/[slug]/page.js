import React from "react";

const page = async ({ params }) => {
  const { slug } = await params;
  return (
    <>
      <h1>{slug}</h1>
    </>
  );
};

export default page;
