import { type TraceSpan } from "./tracing";
/** Столько секунд идёт анимация "роста" одного бара — нужно и Demo.tsx. */
export declare const BAR_GROW_DURATION = 0.6;
/**
 * Водопадная диаграмма (как в Jaeger): каждая строка — спан, отступ слева
 * по глубине вложенности, ширина и позиция бара пропорциональны реальному
 * времени начала/длительности относительно всего трейса. Спаны появляются
 * по одному — именно ЭТО плеер в Demo.tsx и листает.
 */
export declare function Waterfall({ spans }: {
    spans: TraceSpan[];
}): import("react").JSX.Element;
