import { TranslationsType } from "../locales/en";

type DotNestedKeys<T, Prefix extends string = ""> = T extends object
    ? {
          [K in keyof T]: K extends string
              ? `${Prefix}${K}` | DotNestedKeys<T[K], `${Prefix}${K}.`>
              : never;
      }[keyof T]
    : never;

export type TranslationKeys = DotNestedKeys<TranslationsType>;
