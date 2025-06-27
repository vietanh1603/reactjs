import {useContext} from "react";
import {TableContext} from "./const.js";
import Cell from "./Cell.jsx";

export  default function ({row}) {

    const injector = useContext(TableContext)

    const {columns} = injector

    return(
        <tr>
            {
                columns.map(column => {
                    return <Cell key={column.name} row={row} column={column}/>
                })
            }
        </tr>
    )
}