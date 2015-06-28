//This class was designed to be more of an object oriented learning experience
//In contrast to the math12 class (it looks like filenames dont matter),
//You will need to call new on this class to use the "say" function
export class Two{
  constructor(word:string){
      this.word = word;
  }
  say():string{
    return this.word;
  }
  word:string;
}
