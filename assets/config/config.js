function getConfig() {
  return {
    chainId: '0x5',
    chainName: 'Goerli Test Network',
    ittcContract: {
      address: '0xC1Cd179Fcd483326eFD9bDaB6E18d0A19E66F9f4',
      abi: getIttcAbi(),
      inviteBaseUrl: 'https://lihua-chainpion.github.io/pages/index.html?inviter=',
    },
    usdtContract: {
      address: '0x68e1f13a46bc104a2cb0a99b06cf0b8640e485a1',
      abi: getUsdtAbi(),
    },
  }
}
