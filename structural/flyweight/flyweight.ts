interface ITree {
  new (x: number, y: number, type: ITreeType) : ITree
  draw(someVar: any): any
}

interface ITreeType {
  new (color: string, name: Trees): ITreeType
  draw(someVar: any): any
}

enum Trees {
  oak = 'Oak tree',
  maple = 'Maple tree',
}

class Tree implements ITree{
  constructor(public x, public y, public treeType) {}

  public draw(someVar){
    console.log('New tree has benn draw!!');
  }

}