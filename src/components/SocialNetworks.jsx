import "../styles/components/socialnetworks.sass"
import {FaLinkedin, FaGithub} from 'react-icons/fa'

const socialNetworks = [
    { name: "linkedin", icon: <FaLinkedin/>},
    { name: "github", icon: <FaGithub/>},

]

const SocialNetworks = () => {
    return (
        <section id="social-networks">
            {socialNetworks.map((network) => (
                <a href="#" className="social-btn" id={network.name} key={network.name}>
                    {network.icon}
                </a>
            ))}

        </section>
    )
} 

export default SocialNetworks