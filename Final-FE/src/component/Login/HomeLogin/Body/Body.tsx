import './style.sass'
import IntroText from "./IntroText.tsx";
import Buttons from "./Buttons.tsx"
export default function () {
    return (
        <div className='body'>
            <div className= 'body-left'>
                <IntroText/>
                <Buttons/>
            </div>
            <div className='body-right'>
                <img src="https://images.unsplash.com/photo-1669447895659-d7d101008082?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fGNvZGVyfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
            </div>
        </div>
    )
}