function sayfa(){
  data =document.getElementById("data").value;
  var veri = data.split(",");
  var uzunluk = veri.length;
  for(var i = 0;i<uzunluk;i++){
    Number(veri[i]);
  }
  document.getElementById("modsonuc").innerHTML ='Sonuc: ' + modHesapla(veri);
  document.getElementById("medyansonuc").innerHTML ='Sonuc: ' + medyanHesapla(veri)+'<br><br>';
  document.getElementById("sapmasonuc").innerHTML ='Sonuç: ' + standartSapmaHesapla(veri) + '<br>, yaklaşık:' + Math.round(standartSapmaHesapla(veri));
  document.getElementById("varyanssonuc").innerHTML ='Sonuç: ' + varyansHesapla(veri) + '<br>, yaklaşık: ' + Math.round(varyansHesapla(veri));
  document.getElementById("aortsonuc").innerHTML ='Sonuç: ' + aritmetikOrtHesapla(veri) + '<br>, yaklaşık: ' + Math.round(aritmetikOrtHesapla(veri));
  document.getElementById("hortsonuc").innerHTML ='Sonuç: ' + harmonikOrtHesapla(veri) + '<br>, yaklaşık: ' + Math.round(harmonikOrtHesapla(veri));
  document.getElementById("gortsonuc").innerHTML ='Sonuç: ' + geometrikOrtHesapla(veri) + '<br>, yaklaşık: ' + Math.round(geometrikOrtHesapla(veri));
  document.getElementById("osapmasonuc").innerHTML ='Sonuç: ' + ortalamaMutlakSapmaHesapla(veri) + '<br>, yaklaşık: ' + Math.round(ortalamaMutlakSapmaHesapla(veri));
  document.getElementById("dkatsayısısonuc").innerHTML ='Sonuç: ' + degiskenKatsayisiHesapla(veri) + '<br>, yaklaşık: ' + Math.round( degiskenKatsayisiHesapla(veri));
  histogramOlustur(veri);
}



