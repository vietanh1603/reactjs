
import { useState } from 'react'
import StudentList from './components/StudentList'
import './App.css'

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: 'Nguyễn Văn An', age: 20, major: 'CNTT' },
    { id: 2, name: 'Lê Thị Bích', age: 21, major: 'Marketing' },
    { id: 3, name: 'Trần Quốc Cường', age: 22, major: 'Kế toán' },
    { id: 4, name: 'Phạm Thị Hương', age: 19, major: 'Quản trị kinh doanh' },
    { id: 5, name: 'Đỗ Minh Tuấn', age: 23, major: 'Tài chính - Ngân hàng' }
  ]);

  return (
      <>
        <h1>Danh sách sinh viên</h1>
        <StudentList students={students} />
      </>
  )
}

export default App