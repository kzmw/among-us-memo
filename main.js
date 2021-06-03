function map(){
  const map_name = document.getElementById("map_select").value;
  if (map_name == "The Airship"){
    document.getElementById("map_field").innerHTML = '<img border="0" src="./img/the_airship.png" alt="The Airshipのマップ">';
  }
  else if (map_name == "The Skeld"){
    document.getElementById("map_field").innerHTML = '<img border="0" src="./img/the_skeld.png" alt="The Skeldのマップ">';
  }
  else if (map_name == "MIRA HQ"){
    document.getElementById("map_field").innerHTML = '<img border="0" src="./img/mira_hq.png" alt="MIRA HQのマップ">';
  }
  else if (map_name == "POLUS"){
    document.getElementById("map_field").innerHTML = '<img border="0" src="./img/polus.png" alt="POLUSのマップ">';
  }
  else if (map_name == "blank"){
    document.getElementById("map_field").innerHTML = '';
  }
}
