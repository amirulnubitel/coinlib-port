import { TronPaymentsFactory } from '../lib-tron'
// import { RipplePaymentsFactory } from '../lib-ripple'
// import { StellarPaymentsFactory } from '../lib-stellar'
import { BitcoinPaymentsFactory } from '../lib-bitcoin'
import { EthereumPaymentsFactory } from '../lib-ethereum'
import { LitecoinPaymentsFactory } from '../lib-litecoin'
// import { BitcoinCashPaymentsFactory } from '../coinlib-bitcoin-cash'
import { DogePaymentsFactory } from '../lib-doge'

import { keysOf } from './utils'
// TODO ^
export const PAYMENTS_FACTORIES = {
  TRX: new TronPaymentsFactory(),
  // XRP: new RipplePaymentsFactory(),
  // XLM: new StellarPaymentsFactory(),
  BTC: new BitcoinPaymentsFactory(),
  ETH: new EthereumPaymentsFactory(),
  LTC: new LitecoinPaymentsFactory(),
  // BCH: new BitcoinCashPaymentsFactory(),
  DOGE: new DogePaymentsFactory(),
}

export const SUPPORTED_NETWORK_SYMBOLS = keysOf(PAYMENTS_FACTORIES)
