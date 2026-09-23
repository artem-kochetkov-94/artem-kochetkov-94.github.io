/**
 * Command (Команда) — пример с Undo/Redo. Чистый TypeScript, без React.
 * Это "ядро" примера.
 *
 * Идея: каждое действие над документом упаковано в объект-команду с двумя
 * методами — execute() и undo(). Раз действие — это объект, его можно
 * сложить в историю, а значит отменить и повторить.
 *
 * Получатель (TextDocument) не знает про историю, а отправитель (кнопки UI)
 * не знает, как именно меняется документ — он лишь отдаёт команду Invoker'у.
 */
/**
 * Команда: знает, как выполнить действие и как откатить его назад.
 * `label` нужен только для наглядной истории в демо.
 */
export interface Command {
    /** Человекочитаемое имя для журнала истории. */
    readonly label: string;
    /** Выполнить действие над получателем. */
    execute(): void;
    /** Отменить действие — вернуть получателя в состояние до execute(). */
    undo(): void;
}
/**
 * Получатель (Receiver) — документ, который хранит текст.
 * Сам по себе ничего не знает о командах: умеет лишь менять свой текст.
 */
export declare class TextDocument {
    text: string;
}
/**
 * Команда "дописать текст в конец".
 * Для отмены достаточно отрезать ровно столько символов, сколько добавили.
 */
export declare class AppendText implements Command {
    private readonly doc;
    private readonly chunk;
    readonly label: string;
    constructor(doc: TextDocument, chunk: string);
    execute(): void;
    undo(): void;
}
/**
 * Команда "стереть последний символ".
 * Чтобы уметь отменить удаление, команда ЗАПОМИНАЕТ стёртый символ —
 * это и есть состояние, нужное для отката.
 */
export declare class DeleteLast implements Command {
    private readonly doc;
    readonly label = "\u0421\u0442\u0435\u0440\u0435\u0442\u044C \u0441\u0438\u043C\u0432\u043E\u043B";
    private removed;
    constructor(doc: TextDocument);
    execute(): void;
    undo(): void;
}
/**
 * Команда "очистить документ".
 * Запоминает весь прежний текст, чтобы восстановить его при отмене.
 */
export declare class ClearAll implements Command {
    private readonly doc;
    readonly label = "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u0432\u0441\u0451";
    private previous;
    constructor(doc: TextDocument);
    execute(): void;
    undo(): void;
}
/**
 * Invoker (отправитель + история). Он один знает о порядке действий и
 * умеет откатывать/повторять их. О деталях команд он ничего не знает —
 * работает только через интерфейс execute()/undo().
 *
 * Две стопки:
 *  - done   — выполненные команды (их можно отменить);
 *  - undone — отменённые команды (их можно повторить).
 * Новая команда очищает стопку undone — повторять стало нечего.
 */
export declare class History {
    private done;
    private undone;
    /** Выполнить новую команду и положить её в историю. */
    execute(command: Command): void;
    /** Отменить последнюю выполненную команду. */
    undo(): void;
    /** Повторить последнюю отменённую команду. */
    redo(): void;
    get canUndo(): boolean;
    get canRedo(): boolean;
    /** Список названий выполненных команд по порядку — для журнала в демо. */
    get log(): string[];
}
