import NavBar from "../NavBar/NavBar.tsx";
import SideMenu from "./SideMenu/SideMenu.tsx";
import MainContent from "./MainContent/MainContent.tsx";
import './style.sass'

export default function () {
    return(
        <>
            <NavBar/>
            <div className={'content-container'}>
                <SideMenu/>
                <MainContent/>
            </div>
        </>
    )
}