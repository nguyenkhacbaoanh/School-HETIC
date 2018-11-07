<?php
require 'vendor/autoload.php';

use RecastAI\Client;

$client = new Client('7eb8a157d82f1b52218413a4c68b880a');

$res = $client->request->converseText("test");
var_dump($res->raw());

?>