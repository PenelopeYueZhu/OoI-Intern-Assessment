import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import PriceInfo from "../molecules/Info/PriceInfo";
import WalletCard from "../molecules/WalletCard/WalletCard.jsx";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100%",
  },
}));

export default function ({ wallets, rate }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <PriceInfo />
          {wallets.map( wallet => (
            <WalletCard wallet={wallet} rate={rate}/>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}
