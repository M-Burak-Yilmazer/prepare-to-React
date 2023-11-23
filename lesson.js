// ? Template Literals (şablon dizileri)

//*Bir Javascript ifadesini düz bir yazı yazar gibi tek bir satırda yazmamızı sağlayan string çeşidi olarak tanımlanabilir. Template literals, back tick dediğimiz tırnak işaretleri içinde yazılmalıdır (Tab'ın üzerindeki, ESC'nin altındaki düğme.)

const isim = "Mehmet";
const mesaj = `Merhaba, ${isim}`;
console.log(mesaj);

const birim_fiyat = 100;
const adet = 3;
const para_birimi = "TL";

const toplam_tutar = `Toplam: ${birim_fiyat * adet} ${para_birimi}`;

//? Shorthand Property Names (kısayol obje anahtarı isimleri)
//*Javascript objesi, key-value (anahtar-değer) sistemiyle çalışan bir veri tipidir. Bir obje oluştururken, değer bir değişkenden geliyorsa, anahtarın açıkça belirtilmesine gerek yoktur. Değişkenin direk olarak objeye girilmesi, değişkenin ismini anahtar olarak, değerini ise değer olarak atar.

const name = "Mehmet";
const yas = 35;
const kullanici_objesi = { name, yas }; // { isim: isim, yas: yas } ile aynıdır

console.log(kullanici_objesi);

// function Sayac({ baslangicDegeri, adim }) {
//   // Burada object destruction var.
//   const [sayac, setSayac] = useCounter({ baslangicDegeri, adim }); // Burada kısayol kullanım var.
//   return <button onClick={setSayac}>{sayac}</button>;
// }

//! Arrow Functions (oklu fonksiyon ifadeleri)

//*Oklu fonksiyon ifadeleri, Javascript'te fonksiyon oluşturmanın yeni bir yöntemidir. En önemli ve sık kullanılan özelliklerinden bir tanesi implicit (üstü kapalı) return özelliğidir. Dikkat edilmesi gereken bir başka farklılık ise, oklu fonksiyon ifadeleri hoist edilmezler, yani bir değişkene atadığınız oklu fonksiyonları, function ifadesiyle oluşturduğunuz fonksiyonlar gibi, oluşturmadan önce çağıramazsınız.

topla(3, 5); // 8 döndürür, çünkü function ifadesi hoist edilir (kod bloğu çalıştırılmadan önce kodun en yukarısına çıkarılır)

function topla(sayi1, sayi2) {
  return sayi1 + sayi2;
}
// sum(3, 5); // ReferenceError: Cannot access 'topla' before initialization at <anonymous>:1:1

const sum = (sayi1, sayi2) => {
  return sayi1 + sayi2;
};
const topla1 = (sayi1, sayi2) => sayi1 + sayi2;

//* Fonksiyon tek bir parametre alıyorsa eğer parantezleri de kullanmamıza gerek yok.

const kare = (a) => a * a;
console.log(kare(2)); //4

//? Object/Array Destructuring (obje/dizilerin parçalarına bölünüp değişkenlere atanması)

const kullanici = { isim1: "Mehmet", age: 35 };

const { isim1, age } = kullanici;

const newkullanici = { isim2: "Mehmet", yas: 35, sehir: "İstanbul" };

const { isim2, ...kalanlar } = newkullanici;

console.log(isim2, kalanlar);

const sayilar = [1, 2, 3, 4, 5];
const [bir, iki, uc, dort, bes] = sayilar;

console.log({ bir, iki, uc, dort, bes });

const sayilar1 = [1, 2, 3, 4, 5];
let [bir1, ...kalanlar1] = sayilar1;
// let [...kalanlar2, bir3] = sayilar1; // olmaz başya rest kullanılamaz.


