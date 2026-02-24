// Page content data
const pages = {
    dashboard: {
        title: 'Dashboard',
        subtext: 'This section will be built in the next step.'
    },
    saved: {
        title: 'Saved',
        subtext: 'This section will be built in the next step.'
    },
    digest: {
        title: 'Digest',
        subtext: 'This section will be built in the next step.'
    },
    settings: {
        title: 'Settings',
        subtext: 'This section will be built in the next step.'
    },
    proof: {
        title: 'Proof',
        subtext: 'This section will be built in the next step.'
    }
};

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navList = document.getElementById('navList');

hamburger.addEventListener('click', () => {
    navList.classList.toggle('open');
});

// Navigation links
const navLinks = document.querySelectorAll('.nav-link');
const mainContent = document.getElementById('mainContent');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Remove active class from all links
        navLinks.forEach(l => l.classList.remove('active'));
        
        // Add active class to clicked link
        link.classList.add('active');
        
        // Get page data
        const pageName = link.getAttribute('data-page');
        const pageData = pages[pageName];
        
        // Update content
        mainContent.innerHTML = `
            <div class="page-container">
                <h1 class="page-heading">${pageData.title}</h1>
                <p class="page-subtext">${pageData.subtext}</p>
            </div>
        `;
        
        // Close mobile menu
        navList.classList.remove('open');
    });
});
