//!Template literals(sablon dizileri)



 //todo: Shorthand Property Names 


 //*Arrow Functions


  //* object, array desctructing


  
  //*Parameter Defaults


  //*rest/spread operators


  //*ESModules (ES modülleri)
  //?Named Exports&Imports

  //?Default Exports&Imports


 //*Ternary Conditional Functions

 //*Array Methods

 const products = [
   { id: 1, name: "Kalem", fiyat: 5 },
   { id: 2, name: "Defter", fiyat: 10 },
   { id: 3, name: "Silgi", fiyat: 2 },
   { id: 4, name: "Kalemtraş", fiyat: 7 },
 ];

 //*promise 



 //*fetch
 // CoinRanking API endpoint
const apiUrl = 'https://api.coinranking.com/v2/coins';

// API key (gerekiyorsa, kaydolduktan sonra alabilirsiniz)
const apiKey = 'YOUR_API_KEY';

// CoinRanking API'den veri çekmek için bir fonksiyon
function getCoinData(coinId) {
  // API'ye yapılan isteğin URL'sini oluştur
  const url = `${apiUrl}/${coinId}?apiKey=${apiKey}`;

  // Fetch API'sini kullanarak veriyi al
  fetch(url)
    .then(response => {
      // HTTP başarılı bir şekilde cevap verdi mi?
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      // JSON formatındaki veriyi parse et
      return response.json();
    })
    .then(data => {
      // İstenen veriyi kullan
      console.log('Coin Data:', data.data.coin);
    })
    .catch(error => {
      // Hata durumunda konsola yazdır
      console.error('Error fetching data:', error);
    });
}

// Örnek: Bitcoin (BTC) için veri çekme
const bitcoinId = 'bitcoin'; // CoinRanking API'de belirli bir kripto paranın ID'si
getCoinData(bitcoinId);



//* Ajax 
// CoinRanking API endpoint
// const apiUrl = 'https://api.coinranking.com/v2/coins';

// // API key (gerekiyorsa, kaydolduktan sonra alabilirsiniz)
// const apiKey = 'YOUR_API_KEY';

// // CoinRanking API'den veri çekmek için bir fonksiyon
// function getCoinData(coinId) {
//   // API'ye yapılan isteğin URL'sini oluştur
//   const url = `${apiUrl}/${coinId}?apiKey=${apiKey}`;

//   // XMLHttpRequest nesnesi oluştur
//   const xhr = new XMLHttpRequest();

//   // GET isteği yap
//   xhr.open('GET', url, true);

//   // İsteği gönder
//   xhr.send();

//   // İsteğin tamamlanmasını dinle
//   xhr.onreadystatechange = function () {
//     // İsteğin durumu başarılı mı kontrol et
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       // JSON formatındaki veriyi parse et
//       const data = JSON.parse(xhr.responseText);
//       // İstenen veriyi kullan
//       console.log('Coin Data:', data.data.coin);
//     } else if (xhr.readyState === 4) {
//       // Hata durumunda konsola yazdır
//       console.error('Error fetching data. Status:', xhr.status);
//     }
//   };
// }

// // Örnek: Bitcoin (BTC) için veri çekme
// const bitcoinId = 'bitcoin'; // CoinRanking API'de belirli bir kripto paranın ID'si
// getCoinData(bitcoinId);