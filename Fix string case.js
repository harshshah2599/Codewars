function solve(s){
    //..
    let up=s.split('').filter(v=>v.match(/[A-Z]/)).length
    let down=s.split('').filter(v=>v.match(/[a-z]/)).length
    if (down>=up)
      {
        return s.toLowerCase();
      }
  else
    {
      return s.toUpperCase();
    }
}
