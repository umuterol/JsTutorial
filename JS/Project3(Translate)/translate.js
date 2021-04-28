//Request

function Translate() {
    this.xhr=new XMLHttpRequest();
}


Translate.prototype.setTranslate=function(word,lang){
    this.word = word;
	this.lang = lang;
}


Translate.prototype.translateWord = function (callback) {



    this.xhr.open("GET",`wordsTR/${this.lang}.txt`);

   
    
    this.xhr.onload=()=>{
        
        
        //arrow function yapmadığımız için this xhr objesini gösterir
        //xhr ın prototipinde yer alır
        //const temp=this;
        // jsonWord.forEach(words=>{
            
        //     if(words.tr === temp.word)
        //     callback(words.word);//txt içindeki word
            
        // })


       if(this.xhr.status ===200){

        const jsonWord=JSON.parse(this.xhr.responseText);
       
        jsonWord.forEach((words)=>{

            if(words.tr === this.word){
                callback(words.word);
            }          

        });

       }
       else{
           callback(new Error("Manuel Hata Yakalama: Hata Oluştu"));
       }

    };


    this.xhr.send();




}