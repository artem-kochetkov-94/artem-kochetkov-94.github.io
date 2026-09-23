import type { Interval, IntervalStep } from "./intervals";
/**
 * Чистая отрисовка ОДНОГО кадра развёртки. Никакой логики — только текущий
 * шаг (`step`) превращается в картинку: временная шкала с барами встреч,
 * вертикальная «линия развёртки» (Framer Motion плавно ведёт её по времени)
 * и счётчики текущей загрузки и пика (= минимум комнат).
 */
export declare function IntervalsVisualizer({ intervals, step, }: {
    intervals: Interval[];
    step: IntervalStep;
}): import("react").JSX.Element;
