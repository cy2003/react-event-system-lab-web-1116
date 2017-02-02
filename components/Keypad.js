const React = require('react');

class Keypad extends React.Component {
  constructor(){
    super()
    this.message = this.message.bind(this)
  }

  message() {
    console.log('Entering password...')
  }

  render() {
    return (
      <input type="password" onKeyUp={this.message}></input>
    );
  }
}


module.exports = Keypad
