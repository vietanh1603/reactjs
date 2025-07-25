import HeaderCard from "./HeaderCard/HeaderCard.tsx";
import './style.sass'
import ClassList from "./ClassList/ClassList.tsx";
export default function () {
    return(
        <div className='overlay'>
            <HeaderCard/>
            <ClassList/>
        </div>
    )

}