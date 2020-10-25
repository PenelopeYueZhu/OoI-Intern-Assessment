import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import BigNumber from "bignumber.js"

import {CardTitle, CardAddress, CardBalance}
  from "../../atoms/Text/index.jsx";
import {USDIcon, WalletsIcon, EnvelopeIcon, AccountsIcon }
  from "../../atoms/Icons/index.jsx"
import WalletCard from "../../atoms/Card/index.jsx";


export default function ({wallet, rate}) {
  // Calculating the currency
  var balance = BigNumber(wallet.balance);
  /*var formattedBalanceOg = new Intl.NumberFormat(
      'en-IN',
      { style: 'currency', currency: 'USD' }
    ).format(balance);*/
  var usdBalance = BigNumber(balance/rate);
  var formattedBalanceUSD = new Intl.NumberFormat(
      'en-IN',
      { style: 'currency', currency: 'USD' }
    ).format(usdBalance);

  var cardInfo = (
    <div>
      <CardTitle children={wallet.name} />
      <CardAddress children= {"Address: " + wallet.address} />
      <CardBalance children={formattedBalanceUSD} />
    </div>
  );

  return (
      <WalletCard children={cardInfo}/>
  );
}
