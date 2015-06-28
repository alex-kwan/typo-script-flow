
//I put in static functions into this test class
export class Math12{
  static add(a: number , b: number) : number {
    return a + b;
  }
  static subtract(a : number, b : number) : number {
    return a - b;
  }
  static multiply(a : number, b: number) : number {
    return a * b;
  }
  static divide( a : number, b : number ) : number {
    if( b == 0 ) {
      return NaN;
    }
    return a / b;
  }
  static isEven( a : number ) {
    return a % 2 == 0;
  }
}
