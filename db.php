<?php 
$dbJson = file_get_contents('db.json');
$db = json_decode($dbJson, true);
$works = $db['works'];

function get_works() {
  global $works;
  return $works;
}

function get_work($slug) {
  if (!isset($slug)) return;
  global $works;

  $founded = array();
  foreach($works as $work) {
    if ($work['slug'] == $slug) {
      $founded = $work;
      break;
    }
  }
  return $founded;
}

function get_work_by_id($id) {
  if (!isset($id)) return;
  global $works;

  if (isset($works[$id-1])) { 
    return $works[$id-1]; 
  } else { 
    return false; 
  }
}
?>