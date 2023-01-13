const CountDown = () =>{

    var days;
    var Hours;
    var Mins;
    var Secs;

    //Start of countdown

// Set the target date for the countdown
var targetDate = new Date("Jan 4, 2023 08:00:00").getTime();

// Update the countdown every 1 second
var countdownInterval = setInterval(function() {
  // Get the current date and time
  var currentDate = new Date().getTime();

  // Find the distance between the current date and the target date
  var distance = targetDate - currentDate;

  // Calculate the days, hours, minutes, and seconds
  days = Math.floor(distance / (1000 * 60 * 60 * 24));
  Hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  Mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  Secs = Math.floor((distance % (1000 * 60)) / 1000);

  
  // Display the result in the countdown element
  document.getElementById("day").innerHTML = days + "  :  ";
  document.getElementById("hr").innerHTML = Hours + "  :  ";
  document.getElementById("min").innerHTML = Mins + "  :  ";
  document.getElementById("sec").innerHTML = Secs;
  

  // If the countdown is finished, clear the interval and display a message
  if (distance < 0) {
    clearInterval(countdownInterval);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);

    return(
        <div className="container">
            <div className="countDown d-flex justify-content-center">
                <div>
                    <h3 className="text-center">Our Next Service Starts In:</h3>
                    <div className="row">
                        <div className="col-sm-3 d-flex justify-content-center">
                            <div className="tContainer">
                                <div className="timeLabel">Days</div>
                                <div id="day"></div>
                            </div>
                        </div>
                        <div className="col-sm-3 d-flex justify-content-center">
                            <div className="tContainer">
                                <div className="timeLabel">Hours</div>
                                <div id="hr"></div>
                            </div>  
                        </div>
                        <div className="col-sm-3 d-flex justify-content-center">
                            <div className="tContainer">
                                <div className="timeLabel">Minutes</div>
                                <div id="min"></div>
                            </div>    
                        </div>
                        <div className="col-sm-3 d-flex justify-content-center">
                            <div className="tContainer">
                                <div className="timeLabel">Seconds</div>
                                <div id="sec"></div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

    )
}

export default CountDown;