import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import PriceInfo from "../molecules/Info/PriceInfo";
import WalletCard from "../molecules/WalletCard/WalletCard.jsx";
import TouchWalletForm from "../molecules/Form/TouchWallet.jsx";

import TextIcon from "../atoms/Button/TextIcon";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100%",
  },
}));

class Wallets extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      displayAddForm: false
    };
  }


  render() {

    const classes = this.props;

    return (
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12}>
            <PriceInfo />
            {this.props.wallets.map( wallet => (
              <WalletCard wallet={wallet} rate={this.props.rate}/>
            ))}
            <TextIcon
              children="Add New Wallet"
              onClick={()=> {
                this.setState({displayAddForm: true});
              }}
            />
            {this.state.displayAddForm
             && <TouchWalletForm isEdit={false} wallet={null}/>}
            {this.state.displayAddForm &&
              <TextIcon
                children="Cancel"
                onClick={()=> {
                  this.setState({displayAddForm: false});
                }}
              />
            }
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Wallets;
