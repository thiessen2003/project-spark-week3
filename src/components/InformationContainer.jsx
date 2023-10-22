import "../styles/components/informationcontainer.sass"
import { AiOutlineMail, AiFillEnvironment } from "react-icons/ai"

const  InformationContainer = () => {
    return (
        <section id="information-container">
            <div className="info-card">
                <div>
                    <h3>Email</h3>
                    <p>tgabriel@seas.upenn.edu</p>
                </div>
                <div>
                    <h3>Location</h3>
                    <p>Philadelphia, PA</p>
                </div>
            </div>
        </section>
    )
} 

export default InformationContainer