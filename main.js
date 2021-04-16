var dolar = 9433.34;
var euro = 10354.03;
var borish_uchun_dollar =(dolar * 500);
var mehmon_hona_uchun =(dolar * 250);
var aylanish_uchun_euro =(euro * 120);
var jammi_summa =Number(borish_uchun_dollar+mehmon_hona_uchun+aylanish_uchun_euro);
var korinish = prompt(`alisher senda qancha pul bor agar senda ${jammi_summa} som  bolsa hisoblab otirma yolga otlanaver`);
var kop =(`alisher senda ${korinish} so'm pul bor ekan bemalol yo'lga otlan chunki senga ${jammi_summa} som pul kerak holos senda yana ${korinish - jammi_summa} som pul qolyabdi oq yol alisher`);
var kam =(`alisher sen ozgina sabir qil puling kamroq ekan senga yana ${jammi_summa - korinish} som kerak yana ozginia sabir qil`);
console.log =(`alisher senda qancha pul bor`);
if (korinish > jammi_summa){
    alert(kop);
}
if (korinish < jammi_summa){
    alert(kam);
}