<?php

try {
    $conn = new PDO('mysql:dbname=fromage;host=localhost:3306', 'root','');


} catch (PDOException $exception) {
    die($exception-> getMessage());

}
$v= $_POST['email'];
$sql="
    SELECT 
    * 
    FROM
    utilisateur
    WHERE
    mail='$v'
;";
    
$stmt=$conn -> prepare($sql);
$stmt-> execute();
$row = $stmt->fetch(PDO::FETCH_ASSOC);


if ($row != NULL){
    if($row["password"] == $_POST['password']){
        header("Location: index.html#connexion"); //Permet avec le mots connexion d'enlever les boutons Connection
        }
    else{
        echo "Mauvais Mdp";
    };
    
    
}
else {
    echo "Mauvais Email ";
}