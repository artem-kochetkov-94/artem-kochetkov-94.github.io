/**
 * Два разных вопроса, которые распределённой системе нужно уметь решать
 * без единой точки правды:
 *  - Распределённые блокировки — как гарантировать, что ресурс в моменте
 *    занят только ОДНИМ клиентом, если клиентов и узлов несколько;
 *  - Выбор лидера — как узлам самим, без внешнего арбитра, договориться,
 *    кто из них теперь главный, если прежний лидер пропал.
 */
export type LockLegKind = "write" | "error";
export interface LockLeg {
    from: string;
    to: string;
    kind: LockLegKind;
}
export interface LockStep {
    id: number;
    label: string;
    leg: LockLeg | null;
    description: string;
}
export type LockScenarioId = "unsafe" | "safe";
export declare const LOCK_SCENARIOS: {
    id: LockScenarioId;
    label: string;
}[];
export declare function getLockSteps(scenario: LockScenarioId): LockStep[];
export type NodeRole = "alive" | "dead" | "leader";
export interface BullyStep {
    id: number;
    label: string;
    legs: {
        from: number;
        to: number;
        delayUnits: number;
    }[];
    nodeRoles: Record<number, NodeRole>;
    description: string;
}
export declare const BULLY_STEPS: BullyStep[];
