<?php
// Connect to your database
$servername = "6upkq.h.filess.io";
$username = "CollegeManagement_popularleg";
$password = "44030b1afaeed4c8ac2d574ae03f48df7dd57000";
$dbname = "CollegeManagement_popularleg";
$port="3306";

$conn = new mysqli($servername, $username, $password, $dbname,$port);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// // Get the current user's ID (replace with your actual method of obtaining it)
// $userId = 1; // Replace with the actual user ID

// // Retrieve user information from the database
// $sql = "SELECT profile_image FROM users WHERE id = ?";
// $stmt = $conn->prepare($sql);
// $stmt->bind_param("i", $userId);
// $stmt->execute();
// $result = $stmt->get_result();

// // Check if a user was found
// if ($result->num_rows > 0) {
//     $row = $result->fetch_assoc();
//     $profileImage = $row['profile_image'];

//     // Display the profile image
//     echo '<img src="' . $profileImage . '" alt="Profile Image">';
// } else {
//     // Handle the case where no user was found (e.g., display a default image)
//     echo '<img src="default_profile.jpg" alt="Profile Image">';
// }

// $stmt->close();
$conn->close();
?>