function defineSuit(card) {
  // good luck
  let x = card.substr(-1);
  if(x =='♣')
    { return "clubs";}
  if(x =='♦')
    { return 'diamonds';}
  if(x =='♥')
    { return 'hearts';}
  else
    { return 'spades';}
}
