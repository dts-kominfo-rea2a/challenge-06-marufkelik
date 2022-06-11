// TODO: import module bila dibutuhkan di sini
const fs = require("fs");


// console.log(coba);
// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3


// const data1 = require(file1);
// const data2 = require(file2);
// const data3 = require(file3);

//   // Fn potong nya
//   const FnSlice = (hasil) => {
//     return hasil[1];
//   }

//   const arrData1 = data1.message.split(" ");
//   const arrData2 = data2[0].message.split(" ");
//   const arrData3 = data3[0].data.message.split(" ");
//   //deklarasi hasil
//   const hasildata1 = FnSlice(arrData1);
//   const hasildata2 = FnSlice(arrData2);
//   const hasildata3 = FnSlice(arrData3);
//   // data1.message.slice(5,10);
//   // console.log(arrData1);



// function bacaData() {
//     const data = fs.readFile(file1,  {
//       encoding: 'utf8',
//     });
//     return new Buffer(data);
// }

const bacaData = (fungsiCb) => {
  
  const arrGabungan = [];

  fs.readFile(
  // nama file
  file1,
  // Object encoding
  {
    encoding: 'utf8',
  },
  // callbackFn
  (err, data) => {

    // console.log(data.message);
    if (err) {

      return console.log('Ada terjadi error: ' + err);
    }

    const arrayOfObject = JSON.parse(data);
    const arrData1 = arrayOfObject.message.split(" ");

    // if (arrData1[1] != "dunia") {
    // return fungsiCb("Data Pertama Tidak Sesuai Harapan " + arrData1[1], null);
    // }

    // return arrData1;
    // console.log(arrData1);
    arrGabungan.push(arrData1[1]);

  } 
)

fs.readFile(
  // nama file
  file2,
  // Object encoding
  {
    encoding: 'utf8',
  },
  // callbackFn
  (err, data) => {

    // console.log(data.message);
    if (err) {

      return console.log('Ada terjadi error: ' + err);
    }

    const arrayOfObject = JSON.parse(data);
    // console.log(arrayOfObject);
    const arrData2 = arrayOfObject[0].message.split(" ");

    // if (arrData2[1] != "world") {
    //       return fungsiCb("Data Kedua Tidak Sesuai Harapan " + arrData2[1], null);
    // }
    // return arrData1;
    // console.log(arrData1);
    arrGabungan.push(arrData2[1]);
    

  } 
)

fs.readFile(
  // nama file
  file3,
  // Object encoding
  {
    encoding: 'utf8',
  },
  // callbackFn
  (err, data) => {

    // console.log(data.message);
    if (err) {

      return console.log('Ada terjadi error: ' + err);
    }

    const arrayOfObject = JSON.parse(data);
    // console.log(arrayOfObject);
    const arrData3 = arrayOfObject[0].data.message.split(" ");

    // if (arrData3[1] != "sekai") {
    //       return fungsiCb("Data Ketiga Tidak Sesuai Harapan " + arrData3[1], null);
    // }
    // return arrData1;
    // console.log(arrData1);
    arrGabungan.push(arrData3[1]);

    setTimeout(function() {
      fungsiCb(null, arrGabungan);
    }, 10);
    

  } 
)

};

// // const bacaData = null;

// const bacaData = (fungsiCb) => {

//   if (hasildata1 != "dunia") {
//     return fungsiCb("Data Pertama Tidak Sesuai Harapan " + hasildata1, null);
//   }
//   else if (hasildata2 != "world") {
//     return fungsiCb("Data Kedua Tidak Sesuai Harapan " + hasildata2, null);
//   }
//   else if (hasildata3 != "sekai") {
//     return fungsiCb("Data Ketiga Tidak Sesuai Harapan " + hasildata3, null);
//   }
//   let arrFile = [];
//   arrFile.push(hasildata1,hasildata2,hasildata3);
//   fungsiCb(null, arrFile);
  
// };

// bacaData((err, data) => {
//   if (err) return console.log(err);
//   console.log(data?.join());
// });


// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
