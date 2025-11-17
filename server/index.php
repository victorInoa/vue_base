<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); //todo delete this on production
require_once __DIR__ . '/../vendor/autoload.php';
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/../');
$dotenv->load();
var_dump($_ENV['SOME_ENV_VAR']);
echo json_encode(
  [
    'status' => 'ok',
    'data'   => [
      'message' => 'Hello World',
    ],
  ]
);
