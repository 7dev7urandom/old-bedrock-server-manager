interface BServer {
    properties: BProperties | null;
    id: number;
    permissions: BPermissions | null;
    worlds: [BWorld] | null;
    version: string;
    whitelist: null;
    onlinePlayers: number;
    maxPlayers: number;
    hasAccess: boolean;
    port: number;
    active: boolean;
}