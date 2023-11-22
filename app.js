//!Template literals(sablon dizileri)

const isim ="Mehmet"

const mesaj = `Merhaba, ${isim}`

console.log(mesaj)

const birim_fiyat =100;
const adet= 3 ;
 const para_birimi ="TL"

 const toplam_fiyat = `Toplam:  ${birim_fiyat * adet} ${para_birimi}`
 console.log(toplam_fiyat) ; 

 //todo: Shorthand Property Names 
 //objeler key value seklinde anahtar olarak tanımlanır eğerki obje de anahtar direk tanımlanır ise key value belirtmemiz gerekmez; bu durumda değişkenin direk objeye girilmesi değiskeni key, değerini ise value olarak kabul eder. 

 const name = "John"
 const age = 30;
 const kullanıcı = {name, age}
 console.log(kullanıcı)

 //! React ta nasıl

//  function Sayac( {baslangıcDegeri, adim })
// {
// const [sayac, setSayac] = useCounter({ baslangıcDegeri, adim });
// return <button onClick={setSayac}> {sayac}</button>
// }
  /// 

  //* object, array desctructing

  const kullanici   = { isim: "Mehmet", yas:35}

  const { isim: isim1, yas } = kullanici
  console.log(isim1, yas)



  //rest/spread operatçrü 
  // toparlama kısmına yukarıda değindik 

  let personList={
    name: "Mehmet",
    yas:33, sehir:"Ankara"
  }
// personList.sehir ="istanbul"
  console.log(personList)

  personList = {
    ...personList,sehir:"kayseri"
  }
  console.log(personList)
  INITIAL_STATE ={
    
  }