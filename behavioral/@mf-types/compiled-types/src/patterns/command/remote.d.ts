/**
 * Command (Команда) — пример "очередь и макрос". Чистый TypeScript, без React.
 *
 * Здесь раскрывается другая сторона паттерна: раз действие — это ОБЪЕКТ,
 * команды можно не выполнять сразу, а складывать в очередь, переставлять,
 * сохранять и запускать пачкой. Несколько команд легко объединяются в одну
 * составную команду (MacroCommand) — "сценарий".
 *
 * Интерфейс Command тот же, что и в `editor.ts` — паттерн один, меняется
 * лишь получатель и способ применения команд.
 */
/** Команда: знает, как выполнить действие и как откатить его назад. */
export interface Command {
    /** Человекочитаемое имя для очереди/журнала. */
    readonly label: string;
    /** Выполнить действие над получателем. */
    execute(): void;
    /** Отменить действие. */
    undo(): void;
}
/** Идентификаторы устройств умного дома. */
export type DeviceId = "light" | "door" | "music" | "ac";
/** Получатель (Receiver) — умный дом, хранит состояние устройств. */
export declare class SmartHome {
    private state;
    isOn(id: DeviceId): boolean;
    set(id: DeviceId, on: boolean): void;
}
/**
 * Команда "перевести устройство в заданное состояние".
 * Перед изменением запоминает прежнее состояние — чтобы уметь откатиться.
 */
export declare class SetDeviceCommand implements Command {
    readonly label: string;
    private readonly home;
    private readonly device;
    private readonly on;
    private previous;
    constructor(label: string, home: SmartHome, device: DeviceId, on: boolean);
    execute(): void;
    undo(): void;
}
/**
 * Составная команда (Macro) — сама является командой, но внутри хранит
 * список других команд. execute() прогоняет их по порядку, undo() —
 * откатывает в обратном порядке. Клиент работает с ней как с одной командой.
 */
export declare class MacroCommand implements Command {
    readonly label: string;
    private readonly commands;
    constructor(label: string, commands: Command[]);
    execute(): void;
    undo(): void;
}
