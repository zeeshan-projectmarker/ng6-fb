<?php
$remoteImage = "http://foggybeans-portal.vteamslabs.com/storage/".$_GET['image'];
$imginfo = getimagesize($remoteImage);
header("Content-type: {$imginfo['mime']}");
readfile($remoteImage);