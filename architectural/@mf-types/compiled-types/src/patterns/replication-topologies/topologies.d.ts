/**
 * Репликация — это не один способ, а выбор: КТО принимает запись и ЧТО
 * происходит, когда этот "кто" падает. Три топологии отвечают на этот
 * вопрос по-разному:
 *  - master-slave — один узел пишет, остальные только читают; при падении
 *    мастера запись недоступна, пока кто-то не станет новым мастером
 *    (downtime на запись).
 *  - master-master — пишут несколько узлов сразу; платим за это
 *    конфликтами (два мастера могли принять разные значения для одного
 *    ключа), но зато при падении одного из них downtime на запись не
 *    возникает — прочие мастера как принимали записи, так и принимают.
 *  - master-less — нет выделенной роли "мастер", пишем/читаем сразу в
 *    несколько узлов и решаем через кворум (W + R против N), гарантирует
 *    ли комбинация строгую согласованность.
 */
export type TopologyId = "master-slave" | "master-master" | "master-less";
export interface ReplicationNode {
    id: string;
    label: string;
}
export type NodeState = "up" | "down" | "promoted";
export type ReplicationLegKind = "write" | "read" | "replicate";
export interface ReplicationLeg {
    from: string;
    to: string;
    kind: ReplicationLegKind;
}
export interface ReplicationStep {
    id: number;
    label: string;
    legs: ReplicationLeg[];
    /** Состояние КАЖДОГО узла на этом шаге (полный снимок, не дельта). */
    nodeStates: Record<string, NodeState>;
    /** Статичная (без анимации) отметка "запись сорвалась" — для downtime-шагов. */
    blockedWrite?: {
        from: string;
        to: string;
    };
    description: string;
}
export interface TopologyDef {
    id: TopologyId;
    label: string;
    hint: string;
    nodes: ReplicationNode[];
    pos: Record<string, {
        x: number;
        y: number;
    }>;
    edges: [string, string][];
    steps: ReplicationStep[];
}
export declare const TOPOLOGIES: TopologyDef[];
export declare function getTopology(id: TopologyId): TopologyDef;
