function getConfig() {
  return {
    chainId: '0x5',
    chainName: 'Goerli Test Network',
    browserBaseUrl: 'https://goerli.etherscan.io/tx/',
    ittiContract: {
      address: '0x6782e26405Bd682B58499ef462C3fE90C6329287',
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
