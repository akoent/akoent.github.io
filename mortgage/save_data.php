 ### Data Storage Page (save_data.php)
```php
<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = [
        'first_name' => $_POST['first_name'],
        'last_name' => $_POST['last_name'],
        'email' => $_POST['email']
    ];
    file_put_contents('subscribers.json', json_encode($data, JSON_PRETTY_PRINT), FILE_APPEND);
    header('Location: thank_you.html');
    exit;
}
?>
