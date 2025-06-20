"use client"
import { getDefaultConfig } from "@rainbow-me/rainbowkit"
import { anvil, zksync, mainnet } from "wagmi/chains"

console.log("WalletConnect Project ID:", process.env.NEXT_PUBLIC_WALLETCONNECT_ID);


export default getDefaultConfig({
    appName: "TSender",
    projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_ID!,
    chains: [anvil, zksync, mainnet],
    ssr: false,

})

