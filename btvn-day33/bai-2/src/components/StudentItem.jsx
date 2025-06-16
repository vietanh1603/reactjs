
const StudentItem = ({ name, age, major })  =>{
    return (
        <div>
            <h3>Tên: {name}</h3>
            <p>Tuổi: {age}</p>
            <p>Ngành: {major}</p>
        </div>
    )
}

export default StudentItem