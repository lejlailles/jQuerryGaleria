
var kepObj1 = {
    kep: "8.jpg",
    cim: "Cím 1",
    leiras: "1. kép leírása"


};

var kepObj2 = {
    kep: "9.jpg",
    cim: "Cím 2",
    leiras: "2. kép leírása"

};

var kepObj3 = {
    kep: "10.jpg",
    cim: "Cím 3",
    leiras: "3. kép leírása"

};

var objektumTomb = [kepObj1,kepObj2,kepObj3];

$(function(){
      beTolt(0);
   
    

    var elem = '<div id="1" class="kepTarolo"><img src="" alt=""/> <h1></h1> <p></p> </div>';
    for (var i = 0; i < objektumTomb.length; i++) {
        $('article').eq(0).append (elem);


    }




    var kepElemCim = $(".kepTarolo h1");
    var kepElem = $(".kepTarolo");
    var kepElemTartalom = $(".kepTarolo p");
    var kep = $(".kepTarolo img");

    for (var i = 0; i < kep.length; i++) {
        $("article div").eq(i).attr("id",i); 
        kep.eq(i).attr("src",objektumTomb[i].kep);
        kepElemCim.eq(i).html(objektumTomb[i].cim);
        kepElemTartalom.eq(i).html(objektumTomb[i].leiras);

    }

    for (var i = 0; i < kepElemCim.length; i++) {

        kepElem.eq(i).mouseenter(formazFel);
        kepElem.eq(i).mouseleave(formazLe);
        kepElem.eq(i).click(nagyKepBetolt);
        }

    
});


function formazFel() {

    $(this).addClass("kepTaroloAktiv");

}
function formazLe() {

    $(this).removeClass("kepTaroloAktiv");

}


function nagyKepBetolt() {
       var id=$(this).attr("id");
    
        beTolt(id);
        
   
 
 
   

}

function beTolt(index) {
  
    $ ("#nagykep img").attr('src',objektumTomb[index].kep);
    $ ("#nagykep h1").html(objektumTomb[index].kep);
    $ ("#nagykep p").html(objektumTomb[index].kep);

}