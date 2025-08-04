function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener('DOMContentLoaded', function() {
  const hamburgerToggle = document.getElementById('hamburger-toggle');
  if (hamburgerToggle) {
    hamburgerToggle.addEventListener('click', toggleMenu);
  }

  const mobileMenuLinks = document.querySelectorAll('#hamburger-nav .menu-links a');
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
  });

  const downloadCvBtn = document.getElementById('download-cv-btn');
  if (downloadCvBtn) {
    downloadCvBtn.addEventListener('click', () => {
      window.open('./assets/Resume.pdf', '_blank');
    });
  }

  const contactBtn = document.getElementById('contact-btn');
  if (contactBtn) {
    contactBtn.addEventListener('click', () => {
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    });
  }

  const linkedinLink = document.getElementById('linkedin-link');
  if (linkedinLink) {
    linkedinLink.addEventListener('click', () => {
      window.open('https://bit.ly/3GpP6Sm', '_blank');
    });
  }

  const githubLink = document.getElementById('github-link');
  if (githubLink) {
    githubLink.addEventListener('click', () => {
      window.open('https://bit.ly/4kdWTRl', '_blank');
    });
  }

  const arrowToExperience = document.getElementById('arrow-to-experience');
  if (arrowToExperience) {
    arrowToExperience.addEventListener('click', () => {
      document.getElementById('experience').scrollIntoView({ behavior: 'smooth' });
    });
  }

  const arrowToProjects = document.getElementById('arrow-to-projects');
  if (arrowToProjects) {
    arrowToProjects.addEventListener('click', () => {
      document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
    });
  }

  const arrowToContact = document.getElementById('arrow-to-contact');
  if (arrowToContact) {
    arrowToContact.addEventListener('click', () => {
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    });
  }

  const projectButtons = document.querySelectorAll('.project-btn[data-url]');
  projectButtons.forEach(button => {
    button.addEventListener('click', () => {
      const url = button.getAttribute('data-url');
      if (url) {
        window.open(url, '_blank');
      }
    });
  });

  const isMobile = window.innerWidth <= 768;
  const isTablet = window.innerWidth <= 1200 && window.innerWidth > 768;
  
  const observerOptions = {
    threshold: isMobile ? 0.05 : 0.1,
    rootMargin: isMobile ? '0px 0px -30px 0px' : '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);

  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    observer.observe(section);
  });

  const animateElements = document.querySelectorAll('.details-container, .color-container, article');
  animateElements.forEach(element => {
    observer.observe(element);
  });

  const baseDelay = isMobile ? 0.05 : 0.1;
  
  const articles = document.querySelectorAll('article');
  articles.forEach((article, index) => {
    article.style.animationDelay = `${index * baseDelay}s`;
  });

  const projectCards = document.querySelectorAll('.color-container');
  projectCards.forEach((card, index) => {
    card.style.animationDelay = `${index * (baseDelay * 2)}s`;
  });

  if (isMobile) {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
      button.addEventListener('touchstart', function() {
        this.style.transform = 'translateY(1px)';
      });
      
      button.addEventListener('touchend', function() {
        this.style.transform = 'translateY(-2px)';
      });
    });

    const icons = document.querySelectorAll('.icon');
    icons.forEach(icon => {
      icon.addEventListener('touchstart', function() {
        this.style.transform = 'scale(0.95)';
      });
      
      icon.addEventListener('touchend', function() {
        this.style.transform = 'scale(1.05)';
        setTimeout(() => {
          this.style.transform = 'scale(1)';
        }, 150);
      });
    });

    let scrollTimeout;
    window.addEventListener('scroll', function() {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      scrollTimeout = setTimeout(function() {
      }, 150);
    }, { passive: true });
  }

  window.addEventListener('orientationchange', function() {
    setTimeout(function() {
      const newIsMobile = window.innerWidth <= 768;
      if (newIsMobile !== isMobile) {
        location.reload();
      }
    }, 500);
  });

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (prefersReducedMotion) {
    const style = document.createElement('style');
    style.textContent = `
      * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
    `;
    document.head.appendChild(style);
  }
});
