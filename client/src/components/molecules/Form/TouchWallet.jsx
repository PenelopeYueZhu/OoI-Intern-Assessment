import React from "react";
import { addWallet, editWallet } from "../../../actions";

class TouchWalletForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.wallet ? props.wallet.name : "",
      address: props.wallet ? props.wallet.address : "",
      currency: props.wallet ? props.wallet.currency : "Ethereum",
      balance: props.wallet ? props.wallet.balance : 0
    };

    this.handleBalanceChange = this.handleBalanceChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleCurrencyChange = this.handleCurrencyChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleBalanceChange(event) {
    this.setState({balance: parseInt(event.target.value)});
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  handleAddressChange(event) {
    this.setState({address: event.target.value});
  }

  handleCurrencyChange(event) {
    this.setState({currency: event.target.value});
  }

  handleSubmit(event) {
    var newWallet = {
      name: this.state.name,
      address: this.state.address,
      currency: this.state.currency,
      balance: this.state.balance
    }
    if( this.props.isEdit ){
      console.log(newWallet.currency);
      editWallet(newWallet);
      alert( this.props.wallet.name + " udpated!");
    }
    else {
      console.log(addWallet(newWallet));
      alert("New wallet " + this.state.name + " added!");
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleNameChange}
            disabled={this.props.isEdit}/>
        </label>
        <label>
          Address:
          <input
            type="text"
            value={this.state.address}
            onChange={this.handleAddressChange} />
        </label>
        <label>
          Currency:
          <select
            value={this.state.currency}
            onChange={this.handleCurrencyChange}>
            <option value="Ethereum">Ethereum</option>
            <option value="Bitcoin">Bitcoin</option>
          </select>
        </label>
        <label>
          Balance:
          <input
            type="number"
            value={this.state.balance}
            onChange={this.handleBalanceChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default TouchWalletForm;
