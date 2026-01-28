<?php

use Valorin\Random\Random;

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
      $tokenStart     = 'SSP_';
      $generatedToken = Random::token(37);
      echo json_encode(
        [
          'status'     => 'ok',
          'message'    => 'Tienes todo el acceso :D',
          'data'       => [
            'id'       => '0065ttt-394f-7fae-b686-add985b9cd1a',
            'email'    => $userEmail,
            'role'     => 'LINK',
            'fullName' => 'Juan de los Palotes',
            'photo'    => 'https://observatorio.82-165-212-149.plesk.page/content/users-profiles/wp2831865-1080p-gaming-wallpapers.jpg',
          ],
          'token'      => $tokenStart . $generatedToken,
          'token_type' => 'Bearer',
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
