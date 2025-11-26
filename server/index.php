<?php
// Set CORS headers
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
  echo(
    'Verifica que tengas definidas las siguientes variables de entorno:' . print_r($requiredEnvVariables, true)
  );
  die();
}
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get JSON input for POST requests
    $input = json_decode(file_get_contents('php://input'), true);
    if (json_last_error() === JSON_ERROR_NONE) {
        $_POST = array_merge($_POST, $input);
    }
  if ($_POST["action"] === 'login') {
    $user_name = $_POST["user_name"];
    $password  = $_POST["password"];
    echo json_encode(
      [
        'status' => 'ok',
        'data'   => [
          'user_name' => $user_name . '__pasador_por_el_post',
          'password'  => $password . '__pasador_por_el_post',
        ],
        'env'    => $_ENV['VITE_SERVER_ROOT_URL'],
      ],
    );
    die();
  }
}
echo json_encode(
  [
    'status' => 'ok',
    'data'   => [
      'reports' => [
        0 => [
          'acronym' => 'ACR',
          'name'    => 'Report Name',
        ],
        1 => [
          'acronym' => 'DN',
          'name'    => 'Distrito Nacional',
        ],
      ],
      'env'     => $_ENV['VITE_SERVER_ROOT_URL'],
      'message' => 'Hello World',
    ],
  ]
);
