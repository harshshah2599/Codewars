function sumTriangularNumbers(n) {
  let sum=0,total=0;
    for(let i=0;i<=n;i++){
        sum=sum+i;
        total=total+sum;
}
  return total;
}
