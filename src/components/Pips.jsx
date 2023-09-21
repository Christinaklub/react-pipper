// importere profil billeder fra images folder
import profilePic from "../images/profile.jpg";

export function Pips(props) {
    console.log(props.message)

    return (
        <div style={{backgroundColor: props.color,}} className="pip">
            <img src={profilePic} className="profile-pic"></img>
            {/* indsætter profilbillede, text osv. i component */}
            <h4 className="username">Hannah West</h4>
            {props.message} 

        </div>
    )
}