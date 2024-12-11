<?php
// Recebe os dados do formulário via POST
$name = isset($_POST['name']) ? $_POST['name'] : '';
$email = isset($_POST['email']) ? $_POST['email'] : '';
$description = isset($_POST['description']) ? $_POST['description'] : '';

// Retorna os dados como JSON
echo json_encode([
    'name' => $name,
    'email' => $email,
    'description' => $description
]);

header("Access-Control-Allow-Origin: *");  // Permite acesso de qualquer origem
header("Access-Control-Allow-Methods: POST");  // Permite apenas o método POST

?>
