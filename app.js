console.log("@sandeepnegi1996");
// Code edited by Drjaat

var celciusInput = document.querySelector("#celcius>input");
var fahrenheitInput = document.querySelector("#fahrenheit>input");
var kelvinInput = document.querySelector("#kelvin>input");

function roundnum(num) {
    return Math.round(num * 100) / 100;
}

function celciusToFahrenheightAndKelvin() {
    var ctemp = parseFloat(celciusInput.value);
    var ftemp = (ctemp * (9 / 5)) + 32;
    var ktemp = ctemp + 273.5;
    fahrenheitInput.value = roundnum(ftemp);
    kelvinInput.value = roundnum(ktemp);
}

//farenheight to celcius and kelvin function
function farenheightToCelciusAndKelvin() {

    var ftemp = parseFloat(fahrenheitInput.value);
    var ccel = (ftemp - 32) * (5 / 9);
    var ktemp = (ftemp + 459.67) * (5 / 9);

    celciusInput.value = roundnum(ccel);
    kelvinInput.value = roundnum(ktemp);
}

//kelvin to celcius and farenheight

function kelvinToCelciusAndFarenheight() {
    var ktemp = parseFloat(kelvinInput.value);
    var ctemp = ktemp - 273.5;
    var ftemp = (ktemp - 273.5) * (9 / 5) + 32;
    celciusInput.value = roundnum(ctemp);
    fahrenheitInput.value = roundnum(ftemp);
}

function main() {
    celciusInput.addEventListener('input', celciusToFahrenheightAndKelvin);
    fahrenheitInput.addEventListener('input', farenheightToCelciusAndKelvin);
    kelvinInput.addEventListener('input', kelvinToCelciusAndFarenheight);

}

main();