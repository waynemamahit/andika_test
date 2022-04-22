// 1.	Buatlah fungsi untuk membalik suatu string! Contoh (“AUKSKAOA”)->(“AOAKSKUA”)
let str = "AUKSAOA"
let result1 = ""
for (let i = str.length - 1; i >= 0; i--) result1 += str[i]
console.log('Jawaban 1.\n' + result1)
// 2.	Buatlah fungsi untuk mencetak 10 Fibonacci pertama tanpa rekursi!
let fib = []
fib[0] = 0
fib[1] = 1
for (let i = 2; fib.length <= 10; i++) {
  fib[i] = fib[i - 2] + fib[i - 1];
}
fib.shift()
console.log('Jawaban 2.\n' + fib.join(' '))
// 3.	Buatlah fungsi untuk membalik suatu array 1 dimensi!
let arr = [2, 1, 0, 4, 2, 2]
let result3 = []
let result3Index = 0
for (let index = arr.length - 1; index >= 0; index--) {
  result3[result3Index] = arr[index]
  result3Index++ 
}
console.log('Jawaban 3')
console.log(result3)
// 4.	Buatlah fungsi untuk menentukan bahwa suatu angka adalah bilangan prima!
let num = 17
let factors = 0
for (let index = 1; index <= num; index++) {
  if (num % index === 0) factors += 1 
}
console.log('Jawaban 4.\n' + (factors <= 2 ? 'bilangan prima' : 'bilangan komposit'))
// 5.	Buatlah suatu fungsi untuk menghitung jumlah suatu jumlah bilangan genap lebih dari 10 dan kurang dari 30!
let result5 = 0
for (let index = 11; index < 30; index++) {
  if (index % 2 === 0) result5++
}
console.log('Jawaban 5.\n' + result5) 
// 6.	Buatlah suatu fungsi untuk mengkonversi Celsius ke Fahrenheit!
let celc = 12
let farenheit = (celc * (9 / 5)) + 32
console.log('Jawaban 6.\n' + farenheit)
// 7.	Terdapat sebuah variable yang berisi array, yaitu:
// const data= ['samsung', 'vivo, 'sony, 'oneplus, 'sony, 'nokia'];
// Buatlah output yang memiliki value “on” dari variable di atas!
// Hasil yang diharapkan:
// Array ["sony",”oneplus”,”sony”]
const data = ['samsung', 'vivo', 'sony', 'oneplus', 'sony', 'nokia'];
let result7 = []
let result7Index = 0
for (let index = 0; index < data.length; index++) {
  let keyword = ""
  for (let wordIndex = 0; wordIndex < data[index].length; wordIndex++) {
    if (data[index][wordIndex] === 'o' || data[index][wordIndex] === 'n') keyword += data[index][wordIndex] 
  }

  if (keyword === 'on') {
    result7[result7Index] = data[index]
    result7Index++
  }
}
console.log('Jawaban 7.\n', result7)

// 8.	Terdapat 2 variable yang berisi array, di antaranya adalah:
// a.	$status = [["Complete"],["Incomplete","Complete"],["Complete","Incomplete"]];
// b.	$kelengkapan = [["Kwitansi Keseluruhan"],["Form Claim","Copy Buku Kehamilan"],["Rincian Biaya Lab","Rincian Biaya Obat"]];
// Buatlah output berdasarkan value “Complete” dari variable $status di atas!
// Hasil yang diharapkan:
// [["Kwitansi Keseluruhan"],["Copy Buku Kehamilan"],["Rincian Biaya Lab"]]
let status = [["Complete"],["Incomplete","Complete"],["Complete","Incomplete"]]
let kelengkapan = [["Kwitansi Keseluruhan"],["Form Claim","Copy Buku Kehamilan"],["Rincian Biaya Lab","Rincian Biaya Obat"]]
let result8 = []
let result8Index = 0
for (let index = 0; index < kelengkapan.length; index++) {
  let arr2 = []
  let arr2Index = 0
  for (let index2 = 0; index2 < kelengkapan[index].length; index2++) {
    if (status[index][index2] === 'Complete') {
      arr2[arr2Index] = kelengkapan[index][index2]
      arr2Index++
    }
  }
  result8[result8Index] = arr2
  result8Index++
}
console.log('Jawaban 8.\n', result8)