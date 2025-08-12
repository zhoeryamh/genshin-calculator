<?php
function load_genshin_data(string $jsonFile = __DIR__ . '/genshin.json'): array {
    $content = file_get_contents($jsonFile);
    return json_decode($content, true) ?? [];
}
?>
