class MockApiHandler {
  constructor (text, error) {
    this.text = text
    this.error = error
  }

  async getWelcomeString () {
    return ({ text: this.text, error: this.error })
  }
}
export default MockApiHandler
