<?php
header('Content-Type: application/json; charset=UTF-8');

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
    $message = htmlspecialchars($_POST['message']);

    if (!$email) {
        echo json_encode(["status" => "error", "message" => "Invalid email address."]);
        exit;
    }

    if (empty($name) || empty($message)) {
        echo json_encode(["status" => "error", "message" => "Name and message are required."]);
        exit;
    }

    if (preg_match('/[\r\n]/', $email)) {
        echo json_encode(["status" => "error", "message" => "Header injection detected."]);
        exit;
    }

    $to = "abhinavalok318@gmail.com";
    $subject = "New Message from Portfolio Contact Form";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    $body = "Name: $name\n";
    $body .= "Email: $email\n\n";
    $body .= "Message:\n$message\n";

    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(["status" => "success", "message" => "Email sent successfully!"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Failed to send email."]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Invalid request method."]);
}
?>