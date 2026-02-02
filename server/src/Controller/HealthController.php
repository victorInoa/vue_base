<?php
namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;

class HealthController
{
  public function check(): Response
  {
    return new Response(
      json_encode(
        [
          'status'    => 'ok',
          'timestamp' => time(),
        ]
      ),
      200,
      ['Content-Type' => 'application/json']
    );
  }
}
