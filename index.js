const str = 'The quick brown fox jumps over the lazy dog';
const isPangram = (str = '') => {
   str = str.toLowerCase();
   const { length } = str;
   const alphabets = 'abcdefghijklmnopqrstuvwxyz';
   const alphaArr = alphabets.split('');
   for(let i = 0; i < length; i++){
      const el = str[i];
      const index = alphaArr.indexOf(el);
      if(index !== -1){
         alphaArr.splice(index, 1);
      };
   };
   return !alphaArr.length;
};
console.log(isPangram(str));




// const arr = '1, -1'

// const addToZero = (arr = '') => {
//   for(let i = 0; i < length; i++){
//     if()
//   }
// }