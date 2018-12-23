<?php

//llamando a los campos
$nombre= $_POST['nombre'];
$apellido= $_POST['apellido'];
$email= $_POST['email'];
$textarea= $_POST['textarea'];

//datos para el correo

$destinatario ="admin@cubitcode.com";
$asunto="Consultas";

//variable de toda el form, se crea una variable carta

$carta = "DE: $nombre \n";
$carta .= "Apellido:$apellido \n";
$carta .= "Email: $email \n";
$carta .= "Mensaje: $textarea";



//enviando mensaje

mail($destinatario,$asunto,$carta);
header('Location: https://www.cubitcode.com'); 
   
?>