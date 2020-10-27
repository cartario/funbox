export const checkClass = (active, disabled) => {
  if(disabled){
    return "card disabled"
  }
  if(active){
    return "card active"
  }
  return "card"
};

export const checkMouses = (count) => {
  switch(count){
    case 1:      
      return "мышь";
    case 2:
      return "мыши";
    case 3:
      return "мыши";  
    case 4:
      return "мыши";    
    default:
      return "мышей";
  };
};
