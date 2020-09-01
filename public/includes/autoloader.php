<?php

// this is for autoloading classes when an object is instantiated in a file
spl_autoload_register('myAutoLoader');

// set_include_path('.;C:\php\pear');
function myAutoLoader($className) {
  $url = $_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];
  // ini_set('include_path', 'C:\php\pear');
  if (strpos($url, 'includes') !== false) {
    echo $url . " hello";
    $path = '../classes/';
  } else {
    $path = 'classes/';
  }
  $extension = ".class.php";
  $fullPath = $path . $className . $extension;
  // set_include_path(get_include_path() . PATH_SEPARATOR . $path);
echo $_SERVER['HTTP_HOST'];
echo getcwd();
  include_once strtolower($fullPath);
  
  echo '<br>';

}
?>