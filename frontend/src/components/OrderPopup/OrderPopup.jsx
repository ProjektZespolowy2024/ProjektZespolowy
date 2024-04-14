import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import Home from "../../pages/Home";

const OrderPopup = ({ orderPopup, setOrderPopup }) => {
  return (
    <>
      {orderPopup && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-full">
            {" "}
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="basis-full">
                <h1 className="text-center font-extrabold text-3xl">
                  Order Your Book
                </h1>
              </div>
              <div>
                <IoCloseOutline
                  className="text-2xl cursor-pointer "
                  onClick={() => setOrderPopup(false)}
                />
              </div>
            </div>
            {/* Body */}
            <div className="mt-4">
              <Home />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderPopup;
