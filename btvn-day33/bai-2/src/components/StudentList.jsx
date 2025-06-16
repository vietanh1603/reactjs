
import StudentItem from './StudentItem'

const StudentList = ({ students }) => {
    return (
        <div>
            {students.map(student => (
                <StudentItem
                    key={student.id}
                    name={student.name}
                    age={student.age}
                    major={student.major}
                />
            ))}
        </div>
    )
}

export default StudentList