interface IBuildHouse {
  build: () => void
}

abstract class BuildHouseTemplate implements IBuildHouse {
  public build() {
    this.makeFoundation()
    this.makeWalls()
    this.makeRoof()
    this.makeGarden()
  }

  private makeFoundation() {
    console.log('making standard Foundation')
  }

  private makeWalls() {
    console.log('making standard Walls')
  }

  /* Hook. this method could be overridden */
  protected makeRoof() {
    console.log('making standard Roof')
  }

  /* this method should be implemented */
  protected abstract makeGarden()
}

class GlassRoofHouse extends BuildHouseTemplate implements IBuildHouse {
  protected makeRoof() {
    console.log(`making roof full of glass`)
  }

  protected makeGarden() {
    console.log(`making garden without a pool`)
  }
}

class PoolHouse extends BuildHouseTemplate implements IBuildHouse {
  protected makeGarden() {
    console.log(`making garden with a pool`)
  }
}

function clientCode() {
  function buildHouse(houseBuilder: IBuildHouse) {
    houseBuilder.build()
  }

  buildHouse(new GlassRoofHouse())
  console.log(`============================`);
  buildHouse(new PoolHouse())
}

clientCode()
