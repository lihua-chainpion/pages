function getConfig() {
  return {
    chainId: '0x5',
    chainName: 'Goerli Test Network',
    ittcContract: {
      address: '0xcfe651d914415a0029fe3e4233ef07e51cb0eb36',
      abi: getIttcAbi(),
      inviteBaseUrl: 'https://lihua-chainpion.github.io/pages/index.html?inviter=',
    },
    usdtContract: {
      address: '0xc715e8213449a5c3c401b520c52a9ca286792f1b',
      abi: getUsdtAbi(),
    },
  }
}
