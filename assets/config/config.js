function getConfig() {
  return {
    chainId: '0x5',
    chainName: 'Goerli Test Network',
    ittiContract: {
      address: '0xe1b93d50A65Eceb7362eE1faCC89Cc249284a347',
      abi: getIttiAbi(),
      homeInviteBaseUrl: 'https://lihua-chainpion.github.io/pages/index.html?inviter=',
      daoInviteBaseUrl: 'https://lihua-chainpion.github.io/pages/dao-general.html?inviter=',
    },
    usdtContract: {
      address: '0x320e08c12e0A16A7118164750731537b99C92E9b',
      abi: getUsdtAbi(),
    },
  }
}
