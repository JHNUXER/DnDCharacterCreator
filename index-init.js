Stats = ["AGI","CHR","DEX","END","FOR","INT","LUC","PER","STR","VIT"];
Races = {
  "null":{
    name:"null",
    stats:{
      "END":"+0"
    }
  },
  human:{
    name:"Human",
    stats:{
      "AGI":"+1","CHR":"+1","DEX":"+1","END":"+1","FOR":"+1",
      "INT":"+1","LUC":"+1","PER":"+1","STR":"+1","VIT":"+1"
    }
  },
  demon:{
    name:"Demon",
    stats:{
      "END":"+3","INT":"+2","STR":"+5"
    }
  }
};
StatValues = {
  "AGI":0,
  "CHR":0,
  "DEX":0,
  "END":0,
  "FOR":0,
  "INT":0,
  "LUC":0,
  "PER":0,
  "STR":0,
  "VIT":0
};
Classes = {
  // Melee
  berserker:{
    name:"Berserker",
    description:""
  },
  tank:{
    name:"Tank",
    description:""
  },
  knight:{
    name:"Knight",
    description:""
  },
  paladin:{
    name:"Paladin",
    description:""
  },
  // Ranger
  // Mage
  wizard:{
    name:"Wizard",
    description:""
  },
  blueMage:{
    name:"Blue Mage",
    description:""
  }
};

iClasses = 1;

// EFuncs:

addClass = function() {
  var cinID = "classin"+(iClasses-1);
  console.log("cinID = \""+cinID+"\"");
  var xo = document.getElementById(cinID);
  var xc = classin0.cloneNode(true);
  xc.id="classin"+(iClasses++);
  xo.insertAdjacentElement("afterend",xc);
}
