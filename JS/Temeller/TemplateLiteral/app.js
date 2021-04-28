const name="Umut Can EROL";
const department="Bilişim";
const salary=7000;

const a=`isim=${name}\ndepartman=${department}\nmaas=${salary}`




const html=`
<ul>
<li>${name}</li>
<li>${department}</li>
<li>${salary}</li>
</ul>
`;

document.body.innerHTML=html;


console.log(a);