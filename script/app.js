// Global User Object
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;

// Theme Management
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const icon = document.querySelector('.theme-icon');
    if (icon) {
        icon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
}

// Save user to localStorage
function saveUser(user) {
    currentUser = user;
    localStorage.setItem('currentUser', JSON.stringify(user));
}

// Check if user is logged in
function isLoggedIn() {
    return currentUser !== null;
}

// Logout user
function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    window.location.href = 'welcome.html';
}

// Get user initials for avatar
function getUserInitial() {
    if (currentUser && currentUser.name) {
        return currentUser.name.charAt(0).toUpperCase();
    }
    return '?';
}

// Protect pages that require authentication
function requireAuth() {
    if (!isLoggedIn()) {
        window.location.href = 'index.html';
        return false;
    }
    return true;
}

// Job Data - 20 Jobs with Indian locations
const jobData = [
    {
        id: 1,
        title: "Frontend Developer",
        company: "TCS Digital",
        location: "Bangalore",
        type: "Full-time",
        mode: "Hybrid",
        salary: "₹8,00,000 - ₹15,00,000",
        salaryMin: 800000,
        description: "We are looking for a skilled Frontend Developer to build responsive web applications using modern JavaScript frameworks.",
        requirements: ["React", "JavaScript", "TypeScript", "CSS", "HTML"],
        responsibilities: ["Develop user-facing features", "Build reusable components", "Optimize applications for performance", "Collaborate with backend developers"],
        posted: "2026-02-08"
    },
    {
        id: 2,
        title: "Backend Engineer",
        company: "Infosys",
        location: "Hyderabad",
        type: "Full-time",
        mode: "On-site",
        salary: "₹12,00,000 - ₹20,00,000",
        salaryMin: 1200000,
        description: "Join our backend team to build scalable APIs and microservices for enterprise clients.",
        requirements: ["Java", "Spring Boot", "PostgreSQL", "AWS", "Microservices"],
        responsibilities: ["Design and implement APIs", "Write clean, maintainable code", "Participate in code reviews", "Deploy applications to cloud"],
        posted: "2026-02-07"
    },
    {
        id: 3,
        title: "UI/UX Designer",
        company: "Flipkart",
        location: "Bangalore",
        type: "Full-time",
        mode: "Hybrid",
        salary: "₹10,00,000 - ₹18,00,000",
        salaryMin: 1000000,
        description: "Design beautiful and intuitive user interfaces for our e-commerce platform.",
        requirements: ["Figma", "Adobe XD", "Prototyping", "User Research", "Design Systems"],
        responsibilities: ["Create wireframes and prototypes", "Conduct user research", "Design responsive interfaces", "Maintain design system"],
        posted: "2026-02-06"
    },
    {
        id: 4,
        title: "DevOps Engineer",
        company: "Wipro",
        location: "Mumbai",
        type: "Full-time",
        mode: "On-site",
        salary: "₹14,00,000 - ₹22,00,000",
        salaryMin: 1400000,
        description: "Manage and optimize cloud infrastructure and CI/CD pipelines for enterprise applications.",
        requirements: ["Docker", "Kubernetes", "Jenkins", "Terraform", "Azure"],
        responsibilities: ["Automate deployment processes", "Monitor system performance", "Implement security best practices", "Manage cloud resources"],
        posted: "2026-02-05"
    },
    {
        id: 5,
        title: "Data Scientist",
        company: "Amazon India",
        location: "Hyderabad",
        type: "Full-time",
        mode: "Hybrid",
        salary: "₹18,00,000 - ₹30,00,000",
        salaryMin: 1800000,
        description: "Analyze large datasets and build machine learning models to drive business insights.",
        requirements: ["Python", "Machine Learning", "SQL", "TensorFlow", "Statistics"],
        responsibilities: ["Build predictive models", "Analyze customer behavior", "Create data visualizations", "Present insights to stakeholders"],
        posted: "2026-02-04"
    },
    {
        id: 6,
        title: "Mobile Developer",
        company: "Paytm",
        location: "Mumbai",
        type: "Full-time",
        mode: "Remote",
        salary: "₹10,00,000 - ₹16,00,000",
        salaryMin: 1000000,
        description: "Develop and maintain our mobile payment applications for Android and iOS.",
        requirements: ["React Native", "Kotlin", "Swift", "REST APIs"],
        responsibilities: ["Build cross-platform features", "Optimize app performance", "Implement payment integrations", "Fix bugs and issues"],
        posted: "2026-02-03"
    },
    {
        id: 7,
        title: "Full Stack Developer",
        company: "Zoho",
        location: "Bangalore",
        type: "Full-time",
        mode: "On-site",
        salary: "₹12,00,000 - ₹20,00,000",
        salaryMin: 1200000,
        description: "Work on both frontend and backend of our SaaS products serving millions of users.",
        requirements: ["React", "Node.js", "MongoDB", "Express", "TypeScript"],
        responsibilities: ["Develop end-to-end features", "Write unit tests", "Optimize database queries", "Mentor junior developers"],
        posted: "2026-02-02"
    },
    {
        id: 8,
        title: "Cloud Architect",
        company: "Google India",
        location: "Hyderabad",
        type: "Full-time",
        mode: "Hybrid",
        salary: "₹25,00,000 - ₹45,00,000",
        salaryMin: 2500000,
        description: "Design and implement cloud solutions for enterprise customers using GCP.",
        requirements: ["GCP", "Cloud Architecture", "Kubernetes", "Networking", "Security"],
        responsibilities: ["Design cloud architecture", "Lead technical discussions", "Review infrastructure code", "Ensure compliance"],
        posted: "2026-02-01"
    },
    {
        id: 9,
        title: "QA Engineer",
        company: "Tech Mahindra",
        location: "Mumbai",
        type: "Full-time",
        mode: "On-site",
        salary: "₹6,00,000 - ₹10,00,000",
        salaryMin: 600000,
        description: "Ensure quality of software products through manual and automated testing.",
        requirements: ["Selenium", "Java", "TestNG", "API Testing", "JIRA"],
        responsibilities: ["Write test cases", "Execute automated tests", "Report bugs", "Verify fixes"],
        posted: "2026-01-31"
    },
    {
        id: 10,
        title: "Product Manager",
        company: "Swiggy",
        location: "Bangalore",
        type: "Full-time",
        mode: "Hybrid",
        salary: "₹20,00,000 - ₹35,00,000",
        salaryMin: 2000000,
        description: "Lead product strategy and roadmap for our food delivery platform.",
        requirements: ["Product Management", "Analytics", "Agile", "User Research"],
        responsibilities: ["Define product roadmap", "Gather requirements", "Prioritize features", "Work with engineering"],
        posted: "2026-01-30"
    },
    {
        id: 11,
        title: "System Administrator",
        company: "HCL Technologies",
        location: "Hyderabad",
        type: "Full-time",
        mode: "On-site",
        salary: "₹5,00,000 - ₹9,00,000",
        salaryMin: 500000,
        description: "Manage and maintain IT infrastructure including servers and networks.",
        requirements: ["Linux", "Windows Server", "Networking", "Scripting", "VMware"],
        responsibilities: ["Manage servers", "Monitor systems", "Troubleshoot issues", "Implement backups"],
        posted: "2026-01-29"
    },
    {
        id: 12,
        title: "Machine Learning Engineer",
        company: "Microsoft India",
        location: "Bangalore",
        type: "Full-time",
        mode: "Hybrid",
        salary: "₹22,00,000 - ₹40,00,000",
        salaryMin: 2200000,
        description: "Build and deploy machine learning models for Azure AI services.",
        requirements: ["Python", "PyTorch", "TensorFlow", "MLOps", "Azure ML"],
        responsibilities: ["Train ML models", "Deploy to production", "Optimize performance", "Research new techniques"],
        posted: "2026-01-28"
    },
    {
        id: 13,
        title: "Technical Writer",
        company: "Freshworks",
        location: "Mumbai",
        type: "Contract",
        mode: "Remote",
        salary: "₹7,00,000 - ₹12,00,000",
        salaryMin: 700000,
        description: "Create clear and comprehensive documentation for our software products.",
        requirements: ["Technical Writing", "API Documentation", "Markdown", "Git"],
        responsibilities: ["Write user guides", "Create API docs", "Maintain knowledge base", "Review content"],
        posted: "2026-01-27"
    },
    {
        id: 14,
        title: "Security Analyst",
        company: "Reliance Jio",
        location: "Mumbai",
        type: "Full-time",
        mode: "On-site",
        salary: "₹12,00,000 - ₹20,00,000",
        salaryMin: 1200000,
        description: "Monitor and protect our network infrastructure from security threats.",
        requirements: ["Cybersecurity", "SIEM", "Penetration Testing", "Firewalls"],
        responsibilities: ["Monitor security events", "Investigate incidents", "Conduct audits", "Implement controls"],
        posted: "2026-01-26"
    },
    {
        id: 15,
        title: "Android Developer",
        company: "PhonePe",
        location: "Bangalore",
        type: "Full-time",
        mode: "Hybrid",
        salary: "₹15,00,000 - ₹25,00,000",
        salaryMin: 1500000,
        description: "Build features for our Android payment app used by millions of users.",
        requirements: ["Kotlin", "Android SDK", "MVVM", "Jetpack Compose", "REST APIs"],
        responsibilities: ["Develop new features", "Write clean code", "Optimize performance", "Collaborate with team"],
        posted: "2026-01-25"
    },
    {
        id: 16,
        title: "Database Administrator",
        company: "Mindtree",
        location: "Hyderabad",
        type: "Full-time",
        mode: "On-site",
        salary: "₹10,00,000 - ₹16,00,000",
        salaryMin: 1000000,
        description: "Manage and optimize database systems for enterprise applications.",
        requirements: ["Oracle", "MySQL", "PostgreSQL", "Performance Tuning", "Backup"],
        responsibilities: ["Manage databases", "Optimize queries", "Ensure high availability", "Implement security"],
        posted: "2026-01-24"
    },
    {
        id: 17,
        title: "Scrum Master",
        company: "Cognizant",
        location: "Mumbai",
        type: "Full-time",
        mode: "Hybrid",
        salary: "₹14,00,000 - ₹22,00,000",
        salaryMin: 1400000,
        description: "Facilitate agile processes and help teams deliver high-quality software.",
        requirements: ["Scrum", "Agile", "JIRA", "Coaching", "Facilitation"],
        responsibilities: ["Facilitate ceremonies", "Remove blockers", "Coach team members", "Track metrics"],
        posted: "2026-01-23"
    },
    {
        id: 18,
        title: "iOS Developer",
        company: "Ola",
        location: "Bangalore",
        type: "Full-time",
        mode: "Remote",
        salary: "₹14,00,000 - ₹24,00,000",
        salaryMin: 1400000,
        description: "Develop and maintain our iOS ride-hailing application.",
        requirements: ["Swift", "iOS SDK", "Core Data", "SwiftUI", "REST APIs"],
        responsibilities: ["Build iOS features", "Fix bugs", "Improve UX", "Write tests"],
        posted: "2026-01-22"
    },
    {
        id: 19,
        title: "Business Analyst",
        company: "Capgemini",
        location: "Hyderabad",
        type: "Full-time",
        mode: "Hybrid",
        salary: "₹8,00,000 - ₹14,00,000",
        salaryMin: 800000,
        description: "Bridge the gap between business needs and technical solutions.",
        requirements: ["Requirements Analysis", "SQL", "Excel", "Communication", "Agile"],
        responsibilities: ["Gather requirements", "Create specifications", "Analyze data", "Support UAT"],
        posted: "2026-01-21"
    },
    {
        id: 20,
        title: "Site Reliability Engineer",
        company: "Razorpay",
        location: "Bangalore",
        type: "Full-time",
        mode: "Hybrid",
        salary: "₹18,00,000 - ₹30,00,000",
        salaryMin: 1800000,
        description: "Ensure reliability and performance of our payment infrastructure.",
        requirements: ["Linux", "Kubernetes", "Prometheus", "Go", "AWS"],
        responsibilities: ["Monitor systems", "Automate operations", "Respond to incidents", "Improve reliability"],
        posted: "2026-01-20"
    }
];

