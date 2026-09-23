import type { TwoPointersStep } from "./twoPointers";
/**
 * Чистая отрисовка ОДНОГО кадра алгоритма. Никакой логики — только текущий
 * шаг (`step`) превращается в картинку. Framer Motion плавно перемещает
 * маркеры L/R между ячейками (через общий `layoutId`) и «подсвечивает»
 * только что записанную клетку результата.
 */
export declare function ArrayVisualizer({ nums, step, }: {
    nums: number[];
    step: TwoPointersStep;
}): import("react").JSX.Element;
