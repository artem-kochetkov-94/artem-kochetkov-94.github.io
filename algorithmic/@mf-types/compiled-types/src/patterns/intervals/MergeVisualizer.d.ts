import type { Interval } from "./intervals";
import type { MergeStep } from "./merge";
/**
 * Чистая отрисовка ОДНОГО кадра слияния. Сверху — входные отрезки,
 * отсортированные по началу (бегунок подсвечивает текущий), снизу на той же
 * временной шкале растут «острова». Framer Motion плавно тянет границы
 * последнего острова, когда он впитывает очередной отрезок.
 */
export declare function MergeVisualizer({ intervals, step, }: {
    intervals: Interval[];
    step: MergeStep;
}): import("react").JSX.Element;
