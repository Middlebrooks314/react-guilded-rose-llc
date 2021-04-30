const storeItems = {
  items:
[
  {
    id: 1,
    name: 'Aged Brie',
    sellIn: 3,
    quality: 20
  },
  {
    id: 2,
    name: 'Foo',
    sellIn: 25,
    quality: 2
  },
  {
    id: 3,
    name: 'Bar',
    sellIn: 22,
    quality: 10
  },
  {
    id: 4,
    name: 'Lorem',
    sellIn: 2,
    quality: 5
  },
  {
    id: 5,
    name: 'Ipsum',
    sellIn: 4,
    quality: 16
  }
]
}
class MockApiHandler {
  constructor (text, error, items) {
    this.text = text
    this.error = error
    this.items = items || storeItems
  }

  async getWelcomeString () {
    return ({ text: this.text, error: this.error })
  }

  async getStoreItems () {
    return ({ items: this.items, error: this.error })
  }
}
export default MockApiHandler
