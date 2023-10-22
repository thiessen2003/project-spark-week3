import Avatar from "../img/profilepic.jpeg"

import "../styles/components/sidebar.sass"
import InformationContainer from "./InformationContainer"
import SocialNetworks from "./SocialNetworks"

const Sidebar = () => {
    return (
        <aside id="sidebar">
                <img src={Avatar} alt="Gabriel Thiessen"/>
                <SocialNetworks/>
                <InformationContainer/>

        </aside>
    )
} 

export default Sidebar