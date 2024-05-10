/// <reference types="node" />
import { NetworkType } from '../lib-common';
export { getMultisigPaymentScript, getSinglesigPaymentScript, publicKeyToAddress, publicKeyToKeyPair, publicKeyToString, publicKeyToBuffer, privateKeyToKeyPair, privateKeyToAddress, } from './bitcoinish';
declare const toMainDenominationBigNumber: (baseNumeric: string | number | import("bignumber.js").BigNumber) => import("bignumber.js").BigNumber, toMainDenominationString: (baseNumeric: string | number | import("bignumber.js").BigNumber) => string, toMainDenominationNumber: (baseNumeric: string | number | import("bignumber.js").BigNumber) => number, toBaseDenominationBigNumber: (mainNumeric: string | number | import("bignumber.js").BigNumber) => import("bignumber.js").BigNumber, toBaseDenominationString: (mainNumeric: string | number | import("bignumber.js").BigNumber) => string, toBaseDenominationNumber: (mainNumeric: string | number | import("bignumber.js").BigNumber) => number;
export { toMainDenominationBigNumber, toMainDenominationString, toMainDenominationNumber, toBaseDenominationBigNumber, toBaseDenominationString, toBaseDenominationNumber, };
export declare function isValidAddress(address: string, networkType: NetworkType): boolean;
export declare function standardizeAddress(address: string, networkType: NetworkType): string | null;
export declare function isValidPublicKey(publicKey: string | Buffer, networkType: NetworkType): boolean;
export declare function isValidExtraId(extraId: string): boolean;
export declare function isValidPrivateKey(privateKey: string, networkType: NetworkType): boolean;
export declare function estimateBitcoinTxSize(inputCounts: {
    [k: string]: number;
}, outputCounts: {
    [k: string]: number;
}, networkType: NetworkType): number;
