document.addEventListener('DOMContentLoaded', function() {
    // Theme switcher
    const downloadBtn = document.getElementById('downloadResume');
    
    downloadBtn.addEventListener('click', function() {
        // Replace 'path/to/your/resume.pdf' with the actual path to your resume file
        const resumeUrl = 'https://drive.google.com/file/d/1Qp5aUPfTK_GDLp177RXsVU1dDY28NU4R/view?usp=sharing';
        
        window.open(resumeUrl, '_blank');
        // // Creating a temporary anchor element
        // const link = document.createElement('a');
        // link.href = resumeUrl;
        // link.setAttribute('download', 'Shubham_Saurav_Resume.pdf');
        
        // // Simulating a click on the anchor element
        // document.body.appendChild(link);
        // link.click();
        // document.body.removeChild(link);
    });

    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        this.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    const mobileNavLinks = document.querySelectorAll('.nav-links a');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });

    // Experience card popup
    const cards = document.querySelectorAll('.card');
    const popup = document.getElementById('popup');
    const popupTitle = document.getElementById('popup-title');
    const popupPosition = document.getElementById('popup-position');
    const popupDate = document.getElementById('popup-date');
    const popupDetails = document.getElementById('popup-details');
    const closeBtn = document.querySelector('.close');

    const experiences = {
        1: {
            title: "Redhat, Pune",
            position: "Senior Software Engineer",
            date: "August 2021 - PRESENT",
            details: "<ul><li>Develop and Maintain APIs in Go related to subscription management.</li><li>Design and implement auto-registration systems for cloud systems.</li><li>Collaborate with cross-functional teams to deliver high-quality software solutions.</li></ul>"
        },
        2: {
            title: "Knorex, Pune",
            position: "Data Engineer II",
            date: "Jan 2020 - July 2021",
            details: "<ul><li>Developed APIs and Data Pipelines for end-to-end data processing.</li><li>Achieved exceptional API response times of under 10ms, enhancing user experience.</li><li>Utilized technologies such as Golang, Java, Apache Beam, Redis, and Postgres.</li></ul>"
        },
        3: {
            title: "NRI Fintech, Kolkata",
            position: "Associate Software Developer",
            date: "August 2018 - January 2021",
            details: "<ul><li>Developed and maintained APIs using Spring Boot, Maven, and Hibernate.</li><li>Collaborated with the team to deliver APIs aligned with project requirements.</li><li>Gained extensive experience in financial technology software development.</li></ul>"
        }
    };

    cards.forEach(card => {
        card.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            const experience = experiences[id];
            popupTitle.textContent = experience.title;
            popupPosition.textContent = experience.position;
            popupDate.textContent = experience.date;
            popupDetails.innerHTML = experience.details;
            popup.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    });

    // Scroll animation for sections
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleScroll() {
        var sections = document.querySelectorAll('section');
        sections.forEach(function(section) {
            if (isElementInViewport(section)) {
                section.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', handleScroll);
});