// Write a function that concatenates two lists. [a,b,c], [1,2,3] → [a,b,c,1,2,3]
function ownConcate(aray1,aray2){
  return  aray1 + aray2;}

// Write a function that combines two lists by alternatingly taking elements, e.g. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
const t2=['d','e','f','g','h']
const t1=['a','b','c']
function combineTwoList(aray1,aray2){
  console.log("start")
  let combined = []
  let len = aray1.length<=aray2.length?aray1.length: aray2.length  
  let longerAray =aray1.length>aray2.length?aray1: aray2

  for(i=0;i<len;i++){
      combined.push(aray1[i])
      combined.push(aray2[i])}
  for(i=3;i<longerAray.length;i++){
    combined.push(longerAray[i])
  }
  return combined;
}

console.log(combineTwoList(t1,t2))
        
// Write a function that takes a list of strings an prints them, one per line, in a rectangular frame. 
//For example the list ["Hello", "World", "in", "a", "frame"] gets printed as:

// *******
// * Hello *
// * World *
// * in    *
// * a     *
// * frame *
// *******
const t=["Hello", "World", "in", "a", "frame"]

function printInFrame(words){
  let width = longestStringSize(words)
  headerAndFooter=""
  for(let i =0;i<width+2;i++)
    headerAndFooter +='*'
  console.log(headerAndFooter)
  for(word of words){
    console.log(createOneLine(width,word))
  }
  console.log(headerAndFooter)
}

function createOneLine(width, word){
  line="*"
  line+=word
  for(i=0;i<width-word.length;i++)
    line+=" "
  line+="*"
  return line
}
function longestStringSize(str_ara) {
  var max = str_ara[0].length;
  str_ara.map(v => max = Math.max(max, v.length));
  return max;
}
printInFrame(t)


// Write function that translates a text to Pig Latin and back.
// English is translated to Pig Latin by taking the first letter of every word, 
//moving it to the end of the word and adding ‘ay’. “The quick brown fox” becomes “Hetay uickqay rownbay oxfay”.
const t = "The quick brown fox"
const t2 = "Hetay uickqay rownbay oxfay"

function pigLatinConverter(sentence,order){
  words = sentence.split(" ")
  if(order === 'EngToLat'){
    for(let i = 0;i<words.length;i++ )
      words[i] = engToLat(words[i])
  }
  else if(order === 'LatToEng'){
    for(let i = 0;i<words.length;i++ )
      words[i] = latToEng(words[i])
  }
  finalSentence = words.join(" ").toLowerCase()
  return finalSentence.charAt(0).toUpperCase() +  finalSentence.slice(1); 

}

function engToLat(word){
  return word.slice(1) + word.charAt(0) + 'ay'
}
function latToEng(word){
 word = word.slice(0,word.length-2)
 return word.slice(word.length-1) + word.slice(0,word.length-1)
}


console.log(pigLatinConverter(t, 'EngToLat'))
console.log(pigLatinConverter(t2, 'LatToEng'))



