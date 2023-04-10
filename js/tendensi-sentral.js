
var data;

function median(){
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