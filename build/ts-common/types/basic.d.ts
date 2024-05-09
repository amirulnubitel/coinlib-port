import * as t from 'io-ts';
export type Predicate<T> = (x: T) => boolean;
export type Defined<T> = T extends undefined ? never : T;
export type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends Array<infer U> ? Array<DeepPartial<U>> : T[P] extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : DeepPartial<T[P]>;
};
export type Enum = (string | number)[] | Object;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export declare const Numeric: t.UnionC<[t.StringC, t.NumberC, import("./BigNumber").BigNumberC]>;
export type Numeric = t.TypeOf<typeof Numeric>;
export type PromiseValue<T> = T extends Promise<infer X> ? X : never;
