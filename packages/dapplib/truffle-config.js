require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi bridge tooth guard render remain minor hidden clock fog stove'; 
let testAccounts = [
"0x7b1b7dd690054fdbccbd1cb57ca3b8ee834e2f0c4e19ddbd3327dd19ac34660b",
"0x8d2352982400ef92f3773980874fc5a4dc30d4fe394f18f3f70aec8a9f67dede",
"0xa610b5d063381a5018f1469a51e6fae471d20e15fd6216387a8760853539009d",
"0xcca169337ab279e5c546e0b55254268c83ad9a231487b2374d59cd8a7d5c017a",
"0x59ad00da0443ca18fa90760943f968078c577744b5e0e4dfec540642bafff952",
"0x0b5cbf4ba857b59e6e45336270a7de0f6d98587eeb1aab6ee727ea659901e6bb",
"0x431933730a37f63bec393ae1fb8addb497073682301ccdd29d4c6ebf1a3a33a2",
"0xbf335b93f093a0cc77b8b873c16eb839984f5eb9c1c51f0bfc1210d0aed1fdd0",
"0xbb374438554167a6b9ad6599d7b5d8823573d0961c4988a5b978dbd6218c73da",
"0x57481e1deccde9acd0978e36c45c8113a92d11c3003339d4976abb150763a4d5"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

