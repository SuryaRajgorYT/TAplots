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
  