function getConfig() {
  return {
    chainId: '0x5',
    chainName: 'Goerli Test Network',
    ittcContract: {
      address: '0x78a6fbf2c5f9cbbb5875dc7b5fdcc0752173ffe4',
      abi: getIttcAbi(),
      inviteBaseUrl: 'https://lihua-chainpion.github.io/pages/index.html?inviter=',
    },
    usdtContract: {
      address: '0x68e1f13a46bc104a2cb0a99b06cf0b8640e485a1',
      abi: getUsdtAbi(),
    },
  }
}
