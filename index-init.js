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
  // Fighter
  berserker:{
    name:"Berserker",
    description:"Berserkers are like glass cannons...they can deal a lot of damage, but they can't take very much."
  },
  tank:{
    name:"Tank",
    description:"Tanks are the opposite of Berserkers They can take a ton of damage, and carry a ton of armor, but tend to lack a bit in the offensive capabilities."
  },
  knight:{
    name:"Knight",
    description:"Knights wear medium-heavy armor and tend to carry heavy shields and weaponry, though often at the sacrifice of movement speed. The knight may also gain support abilities."
  },
  paladin:{
    name:"Paladin",
    description:"The paladin is a Fighter with the power of Light and healing magic, as well as defensive buffs for their allies. Their devotion to their deity gives them various prayers and healing abilities."
  },
  darkKnight:{
    name:"Dark Knight",
    description:"The dark knight is the opposite of the paladin, possessing powers of darkness, and often necromantic or dark-magic abilities (often which cost HP)."
  }
  // Ranger
  // Mage
  wizard:{
    name:"Wizard",
    description:"These mages learn to study and wield magic, usually taking years of study, and leaving them out of shape...usually."
  },
  blueMage:{
    name:"Mimic",
    description:"These mages learn various spells and special abilities from monsters encountered in travel. They can only copy abilities and spells which they have seen in action, or cast an absorbtion spell to retain the ability."
  },
  // Rogue
  assassin:{
    name:"Assassin",
    description:"Highly offensive rogues, sacrificing technical expertese for better stealth and killing abilities, Assassins are skilled at poisoning and weakening their prey. They specialize in taking down foes efficiently and quietly."
  }
  // Cleric
};

iClasses = 1;

// EFuncs:

tPars = function(text) {
  var nl = "&#013;";
  var lines = [];
  while (text.length > 0) {
    var lek = text.substring(0,Math.min(text.length,48));
    lines.push(lek);
    text = text.substring(48,text.length);
  }
  var s0 = "";
  for (var i in lines) {
    s0 += lines[i];
    if (i < lines.length) s0 += nl;
  }
  return s0.replace(nl+" ",nl).replace(" "+nl,nl);
}

addClass = function() {
  var cinID = "classin"+(iClasses-1);
  console.log("cinID = \""+cinID+"\"");
  var xo = document.getElementById(cinID);
  var xc = classin0.cloneNode(true);
  xc.id="classin"+(iClasses++);
  xo.insertAdjacentElement("afterend",xc);
}
