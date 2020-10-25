import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import {CardTitle, CardAddress, CardBalance}
  from "../../atoms/Text/index.jsx";
import {USDIcon, WalletsIcon, EnvelopeIcon, AccountsIcon }
  from "../../atoms/Icons/index.jsx"


export default function ({wallet, rate}) {
  var balance = (wallet.balance);
  var usd_balance = balance/rate;
  return (
    <div>
      <div style={{borderRadius:20,
           backgroundColor: "#eaeaea"}}>
      <CardTitle children={wallet.name} />

      <CardAddress children= {"Address: " + wallet.address} />

      <CardBalance children={wallet.currency+": "+balance} />
      <p></p>
      <CardBalance children={"Bitcoin: "+ balance} />

      {wallet.currency}
      {rate}
      </div>
    </div>
  );
}
