import React from "react";

export function TableButton({children,onClick}){

    return(
        <button class="border-[1px] rounded-full border-[#3e5fff] pt-[11px] pb-[11px] pl-[1.75rem] pr-[1.75rem] mb-4 w-[241px] hover:bg-[#3e5fff]">
            {children}
        </button>
    )
}