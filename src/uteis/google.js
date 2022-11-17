// function longestMatch (string, dictionary)
// {
//     let arrsubSequecece =[]
//     let objString = mapString(string)
    
//     for (let word of dictionary){
//         if(isSubseuqence(word, objString)){
//             arrsubSequecece.push(word)
//         }
//     }

// }
function mapString(string){
    let map = {}
   
    for(let i = 0; i<string.length ; i++){
      
        let letter =string[i]
        if(map[letter]){
            map[letter].push(i)
        }else{
            map[letter] = [i]
        }
    }
    console.log(map);

    return map
}

mapString("alexandre")


// function isSubseuqence(word, objString){



//     return bool

// }