let value;



value="umut can";
//uzunluk
value=value.length;

const firstName="louis";
const lastName="Armstrong";


//birleştirme
value=firstName.concat(" ",lastName);

//hepsi kücük harf
value=lastName.toLowerCase();
//hepsi buyuk harf
value=lastName.toUpperCase();



//indislere erisme
value=firstName[0];
value=firstName[1];

//harflere index şeklinde erisme
value=lastName.indexOf("n");

//indislere erisme
value=firstName.charAt(3)


//string parçalama
value="umut can erol";
value=value.split(" ");

//yer degistirme
value="umut can erol";
value=value.replace("erol","EROL");

//String'te arama yapmak
value=value.includes("umut");


console.log(value);