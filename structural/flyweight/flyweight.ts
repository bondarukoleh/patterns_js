interface ITree {
  draw(): any
}

interface ITreeType {
  draw(coordinates: ICoordinates): void
}

interface ITreeTypeOpts {
  color: string,
  treeName: Trees
}

interface ICoordinates {
  x: number,
  y: number
}

enum Trees {
  oak = 'Oak_tree',
  maple = 'Maple_tree',
}


/*
* Here we will store uniq data for tree, it's coordinates. Tree type - it's a common data for trees of
* specific type
* */
class Tree implements ITree {
  constructor(public x: number, public y: number, public treeType: ITreeType) {
    console.log('Created a new Tree!!!')
  }

  public draw() {
    this.treeType.draw({x: this.x, y: this.y})
  }
}

/*
* Here we will store common data for specific tree type
* */
class TreeType implements ITreeType {
  public color: string
  public treeName: string

  constructor(opts: ITreeTypeOpts) {
    console.log('Created a new Tree Type!!!')
    this.color = opts.color
    this.treeName = opts.treeName
  }

  draw({x, y}): void {
    console.log(`New tree has been draw X: "${x}" Y: "${y}"`)
  }
}

/*
* Factory that will create and store common tree types
* */
class TreeTypeFactory {
  private static treeTypes: Map<string, ITreeType> = new Map()

  /* sometimes we need to have the ability to initiate factory with predefined types
  constructor(initialTreeTypes: Array<ITreeTypeOpts>) {
    for (const initialOpt of initialTreeTypes) {
      this.treeTypes.set(TreeTypeFactory.makeKey(initialOpt), new TreeType(initialOpt))
    }
  }*/

  public static getTreeTreeType(opts: ITreeTypeOpts) {
    const key = TreeTypeFactory.makeKey(opts)
    if (!TreeTypeFactory.treeTypes.has(key)) {
      TreeTypeFactory.treeTypes.set(key, new TreeType(opts))
    }
    return TreeTypeFactory.treeTypes.get(key)
  }

  private static makeKey(opts: ITreeTypeOpts): string {
    return `${opts.treeName}_${opts.color}`
  }
}

/*
* Will create a bunch of trees with shared types but uniq coordinates
* */
class Forest {
  private trees: Array<ITree> = []

  makeTree(opts: ITreeTypeOpts, coordinates: ICoordinates) {
    const treeType = TreeTypeFactory.getTreeTreeType(opts)
    const tree = new Tree(coordinates.x, coordinates.y, treeType as unknown as ITree)
    this.trees.push(tree)
  }

  drawForest() {
    for (const tree of this.trees) {
      tree.draw()
    }
  }
}

function makeForest() {
  const forest = new Forest()

  const treeOpts: Array<ITreeTypeOpts> = [
    {treeName: Trees.maple, color: 'Yellow'},
    {treeName: Trees.maple, color: 'Yellow'},
    {treeName: Trees.oak, color: 'Blue'},
    {treeName: Trees.oak, color: 'Blue'},
    {treeName: Trees.oak, color: 'Blue'},
    {treeName: Trees.maple, color: 'Red'},
    {treeName: Trees.oak, color: 'Green'},
    {treeName: Trees.oak, color: 'Green'},
    {treeName: Trees.oak, color: 'Green'},
    {treeName: Trees.oak, color: 'Brown'},
  ]

  const randomCoords = (): { x: number, y: number } => ({
    x: Math.ceil(Math.random() * 10),
    y: Math.ceil(Math.random() * 10)
  })

  for(const opt of treeOpts){
    forest.makeTree(opt, randomCoords())
  }

  forest.drawForest()
}

/*
* As you can see only 4 tree types created, with 10 trees. We've saved memory.
* */
makeForest()