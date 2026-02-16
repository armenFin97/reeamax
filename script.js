// Minimal JavaScript for enhanced interactions
(function() {
    'use strict';
    
    // Track CTA button clicks (optional analytics)
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            // Optional: Add analytics tracking here
            console.log('CTA button clicked');
        });
    }
    
    // Ensure proper focus management for accessibility
    document.addEventListener('DOMContentLoaded', function() {
        // Skip to main content for screen readers
        const main = document.querySelector('main');
        if (main) {
            main.setAttribute('role', 'main');
            main.setAttribute('tabindex', '-1');
        }
    });
    
    // Ensure no scrolling on all devices
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100vh';
})();
