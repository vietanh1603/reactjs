import {createContext, useContext} from "react";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';


const TableContext = createContext(null)

const Cell = ({text,name, row, onDelete,onEdit}) => {
    if (name === 'action') {
        return (
            <>
            <TableCell>
                <ModeEditOutlineOutlinedIcon onClick={() => onEdit(row)} color="success"/>
                <DeleteOutlineOutlinedIcon onClick={() => onDelete(row.id)} color="error"/>
            </TableCell>
            </>
        )
    }
    return (
        <TableCell>{text}</TableCell>
    )
}
const Rows = ({row}) => {
    const injectors = useContext(TableContext)
    const {columns, onDelete,onEdit} = injectors
    return (
        <TableRow>
            {
                columns.map((column, index) => {
                    return <Cell
                        text={row[column.name]}
                        key={index}
                        name={column.name}
                        row={row}
                        onDelete={onDelete}
                        onEdit={onEdit}
                    />
                })
            }
        </TableRow>

    )
}

export default function ({columns, employees, onDelete,onEdit}) {

    const providers = {
        columns,employees,onDelete,onEdit
    }
    return (

        <TableContext value={providers}>
            <TableContainer>
                <Table sx={{margin: "auto", maxWidth: "650px"}}>
                    <TableHead>
                    <TableRow>
                        {columns.map((column,index) => (
                            <TableCell sx={{fontWeight:600}} key={index}>{column.text}</TableCell>
                        ))}
                    </TableRow>
                    </TableHead>
                    <TableBody  >
                    {
                        employees.map((employee, index) => {
                            return <Rows
                                key={index}
                                row={employee}
                                columns={columns}
                            />
                        })
                    }
                    </TableBody>
                </Table>
            </TableContainer>

        </TableContext>
    )
}
