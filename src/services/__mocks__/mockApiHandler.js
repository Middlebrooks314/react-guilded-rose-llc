const storeItems = 
[
  {
    id: 1,
    name: "Aged Brie",
    sell_in: 3,
    quality: 20,
  },
  {
    id: 2,
    name: "Foo",
    sell_in: 25,
    quality: 2,
  },
  {
    id: 3,
    name: "Bar",
    sell_in: 22,
    quality: 10,
  },
  {
    id: 4,
    name: "Lorem",
    sell_in: 2,
    quality: 5,
  },
  {
    id: 5,
    name: "Ipsum",
    sell_in: 4,
    quality: 16,
  }
]
class MockApiHandler {
  constructor(text, error, items) {
    this.text = text
    this.error = error
    this.items = items || storeItems
  }

  getWelcomeString() {
    if (this.error){
      return this.error
    } 
    else {
      return this.text
    }
  }

  getStoreItems() {
    if (this.error) return this.error
    if (this.items) return this.items
  }

  getItemData(itemId) {
    console.log(itemId)
    const item = storeItems.find(item => item.id == itemId)
    console.log(item)
    return item
  }
}
export default MockApiHandler
