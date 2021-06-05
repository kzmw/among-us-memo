function map(){
  const map_name = document.getElementById("map_select").value;
  if (map_name == "The Airship"){
    document.getElementById("map_field").innerHTML = '<img border="0" src="./img/the_airship.png" style="zoom: 60%;" alt="The Airshipのマップ"><br>画像引用：でかめのついったー(とみ様)';
    var locate = ["","コックピット","コミュニケーション","エンジン","金庫室","宿舎前通路","武器庫","展望デッキ","キッチン","セキュリティ","エレクトリカル","診察室","貨物室","ラウンジ","アーカイブ","シャワー室","メインホール","昇降機","不明"]
    for (var i=1;i<=12;i++){
    var select_id_name = '#dead' + String(i)
    $( select_id_name + ' > option').remove();
    for(var j=0;j<=locate.length-1;j++){
    $(select_id_name).append($('<option>').html(locate[j]));
    }
    }
  }
  else if (map_name == "The Skeld"){
    document.getElementById("map_field").innerHTML = '<img border="0" src="./img/the_skeld.png" style="zoom: 60%;" alt="The Skeldのマップ"><br>画像引用：でかめのついったー(とみ様)';
    var locate = ["","リアクター","アッパーエンジン","ロワーエンジン","セキュリティ","エレクトリカル","ストレージ","アドミン","カフェテリア","メッドベイ","ウェポン","O2","ナビゲーション","シールド","コミュニケーション","不明"]
    for (var i=1;i<=12;i++){
    var select_id_name = '#dead' + String(i)
    $( select_id_name + ' > option').remove();
    for(var j=0;j<=locate.length-1;j++){
    $(select_id_name).append($('<option>').html(locate[j]));
    }
    }
  }
  else if (map_name == "MIRA HQ"){
    document.getElementById("map_field").innerHTML = '<img border="0" src="./img/mira_hq.png" style="zoom: 60%;" alt="MIRA HQのマップ"><br>画像引用：でかめのついったー(とみ様)';
    var locate = ["","カフェテリア","バルコニー","ストレージ","コミュニケーション","メッドベイ","ロッカー","除染室","ラボラトリー","リアクター","ランチパッド","アドミン","オフィス","グリーンハウス","不明"]
    for (var i=1;i<=12;i++){
    var select_id_name = '#dead' + String(i)
    $( select_id_name + ' > option').remove();
    for(var j=0;j<=locate.length-1;j++){
    $(select_id_name).append($('<option>').html(locate[j]));
    }
    }
  }
  else if (map_name == "POLUS"){
    document.getElementById("map_field").innerHTML = '<img border="0" src="./img/polus.png" style="zoom: 60%;" alt="POLUSのマップ"><br>画像引用：でかめのついったー(とみ様)';
    var locate = ["","ドロップシップ","ストレージ","リアクター左","リアクター右","セキュリティ","エレクトリカル","O2","ボイラー","ウェポン","コミュニケーション","オフィス左","オフィス右","オフィス通路・入口","アドミン","除染室左","標本室","除染室右","メッドベイ","ラボラトリー","トイレ","ドリル","不明"]
    for (var i=1;i<=12;i++){
    var select_id_name = '#dead' + String(i)
    $( select_id_name + ' > option').remove();
    for(var j=0;j<=locate.length-1;j++){
    $(select_id_name).append($('<option>').html(locate[j]));
    }
    }
  }
  else if (map_name == "blank"){
    document.getElementById("map_field").innerHTML = '';
    var locate = ["","不明"]
    for (var i=1;i<=12;i++){
    var select_id_name = '#dead' + String(i)
    $( select_id_name + ' > option').remove();
    for(var j=0;j<=locate.length-1;j++){
    $(select_id_name).append($('<option>').html(locate[j]));
    }
    }
  }
}
