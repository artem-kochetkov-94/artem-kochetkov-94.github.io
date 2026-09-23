/**
 * MapReduce — модель обработки больших объёмов данных, разбитая на три
 * фазы, каждая из которых легко параллелится по множеству машин:
 *  - Map — независимо обрабатываем каждый маленький кусок входных данных,
 *    превращая его в пары (ключ, значение);
 *  - Shuffle — группируем пары по ключу, собирая одинаковые ключи вместе
 *    независимо от того, на какой машине они были посчитаны;
 *  - Reduce — сворачиваем каждую группу в одно итоговое значение.
 * Классический пример — word count: посчитать, сколько раз встречается
 * каждое слово в тексте.
 */
export declare const INPUT_TEXT = "Welcome to Hadoop\nClass Hadoop is\ngood Hadoop is\nbad";
export declare const CUT_LINES: string[];
export interface WordPair {
    word: string;
    count: number;
}
/** Map: каждая строка — независимо превращается в пары (слово, 1). */
export declare const MAP_OUTPUT: WordPair[][];
/** Shuffle: те же пары, но сгруппированные по слову — независимо от того, из какой строки они пришли. */
export declare const SHUFFLE_GROUPS: {
    word: string;
    counts: number[];
}[];
/** Reduce: каждая группа сворачивается суммой в одно значение. */
export declare const REDUCE_OUTPUT: WordPair[];
export type MapReducePhase = "input" | "cut" | "map" | "shuffle" | "reduce";
export declare const PHASES: {
    id: MapReducePhase;
    label: string;
    description: string;
}[];
