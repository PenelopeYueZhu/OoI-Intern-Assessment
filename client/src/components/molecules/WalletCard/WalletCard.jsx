import React, { useState } from "react";
import BigNumber from "bignumber.js"

import {CardTitle, CardAddress, CardBalance}
  from "../../atoms/Text/index.jsx";
import TextIcon from "../../atoms/Button/TextIcon";
import WalletCard from "../../atoms/Card/index.jsx";
import TouchWalletForm from "../Form/TouchWallet.jsx";

import { deleteWallet } from "../../../actions";

export default function ({wallet, rate}) {
  const [displayEditForm, toggleEditForm] = useState(false);

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
      <p></p>
      <TextIcon
        children="Edit"
        onClick={()=>{
            console.log("edit");
            toggleEditForm(true);
          }
        }
      />
      {displayEditForm
        && <TouchWalletForm isEdit={true} wallet={wallet}/> }
      {displayEditForm
        && <TextIcon
             children="Cancel"
             onClick={()=> {
               toggleEditForm(false);
             }}
           />
      }

      <TextIcon
        children="Delete"
        onClick={()=> {
          deleteWallet(wallet).then(() => {
            console.log("deleted");
            window.location.reload();
          });
        }}
      />
    </div>
  );

  return (
      <WalletCard children={cardInfo}/>
  );
}
