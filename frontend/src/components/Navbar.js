import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    // <nav className="fixed top-0 w-full text-lg font-bold text-center text-white bg-green-600 border-b-4 border-gray-700 ">
    //   <ul>
    //     <li className="inline-block float-left py-4">
    //       <Link to={"/"} className="pl-6 pr-8 ">
    //         Home
    //       </Link>
    //     </li>
    //     <li className="inline-block float-left py-4">
    //       <Link to={"/about"} className="pl-6 pr-8 ">
    //         About
    //       </Link>
    //     </li>
    //     <li className="inline-block float-left py-4">
    //       <Link to={"/articles-list"} className="pl-6 pr-8 ">
    //         Articles
    //       </Link>
    //     </li>
    //     <li className="float-right py-4 mr-6">Usernam</li>
    //   </ul>
    //   {/* <p className="inline-block float-right mt-2 border">Username</p> */}
    // </nav>

    <nav class="bg-gray-800">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div class="flex flex-shrink-0 items-center"></div>
            <div class="hidden sm:ml-6 sm:block">
              <div class="flex space-x-4">
                <Link
                  to={"/"}
                  className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                >
                  Home
                </Link>
                <Link
                  to={"/about"}
                  className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                >
                  About
                </Link>
                <Link
                  to={"/articles-list"}
                  className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                >
                  Articles
                </Link>
              </div>
            </div>
          </div>
          <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div class="relative ml-3">
              <div className="text-white ">Username</div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
