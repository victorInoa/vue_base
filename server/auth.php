<?php
$_POST = array_merge($_POST, $input);
if ($_POST["action"] === 'login') {
  $userEmail = $_POST["user_email"];
  $password  = $_POST["password"];
  if ($userEmail === '' || $password === '') {
    echo json_encode(
      [
        'status'  => 'error',
        'message' => 'No puede haber campos vacíos',
        'data'    => [
          'userEmail' => $userEmail,
          'password'  => $password,
        ],
      ],
      JSON_THROW_ON_ERROR
    );
  } else {
    if ($userEmail === 'victorinoa16@gmail.com' && $password === 'password') {
      echo json_encode(
        [
          'status'  => 'ok',
          'message' => 'Tienes todo el acceso :D',
          'data'    => [
            'id'         => '0065ttt-394f-7fae-b686-add985b9cd1a',
            'email'      => $userEmail,
            'role'       => 'any',
            'fullName'   => 'Juan de los Palotes',
            'token'      => 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRpdGxlIiwiaWF0IjoxNjI4MjAzMjE5LCJleHAiOjE2OTQzMjQ2NzYsImF1ZCI6InRpdGxlIiwiaXNzIjoiYXBpIn0.V34Qh_8Q4QN1QFV8QeQKZqn2YnFh-Kb8P4ZX-P9_jQg',
            'token_type' => 'Bearer',
          ],
        ],
        JSON_THROW_ON_ERROR
      );
    } else {
      echo json_encode(
        [
          'status'  => 'warning',
          'message' => 'Debes pasar las credenciales correctas',
          'data'    => [
            'userEmail' => $userEmail,
            'password'  => $password,
          ],
        ],
        JSON_THROW_ON_ERROR
      );
    }
  }
}
