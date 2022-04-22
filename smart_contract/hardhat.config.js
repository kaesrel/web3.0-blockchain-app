// https://eth-ropsten.alchemyapi.io/v2/xJN0ixp-XqLAbFwqF1_wusa6kMxPxW2I

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/xJN0ixp-XqLAbFwqF1_wusa6kMxPxW2I',
      accounts: ['ad6d159dee713ce7fa16f950778a52b7b4685ca583187dc519392768e0e355aa'],
    },
  },
};