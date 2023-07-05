document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form');
    const confirmation = document.getElementById('confirmation');
    const submitBtn = document.getElementById('submit-btn');
  
    submitBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
  
      // Replace the following line with your backend code to send the form data
      // For this example, we'll just show a confirmation message
      showConfirmation();
    });
  
    function showConfirmation() {
      contactForm.style.display = 'none';
      confirmation.style.display = 'block';
    }

    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
  
        // Get form data
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;
  
        // Configure SMTP settings
        Email.server = {
          host: 'smtp.office365.com',
          port: 587,
          username: 'no-reply@suryarajgor.com',
          password: 'Manoj@mahadev143',
          ssl: false
        };
  
        // Send email
        Email.send({
          SecureToken: '', // Set to empty string
          To: 'mborisagar@gmail.com', // Replace with the recipient's email address
          From: email,
          Subject: 'New Contact Form Submission',
          Body: 'Name: ' + name + '<br>Email: ' + email + '<br>Message: ' + message
        }).then(function(message) {
          alert('Email sent successfully!');
        }).catch(function(error) {
          alert('Failed to send email. Please try again later.');
          console.log(error);
        });
      });    
  });
  