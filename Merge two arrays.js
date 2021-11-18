function mergeArrays(a, b) {
  const array=[];
  for(let i=0;i<(Math.max(a.length,b.length));i++)
    {
      array.push(a[i]);
      array.push(b[i]);
    }

  return array.filter(x=>x!==undefined);
}
