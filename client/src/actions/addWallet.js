export default async (wallet) => {
  let res, wallets;
  console.log(wallet);
  try {
    res = await fetch("/api/wallets", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(wallet)
    });
  } catch (e) {
    return console.log(e);
  }
  return wallets;
};
