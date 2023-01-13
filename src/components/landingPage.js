import { Icon } from "semantic-ui-react";

const LandingPage = () =>{

    var days = 0;
    var Hours = 0;
    var Mins = 0;
    var Secs = 0;

    return(
        <div className="container">
            <div class="container hero-section-text">
                <h3 class="text-center">We Are A Family Church That Loves God & People.</h3>
                <hr className="hr-Line"/>
                <h1 class="text-center">Welcome</h1>
                <hr className="hr-Line"/>
                <div class="join-us-button d-flex justify-content-center">
                    <button class="join-us">Join Us<Icon className="arrowRight" name="arrow right" /></button>
                </div>
            </div>
        </div>

    )
}

export default LandingPage;