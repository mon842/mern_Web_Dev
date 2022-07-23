// fetching API JSON
console.log("\nTutorial 45");

const myJson=`{
    "word": "prefiguration",
    "results": [
      {
        "definition": "the act of providing vague advance indications; representing beforehand",
        "partOfSpeech": "noun",
        "synonyms": [
          "adumbration",
          "foreshadowing"
        ],
        "typeOf": [
          "anticipation",
          "prediction",
          "prevision"
        ],
        "derivation": [
          "prefigure"
        ]
      },
      {
        "definition": "an example that prefigures or foreshadows what is to come",
        "partOfSpeech": "noun",
        "typeOf": [
          "example",
          "model"
        ],
        "derivation": [
          "prefigure"
        ]
      }
    ],
    "syllables": {
      "count": 5,
      "list": [
        "pre",
        "fig",
        "u",
        "ra",
        "tion"
      ]
    },
    "pronunciation": {
      "all": "pri,fɪɡjə'reɪʃən"
    }
  }`;

    const myJsonObj=JSON.parse(myJson);
    // const word=myJsonObj.word;
    console.log(myJsonObj);
    console.log(myJsonObj.results);
    console.log(myJsonObj['results']);

let meanings=document.getElementById("meanings");
meanings.addEventListener("click",()=>{
    console.log("meaning clicked");
    populate();
});

function populate() {
    let results=myJsonObj.results;
    let html="";
    // for(let i=0;i<results.length;i++){
    //     let result=results[i];
    //     let definition=result.definition;
    //     let partOfSpeech=result.partOfSpeech;
    //     let synonyms=result.synonyms;
    //     let typeOf=result.typeOf;
    //     let derivation=result.derivation;
    //     html+=`<div class="result">
    //     <div class="definition">${definition}</div>
    //     <div class="partOfSpeech">${partOfSpeech}</div>
    //     <div class="synonyms">${synonyms}</div>
    //     <div class="typeOf">${typeOf}</div>
    //     <div class="derivation">${derivation}</div>
    //     </div>`;
    // }
    results.forEach(element=>{
        html+=`<li>${element.typeOf}</li>`;
    });
    let content=document.getElementById("defs");
    content.innerHTML=html;
}