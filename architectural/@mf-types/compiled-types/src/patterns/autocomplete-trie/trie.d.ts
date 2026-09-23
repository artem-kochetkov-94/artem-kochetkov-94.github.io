/**
 * Автодополнение — классическая задача поиска по префиксу, и классическая
 * структура для неё — Trie (префиксное дерево), точнее — его сжатая
 * версия (radix tree): общие последовательности символов схлопываются в
 * одно ребро, а не хранятся по символу на узел.
 *
 * На каждом листе — счётчик популярности (сколько раз это слово реально
 * искали), чтобы подсказки сортировались по частоте, а не по алфавиту.
 */
export interface TrieNode {
    id: string;
    /** Символы на этом ребре (может быть несколько — "ривет", а не по одной букве). */
    label: string;
    parentId: string | null;
    /** Заполнено только у листьев — итоговое слово целиком и его популярность. */
    leaf: {
        word: string;
        count: number;
    } | null;
    pos: {
        x: number;
        y: number;
    };
}
export declare const TRIE_NODES: TrieNode[];
export declare function getNode(id: string): TrieNode;
export interface PrefixMatch {
    /** id узлов на пути, покрывающих введённый префикс (для подсветки). */
    highlightedNodeIds: Set<string>;
    suggestions: {
        word: string;
        count: number;
    }[];
}
/** Ищем все листья, чьё слово начинается с введённого префикса, и путь до них для подсветки. */
export declare function matchPrefix(prefix: string): PrefixMatch;
