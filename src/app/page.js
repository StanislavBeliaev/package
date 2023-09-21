"use client";
import React from "react";
import jsonData from "../../data.json";
import { useState, useEffect } from "react";
import { Button } from "./ButtonPackage";
import { Table } from "./Table";

export default function Home() {
  const [button1, setButton1] = useState(true);
  const [button2, setButton2] = useState(false);
  const [button3, setButton3] = useState(false);
  const [years2, setYears2] = useState([]);


  useEffect(() => {
    setYears2(jsonData.plans[0].prices[0].yearly2)
    console.log(years2)
  })
  const handleClick1 = () => {
    setButton1(true);
    setButton2(false);
    setButton3(false);
  };
  const handleClick2 = () => {
    setButton1(false);
    setButton2(true);
    setButton3(false);
  };
  const handleClick3 = () => {
    setButton1(false);
    setButton2(false);
    setButton3(true);
  };

  return (
    <main>
      <div class="flex justify-center">
        <p>Get your online security package</p>
      </div>
      <div class="flex justify-center ">
        <div class="container mx-auto">
          <div class="flex justify-between w-6/12 border-2 border-neutral-700/50 rounded-full max-w-[646px] mx-auto">
            {/* <button class="text-xs md:text-md font-medium grow rounded-full p-1 md:p-3 transition-colors ease-out focus-visible:outline-none focus-visible:shadow-focus-inset max-w-[33.3%] text-primary bg-tertiary" onClick={() => console.log("click")}>2-year plan</button> */}
            <Button isClicked={button1} onClick={handleClick1}>
              2 years
            </Button>
            <Button isClicked={button2} onClick={handleClick2}>
              1 years
            </Button>
            <Button isClicked={button3} onClick={handleClick3}>
              Monthly
            </Button>
          </div>
          <div class="flex justify-center space-between">
            <Table data={jsonData}></Table>
          </div>
        </div>
      </div>
    </main>
  );
}
