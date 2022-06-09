// TODO: import module bila dibutuhkan di sini


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

const data1 = require(file1);
const data2 = require(file2);
const data3 = require(file3);

// Fn potong nya
const FnSlice = (hasil) => {
  return hasil[1];
}

const arrData1 = data1.message.split(" ");
const arrData2 = data2[0].message.split(" ");
const arrData3 = data3[0].data.message.split(" ");
//deklarasi hasil
const hasildata1 = FnSlice(arrData1);
const hasildata2 = FnSlice(arrData2);
const hasildata3 = FnSlice(arrData3);
// data1.message.slice(5,10);
// console.log(arrData1);


const bacaData = (fungsiCb) => {
  if (hasildata1 != "dunia") {
    return fungsiCb("Data Pertama salah bukan dunia", null)
  }
  else if (hasildata2 != "world") {
    return fungsiCb("Data Kedua salah bukan world", null)
  }
  else if (hasildata3 != "sekai") {
    return fungsiCb("Data Ketiga salah bukan sekai", null)
  }
  let arrFile = [];
  arrFile.push(hasildata1,hasildata2,hasildata3);
  fungsiCb(null, arrFile);
  // console.log(arrFile);
};



// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
