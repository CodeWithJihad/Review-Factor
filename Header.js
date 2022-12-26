import React from 'react'
import Link from "next/link";

export default function Header() {
  return (
    <header className="py-6 px-16 flex justify-between items-center border-b">
    <h1 className="font-roboto-slab text-2xl md:text-3xl">Review Factor</h1>
    <ul className="flex items-center font-poppins font-medium text-lg space-x-8 text-gray-800">
      <li className="hidden lg:block link link-underline link-underline-black">
        <Link href="/">Dashboard</Link>
      </li>
      <li className="hidden lg:block link link-underline link-underline-black">
        <Link href="/">Blogs</Link>
      </li>
      <li className="hidden lg:block link link-underline link-underline-black">
        <Link href="/">Collection</Link>
      </li>
      <li className="hidden lg:block link link-underline link-underline-black">
        <Link href="/about">about</Link>
      </li>
    </ul>
    <ul className="flex items-center font-poppins font-medium text-lg space-x-5 bg-green- ">
      <li className="hidden lg:block bg-green-500 hover:bg-green-600 transition-all py-2 px-5 rounded-xl text-white shadow-md ">
        <Link href="/">contact</Link>
      </li>
    </ul>
  </header>
  )
}
