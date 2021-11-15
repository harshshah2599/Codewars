function  calculateAge(birth_year,relation_year) {
  if(birth_year>relation_year)
    {
      if(birth_year-relation_year == 1)
        {
          return "You will be born in 1 year."
        }
      else
        {
          return `You will be born in ${birth_year-relation_year} years.`
        }
      
    }
  if(birth_year<relation_year)
    {
      if(relation_year-birth_year == 1)
        {
          return "You are 1 year old."
        }
      else
        {
          return `You are ${relation_year-birth_year} years old.`
        }
    }
  else
    {
      return "You were born this very year!"
    }
  


}
