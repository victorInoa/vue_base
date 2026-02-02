<?php

use Symfony\Component\Routing\Route;
use Symfony\Component\Routing\RouteCollection;
use App\Controller\HealthController;

$routes = new RouteCollection();
$routes->add(
  'health',
  new Route(
    '/health',
    ['_controller' => [new HealthController(), 'check']],
    [],
    [],
    '',
    [],
    ['GET']
  )
);

return $routes;
