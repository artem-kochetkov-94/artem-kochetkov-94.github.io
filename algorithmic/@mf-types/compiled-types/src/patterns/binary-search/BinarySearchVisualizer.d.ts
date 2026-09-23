import type { BinarySearchStep } from "./binarySearch";
/**
 * Чистая отрисовка ОДНОГО кадра. Клетки вне диапазона показаны «отброшенными»,
 * середина подсвечена, маркеры L / M / H плавно перемещаются (Framer Motion).
 *
 * Для режимов границ (lower/upper) диапазон полуоткрытый [low, high), а ответ
 * может оказаться за концом массива — поэтому рисуем фантомный слот «n».
 */
export declare function BinarySearchVisualizer({ nums, target, step, }: {
    nums: number[];
    target: number;
    step: BinarySearchStep;
}): import("react").JSX.Element;
