export default function calculatePrimes(start: number, range: number) {
    const primes = [];
    let isPrime = true;
    let end = start + range;
    
    for (let i = start; i < end; i++) {
      for (let j = 2; j < Math.sqrt(i); j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }
  
      if (isPrime) {
        primes.push(i);
      }
  
      isPrime = true;
    }
    return primes;
  }
  