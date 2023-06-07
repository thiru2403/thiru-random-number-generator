const randomNumberGenerator = (min = 0, max = 100)=>{
    return Match.round(Math.random()* (max -min) + max);
  };
  
  export default randomNumberGenerator;