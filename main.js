var dolar = 9433.34;
var euro = 10354.03;
var borish_uchun_dollar =(dolar * 500);
var mehmon_hona_uchun =(dolar * 250);
var aylanish_uchun_euro =(euro * 120);
var jammi_summa =Number(borish_uchun_dollar+mehmon_hona_uchun+aylanish_uchun_euro);
var korinish = prompt(`alisher senda qancha pul bor agar senda ${jammi_summa} so'm  bolsa hisoblab otirma yolga otlanaver`);
var kop =(`alisher senda ${korinish} so'm pul bor ekan bemalol yo'lga otlan chunki senga ${jammi_summa} so'm pul kerak holos senda yana ${korinish - jammi_summa} som pul ortib qolyabdi oq yol alisher`);
var kam =(`alisher sen ozgina sabir qil puling kamroq ekan senga yana ${jammi_summa - korinish} so'm kerak yana ozginia sabir qil`);
if (korinish > jammi_summa){
    alert(kop);
}
if (korinish < jammi_summa){
    alert(kam);
}