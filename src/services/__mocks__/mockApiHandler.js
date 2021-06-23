const storeItems = 
[
  {
    id: 1,
    name: "Aged Brie",
    sellIn: 3,
    quality: 20,
  },
  {
    id: 2,
    name: "Foo",
    sellIn: 25,
    quality: 2,
  },
  {
    id: 3,
    name: "Bar",
    sellIn: 22,
    quality: 10,
  },
  {
    id: 4,
    name: "Lorem",
    sellIin: 2,
    quality: 5,
  },
  {
    id: 5,
    name: "Ipsum",
    sellIn: 4,
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
    const item = storeItems.find(item => item.id == itemId)
    return item
  }

  postNewItem(formData, history) {
    return (formData, history)
  }
}
export default MockApiHandler
