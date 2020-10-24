module.exports = function check(str, bracketsConfig) {
  // const stack = [];
  // str = str.split('');
  // len = str.length;

  // for (let i = 0; i < len; i++){
  //   if ((str[i] == '(') || (str[i] == '{') (str[i] == '[') || (str[i] == '|')){
  //     stack.push(str[i])
  //   }
  //   else{

  //   }
  // }

  // return true;
  // check ( '()' ,  [ [ '(' ,  ')' ] ] )  // -> верно 
  // check ( '((())) ()' ,  [ [ '(' ,  ')' ] ] )  / / -> true 
  // check ( '()) (' ,  [ [ '(' ,  ')' ] ] )  // -> false 
  // check ( '[(])' ,  [ [ '(' ,  ')' ] ,  [ '[' ,  ']' ] ] )  // -> ложная 
  // проверка ( '[] ()' ,  [ [ '(' ,  ')' ] ,  [ '[' ,  ']' ] ]] )  // -> истинная 
  // проверка ( '[] () (' , [ [ '(' , ')' ] ,  [ '[' ,  ']' ] ] )  // -> ложь
  
  // // особый случай: открывающая и закрывающая скобки могут быть одинаковыми :)
  
  // check ( '||' ,  [ [ '|' ,  '|' ] ] )  // -> правда 
  // check ( '| () |' ,  [ [ '(' ,  ')' ] ,  [ '|' ,  ' | ' ] ] )  // -> true 

  let brackets = "[]{}()<>||";
  
  let stack = [];

  for(let bracket of str) {
    let bracketsIndex = brackets.indexOf(bracket);
    
    //если открывающаяся скобка
    if(bracketsIndex % 2 === 0) {
      stack.push(bracketsIndex + 1);
    } else {
      if((stack.pop() !== bracketsIndex)) {
        return false;
      }
    }
  }
  return true;
}
