import NavBar from "../NavBar/NavBar.tsx";

import ClassCard from "./ClassCard/ClassCard.tsx";

export default function() {
    return(
        <>
            <div className='class-list-container'>
                <NavBar/>
                <ClassCard/>
            </div>
        </>
    )
}