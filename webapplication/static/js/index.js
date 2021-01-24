



 let arrays = [1,2,3,4,5,6,7,8,9,11,12,13,14,15,16,17,18,19,20,25,30,35,36,39,41,45,49,77,22,88,
 69,47,85,99,74]
function one (a){
    let two = false
      for (let i = 0; i < arrays.length; i++){
         if (arrays[i]===a)
            two = true
      }
      if(two)console.log(a + " soni arrayda mavjud")
      else console.log(a + "soni mavjud emas")
   }
   one(Math.floor(Math.random() * 100))