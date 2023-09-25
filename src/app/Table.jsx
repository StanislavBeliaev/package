import React from "react";

export const Table = ({data,...restProps}) => {
    

    return (
        
        <table class="border-separate border-spacing-0 table-fixed w-full z-0 relative h-1 mt-14">
            <thead >
                <tr>
                    <th class="w-[294px]"></th>
                    <th class="w-[294px]"></th>
                    <th class="bg-[#3E5FFF] rounded-t-lg w-[294px] border-x-4 border-indigo-500"><p class="text-white body-xs-medium py-2 text-center">Most popular</p></th>
                    <th class="w-[294px]"></th>
                </tr>
                <tr>
                    <td></td>
                    {Object.entries(data).map(([id,val],idx) =>{
                        let tdClass = "border-r-2 border-l-2 border-t-2 rounded-tl-lg";
                        if((idx+1) % 2 === 0){
                            tdClass ="border-l-indigo-500 border-r-indigo-600 border-x-4 border-t-2"
                        };
                        {idx+1 === 3 ? tdClass = "border-r-2 border-l-2 border-t-2 rounded-tr-lg" : false}
                        return(
                            <td class={tdClass}><p class="bg-red-100 text-red-600 rounded-full text-critical bg-critical-subtle text-xs py-1 px-3 m-3 w-20 ">Save {val.discount}%</p></td>
                        )
                    })}
                </tr>
                <tr >
                    <th ></th>
                    <td class="border-r-2 border-l-2"><p class="ml-3 mb-2 font-medium text-primary text-lg">Advanced</p></td>
                    <td class="border-x-4 border-l-[#3E5FFF] border-r-[#3E5FFF] "><p class="ml-3 mb-2 font-medium text-primary text-lg">Standart</p></td>
                    <td class="border-r-2 border-l-2"><p class="ml-3 mb-2 font-medium text-primary text-lg">Basic</p></td>
                </tr>
                <tr>
                <td></td>
                    {Object.entries(data).map(([id,val],idx) => {
                        let tdClass = "border-r-2 border-l-2 border-b-2";
                        if((idx+1) % 2 === 0){
                            tdClass ="border-b-2 border-l-[#3E5FFF] border-r-[#3E5FFF] border-x-4"
                        };
                        return(
                            <td class={tdClass}>{val.currency} {val.basePrice}/mo</td>
                        );
                    })}
                </tr>
                
            </thead>
        </table>
        
    );
    
}