let facts = [
    "I have a chinchilla named Nube.",
    "I am Dominican/Guatemalan American.",
    "I am a first generation American.",
    "Baking and cooking are one of my favorite ways to destress.",
    "I love spicy food!",
    "I am a foodie and an adventurous eater.",
    "My hair has been just about every color of the rainbow.",
    "I love any type of horror or psychological thriller show/movie/anime.",
    "Stephen King is my favorite author.",
    "I listen to a very wide range of music, from Metalcore to Melodic Dubstep.",
    "I can eat Japanese or Korean food for every meal.",
    "I don't drink alcohol.",
    "My boyfriend is in a industrial hardcore band called Null. (He's also a FS Dev.)",
    "I've played over 200 hrs of Animal Crossing: New Horizons",
  ];

  let ranNum = Math.floor(Math.random() * 14)
 export let currentFact = facts[ranNum]

   export const onClick = () => {
    let currentFact = <p>{facts[ranNum]}</p>
    
  }


  

  