import React from "react";

export const Table = ({data, ...restProps}) => {
    return (
        <table class="border-separate border-spacing-0 table-fixed w-full z-0 relative h-1">
            <thead >
                <tr >
                    <th ></th>
                    <th class="border">Advance</th>
                    <th class="border">Standart</th>
                    <th class="border">Basic</th>
                </tr>
            </thead>
        </table>
    );
}