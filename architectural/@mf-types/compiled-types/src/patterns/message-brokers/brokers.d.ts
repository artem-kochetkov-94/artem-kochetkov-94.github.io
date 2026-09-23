/**
 * Брокеры сообщений: Kafka и RabbitMQ решают одну и ту же задачу
 * (буферизация, асинхронная связь, слабое связывание producer/consumer),
 * но КТО инициирует финальную доставку — принципиально разный вопрос.
 *  - Kafka — pull: consumer сам приходит и забирает следующую порцию,
 *    когда ему удобно; лог партиции при этом не удаляется (retention).
 *  - RabbitMQ — push: как только сообщение долетело до очереди, брокер
 *    сам толкает его consumer'у; из очереди сообщение при этом исчезает.
 */
export type BrokerMode = "kafka" | "rabbitmq";
export declare const BROKER_MODES: {
    id: BrokerMode;
    label: string;
    hint: string;
}[];
export interface BrokerNode {
    id: string;
    label: string;
}
export declare const BROKER_NODES: Record<BrokerMode, BrokerNode[]>;
/**
 * Тот же словарь перегонов, что и в кэшировании: read — полноценный обмен
 * запрос/ответ (consumer сам спросил и сам получил данные); write — данные
 * едут только вперёд; response — данные едут вперёд САМИ ПО СЕБЕ, без
 * запроса в этом же перегоне, — то есть ровно то, что делает push.
 */
export type BrokerLegKind = "read" | "write" | "response";
export interface BrokerLeg {
    from: string;
    to: string;
    kind: BrokerLegKind;
}
export interface BrokerMessage {
    id: string;
    /** true — сообщение уже доставлено consumer'у (Kafka: прочитано; RabbitMQ: вытолкнуто). */
    delivered: boolean;
}
export interface BrokerStep {
    id: number;
    label: string;
    legs: BrokerLeg[];
    /** Что физически лежит у брокера ПОСЛЕ этого шага. */
    brokerState: BrokerMessage[];
    description: string;
}
export declare function getBrokerSteps(mode: BrokerMode): BrokerStep[];
