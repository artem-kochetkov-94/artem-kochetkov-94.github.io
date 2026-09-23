/**
 * Реализация паттерна "Итератор" (Iterator) в классическом виде GoF —
 * чистый TypeScript, без React. Это "ядро", которое крутится в демо.
 *
 * Суть паттерна: дать единый способ последовательно перебирать элементы
 * коллекции, НЕ раскрывая её внутреннее устройство. Бонус — у одной и той же
 * коллекции может быть НЕСКОЛЬКО итераторов с разными стратегиями обхода.
 */
/** Узел двоичного дерева: значение и (необязательно) две ветви. */
export interface TreeNode<T> {
    value: T;
    left?: TreeNode<T>;
    right?: TreeNode<T>;
}
/**
 * Iterator (GoF) — минимальный контракт обхода: "есть ли ещё" + "дай следующий".
 * Тот, кто им пользуется, ничего не знает про устройство коллекции под ним.
 */
export interface Iterator<T> {
    hasNext(): boolean;
    next(): T;
}
/**
 * Aggregate (коллекция) — умеет выдавать итератор для себя.
 * Здесь ключевая мысль паттерна: один метод, но разные `order` дают
 * РАЗНЫЕ итераторы поверх одних и тех же данных.
 */
export interface IterableCollection<T> {
    createIterator(order: TraversalOrder): Iterator<T>;
}
/** Стратегии обхода дерева — каждой соответствует свой ConcreteIterator. */
export type TraversalOrder = "pre-order" | "in-order" | "post-order" | "level-order";
/**
 * Конкретная коллекция — двоичное дерево. Снаружи о его устройстве
 * (узлы, ссылки, стек/очередь обхода) знать не нужно: достаточно
 * попросить итератор нужной стратегии и крутить hasNext/next.
 */
export declare class BinaryTree<T> implements IterableCollection<T> {
    private root?;
    constructor(root?: TreeNode<T> | undefined);
    createIterator(order: TraversalOrder): Iterator<T>;
    /**
     * Утилита для демо: собрать весь обход в массив, пользуясь ТОЛЬКО
     * публичным контрактом итератора (hasNext/next) — как это сделал бы
     * любой внешний код.
     */
    toArray(order: TraversalOrder): T[];
}
