// script.js

// Function to show/hide pages based on navigation
function navigateTo(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.display = 'none';
    });

    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.style.display = 'block';
    }

    // Update the URL to simulate page navigation
    history.pushState(null, null, `#${pageId}`);
}

// Event listeners for navigation
document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.getElementById('main-content');

    // Function to handle popstate event (back/forward buttons)
    window.onpopstate = () => {
        const pageId = location.hash.substring(1);
        navigateTo(pageId);
    };

    navigateTo('home'); // Show the home page by default

    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const pageId = e.target.getAttribute('href').substring(1);
            navigateTo(pageId);
        });
    });
});








document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('.section');
    let currentSection = 0;

    function handleScroll() {
        const sectionHeight = sections[currentSection].clientHeight;
        const scrollPosition = window.scrollY;

        if (scrollPosition >= sectionHeight * currentSection) {
            currentSection++;
            if (currentSection < sections.length) {
                sections[currentSection].classList.add('active');
            }
        }
    }

    window.addEventListener('scroll', handleScroll);
});













// Add your countdown logic here
  function updateCountdown() {
    // Update the countdown logic based on your implementation
    // Example: calculate remaining time and update the #countdown element
  }

  // Call updateCountdown every second
  setInterval(updateCountdown, 1000);

  function joinPresale() {
    // Add logic to handle the presale participation
    alert("You have joined the Gitic presale!");
  }





  function claimAirdrop() {
    // Add logic to handle the airdrop claim
    alert("Congratulations! You have successfully claimed your Gitic Airdrop!");
  }
