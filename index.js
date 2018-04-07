// HTTP Parameters
function getHTTPParam(parameterName) {
  var result = null,
      tmp = [];
  location.search
      .substr(1)
      .split("&")
      .forEach(function (item) {
        tmp = item.split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
      });
  return result;
}

StatInputs = {
  "AGI":agiin,
  "CHR":chrin,
  "DEX":dexin,
  "END":endin,
  "FOR":forin,
  "INT":intin,
  "LUC":lucin,
  "PER":perin,
  "STR":strin,
  "VIT":vitin
};

var lv = getHTTPParam("level");
level.innerHTML = !(lv==null)?lv:"1";
var ilv = parseInt(level.innerHTML);
var spl = (Math.max(0,ilv - 1)*5)+30;
spout.innerHTML = ""+spl;

var knx = function(x) {
  var nx = x.toLowerCase()+"bonusout";
  console.log("KNX("+x+") = \""+nx+"\"");
  return nx;
}
racein.addEventListener("change", function() {
    var sV = racein.value;
    if (!(racein.value == "null" || racein.value == null)) {
      var Race = Races[sV];
      if (!(Race == "null" || Race == null)) {
        for (var i in Stats) {
          var doce = document.getElementById(knx(Stats[i]));
          doce.innerHTML = Race.stats[Stats[i]]?Race.stats[Stats[i]]:"0";
        }
        return;
      }
    }
    for (var i in Races.human.stats) document.getElementById(knx(i)).innerHTML=0;
});

function subtractSP(sp) {
  var nx = parseInt(spout.innerHTML)-sp;
  if (nx < 0) return false;
  spout.innerHTML=""+(nx)
  return true;
}

function updateUI(source) {
  for (var s in Stats) {
    var stat = Stats[s];
    var n = StatInputs[stat].value - StatValues[stat];
    if (subtractSP(n)) {
      StatValues[stat] += n;
    } else {
      source.value--;
    }
    // document.getElementById(stat+"total").innerHTML = statValues[i];
  }
}

for (var s in StatInputs) {
  StatInputs[s].addEventListener('change', function() {
    var source = event.target || event.srcElement;
    updateUI(source);
  });
}

for (var cC in Classes) {
  classin0.innerHTML+="<option value=\""+cC+"\" title=\""+Classes[cC].description+"\">"+Classes[cC].name+"</option>";
}

function getRace() {
  return Races[racein.value];
}

function getJSON() {
  var char = {};
  char.name = namein.value;
  char.race = racein.value;
  char.sex = sexin.value;
  char.class = [];
  for (var i = 0; i < iClasses; i++) {
    var de = document.getElementById("classin"+i);
    var ht = de.value;
    char.class[i] = ht;
  }
  char.alignment = (cnlin.value+" "+engin.value).replace("neutral neutral","pure neutral");
  char.stats = {};
  for (var s in Stats) {
    var stat = Stats[s];
    char.stats[stat] = StatInputs[stat].value;
  }
  var rStats = getRace().stats;
  for (var s in rStats) {
    char.stats[s] = ""+(parseInt(char.stats[s])+parseInt(rStats[s].replace("+","")));
  }
  //alert(JSON.stringify(char,null,2));
  jsonout.innerHTML = JSON.stringify(char,null,2);
}
