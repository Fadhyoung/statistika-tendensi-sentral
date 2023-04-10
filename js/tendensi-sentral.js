
var data;

function median(){

    document.getElementById("result").innerHTML = "";

    var data = document.getElementById("input-data").value;

    // mengubah text ke array dengan delimiter ,
    var data = data.split(",");

    // mengurutkan data
    var sortedLst = data.sort(function(a, b){return a-b});

    // mendapatkan panjang array
    let listLen = data.length;
    
    // pembagian pembulatan kebawah
    let index = Math.floor((listLen - 1) / 2 );


    if (listLen % 2){
        // apabila panjang array dimodulus 2, maka nilai tengah langsung dapat diketahui, atau median terdapat dalam value dalam array tersebut
        result = ( sortedLst[index]  ) 
        document.getElementById("result").innerHTML = result;
    } else {
        // mendapatkan batas atas dan bawah dari nilai tengah, kemudian dijumlahkan lalu dibagi 2
        var result = ( ( parseInt(sortedLst[index])  + parseInt(sortedLst[index + 1])) /2 ) 
        document.getElementById("result").innerHTML = result;
    }

}

function mean() {

    var data = document.getElementById("input-data").value;

    var data = data.split(",");

    var dataLen = data.length;

    let dataSum = 0;
    data.forEach(element => {
        dataSum = dataSum + parseInt(element);
    });

    var mean = dataSum / dataLen;
    document.getElementById("result").innerHTML = mean;

}

function modus() {

    var data = document.getElementById("input-data").value;

    var data = data.split(",");

    // definite a single value
    var dataVal = [];
    let index = "a";
    data.forEach(element => {
        if (index !== element) {
            dataVal.push(element)
            index = element;
        } else {
            index = element;
        }
    });

    // search modus data
    var tempData = [];
    var tempDataLen = 0;
    var modusData = 0;
    var modusVal = 0;
    dataVal.forEach(x => {
        data.forEach(y=> {
            if (x == y) {
                tempData.push(x);
            }
        })
        tempDataLen = tempData.length;
        if (tempDataLen > modusData) {
            modusData = tempData.length;
            modusVal = tempData[0];
        }

        tempData = [];
    })

    document.getElementById("result").innerHTML = modusVal;
}