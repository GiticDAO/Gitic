function castVote() {
    // Add your voting logic here
    alert("Voting opens on 25 March and closes on 5 April.");
}









// Set the date we're counting down to
var countDownDate = new Date("Mar 30, 2024 00:00:00").getTime();

// Update the countdown every 1 second
var x = setInterval(function() {

    // Get the current date and time
    var now = new Date().getTime();

    // Calculate the remaining time
    var distance = countDownDate - now;

    // Calculate days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    // If the countdown is over, show text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Voting has started!";
    }
}, 1000);












function scrollToVoting() {
    // Scroll to the voting section
    document.getElementById("voting-section").scrollIntoView({ behavior: "smooth" });
}








function selectOption(network) {
    // Highlight the selected option (add your custom logic here)
    console.log("Selected network:", network);
    // Redirect to the voting page for the selected network
    window.location.href = `voting/${network}`;
}









document.getElementById('open-date').textContent = '30 March 2024';
document.getElementById('close-date').textContent = '5 April 2024';
