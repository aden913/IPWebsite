<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Set recipient email address
    $to = "inquisitiveprogramming.com";

    // Set email subject
    $subject = "New Contact Form Submission";

    // Build email content
    $body = "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Message:\n$message\n";

    // Send email
    if (mail($to, $subject, $body)) {
        echo "<h2>Thank you for contacting us!</h2>";
    } else {
        echo "<h2>Sorry, something went wrong. Please try again later.</h2>";
    }
} else {
    // Redirect users who try to access this page directly
    header("Location: index.html");
    exit;
}
?>
