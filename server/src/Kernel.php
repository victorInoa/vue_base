<?php
namespace App;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\RouteCollection;
use Symfony\Component\Routing\RequestContext;
use Symfony\Component\Routing\Matcher\UrlMatcher;
use Symfony\Component\Routing\Exception\ResourceNotFoundException;

class Kernel
{
  private RouteCollection $routes;

  public function __construct()
  {
    $this->routes = require dirname(__DIR__) . '/config/routes.php';
  }

  public function handle(Request $request): Response
  {
    $context = new RequestContext();
    $context->fromRequest($request);
    $matcher = new UrlMatcher($this->routes, $context);
    try {
      $parameters = $matcher->match($request->getPathInfo());
      $controller = $parameters['_controller'];
      unset($parameters['_controller']);

      return call_user_func_array($controller, $parameters);
    } catch (ResourceNotFoundException) {
      return new Response(
        json_encode(['error' => 'Not Found']),
        404,
        ['Content-Type' => 'application/json']
      );
    }
  }
}
