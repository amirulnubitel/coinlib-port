import { UnitConverters } from './types';
export declare class UnitConvertersUtil {
    toMainDenominationBigNumber: UnitConverters['toMainDenominationBigNumber'];
    toBaseDenominationBigNumber: UnitConverters['toMainDenominationBigNumber'];
    toMainDenomination: UnitConverters['toMainDenominationString'];
    toBaseDenomination: UnitConverters['toBaseDenominationString'];
    toMainDenominationBigNumberEth: UnitConverters['toMainDenominationBigNumber'];
    toBaseDenominationBigNumberEth: UnitConverters['toMainDenominationBigNumber'];
    toMainDenominationEth: UnitConverters['toMainDenominationString'];
    toBaseDenominationEth: UnitConverters['toBaseDenominationString'];
    coinDecimals: number;
    constructor(config: {
        coinDecimals?: number;
    });
    getCustomUnitConverter(decimals: number): {
        toMainDenominationBigNumber: (baseNumeric: string | number | import("bignumber.js").BigNumber) => import("bignumber.js").BigNumber;
        toMainDenominationNumber: (baseNumeric: string | number | import("bignumber.js").BigNumber) => number;
        toMainDenominationString: (baseNumeric: string | number | import("bignumber.js").BigNumber) => string;
        toBaseDenominationBigNumber: (mainNumeric: string | number | import("bignumber.js").BigNumber) => import("bignumber.js").BigNumber;
        toBaseDenominationNumber: (mainNumeric: string | number | import("bignumber.js").BigNumber) => number;
        toBaseDenominationString: (mainNumeric: string | number | import("bignumber.js").BigNumber) => string;
    };
}
