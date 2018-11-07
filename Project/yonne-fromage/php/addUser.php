<?php

try {
    $conn = new PDO('mysql:dbname=jellyfish;host=localhost:3306', 'root','');


} catch (PDOException $exception) {
    die($exception-> getMessage());

}

$sql="
    INSERT INTO
    `utilisateur`
    
    VALUES
    (NULL, :nom, :prenom, :email, :password )
    ;
    ";
$stmt=$conn -> prepare($sql);
$stmt -> bindValue( ':nom',$_POST['nom']);
$stmt -> bindValue( ':prenom',$_POST['prenom']);
$stmt -> bindValue( ':email',$_POST['email']);
$stmt -> bindValue( ':password',$_POST['password']);
$stmt-> execute();

header("Location: index.html");