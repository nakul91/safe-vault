import { useRouter } from "next/router";
import React from "react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { baseGoerli } from "wagmi/chains";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { InjectedConnector } from "wagmi/connectors/injected";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { publicProvider } from "wagmi/providers/public";

import { productName } from "../constants";
import ShareLink from "../ui_components/ShareLinkPage";
import MetaHead from "../ui_components/siteMeta";
import { BaseGoerli } from "../utils/chain/baseGoerli";

const { chains, publicClient, webSocketPublicClient } = configureChains(
    [baseGoerli],
    [publicProvider()],
);

const config = createConfig({
    autoConnect: true,
    connectors: [
        new MetaMaskConnector({ chains }),
        new CoinbaseWalletConnector({
            chains,
            options: {
                appName: productName,
                jsonRpcUrl: BaseGoerli.info.url,
                chainId: BaseGoerli.coinId,
            },
        }),
        new InjectedConnector({
            chains,
            options: {
                name: "Injected",
                shimDisconnect: true,
            },
        }),
    ],
    publicClient,
    webSocketPublicClient,
});

export default function claim() {
    const router = useRouter();
    const uuid = router.asPath;
    return (
        <WagmiConfig config={config}>
            <MetaHead
                title="Safe Vault | Start saving to earn returns"
                description="Experience seamless and assured returns through smart contract links with Safe Vault."
                imageUrl=""
                urlEndpoint=""
            />
            <ShareLink uuid={uuid} />
        </WagmiConfig>
    );
}
