<?php
namespace VictorInoa\Server;

final class EnvHandler
{
  public static function loadEnvFile(): void
  {
    (new Symfony\Component\Dotenv\Dotenv())->bootEnv(__DIR__ . '/.env');
  }

  public static function enviroment(): string
  {
    return self::get('APP_ENV', 'prold');
  }

  public static function get(string $key, mixed $default = null): mixed
  {
    return $_ENV[$key] ?? $_SERVER[$key] ?? $default;
  }

  public static function isDebug(): bool
  {
    return (bool)self::get('APP_DEBUG', false);
  }
}
