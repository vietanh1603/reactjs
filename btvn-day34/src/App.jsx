
import {FTable,EmployeeDialog,EditDialog} from './comonents';
import './App.css';
import {useState} from "react";

function App() {
  const columns = [
    {name: 'id', text: 'ID'},
    {name: 'name', text: 'Name'},
    {name: 'age', text: 'Age'},
    {name: 'address', text: 'Address'},
    {name: 'action', text: 'Action'}
  ]
  const [employees,setEmployees] = useState([
    { id: 1, name: 'Vanh', age: 20, address: 'HCM' },
    { id: 2, name: 'An', age: 21, address: 'Hà Nội' },
    { id: 3, name: 'Bình', age: 22, address: 'Đà Nẵng' },
    { id: 4, name: 'Chi', age: 19, address: 'Cần Thơ' },
    { id: 5, name: 'Dũng', age: 23, address: 'Hải Phòng' }
  ]);

  const [open, setOpen] = useState(false); // Thêm state quản lý dialog
  const [openEdit, setOpenEdit] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  // mo employee dialog
  const handleOpen = () => setOpen(true);
  // dong employee dialog
  const handleClose = () => setOpen(false);
  // xoa
  const handleDelete = (id) => {
    setEmployees(prev => prev.filter(emp => emp.id !== id));
  };

  // sua employee
  const handleEdit = (employee) => {
    setSelectedEmployee(employee);
    setOpenEdit(true);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
    setSelectedEmployee(null);
  };

  const handleUpdateEmployee = (updatedEmployee) => {
    setEmployees(prev =>
        prev.map(emp => emp.id === updatedEmployee.id ? updatedEmployee : emp)
    );
    handleCloseEdit();
  };

  return (
    <div>
      <EmployeeDialog
          columns={columns}
          employees={employees}
          setEmployees={setEmployees}
          open={open}
          handleOpen={handleOpen}
          handleClose={handleClose}

      />
      <EditDialog
          open={openEdit}
          onClose={handleCloseEdit}
          employee={selectedEmployee}
          onUpdate={handleUpdateEmployee}

      />
      <FTable
        columns={columns}
        employees={employees}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
}

export default App;