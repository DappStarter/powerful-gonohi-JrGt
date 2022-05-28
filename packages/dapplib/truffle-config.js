require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea knife sun tooth guard render remain unknown hover kitten bottom general'; 
let testAccounts = [
"0xba1c29b88e586a7e19b23b7a6ea2a6acbeb1dd8a46bd33ae285881e13f6b2814",
"0x184d4039ce9f1c53ab4f1ffdd1b39da0f0302c05d71e97ddec38f1b1495b62eb",
"0xb86e9540711976d79fc1e3d6b8da8a28a743932eba172097fcaf9b09e6b23763",
"0xffc8e65220c65519553d8f784e4830c34d96442d0d8f06d703eed091d698635d",
"0xf6114ee7e10667b4d839888c968114551198fb79545f73b39915b1e2a81fc8f6",
"0x713485045b1b86205d9bece64bf694c64fa6a6198ff2e865ecd95c3d94e61fd1",
"0x10ca71687545d4b2e5e6f9e1f1e4ccb947835a435ec5242be73b395505428225",
"0x0d0955645066f96622962e33fdc8caabb41a3f1065446abca5b7846dab45d57d",
"0x255ce7cf1ee6be1acd7a80e00fe630c644d270b071db4cd18eef6e40d08b301c",
"0x6a2da6cc6aa2bf64dfd9bf3bd1ea1b1ee354118ce043acb9a1b0017e2bc966df"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


