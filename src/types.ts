export * from './lib/resolver/types';

/**
 * General variant for typed functions.
 */
export type AnyFunc<A extends any = any, R extends any = any> = (
  ...args: A extends any[] ? A : A[]
) => R;

export type AnyObj<V extends any = any> = {
  [key: string]: V;
  [key: number]: V;
};

export type RequiredProps<T extends object, P extends keyof T> = Omit<T, P> &
  Required<Pick<T, P>>;

export type DeepObject<T = any> = {
  [key: string]: T extends infer X ? DeepObject<X> | X : never;
};
