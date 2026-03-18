<?php
session_start();
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Connexion à la base de données
    $conn = new mysqli("localhost", "root", "", "echooo");

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Préparer et exécuter la requête SQL pour insérer les nouvelles informations d'identification
    $stmt = $conn->prepare("INSERT INTO users (username, password) VALUES (?, ?)");
    $stmt->bind_param("ss", $username, $password);

    if ($stmt->execute()) {
        // Compte créé avec succès
        header("Location: connexion.html"); // Rediriger vers la page de connexion
        exit();
    } else {
        // Erreur lors de la création du compte
        echo "Erreur: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}
?>