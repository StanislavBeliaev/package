import React from "react";
import { TableButton } from "./TableButton";
import { MoneySVG } from "./MoneySVG";
import TableBody from "./TableBody";

export const Table = ({ data, ...restProps }) => {
  return (
    <table class="border-separate rounded-lg border-spacing-0 table-fixed z-0 relative h-1 mt-14">
      <thead>
        <tr>
          <th class="w-[292px]"></th>
          <th class="w-[292px]"></th>
          <th class="bg-[#3E5FFF] rounded-t-[12px] w-[292px] border-x-4 border-collapse border-[#3E5FFF]">
            <p class="text-white body-xs-medium py-2 text-center font-medium text-[0.75rem]/[1.5rem]">
              Most popular
            </p>
          </th>
          <th class="w-[292px]"></th>
        </tr>
        <tr>
          <td></td>
          {Object.entries(data).map(([id, val], idx) => {
            let tdClass = "border-r-2 border-l-2 border-t-2 rounded-tl-lg";
            if ((idx + 1) % 2 === 0) {
              tdClass = "border-l-[#3E5FFF] border-r-[#3E5FFF] border-x-4";
            }
            {
              idx + 1 === 3
                ? (tdClass = "border-r-2 border-l-2 border-t-2 rounded-tr-lg")
                : false;
            }
            return (
              <td class={tdClass}>
                <p class="bg-red-100 text-red-600 rounded-full text-critical bg-critical-subtle text-xs py-1 px-3 m-4 w-20 mb-2">
                  Save {val.discount}%
                </p>
              </td>
            );
          })}
        </tr>
        <tr>
          <th></th>
          <td class="border-r-2 border-l-2">
            <p class="ml-4 mb-2 font-medium  text-lg">Advanced</p>
          </td>
          <td class="border-x-4 border-l-[#3E5FFF] border-r-[#3E5FFF] ">
            <p class="ml-3 mb-2 font-medium text-primary text-lg">Standart</p>
          </td>
          <td class="border-r-2 border-l-2">
            <p class="ml-4 mb-2 font-medium text-primary text-lg">Basic</p>
          </td>
        </tr>
        <tr>
          <td></td>
          {Object.entries(data).map(([id, val], idx) => {
            let tdClass = "border-r-2 border-l-2";
            if ((idx + 1) % 2 === 0) {
              tdClass = " border-l-[#3E5FFF] border-r-[#3E5FFF] border-x-4";
            }
            return (
              <td class={tdClass}>
                <p class="text-[2rem]/[1.4rem] font-semibold mb-4 ml-4 mt-4">
                  {val.currency === "USD" ? "$" : false} {val.basePrice}
                  <span class="font-medium text-base">/mo</span>
                </p>
              </td>
            );
          })}
        </tr>
        <tr>
          <td></td>
          {Object.entries(data).map(([id, val], idx) => {
            let tdClass = "border-r-2 border-l-2 ";
            if ((idx + 1) % 2 === 0) {
              tdClass = " border-l-[#3E5FFF] border-r-[#3E5FFF] border-x-4";
            }
            return (
              <td class={tdClass}>
                <p class="ml-4 mb-2 text-[#e02f1f] text-[0.875rem]/[1.5rem] font-medium">
                  {val.bonus}
                </p>
              </td>
            );
          })}
        </tr>
        <tr>
          <td></td>
          {Object.entries(data).map(([id, val], idx) => {
            let tdClass = "border-r-2 border-l-2";
            let fullPrice = (val.basePrice * 27 * 100) / val.discount;
            let countDiscount = val.basePrice * 27;
            if ((idx + 1) % 2 === 0) {
              tdClass = " border-l-[#3E5FFF] border-r-[#3E5FFF] border-x-4";
            }
            return val.discount > 0 ? (
              <td class={tdClass}>
                <p class="font-normal text-[0.75rem]/[1.5rem] text-[#6c6d75] ml-4 w-[241px]">
                  <s class="font-normal text-[0.75rem]/[1.5rem] text-[#6c6d75]">
                    ${fullPrice.toFixed(2)}
                  </s>{" "}
                  <span class="text-[#2a2b32] font-normal text-[0.75rem]/[1.5rem]">
                    ${countDiscount.toFixed(2)}
                  </span>{" "}
                  for the first 2 years VAT may apply
                </p>
              </td>
            ) : (
              <td class={tdClass}>
                <p class="font-normal text-[0.75rem]/[1.5rem] text-[#6c6d75] ml-4 h-[20px]">
                  Billed every month
                </p>{" "}
                <p class="font-normal text-[0.75rem]/[1.5rem] text-[#6c6d75] ml-4 mt-0 pt-0">
                  VAT may apply
                </p>
              </td>
            );
          })}
        </tr>
        <tr>
          <td class="border-b-2"></td>
          <td class="text-center pt-6 border-r-2 border-l-2 border-b-2 pb-[0.75rem]">
            <button class="border-[1px] rounded-full border-[#3e5fff] pt-[11px] pb-[11px] pl-[1.75rem] pr-[1.75rem] mb-4 w-[241px] hover:bg-[#3e5fff] hover:text-white text-base font-medium text-[#3e5fff]">
              Get Advanced
            </button>
            <p class="text-center font-medium text-[#6c6d75] text-[0.75rem]/[1.5rem]">
              <MoneySVG />
              30-day money-back guarantee
            </p>
          </td>
          <td class="text-center pt-6 border-l-[#3E5FFF] border-r-[#3E5FFF] border-x-4 border-b-2 pb-[0.75rem]">
            <button class="border-[1px] rounded-full bg-[#3e5fff] text-white border-[#3e5fff] pt-[11px] pb-[11px] pl-[1.75rem] pr-[1.75rem] mb-4 w-[241px] hover:bg-[#6B90FA] hover:border-[#6B90FA] text-base font-medium">
              Get Standart
            </button>
            <p class="text-center font-medium text-[#6c6d75] text-[0.75rem]/[1.5rem]">
              <MoneySVG />
              30-day money-back guarantee
            </p>
          </td>
          <td class="text-center pt-6 border-r-2 border-l-2 border-b-2 pb-[0.75rem]">
            <button class="border-[1px] rounded-full border-[#3e5fff] pt-[11px] pb-[11px] pl-[1.75rem] pr-[1.75rem] mb-4 w-[241px] hover:bg-[#3e5fff] hover:text-white text-base font-medium text-[#3e5fff]">
              Get Basic
            </button>
            <p class="text-center font-medium text-[#6c6d75] text-[0.75rem]/[1.5rem] ">
              <MoneySVG />
              30-day money-back guarantee
            </p>
          </td>
        </tr>
      </thead>
      <TableBody></TableBody>
      <tfoot>
        <tr>
          <td></td>
          <td></td>
          <td class='border-x-4 h-[10px] border-x-[#3E5FFF] border-b-[4px] border-b-[#3E5FFF] rounded-bl-lg rounded-br-lg'></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
};
