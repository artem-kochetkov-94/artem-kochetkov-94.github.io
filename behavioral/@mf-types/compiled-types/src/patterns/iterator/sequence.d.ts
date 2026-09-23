/**
 * Та же идея "Итератора", но уже встроенная в сам язык — протокол итерации
 * JavaScript. Объект итерируемый, если у него есть метод `[Symbol.iterator]()`,
 * возвращающий итератор с `next()`, который выдаёт `{ value, done }`.
 *
 * На этом протоколе держатся `for...of`, spread `[...x]`, деструктуризация,
 * `Array.from`, `Map`/`Set`. Реализовав его, наш объект "из коробки"
 * работает со всеми этими конструкциями.
 */
/**
 * Числовой диапазон [from, to) с шагом step — собственная, "ручная"
 * реализация протокола итерации (без генераторов), чтобы было видно
 * сам контракт: метод-фабрика итератора + next() с { value, done }.
 */
export declare class Range implements Iterable<number> {
    private from;
    private to;
    private step;
    constructor(from: number, to: number, step?: number);
    [Symbol.iterator](): Iterator<number>;
}
/**
 * Бесконечный источник натуральных чисел. Сам по себе он ничего не считает —
 * значения появляются ТОЛЬКО когда их запрашивают через next() (лень).
 * Поэтому бесконечность не страшна: мы возьмём ровно столько, сколько нужно.
 */
export declare function naturals(): Generator<number>;
/** Ленивое преобразование: пробрасывает значения источника через fn. */
export declare function map<T, U>(source: Iterable<T>, fn: (value: T) => U): Generator<U>;
/** Ленивый фильтр: пропускает только значения, прошедшие предикат. */
export declare function filter<T>(source: Iterable<T>, predicate: (value: T) => boolean): Generator<T>;
/**
 * Берёт первые `count` элементов из ЛЮБОГО итерируемого — даже бесконечного.
 * Как только набрали нужное число, прекращаем тянуть из источника:
 * именно здесь "ленивый конвейер" обрывается и больше ничего не вычисляется.
 */
export declare function take<T>(source: Iterable<T>, count: number): T[];
