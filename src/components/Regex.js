export const CapitalizeFirstLetterEveryWord = (data) => {
    const splitWord = data.toLowerCase().split(' ');
   for (let i = 0; i < splitWord.length; i++) {
    splitWord[i] = splitWord[i].charAt(0).toUpperCase() + splitWord[i].substring(1);     
   }
   return splitWord.join(' '); 
}