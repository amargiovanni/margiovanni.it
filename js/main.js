// =======================
// Main JavaScript
// =======================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLoadingScreen();
  initScrollAnimations();
  initSmoothScroll();
  initNavigation();
  initAnimatedBackground();
});

// =======================
// Theme Management (Auto-detect only)
// =======================

function initTheme() {
  // Detect system preference
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Apply theme based on system preference
  const theme = systemPrefersDark ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', theme);

  // Listen for system theme changes and update automatically
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  mediaQuery.addEventListener('change', (e) => {
    const newTheme = e.matches ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
  });
}

// =======================
// Loading Screen
// =======================

function initLoadingScreen() {
  const loadingScreen = document.getElementById('loadingScreen');

  // Hide loading screen after content is loaded
  window.addEventListener('load', () => {
    setTimeout(() => {
      loadingScreen.classList.add('hidden');
      // Remove from DOM after transition
      setTimeout(() => {
        loadingScreen.remove();
      }, 500);
    }, 500);
  });
}

// =======================
// Scroll Animations
// =======================

function initScrollAnimations() {
  // Check if Intersection Observer is supported
  if (!('IntersectionObserver' in window)) {
    // Fallback for browsers that don't support Intersection Observer
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      el.classList.add('animate-in');
    });
    return;
  }

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '50px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        // Optional: unobserve after animation to improve performance
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all elements with animate-on-scroll class
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);

    // Immediately animate elements that are already in viewport on page load
    const rect = el.getBoundingClientRect();
    const isInViewport = rect.top < window.innerHeight && rect.bottom >= 0;
    if (isInViewport) {
      el.classList.add('animate-in');
    }
  });
}

// =======================
// Smooth Scroll
// =======================

function initSmoothScroll() {
  // Handle smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');

      // Don't prevent default if href is just "#"
      if (href === '#') return;

      e.preventDefault();

      const target = document.querySelector(href);
      if (target) {
        const headerOffset = 80; // Account for fixed header
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// =======================
// Navigation (Always Visible)
// =======================

function initNavigation() {
  // Active nav link highlighting
  highlightActiveSection();
}

// =======================
// Active Section Highlighting
// =======================

function highlightActiveSection() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!('IntersectionObserver' in window)) return;

  const observerOptions = {
    threshold: 0.3,
    rootMargin: '-80px 0px -70% 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');

        // Remove active class from all links
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    observer.observe(section);
  });
}

// =======================
// Utility Functions
// =======================

// Debounce function for performance optimization
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle function for scroll events
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// =======================
// Performance Monitoring
// =======================

// Log performance metrics (optional, for development)
if (window.performance && console.debug) {
  window.addEventListener('load', () => {
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    const connectTime = perfData.responseEnd - perfData.requestStart;
    const renderTime = perfData.domComplete - perfData.domLoading;

    console.debug('Page Load Time:', pageLoadTime + 'ms');
    console.debug('Connect Time:', connectTime + 'ms');
    console.debug('Render Time:', renderTime + 'ms');
  });
}

// =======================
// Error Handling
// =======================

// Global error handler
window.addEventListener('error', (event) => {
  console.error('Global error:', event.error);
  // You can add error reporting service here (e.g., Sentry)
});

// Handle unhandled promise rejections
window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
  // You can add error reporting service here
});

// =======================
// Animated Background
// =======================

function initAnimatedBackground() {
  const blobs = document.querySelectorAll('.gradient-blob');

  // Add mouse move parallax effect
  document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    blobs.forEach((blob, index) => {
      const speed = (index + 1) * 0.5;
      const x = (mouseX - 0.5) * speed * 50;
      const y = (mouseY - 0.5) * speed * 50;

      blob.style.transform = `translate(${x}px, ${y}px)`;
    });
  });

  // Add random color shift over time
  function shiftColors() {
    const colors = [
      { name: 'purple', value: '#a855f7' },
      { name: 'pink', value: '#ec4899' },
      { name: 'blue', value: '#3b82f6' },
      { name: 'cyan', value: '#06b6d4' },
      { name: 'orange', value: '#f97316' },
      { name: 'yellow', value: '#facc15' }
    ];

    blobs.forEach((blob, index) => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      const currentBg = blob.style.background || '';

      // Subtle color changes without jarring transitions
      if (Math.random() > 0.7) {
        blob.style.background = `radial-gradient(circle, ${randomColor.value} 0%, transparent 70%)`;
      }
    });
  }

  // Shift colors every 10 seconds
  setInterval(shiftColors, 10000);
}
