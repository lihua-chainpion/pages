function getConfig() {
  return {
    chainId: '0x5',
    chainName: 'Goerli Test Network',
    browserBaseUrl: 'https://goerli.etherscan.io/tx/',
    ittiContract: {
      address: '0x383D5B1152b8b5B1247f52b4d92F88572970F4b3',
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
