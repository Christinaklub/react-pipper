export function Subscribe(){
    return(
        <div class="right-side">

            <div className="subcribe-container">
                <div className="input-container">
                    <input type="text" class="search-input" placeholder="Søg her"></input>
                    <i className="fas fa-search search-icon"></i>
                </div>
            <div class="subcribe-box">
                <h2>Subscribe to premium</h2>
                <h4>Subscribe to unlock new features and if eligible, receive a share of ads revenue.</h4>
                <button className="subrcribe-button">Subscribe</button>
            </div>
           
            <div className="follow-box">
                <h2>Hvem kan følge</h2>
                <div clasNames="users">
                    <img src="bilder/twitterHannah.jpg" alt=""></img>
                    <div className="user1">
                    <h4>Per Fingermann</h4>
                    <p>@fingermannen2</p>
                </div>
                    <button className="button-follow">Følg</button>
                </div>
                <div className="users">
                    <img src="bilder/twitterJannah.jpg" alt=""></img>
                    <div className="user2">
                    <h4>Jens Jensen</h4>
                    <p>@jensjensjens98</p>
                </div>
                    <button className="button-follow">Følg</button>
                </div>
                <div className="users">
                    <img src="bilder/twitterchris.jpg" alt=""></img>
                    <div className="user3">
                        <h4>Frida Petersen</h4>
                        <p>@fridapåhestene</p>
                    </div>
                    <button className="button-follow">Følg</button>
                </div>
                    <a href="#"><h4>
                    Vis mer ...
                    </h4>
                    </a>
            </div>
            </div>

        </div>
    )
}