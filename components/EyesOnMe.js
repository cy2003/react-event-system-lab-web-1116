const React = require('react');

class EyesOnMe extends React.Component {
  constructor(){
    super()
    this.focusMessage = this.focusMessage.bind(this)
    this.blurMessage = this.blurMessage.bind(this)
  }

  focusMessage(){
    console.log('Good!')
  }

  blurMessage(){
    console.log('Hey! Eyes on me!')
  }

  render(){
    return <button onFocus={this.focusMessage} onBlur={this.blurMessage} />
  }

}


module.exports = EyesOnMe
