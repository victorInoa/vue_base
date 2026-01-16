<?php
sleep(5);
$users = [
  [
    'id'      => '550e8400-e29b-41d4-a716-446655440000',
    'profile' => 'GOD',
    'name'    => 'Victor Inoa',
    'photo'   => 'https://observatorio.82-165-212-149.plesk.page/content/users-profiles/whatsapp-image-2022-02-22-at-9-36-47-am-1.jpeg',
  ],
  [
    'id'      => '6ba7b810-9dad-11d1-80b4-00c04fd430c8',
    'profile' => 'SU_ADMIN',
    'name'    => 'Juan de los Palotes',
    'photo'   => 'https://observatorio.82-165-212-149.plesk.page/content/users-profiles/148.jpg',
  ],
  [
    'id'      => '123e4567-e89b-12d3-a456-426614174001',
    'profile' => 'ADMIN',
    'name'    => 'Maria Garcia',
    'photo'   => 'https://observatorio.82-165-212-149.plesk.page/content/users-profiles/logo-del-ayuntamiento.jpg',
  ],
  [
    'id'      => '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4b01',
    'profile' => 'ADMIN',
    'name'    => 'John Smith',
    'photo'   => 'https://observatorio.82-165-212-149.plesk.page/content/users-profiles/e03a4193-0b98-4607-8458-c79448d2dcf6.jpeg',
  ],
  [
    'id'      => 'f47ac10b-58cc-4372-a567-0e02b2c3d470',
    'profile' => 'LINK',
    'name'    => 'Sarah Johnson',
    'photo'   => 'https://observatorio.82-165-212-149.plesk.page/content/users-profiles/descarga-1.png',
  ],
  [
    'id'      => '1a4a1ec0-8e7b-11ed-a1eb-0242ac120003',
    'profile' => 'ADMIN',
    'name'    => 'David Kim',
    'photo'   => 'https://observatorio.82-165-212-149.plesk.page/content/users-profiles/166edb56-f168-41c6-9cec-f6e114c10cf1-original.jpg',
  ],
  [
    'id'      => '2a3b4c5d-6e7f-8a9b-0c1d-2e3f4a5b6c7d',
    'profile' => 'ADMIN_DEMO',
    'name'    => 'Emma Wilson',
    'photo'   => 'https://observatorio.82-165-212-149.plesk.page/content/users-profiles/wp2831865-1080p-gaming-wallpapers.jpg',
  ],
];
echo json_encode($users);
