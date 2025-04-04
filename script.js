// Select the button and navigation bar elements
const toggleButton = document.getElementById('toggleButton');
const navBar = document.getElementById('navigationBar');

// Add an event listener to the button
function toggleMenu() {
    if (navBar.style.display === 'none') {
        // If the navigation bar is hidden or has no inline style, show it
        navBar.style.display = 'block';
    } else {
        // If the navigation bar is visible, hide it
        navBar.style.display = 'none';
    }
}

toggleButton.addEventListener('click', toggleMenu);

// Filter projects by category
function filterProjects(category) {
    const projects = document.querySelectorAll('#projects article');
    projects.forEach(project => {
        if (category === 'web-app') {
            if (project.id !== 'web-apps') {
                project.style.display = 'none'; // Hide non-web-app projects
            }
            else {
                project.style.display = 'block'; // Show web-app projects
            }
        } else if (category === 'quant') {
            if (project.id !== 'quant') {
                project.style.display = 'none'; // Hide non-web-app projects
            }
            else {
                project.style.display = 'block'; // Show web-app projects
            }   
                 
        } else if (category === 'AI') {
            if (project.id !== 'AI') {
                project.style.display = 'none'; // Hide non-web-app projects
            }
            else {
                project.style.display = 'block'; // Show web-app projects
            }        
        } else if (category === 'all') {
            project.style.display = 'block'; // Show all projects when 'all' is selected
        } else {
            project.style.display = 'none';
        }
    });
}

// Add event listeners for filter buttons
const filterButtons = document.querySelectorAll('.filter-button');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.dataset.category;
        filterProjects(category);
    });
});

// Lightbox effect for project images
function openLightbox(imageSrc) {
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.style.position = 'fixed';
    lightbox.style.top = '0';
    lightbox.style.left = '0';
    lightbox.style.width = '100%';
    lightbox.style.height = '100%';
    lightbox.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    lightbox.style.display = 'flex';
    lightbox.style.justifyContent = 'center';
    lightbox.style.alignItems = 'center';
    lightbox.style.zIndex = '1000';

    const img = document.createElement('img');
    img.src = imageSrc;
    img.style.maxWidth = '90%';
    img.style.maxHeight = '90%';

    lightbox.appendChild(img);

    lightbox.addEventListener('click', () => {
        document.body.removeChild(lightbox);
    });

    document.body.appendChild(lightbox);
}

// Add event listeners for project images
const projectImages = document.querySelectorAll('img'); // Generic selector for images.
projectImages.forEach(image => {
    image.addEventListener('click', () => {
        openLightbox(image.src);
    });
});

// Select the form element
const contactForm = document.querySelector('form');

// Add event listener for form submission
contactForm.addEventListener('submit', (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Validate form inputs
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && email && message) {
        // Validation passed, redirect to contactValidation.html
        window.location.href = 'contactSubmitted.html';
    } else {
        // Show an error message if validation fails
        alert('Please fill in all required fields.');
    }
});
