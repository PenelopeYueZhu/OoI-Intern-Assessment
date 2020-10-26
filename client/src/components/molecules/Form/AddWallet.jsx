import React from "react";
import { addWallet } from "../../../actions";

class AddWalletForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      currency: "Ethereum",
      balance: 0
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
    console.log(addWallet(this.state));
    alert("New wallet " + this.state.name + " added!");
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleNameChange} />
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

export default AddWalletForm;
