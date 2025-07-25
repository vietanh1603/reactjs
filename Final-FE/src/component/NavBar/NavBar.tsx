
import Logo from "../Logo/Logo.tsx";
import './style.sass'
import ClassButton from "./ClassButton/ClassButton.tsx";
import HomeButton from "./HomeButton/HomeButton.tsx";
import ProfileMenu from "./ProfileMenu/ProfileMenu.tsx";


export default function() {

    return(
        <>
        <div className='home-container'>
            <Logo/>
            <div className='btn-right'>
                <ClassButton/>
                <HomeButton/>
               <ProfileMenu/>
            </div>
        </div>
        </>
    )
}