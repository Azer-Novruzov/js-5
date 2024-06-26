let age = prompt("Yasinizi qeyd edin");
if(age >= 18){
    console.log("Icaze verildi");
}else if (age < 18) {
    console.log("Icaze verilmedi");
}
let input = prompt("Xahis olunur uc ikireqemli eded daxil edin ededlerin arasinda bosluq qoyun, bir nece eyni eded daxil etmek,ededleri birden cox bosluqla veya bosluqsuz yazmaq, metin veya herif yazmaq icaze icverilmir:");
let numbers = input.split(' ');
let num1 = Number(numbers[0]);
let num2 = Number(numbers[1]);
let num3 = Number(numbers[2]);
if ((num1 >= 10 && num1 <= 99 || num1 <= -10 && num1 >= -99) &&
    (num2 >= 10 && num2 <= 99 || num2 <= -10 && num2 >= -99) &&
    (num3 >= 10 && num3 <= 99 || num3 <= -10 && num3 >= -99)){
if (num1 === num2 || num1 === num3 || num2 === num3) {
    console.log("Iki veya uc daxil edilmis eded eynidir.");
    } else { 
            let middle;
            if ((num1 > num2 && num1 < num3) || (num1 < num2 && num1 > num3)) {
                middle = num1;
            } else if ((num2 > num1 && num2 < num3) || (num2 < num1 && num2 > num3)) {
                middle = num2;
            } else {
                middle = num3;
            }
            console.log("Orta eded - " + middle + ' -dir'); 
            // burda 13 orta olsa 13 dur yazilmalidi taskda -dir yazilmisdi diyene yazdim
        }
    }else {
    console.log("Yalnis deyer daxil edilib.");
}
let year = prompt("Il daxil edin");
year = Number(year);
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " Uzun ildir.");
} else {
    console.log(year + " Qisa ildir.");
}