import type { MergeSortStep } from "./mergeSort";
/**
 * Чистая отрисовка ОДНОГО кадра. Сверху — весь массив с подсвеченным активным
 * отрезком [lo, hi). Во время слияния снизу появляется «стол слияния»: левая и
 * правая половины с указателями i / j и строка результата, которая наполняется
 * (новые ячейки плавно въезжают через Framer Motion).
 */
export declare function MergeSortVisualizer({ step }: {
    step: MergeSortStep;
}): import("react").JSX.Element;
