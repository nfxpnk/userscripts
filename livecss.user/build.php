<?php

$html = file_get_contents('livecss.user.html');
preg_match("#<div class=\"nfxpnk\-button nfxpnk\-button\-off\" id=\"nfxpnk-button\">(.+?)<\/div>\s+<\/body>#msiu", $html, $html);
$html = $html[1];
$html = oneString($html);

$css = file_get_contents('styles.css');
$css = oneString($css);

$js = file_get_contents('livecss.user.template.js');
$js = str_replace('{$html}', "var html = '" . $html . "';", $js);
$js = str_replace('{$css}', "var css = '" . $css . "';", $js);

file_put_contents('livecss.user.js', $js);

function oneString($string) {
	return preg_replace("@\s{2,}@s", '', $string);
}