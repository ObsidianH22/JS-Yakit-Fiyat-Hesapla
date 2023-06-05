let dizel = 24.53
let benzin = 22.25
let lpg = 11.1


function selectOption() {
   let dropdown = document.getElementById('dropdown');
   // get the index of the selected option
   let selectedIndex = dropdown.selectedIndex;
   // get a selected option and text value using the text property
  // let selectedValue = dropdown.options[selectedIndex].text;
   sonuc= Number(selectedIndex);
   return sonuc;

}
    document.getElementById("hesapla").onclick=function(){
    hesapla()
};

function hesapla(){
     if(sonuc==0){
        document.getElementById("sonuc").innerHTML=" Lütfen yakıt tipiniz seçiniz";
    }
     
    else if(sonuc==1){
        let miktar=document.getElementById("miktar").value;
     document.getElementById("sonuc").innerHTML=(miktar/dizel).toFixed(2) + " Litre";
     
}
    else  if(sonuc==2) {
    let miktar=document.getElementById("miktar").value;
    document.getElementById("sonuc").innerHTML=(miktar/benzin).toFixed(2) + " Litre";
}
    else  if(sonuc==3) {
    let miktar=document.getElementById("miktar").value;
    document.getElementById("sonuc").innerHTML=(miktar/lpg).toFixed(2) + " Litre";
}
   
}

//yakıt miktarı girilmezse ne olacak. uyarı vermesi lazım. 
