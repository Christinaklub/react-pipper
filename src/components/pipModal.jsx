import profilePic from "../images/profile.jpg";

export function PipModal(){
    return(
        <form id="pipModal" className="modal">
        <div className="pip-content">
            <div className="modal-header">
                <span className="close">&times;</span>
            </div>
            <div class="modal-body">
                <div className="profile-picture">
                <img src={profilePic} className="profile-pic"></img>
                </div>
                <div className="area-text">
                    <input type="text" name="username" id="username" placeholder="Brugernavn"/>
                    <textarea className="pip-text" placeholder="Hvad sker der?!" name="text"></textarea>
                </div>
                <div className="who">
                    <i className="fa-solid fa-earth-europe"></i>
                    <span>Alle kan svare</span>
                </div>
                <div className="modal-bottom">
                    <ul className="icons">
                        <li><i className="fa-regular fa-image"></i></li>
                        <li><i className="fa-regular fa-face-smile"></i></li>
                        <li><i className="fas fa-map-marker-alt"></i></li>
                    </ul>
                    <div class="post-content">
                        <span id="charCount">255</span>
                        <input id="postBtn" type="submit" value="create"/>
                    </div>
                </div>
            </div>
        </div>
    </form>

    )
}