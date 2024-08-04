<?php
if (strpos($_SERVER['HTTP_USER_AGENT'], 'Mobile') !== false) {
    header('Location: /mobile/index.html');
} else {
    header('Location: /desktop/index.html');
}
exit;
?>
