// import { TronPaymentsFactory } from '../coinlib-tron'
// import { RipplePaymentsFactory } from '../coinlib-ripple'
// import { StellarPaymentsFactory } from '../coinlib-stellar'
// import { BitcoinPaymentsFactory } from '../coinlib-bitcoin'
// import { EthereumPaymentsFactory } from '../coinlib-ethereum'
import { LitecoinPaymentsFactory } from '../lib-litecoin'
// import { BitcoinCashPaymentsFactory } from '../coinlib-bitcoin-cash'
// import { DogePaymentsFactory } from '../coinlib-doge'

import { keysOf } from './utils'
// TODO ^
export const PAYMENTS_FACTORIES = {
  // TRX: new TronPaymentsFactory(),
  // XRP: new RipplePaymentsFactory(),
  // XLM: new StellarPaymentsFactory(),
  // BTC: new BitcoinPaymentsFactory(),
  // ETH: new EthereumPaymentsFactory(),
  LTC: new LitecoinPaymentsFactory(),
  // BCH: new BitcoinCashPaymentsFactory(),
  // DOGE: new DogePaymentsFactory(),
}

export const SUPPORTED_NETWORK_SYMBOLS = keysOf(PAYMENTS_FACTORIES)
