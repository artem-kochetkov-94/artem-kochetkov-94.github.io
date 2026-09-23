export declare function ShardRing({ activeShardIds, assignment, movedKeys, onToggleShard, }: {
    activeShardIds: ReadonlySet<string>;
    assignment: Record<string, string>;
    movedKeys: ReadonlySet<string>;
    onToggleShard: (id: string) => void;
}): import("react").JSX.Element;
