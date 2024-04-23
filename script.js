function openNav() {
  document.getElementById("myNav").style.display = "block";
}

function closeNav() {
  document.getElementById("myNav").style.display = "none";
} 













// ---*** Typing Effects ***---
var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 15) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap {border-right: 5px solid transparent}";
    document.body.appendChild(css);
};

// Distribution Container Code====
setTimeout(function start() {

    $('.bar').each(function (i) {
        var $bar = $(this);
        $(this).append('<span class="count"></span>')
        setTimeout(function () {
            $bar.css('width', $bar.attr('data-percent'));
        }, i * 100);
    });

    $('.count').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).parent('.bar').attr('data-percent')
        }, {
            duration: 2000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now) + '%');
            }
        });
    });

}, 500)














// Set the date we're counting down to
var countDownDate = new Date("May 10, 2024 00:00:00").getTime();

// Update the countdown every 1 second
var x = setInterval(function() {

    // Get the current date and time
    var now = new Date().getTime();

    // Calculate the distance between now and the countdown date
    var distance = countDownDate - now;

    // Calculate days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // If the countdown is over, display a message
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Voting is now open!";
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
