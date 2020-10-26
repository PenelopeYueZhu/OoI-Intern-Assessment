import React from "react";
import BigNumber from "bignumber.js"

import {CardTitle, CardAddress, CardBalance}
  from "../../atoms/Text/index.jsx";
import WalletCard from "../../atoms/Card/index.jsx";

export default function ({wallet, rate}) {
  // Calculating the currency
  var balance = BigNumber(wallet.balance);
  var formattedBalanceOg = new Intl.NumberFormat(
      "en-US"
    ).format(balance);
  var usdBalance = BigNumber(balance/rate);
  var formattedBalanceUSD = new Intl.NumberFormat(
      "en-US",
      { style: "currency", currency: "USD" }
    ).format(usdBalance);

  var cryptoSymbol = wallet.currency.includes("Bitcoin") ? "\u20BF" : "Ξ";

  var cardInfo = (
    <div>
      <CardTitle children={wallet.name} />
      <CardAddress children= {"Address: " + wallet.address} />
      <CardBalance children={"Crypto Balance: " +
        cryptoSymbol + formattedBalanceOg} />
      <p></p>
      <CardBalance children={"USD Balance: " + formattedBalanceUSD} />
    </div>
  );

  return (
      <WalletCard children={cardInfo}/>
  );
}
