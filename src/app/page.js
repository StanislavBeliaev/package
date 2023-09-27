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
  const [monthlyPrice, setmonthlyPrice] = useState([]);
  const [yearlyPrice, setyearlyPrice] = useState([]);
  const [yearly2Price, setyearly2Price] = useState([]);
  const [advancedFeatures, setAdvancedFeatures] = useState([]);
  const [standartFeatures, setStandartFeatures] = useState([]);
  const [basicFeatures, setBasicFeatures] = useState([]);

  useEffect(() => {
    let monthlyPrices = [];
    let yearlyPrices = [];
    let yearly2Prices = [];

    // Перебераем все планы
    for (let i = 0; i < jsonData.plans.length; i++) {
      let plan = jsonData.plans[i];

      // Получаем цены для каждого месяца\года
      let monthlyPrice = plan.prices[0].monthly;
      let yearlyPrice = plan.prices[0].yearly;
      let yearly2Price = plan.prices[0].yearly2;

      monthlyPrices.push(monthlyPrice);
      yearlyPrices.push(yearlyPrice);
      yearly2Prices.push(yearly2Price);
    }
    setmonthlyPrice(monthlyPrices);
    setyearlyPrice(yearlyPrices);
    setyearly2Price(yearly2Prices);
  }, []);

  useEffect(() => {
    let advFeatures = jsonData.plans.find(plan => plan.name === "advanced").features;
    let stdFeatures = jsonData.plans.find(plan => plan.name === "standart").features;
    let bscFeatures = jsonData.plans.find(plan => plan.name === "basic").features;

    setAdvancedFeatures(advFeatures);
    setStandartFeatures(stdFeatures);
    setBasicFeatures(bscFeatures);
  }, []);

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
      <div class='pt-16'>
      <div class="flex justify-center mb-10">
        <h1 class='text-[2.5rem]/[1.3rem]'>Get your online security package</h1>
      </div>
      </div>
      <div class="flex justify-center ">
        <div class="container mx-auto">
          <div class="flex justify-between w-6/12 border border-[#e5e7eb] rounded-full max-w-[646px] mx-auto p-[0.25rem] h-[58px]">
            {/* <button class="text-xs md:text-md font-medium grow rounded-full p-1 md:p-3 transition-colors ease-out focus-visible:outline-none focus-visible:shadow-focus-inset max-w-[33.3%] text-primary bg-tertiary" onClick={() => console.log("click")}>2-year plan</button> */}
            <Button isClicked={button1} onClick={handleClick1}>
              2-years plan
            </Button>
            <Button isClicked={button2} onClick={handleClick2}>
            1-years plan
            </Button>
            <Button isClicked={button3} onClick={handleClick3}>
              Monthly plan
            </Button>
          </div>
          <div class="flex justify-center space-between">
            <Table
              data={
                button1 === true
                  ? yearly2Price
                  : button2 === true
                  ? yearlyPrice
                  : button3 === true
                  ? monthlyPrice
                  : yearly2Price
              }
            ></Table>
          </div>
        </div>
      </div>
    </main>
  );
}
