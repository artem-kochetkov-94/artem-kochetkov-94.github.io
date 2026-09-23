import type { CqrsAction } from "./cqrs";
export declare function CqrsDiagram({ cqrsEnabled, flash, }: {
    cqrsEnabled: boolean;
    flash: {
        action: CqrsAction;
        key: string;
    } | null;
}): import("react").JSX.Element;
