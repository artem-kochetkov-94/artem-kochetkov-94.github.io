/**
 * Партиционирование — режем большие таблицы на маленькие куски (секции).
 * Пока эти секции лежат на одном инстансе БД — это "просто" партиционирование
 * (вертикальное — по столбцам, горизонтальное — по строкам). Как только
 * каждый кусок переезжает на СВОЙ ОТДЕЛЬНЫЙ инстанс — это уже шардирование:
 * горизонтальное партиционирование, разнесённое по независимым базам.
 *
 * Вопрос "как распределить строки между шардами" решается тремя разными
 * способами — ниже они применены к ОДНОМУ И ТОМУ ЖЕ набору строк, чтобы
 * было видно: это не синонимы, а самостоятельные, независимые стратегии,
 * которые для одной и той же строки могут дать разные ответы.
 */
export interface ShardRow {
    id: number;
    price: number;
    zone: number;
}
export declare const ROWS: ShardRow[];
/** Range-based: диапазон значения определяет шард — границы совпадают со слайдом. */
export declare function rangeShard(row: ShardRow): string;
export declare function keyShard(row: ShardRow): string;
export declare function directoryShard(row: ShardRow): string;
export interface RingShard {
    id: string;
    label: string;
    /** Позиция на кольце в градусах — используется и в consistent hashing, и как "хэш" для mod-N. */
    angle: number;
}
export declare const RING_SHARDS: RingShard[];
export interface RingKey {
    id: string;
    angle: number;
}
export declare const RING_KEYS: RingKey[];
/**
 * Consistent hashing: ключ достаётся ПЕРВОМУ активному шарду по часовой
 * стрелке от своей позиции на кольце (с переносом через 360°). Добавление
 * или удаление шарда двигает границу только у его ближайших соседей —
 * остальные ключи не замечают изменений.
 */
export declare function assignConsistentHashing(activeShardIds: ReadonlySet<string>): Record<string, string>;
/**
 * Обычный hash % N: у каждого ключа есть псевдо-хэш (его позиция на
 * кольце), и бакет — это остаток от деления на ЧИСЛО шардов. Как только N
 * меняется, у подавляющего большинства ключей меняется и остаток —
 * переезжает почти всё, а не только соседи изменённого шарда.
 */
export declare function assignModHashing(shardCount: number): Record<string, string>;
