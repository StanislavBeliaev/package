import React from "react";

export const Table = ({data,...restProps}) => {
    
    return (
        
        <table class="border-separate border-spacing-0 table-fixed w-full z-0 relative h-1">
            <thead >
                <tr >
                    <th ></th>
                    <th class="border">Advance</th>
                    <th class="border">Standart</th>
                    <th class="border">Basic</th>
                </tr>
                <tr>
                <td></td>
                    {Object.entries(data).map(([id,val],idx) => {
                        return(
                            
                            
                            <td class="border">{val.currency} {val.basePrice}</td>
                            
                        )
                    })}
                </tr>
            </thead>
        </table>
        
    );
    
}