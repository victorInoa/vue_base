<?php

use App\Kernel;
use Symfony\Component\Dotenv\Dotenv;
use Symfony\Component\HttpFoundation\Request;

require dirname(__DIR__) . '/vendor/autoload.php';
$dotenv = new Dotenv();
$dotenv->loadEnv(dirname(__DIR__) . '/.env');
$request = Request::createFromGlobals();
$kernel   = new Kernel();
$response = $kernel->handle($request);
$response->send();
