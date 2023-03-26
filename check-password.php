<?php
$valid_password = 'vault'; 
$user_password = $_POST['password'];

if ($user_password == $valid_password) {
  header('Location: /lockedvault.html');
  exit();
} else {
  echo 'Incorrect password.';
}
?>
