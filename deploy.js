const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider(
  "soda year order churn trend tooth loop lottery answer angle beach hope",
  "https://rinkeby.infura.io/v3/d51f71c7c5534d28b7b9fa1328672f9e"
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode })
    .send({ gas: "1000000", gasPrice: "5000000000", from: accounts[0] });

  console.log(interface);
  console.log("Contract deployed to ", result.options.address);
};

deploy();
