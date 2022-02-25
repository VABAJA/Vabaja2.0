
 <?php
 if(isset($_POST['email'])) {
     $email_to = "ventas@vabaja.com.mx";
     $email_subject = "Contacto desde el sitio web"
 }

 if(!isset($_POST['nombre'])) ||
     !isset($_POST['email']) ||
     !isset($_POST['numero']) ||
     !isset($_POST['ciudad']) ||
     !isset($_POST['mensaje']) ||
     
 

 echo "<b>Ocurrió un error y el formulario no ha sido enviado. </b><br />";
 echo "<Por favor, vuelva a trás y verifique la información ingresada" <br />;
 die();
 }

 $email_message = "Detalles del formulario de contacto: \n\n";
 $email_message .= "Nombre" .$_POST['nombre']. "\n";
 $email_message .= "Email" ._POST['email']. "\n";
 $email_message .= "Número" .$_POST['numero']. "\n";
 $email_message .= "Ciudad" ._POST['ciudad']. "\n";
 $email_message .= "Mensaje" ._POST['mensaje']. "\n";


 $headers = 'From: '.$email_from. "\r\n".
 'Reply-To: '.$email_from. "\r\n".
 'X-Mailer: PHP/' .phpversion();
 @mail($email_to, $email_subject, $email_message, $headers);

 echo "El formulario se ha enviado con éxito";
}
?>