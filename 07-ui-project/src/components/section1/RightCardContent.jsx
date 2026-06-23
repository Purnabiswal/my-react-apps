import React from "react";

const RightCardContent = () => {
  return (
    <div className="absolute h-full w-full top-0 left-0 p-7 flex flex-col">
      <h3 className="h-12 w-12 text-xl text-black bg-white rounded-3xl flex justify-center items-center">
        1
      </h3>
      <p className="mt-auto text-white text-2xl">
        Prime customers, that have access to bank credit and are satisfied with
        the current product
      </p>
      <div className="mt-auto ">
        <button className="bg-blue-600 text-white rounded-2xl p-2 w-full">
          Satisfied
        </button>
      </div>
    </div>
  );
};

export default RightCardContent;
