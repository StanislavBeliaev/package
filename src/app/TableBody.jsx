import React from "react";
import jsonData from "../../data.json";
import { useState, useEffect } from "react";
import { TickLightSVG } from "./TickLightSVG";
import { CloseSVG } from "./CloseSVG";

function TableBody() {
  const [advancedFeatures, setAdvancedFeatures] = useState([]);
  const [standartFeatures, setStandartFeatures] = useState([]);
  const [basicFeatures, setBasicFeatures] = useState([]);

  useEffect(() => {
    let advFeatures = jsonData.plans.find(
      (plan) => plan.name === "advanced"
    ).features;
    let stdFeatures = jsonData.plans.find(
      (plan) => plan.name === "standart"
    ).features;
    let bscFeatures = jsonData.plans.find(
      (plan) => plan.name === "basic"
    ).features;

    setAdvancedFeatures(advFeatures);
    setStandartFeatures(stdFeatures);
    setBasicFeatures(bscFeatures);
  }, []);

  return (
    <tbody class="border-collapse">
      {advancedFeatures.map((elem, idx) => (
        <tr class="h-[65px]">
          <td class="border-b capitalize underline-offset-1">
            <p class="underline text-[0.875rem]/[1.5rem] text-[#2a2b32] cursor-pointer">
              {elem}
            </p>
          </td>
          <td class="border-b border-l">
            <div class="flex justify-center">
              {typeof elem === "string" ? <TickLightSVG /> : <CloseSVG />}
            </div>
          </td>
          <td class={`${idx === advancedFeatures.length - 1 ? '' : 'border-b'} border-l-[#3E5FFF] border-r-[#3E5FFF] border-x-4`}>
            <div class="flex justify-center">
              {typeof standartFeatures[idx] === "string" ? (
                <TickLightSVG />
              ) : (
                <CloseSVG />
              )}
            </div>
          </td>
          <td class="border-b border-r">
            <div class="flex justify-center">
              {typeof basicFeatures[idx] === "string" ? (
                <TickLightSVG />
              ) : (
                <CloseSVG />
              )}
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;
