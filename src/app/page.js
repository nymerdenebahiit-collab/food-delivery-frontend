"use client"

import Image from "next/image";

import { useEffect } from "react";

const Home = () => {
    useEffect(() => {
    window.addEventListener('error', e => console.error(e.error));
    window.addEventListener('unhandledrejection', e => console.error(e.reason));
  }, []);
  return <div className="flex flex-col">Hello from Home</div>;
};

export default Home;
