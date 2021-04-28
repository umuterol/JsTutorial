let element;

//element'i ID ye göre seçme
element=document.getElementById("testId");



//Classa göre
element=document.getElementsByClassName("test1")[0];

//element tag'a göre seçme
element=document.getElementsByTagName("p");
element=document.getElementsByTagName("div");

//Query selector - Css selector /Tek element dönüyor
element=document.querySelector("#testId");
element=document.querySelector("#test");

element=document.querySelector(".test1");
element=document.querySelector("a");
element=document.querySelector("form");



//QuerySelectorAll /Tüm elementleri seçer
element=document.querySelectorAll("p");


console.log(element);