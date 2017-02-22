var kruuna = "http://vaolabs.fi/juhotuominen3/heads.jpg";
var klaava = "http://vaolabs.fi/juhotuominen3/tails.jpg";
var valinta = 0;
var voitto,i;
var u = false;

new tabris.TextView({
  top: 5, left: 5, right: 5,
  alignment: "center",
  text: "Kruuna vai klaava?",
  font: "bold 37px"
}).appendTo(tabris.ui.contentView)

var kolikko = new tabris.ImageView({
  centerX: 0, top: 75,
  opacity: 0,
}).on("animationend", function(){
  if (voitto == valinta){
    btn1.set("text", "Sait pisteen!")
    pisteet.set("text", "Pisteesi: "+(++i))
  } else {
    btn1.set("text", "Yritä uudestaan!")
  }
  valinta = 0
  btn1.set("enabled", false)
  valitseklaava.set("enabled", true)
  valitsekruuna.set("enabled", true)
  valitseklaava.set("background", "rgb(215,215,215)")
  valitsekruuna.set("background", "rgb(215,215,215)")
}).appendTo(tabris.ui.contentView);

var pisteet = new tabris.TextView({
  centerX: 0, bottom: 25,
  text: "Pisteesi: " + (i = 0)
}).appendTo(tabris.ui.contentView);

var btn1 = new tabris.Button({
  layoutData:{centerX: 0, bottom: 125},
  text: "Heitä!",
  enabled: false
}).on("select", heitto).appendTo(tabris.ui.contentView);

var valitsekruuna = new tabris.Button({
  layoutData: {bottom: 125, right: [btn1, 15]},
  text: "Kruuna"
}).on("select", function(){
  valinta = 1
  this.set("background", "rgb(189,189,189)")
  valitseklaava.set("background", "rgb(215,215,215)")
  btn1.set("enabled", true)
}).appendTo(tabris.ui.contentView);

var valitseklaava = new tabris.Button({
  layoutData: {bottom: 125, left: [btn1, 15]},
  text: "Klaava"
}).on("select", function(){
  valinta = 2
  this.set("background", "rgb(189,189,189)")
  valitsekruuna.set("background", "rgb(215,215,215)")
  btn1.set("enabled", true)
}).appendTo(tabris.ui.contentView);

var info = new tabris.Button({
  centerX: 0, top: [btn1, 15], width: 150,
  text: "Ohjeet"
}).on("select", infos).appendTo(tabris.ui.contentView);

var info1 = new tabris.Composite({
  left: 20, right: 20, top: 130, bottom: 230,
  cornerRadius: 10,
  elevation: 2,
  background: "rgb(240,240,240)",
  opacity: 0,
  enabled: false
}).appendTo(tabris.ui.contentView)

var info2 = new tabris.TextView({
  left: 10, top: 0, right: 10, bottom: 0,
  text: 'Tervetuloa kruuna vai klaava peliin! Pelin tarkoituksena on pelaajan valita joko kruuna tai klaava, ja sen jälkeen "heittää" kolikko. Kolikko arpoo joko kruunan tai klaavan, ja jos pelaajan valinta on sama kuin vastaus, saa pisteen.',
  opacity: 0,
  font: "23px",
  alignment: "center"
}).appendTo(info1)

function heitto(){
  if (valinta > 0){
  btn1.set("enabled", false)
  kolikko.set("opacity", 0)
  valitseklaava.set("enabled", false)
  valitsekruuna.set("enabled", false)
  kolikko.animate({opacity: 1},{delay: 2000, duration: 500});
 voitto = Math.floor((Math.random() * 2) + 1);
   if (voitto == 1){
    kolikko.set({image: {src: kruuna, height: 300, width: 300}})
  } else if (voitto == 2){
    kolikko.set({image: {src: klaava, height: 300, width: 300}})
  }
  }
}
function infos(){
  if (u == false){
    info1.animate({opacity: 1}, {duration: 500})
    info2.animate({opacity: 1}, {duration: 500})
    u = true
  } else { 
    u = false
    info1.animate({opacity: 0}, {duration: 500}) 
    info2.animate({opacity: 0}, {duration: 500})
  }
}
