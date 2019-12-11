const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');

const provider = new HDWalletProvider(
    'creek spell wet level cancel brick diet skin vacant engine universe cruise',
    'https://rinkeby.infura.io/v3/e1fa40b52a424353865fabfe38406ca5'
);
const web3 = new Web3(provider);;

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data: '0x' + bytecode, arguments: ['Hi there!']}) 
    .send({gas: '1000000', from: accounts[0]});

    console.log('Contract deployed to:', result.options.address);
};
deploy();