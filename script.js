// Minimal JavaScript for enhanced interactions
(function() {
    'use strict';
    
    // Email button will open default mail client (no preventDefault)
    
    // Ensure proper focus management for accessibility
    document.addEventListener('DOMContentLoaded', function() {
        // Skip to main content for screen readers
        const main = document.querySelector('main');
        if (main) {
            main.setAttribute('role', 'main');
            main.setAttribute('tabindex', '-1');
        }
    });
    
    // Prevent all scrolling
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    document.body.style.height = '100vh';
    document.documentElement.style.height = '100vh';
})();
