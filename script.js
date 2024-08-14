const passwordBox = document.getElementById('password');
const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "@#$%^&*()_+~|}{[]></-=";
const allChars = upperCase+lowerCase+numbers+symbols;

function createPassword(){
    let pswd = " ";
    pswd += upperCase[Math.floor(Math.random() * upperCase.length)];
    pswd += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    pswd += numbers[Math.floor(Math.random() * numbers.length)];
    pswd += symbols[Math.floor(Math.random() * symbols.length)];
    while(length>pswd.length){
        pswd += allChars[Math.floor(Math.random() * allChars.length)];

    }
    passwordBox.value = pswd;

}
function copyPassword(){
    passwordBox.select();
    document.exeCommand("copy");
}
