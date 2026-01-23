<?php
// Set CORS headers
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

$isHttps = ! empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off';
session_set_cookie_params(
  [
    'httponly' => true,
    'secure'   => $isHttps,
    'samesite' => $isHttps ? 'None' : 'Lax',
  ]
);
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Content-Type: application/json');
// Handle preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(200);
  exit();
}
require_once __DIR__ . '/../vendor/autoload.php';
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/../');
$dotenv->load();
try {
  $requiredEnvVariables =
    [
      'PLATFORM_VERSION',
      'PLATFORM_ENVIRONMENT',
      'PLATFORM_DEPLOY_ROOT',
      'PLATFORM_DIR_INTERNAL_ERRORS_LOGS',
      'PLATFORM_DIR_TEMP_SESSIONS',
      'PLATFORM_SESSION_DURATION',
      'PLATFORM_TIME_ZONE',
      'USER_SESSION_NAME',
      'PLATFORM_PRODUCTION_DB_CONN_HOST',
      'PLATFORM_PRODUCTION_DB_CONN_DB',
      'PLATFORM_PRODUCTION_DB_CONN_USER',
      'PLATFORM_PRODUCTION_DB_CONN_PASSWORD',
      'REDIS_SCHEME',
      'REDIS_HOST',
      'REDIS_PORT',
      'REDIS_PASSWORD',
      'REDIS_PREFIX',
      'VITE_SERVER_ROOT_URL',
    ];
  $dotenv->required($requiredEnvVariables);
} catch (Dotenv\Exception\ValidationException) {
  http_response_code(500);
  echo 'Verífica que tengas definidas las siguientes variables de entorno:' . print_r($requiredEnvVariables, true);
  die();
}
$input = json_decode(file_get_contents('php://input'), true);
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['require']) && $_GET['require'] === 'users') {
  require_once 'list_of_users.php';
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST' && json_last_error() === JSON_ERROR_NONE) {
  require_once 'auth.php';
} elseif ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['require']) && $_GET['require'] === 'jwt') {
  $key     = 'kjsdhf kjdsfhsdkjfh kjashfgaslkjfhsa dkflhsalkfgjhasl jkhfsaldkfjh';
  $payload = [
    'iss' => 'http://example.org',
    'aud' => 'http://example.com',
    'iat' => 1356999524,
    'nbf' => 1357000000,
  ];
  $jwt     = JWT::encode($payload, $key, 'HS256');
  $decoded = JWT::decode($jwt, new Key($key, 'HS256'));
  print_r($jwt);
} else {
  require_once 'default.php';
}
