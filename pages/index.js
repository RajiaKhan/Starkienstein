import React, { useState } from "react";
import Image from "next/image";
export default function Index() {
  return (
    <>
      <div className="w-full bg-sky-800 ">
        <div className="flex">
          <div className="flex justify-center items-center ml-12 gap-3">
            <div className="">
              <Image
                className="cursor-pointer"
                src="/logo (2).svg"
                width={25}
                height={25}
              />
            </div>
            <div className="">
              <Image
                className="cursor-pointer"
                src="/Starkienstein.svg"
                width={244}
                height={25}
              />
            </div>
          </div>
          <div className="ml-auto bg-white w-7/12 rounded-l-2xl">
            <div className="absolute right-0 ">English (UK)</div>
            <div className="container  mx-auto mt-32 w-7/12">
              <h1 className="text-xl ml-8 mb-5 font-bold">Sign in </h1>
              <div className="flex justify-center items-center gap-5">
                <div className="border flex px-4 py-1 justify-center items-center gap-2 rounded-lg">
                  <div className="mt-2">
                    <Image
                      className="cursor-pointer"
                      src="/search 1.svg"
                      width={25}
                      height={25}
                    />
                  </div>
                  <div className="text-gray-400 text-sm">
                    Sign up with Google{" "}
                  </div>
                </div>
                <div className="border flex px-4 py-1 justify-center items-center gap-2 rounded-lg">
                  <div className="mt-2">
                    <Image
                      className="cursor-pointer"
                      src="/facebook 1.svg"
                      width={25}
                      height={25}
                    />
                  </div>
                  <div className="">
                    <div className="text-gray-400 text-sm">
                      Sign up with Google{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <h1 className="text-xl font-semibold  text-gray-800 text-center">
                  - OR -
                </h1>
              </div>
              <div className="flex justify-center items-center">
                <div className="w-10/12">
                  <label class="relative block">
                    <span className="sr-only">Search</span>
                    <span className="absolute inset-y-0 left-0 flex items-center "></span>
                    <input
                      className="border-b  placeholder:text-gray-700 block bg-white w-full  mt-5 py-2 outline-none text-xs"
                      placeholder="Email Address"
                      type="text"
                      name="search"
                    />
                  </label>
                </div>
              </div>
              <div className="flex justify-center items-center mt-4">
                <div className="w-10/12">
                  <label class="relative block">
                    <span className="sr-only">Search</span>
                    <span className="absolute inset-y-0 left-0 flex items-center "></span>
                    <input
                      className="border-b  placeholder:text-gray-700 block bg-white w-full  mt-5 py-2 outline-none text-xs"
                      placeholder="Password"
                      type="text"
                      name="search"
                    />
                  </label>
                </div>
              </div>
              <div className="flex justify-center items-center mt-8 ">
                <button className=" bg-sky-800 w-10/12 py-1 rounded-lg text-white font-semibold">
                  Log In
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
