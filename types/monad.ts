import { Ref } from "vue";

export type Maybe<T> = T | undefined | null;
export type MaybeRef<T> = Ref<T> | T;

export function monadRun<T, R>(val: Maybe<T>, func: (val: T) => R): Maybe<R> {
    if (val === undefined || val === null) {
        return undefined;
    }

    return func(val as T);
}
