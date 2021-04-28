let value;


const now=new Date(); //Şu anki zamanı almamızı sağlar.

const date1=new Date("7.30.1998 06:15:00");
const date2=new Date("july 30 1998");
const date3=new Date("7/30/1998");

value=date1.getMonth();
value=date1.getDate();
value=date1.getDay();
value=date1.getHours();
value=date1.getMinutes();
value=date1.getSeconds();
value=date1.getMilliseconds();

date1.setMonth(7);
date1.setDate(29);
date1.setFullYear(1999);
date1.setHours(0);
date1.setMinutes(0);



value=date1;

console.log(value);