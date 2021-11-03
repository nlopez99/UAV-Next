import React from 'react';
import { BiCameraMovie } from 'react-icons/bi';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <div>
      <div className="relative mb-10 bg-blueGray-800 h-20 shadow-2xl">
        <nav>
          <div className="absolute top-1/2 transform -translate-y-1/2 ml-8">
            <div className="w-12 h-12 rounded-full bg-sky-100">
              <BiCameraMovie className="block m-auto p-1 pl-2 pb-1" size="3rem" color="#1E293B" />
            </div>
          </div>
          <div className="absolute top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2">
            <ul className="justify-center flex items-center flex-auto flex-row">
              <li className="font-sans font-semibold text-blueGray-100 hover:text-blueGray-400 px-5 self-center">
                <Link href="/">Search</Link>
              </li>
              <li className="font-sans font-semibold text-blueGray-100 hover:text-blueGray-400 px-5 self-center">
                <Link href="/library">Current Library</Link>
              </li>
              <li className="font-sans font-semibold text-blueGray-100 hover:text-blueGray-400 px-5 self-center">
                <Link href="/downloads">Current Downloads</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};
