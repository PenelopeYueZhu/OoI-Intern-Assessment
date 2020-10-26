export default async (wallet) => {
  let res, wallets;
  console.log(wallet);
  try {
    res = await fetch("/api/wallets", {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(wallet)
    });
    wallets = await res.json();
  } catch (e) {
    return console.log(e);
  }
  return wallets;
};