//? Parameter Defaults (varsayılan parametreler değerleri)

 //*Bir fonksiyonun aldığı parametreler için varsayılan değerler girilebilir. Eğer fonksiyon çağırıldığında bu değerler girilmezse, varsayılan değerler hesaba katılır.

 yenitopla(3, 5); // 8 döndürür
 yenitopla(3); // 3 döndürür
 yenitopla(); // 0 döndürür

 function yenitopla(sayi1 = 0, sayi2 = 0) {
   // Burada eğer fonksiyon parametreleri girilmezse varsayılan olarak 0 değerini tanımladık.
   return sayi1 + sayi2;
 }

 //*Rest/Spread Operator (toparlama/yayma operatörü)
 //Bu operatör farklı durumlarda farklı anlamlara gelebilir. Toparlama özelliğine [Object/Array Destructuring](#destructuring) bölümünde değindik. Burada ise yayma özelliğine ve kullanım amaçlarına bakacağız.

 //Yayma operatörü, bir obje veya bir diziyi alıp, içindeki tüm elemanları tek tek döndürür. React projelerinde en önemli kullanım amaçlarından bir tanesi, immutability (değişmezlik) kuralına riayet edebilmek içindir. Örneklerle açıklayalım.

//  let personInfo = { isim: "Mehmet", yas: 35, sehir: "İstanbul" };
//  personInfo.sehir = "Ankara";
 console.log(personInfo);

 //Her şey yolunda görünüyor. Kullanıcının şehir bilgisini değiştirmek istedik ve değiştirdik. Ancak React ekosisteminde, state üzerinde yapılan değişiklikler state objesini mutate etmeden (doğrudan değiştirmeden) yapılmalıdır.

//Yukarıdaki örnekte, `kullanici` objesinin hafızadaki (RAM) yeri değişmedi. Sadece objenin bir elemanı güncellendi. React bu şekilde yapılan değişiklikleri algılayamıyor. State üzerinde yapılan bir değişikliğin algılanamaması demek, rendering (ekrana yazdırma) işleminin tetiklenememesi demek. Bu da değişikliğin tarayıcıda yansıtılamaması anlamına geliyor.

// Oysaki bizim yapmamız gereken şey, `sehir` değeri güncellenmiş yeni bir obje oluşturmak ve onu mevcut `kullanici` objesi ile yer değiştirmek. Bu durumda güncellemeyi şöyle yapabiliriz:
 let personInfo = { isim: "Mehmet", yas: 35, sehir: "İstanbul" };
personInfo = { ...personInfo, sehir: "Ankara" };


// INITIAL_STATE = {
//   yukleniyor: false,
//   hataMesaji: "",
//   arabalar: ["Mercedes", "BMW", "Audi"],
// };

// const reducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case "ARABA_EKLE":
//       return { ...state, arabalar: [...state.arabalar, action.payload] };
//     default:
//       return state;
//   }
// };

//* ESModules (ES modülleri)

//Modül sistemi sayesinde belirli kod blokları yeniden kullanmak ve organizasyon amaçlı import/export (içe/dışa aktarma) edilebilir. İki adet içe/dışa aktarma yöntemi vardır: named (isimli) ve default (varsayılan)

// export let isim = "Mehmet"; // oluşturuldu ve dışa aktarıldı
// export const kullanici = { isim, yas: 35 }; // oluşturuldu ve dışa aktarıldı
// export function merhaba(isim) {
//   // oluşturuldu ve dışa aktarıldı
//   return `Merhaba, ${isim}`;
// }

// let isim = "Mehmet";
// const kullanici = { isim, yas: 35 };
// function merhaba(isim) {
//   return `Merhaba, ${isim}`;
// }

// export { isim, kullanici, merhaba };

import { isim, kullanici, merhaba } from "./dosyaadi.js";

import {
  isim as name,
  kullanici as user,
  merhaba as hello,
} from "./dosyaadi.js";

//Default Exports & Imports (varsayılan içe/dışa aktarmalar)/

export default function merhaba(isim) {
  return `Merhaba, ${isim}!`}

  export { merhaba as default, isim, kullanici }

  import merhaba from "./merhaba.js";

  import { default as merhaba, isim, kullanici } from "./dosyaadi.js";

  //* ## Ternary Conditional Operators (üç değişkenli koşul operatörleri)
`koşul ? doğruysa : yanlışsa`

yanlışlar
null
     NaN
     0
     "" (empty string)
     undefined

     kopruAcikMi
  ? "Anadolu yakasina gecebilirsiniz"
  : "Anadolu yakasina gecisler iptal";



  const urunler = [
  { id: 1, name: "Kalem", fiyat: 5 },
  { id: 2, name: "Defter", fiyat: 10 },
  { id: 3, name: "Silgi", fiyat: 2 },
  { id: 4, name: "Kalemtraş", fiyat: 7 },
]

find