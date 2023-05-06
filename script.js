function calcular() {
    var type = document.getElementById('type').value;
    var type2 = document.getElementById('type2').value;
    var number = document.getElementById('number').value;
    var res = document.getElementById('res')

    if(type2 == type){
        window.alert("Por favor ponha temperaturas diferentes")
    }
    else if(number == 0 ){
       window.alert("Por favor digite um numer")
    }
    else if( type == "c" && type2 == "f"){
        var result = (number * 1.8) + 32;
        res.innerHTML = result.toFixed(2) + "°F"
    }
    else if (type == "c" && type2 == "k"){
        var result = (parseFloat(number) + 273.15);
        res.innerHTML = result.toFixed(2) + "°K"
    }
    else if (type == "f" && type2 == "k") {
        var result = (parseFloat(number - 32) * 5/9 + 273.15)
        res.innerHTML = result.toFixed(2) + "°K"

    }
    else if (type == "f" && type2 == "c"){
        var result = (parseFloat(number - 32) *5/9)
        res.innerHTML = result.toFixed(2) + "°C"
    }
    else if (type == "k" && type2 == "c"){
        var result = (parseFloat(number - 273.15))
        res.innerHTML = result.toFixed(2) + "°C"
    }
    else if (type =="k" && type2 == "f"){
        var result = (parseFloat(number - 273.15) * 9/5 + 32)
        res.innerHTML = result.toFixed(2) + "°F"
    }
}