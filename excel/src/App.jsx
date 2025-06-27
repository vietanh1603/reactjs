import {EditableTable} from './components'
import './App.css'
import {useState} from "react";
const columns = [
  {name:'product'},
  {name:'quantity'},
  {name:'price'},
  {name:'amount'},
  {name:'comment'},
]
function App() {
const [rows, setRows] =  useState([
  {
    product:'product-1',
    quantity:1,
    price:1000,
    amount:1000,
    comment:'this is comment',
  },
  {
    product:'product-2',
    quantity:12,
    price:10200,
    amount:10300,
    comment:'this is comment-2',
  }
])
  return (
    <>
      <EditableTable columns={columns} rows={rows}/>
    </>
  )
}

export default App
