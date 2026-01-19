<?php
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