// Render job cards
function renderJobs(jobs) {
    const container = document.getElementById('jobContainer');
    const resultsCount = document.getElementById('resultsCount');
    if (!container) return;
    
    if (resultsCount) {
        resultsCount.textContent = `Showing ${jobs.length} job${jobs.length !== 1 ? 's' : ''}`;
    }
    
    if (jobs.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <h3>No jobs found</h3>
                <p>Try adjusting your search or filters</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = '';
    
    jobs.forEach(job => {
        const card = document.createElement('div');
        card.className = 'job-card';
        card.onclick = () => viewJob(job.id, job.isUserPosted);
        const userBadge = job.isUserPosted ? '<span class="user-posted-badge">Your Post</span>' : '';
        card.innerHTML = `
            <div class="job-header">
                <h3 class="job-title">${job.title}</h3>
                <div class="job-badges">
                    ${userBadge}
                    <span class="job-type ${job.mode.toLowerCase()}">${job.mode}</span>
                </div>
            </div>
            <p class="job-company">${job.company}</p>
            <div class="job-meta">
                <span class="job-location">📍 ${job.location}</span>
                <span class="job-salary">💰 ${job.salary}</span>
            </div>
            <p class="job-description">${job.description}</p>
            <div class="job-requirements">
                ${job.requirements.slice(0, 4).map(req => `<span class="requirement-tag">${req}</span>`).join('')}
            </div>
            <div class="job-footer">
                <span class="job-posted">Posted: ${job.posted}</span>
                <button class="view-btn" onclick="event.stopPropagation(); viewJob(${job.id}, ${job.isUserPosted || false})">View Details</button>
            </div>
        `;
        container.appendChild(card);
    });
}

// View job details
function viewJob(jobId, isUserPosted = false) {
    localStorage.setItem('selectedJobId', jobId);
    localStorage.setItem('isUserPosted', isUserPosted);
    window.location.href = 'job-detail.html';
}

// Render job detail page
function renderJobDetail() {
    const jobId = parseInt(localStorage.getItem('selectedJobId'));
    const isUserPosted = localStorage.getItem('isUserPosted') === 'true';
    
    // Search in appropriate array
    let job;
    if (isUserPosted) {
        const userJobs = getUserJobs();
        job = userJobs.find(j => j.id === jobId);
    } else {
        job = jobData.find(j => j.id === jobId);
    }
    
    const container = document.getElementById('jobDetailCard');
    
    if (!job || !container) {
        if (container) container.innerHTML = '<p>Job not found</p>';
        return;
    }
    
    container.innerHTML = `
        <div class="job-detail-header">
            <h1 class="job-detail-title">${job.title}</h1>
            <p class="job-detail-company">${job.company}</p>
            <div class="job-detail-meta">
                <span>📍 ${job.location}</span>
                <span>💼 ${job.type}</span>
                <span>🏠 ${job.mode}</span>
                <span>💰 ${job.salary}</span>
            </div>
            <span class="job-type ${job.mode.toLowerCase()}" style="display: inline-block;">${job.mode}</span>
        </div>
        
        <div class="job-detail-section">
            <h3>About the Role</h3>
            <p>${job.description}</p>
        </div>
        
        <div class="job-detail-section">
            <h3>Responsibilities</h3>
            <ul>
                ${job.responsibilities.map(r => `<li>${r}</li>`).join('')}
            </ul>
        </div>
        
        <div class="job-detail-section">
            <h3>Required Skills</h3>
            <div class="job-detail-skills">
                ${job.requirements.map(req => `<span>${req}</span>`).join('')}
            </div>
        </div>
        
        <div class="job-detail-section">
            <h3>Posted</h3>
            <p>${job.posted}</p>
        </div>
        
        <div class="job-detail-actions">
            <button class="apply-btn-large" onclick="applyJob(${job.id})">Apply Now</button>
        </div>
    `;
}

// Unified search and filter
function searchJobs() {
    const searchTerm = document.getElementById('searchInput')?.value.toLowerCase() || '';
    const locationFilter = document.getElementById('locationFilter')?.value || '';
    const salaryFilter = document.getElementById('salaryFilter')?.value || '';
    const modeFilter = document.getElementById('modeFilter')?.value || '';
    
    const allJobs = getAllJobs();
    const filtered = allJobs.filter(job => {
        // Search across all fields
        const matchesSearch = !searchTerm || 
            job.title.toLowerCase().includes(searchTerm) ||
            job.company.toLowerCase().includes(searchTerm) ||
            job.location.toLowerCase().includes(searchTerm) ||
            job.description.toLowerCase().includes(searchTerm) ||
            job.requirements.some(r => r.toLowerCase().includes(searchTerm));
        
        // Location filter
        const matchesLocation = !locationFilter || job.location === locationFilter;
        
        // Salary filter
        let matchesSalary = true;
        if (salaryFilter) {
            const minSalary = parseInt(salaryFilter);
            matchesSalary = job.salaryMin >= minSalary;
        }
        
        // Mode filter
        const matchesMode = !modeFilter || job.mode === modeFilter;
        
        return matchesSearch && matchesLocation && matchesSalary && matchesMode;
    });
    
    renderJobs(filtered);
}

// Clear all filters
function clearFilters() {
    document.getElementById('searchInput').value = '';
    document.getElementById('locationFilter').value = '';
    document.getElementById('salaryFilter').value = '';
    document.getElementById('modeFilter').value = '';
    renderJobs(getAllJobs());
}

// Apply for job
function applyJob(jobId) {
    const job = jobData.find(j => j.id === jobId);
    if (job) {
        alert(`Application submitted for ${job.title} at ${job.company}!\n\nWe'll contact you soon.`);
    }
}

// Render user profile
function renderProfile() {
    if (!requireAuth()) return;
    
    const profileInitial = document.getElementById('profileInitial');
    const profileName = document.getElementById('profileName');
    const profileEducation = document.getElementById('profileEducation');
    const profileExperience = document.getElementById('profileExperience');
    const profileSkills = document.getElementById('profileSkills');
    const profileLocation = document.getElementById('profileLocation');
    
    if (profileInitial) profileInitial.textContent = getUserInitial();
    if (profileName) profileName.textContent = currentUser.name;
    if (profileEducation) profileEducation.textContent = currentUser.education;
    if (profileExperience) profileExperience.textContent = currentUser.experience;
    if (profileSkills) profileSkills.textContent = currentUser.skills;
    if (profileLocation) profileLocation.textContent = currentUser.location;
}

// Update navigation with user info
function updateNav() {
    const userNav = document.getElementById('userNav');
    if (userNav && isLoggedIn()) {
        userNav.innerHTML = `
            <div class="nav-avatar">${getUserInitial()}</div>
            <span class="nav-username">${currentUser.name}</span>
        `;
    }
}

// Update mobile avatar and dropdown user name
function updateMobileAvatar() {
    const mobileAvatar = document.getElementById('mobileAvatar');
    const dropdownUserName = document.getElementById('dropdownUserName');
    
    if (mobileAvatar && isLoggedIn()) {
        mobileAvatar.textContent = getUserInitial();
    }
    
    if (dropdownUserName && isLoggedIn()) {
        dropdownUserName.textContent = currentUser.name;
    }
}

// Toggle dropdown menu
function toggleDropdown() {
    const dropdown = document.getElementById('dropdownMenu');
    if (dropdown) {
        dropdown.classList.toggle('show');
    }
}

// Get user-posted jobs from localStorage
function getUserJobs() {
    const userJobs = localStorage.getItem('userJobs');
    return userJobs ? JSON.parse(userJobs) : [];
}

// Save user jobs to localStorage
function saveUserJobs(jobs) {
    localStorage.setItem('userJobs', JSON.stringify(jobs));
}

// Get all jobs (default + user-posted)
function getAllJobs() {
    const userJobs = getUserJobs();
    return [...userJobs, ...jobData];
}

// Open job modal
function openJobModal() {
    const modal = document.getElementById('jobModal');
    if (modal) {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
    // Close dropdown if open
    const dropdown = document.getElementById('dropdownMenu');
    if (dropdown) {
        dropdown.classList.remove('show');
    }
}

// Close job modal
function closeJobModal() {
    const modal = document.getElementById('jobModal');
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = '';
        // Reset form
        modal.querySelector('form').reset();
    }
}

// Submit new job
function submitJob(e) {
    e.preventDefault();
    
    const salaryValue = parseInt(document.getElementById('jobSalary').value);
    const salaryMin = salaryValue * 100000;
    const salaryDisplay = `\u20b9${salaryValue},00,000 - \u20b9${salaryValue + 5},00,000`;
    
    const newJob = {
        id: Date.now(), // Unique ID based on timestamp
        title: document.getElementById('jobTitle').value,
        company: document.getElementById('jobCompany').value,
        location: document.getElementById('jobLocation').value,
        type: document.getElementById('jobType').value,
        mode: document.getElementById('jobMode').value,
        salary: salaryDisplay,
        salaryMin: salaryMin,
        description: document.getElementById('jobDescription').value,
        requirements: document.getElementById('jobRequirements').value.split(',').map(s => s.trim()).filter(s => s),
        responsibilities: ["As per job description"],
        posted: new Date().toISOString().split('T')[0],
        postedBy: currentUser ? currentUser.name : 'Anonymous',
        isUserPosted: true
    };
    
    // Get existing user jobs and add new one
    const userJobs = getUserJobs();
    userJobs.unshift(newJob); // Add to beginning
    saveUserJobs(userJobs);
    
    // Close modal and refresh jobs
    closeJobModal();
    renderJobs(getAllJobs());
    
    alert('Job posted successfully!');
}
