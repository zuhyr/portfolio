// Handle "View Portfolio" button click to scroll to portfolio section
document.getElementById('viewPortfolioBtn').addEventListener('click', function() {
    document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
  });
  
  // Handle contact form submission (basic alert for demo purposes)
  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    document.getElementById('contactForm').reset(); // Reset form fields after submission
  });
  