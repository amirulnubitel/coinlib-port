import { BitcoinPaymentsFactory } from '../lib-bitcoin';
import { EthereumPaymentsFactory } from '../lib-ethereum';
import { LitecoinPaymentsFactory } from '../lib-litecoin';
import { DogePaymentsFactory } from '../lib-doge';
export declare const PAYMENTS_FACTORIES: {
    BTC: BitcoinPaymentsFactory;
    ETH: EthereumPaymentsFactory;
    LTC: LitecoinPaymentsFactory;
    DOGE: DogePaymentsFactory;
};
export declare const SUPPORTED_NETWORK_SYMBOLS: ("BTC" | "ETH" | "LTC" | "DOGE")[];
