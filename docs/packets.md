## Packets
Packets are data that are sent from the server to the client and from the client to the server. This is useful for different information especially regarding multiplayer.

## Types of Packets
| ID | Name | Description |
|----|------|-------------|
| 1 | Login | Sent once from client to server at login. |
| 2 | Play Status | Used after the Server handles a Login or (Sub)Client Authentication Packet. |
| 3 | Server -> Client Handshake | Sent from the server at the end of the login packet. |
| 4 | Client -> Server Handshake | Sets up encryption and authenticates in educational version once at level startup from client. |
| 5 | Disconnect Player | Sent from server. It is not fired if you are in a singleplayer game and you leave, but it is fired when there are split-screen clients. |
| 6 | Resource Packs Info |  |
| 7 | Resource Pack Stack | This is sent to the client in response to a ResourcePackClientResponsePacket which is fired when MinecraftGame starts. |
| 8 | Resource Pack Client Response | Sent to MinecraftGame to complete the resource pack loading process. |
| 9 | Text Message | Used for commands, messages, and other info printed to the screen. Most of which are server->client or server broadcasted to all clients, |
| 10 | Set Time | Every so often (and at login) the server sends the current time to the client, and additionally the client can set the server time through 2 commands: DayLockCommand and TimeCommand |
| 11 | StartGamePacket | Sent from the server to client when the game is starting (or client joins), gives ids and current tick. |
| 12 | Add Player | A new player joins the game; the server sends this packet to the *other* players. |
| 13 | Add Actor (a.k.a. Entity) | Newly created entities on server use AddActorPacket to notify clients that they exist. |
| 14 | Remove Actor | Occasionally, during the server player tick some time is taken to remove nearby actors from the world. |
| 15 | Add Item Actor | When an item actor is added to the world (punch a tree->tree block, for example) |
| 16 | ServerPlayerPostMovePositionPacket | Used to send a player's server position to the respective client at the end of movement. |
| 17 | Take Item Actor | A packet sent to the server when dealing with picking up an item off the ground in the world. |
| 18 | Move Actor Absolute | This comes from SpatialActorNetworkData when there is a flag set to force abs position, this only occurs when a player is controlling another mob. |
| 19 | Move Player | This is the packet that keeps track of position, rotation, head rotation, if the actor is on the ground, and if it is riding something. |
| 20 | Passenger Jump Packet |  |
| 21 | Update Block | Occasional packets sent from server when blocks update or are ticked. (For example, when digging.) |
| 22 | Add Painting | Sends the information for a new painting actor from server to client. |
| 23 | Tick Sync Packet | Helps ensure client and server ticks are in sync.This packet is used to maintain a synchronized, server-authoritative tick between the client and the server |
| 24 | LevelSoundEventPacketV1 |  |
| 25 | Level Event | Splash Potions, weather events, global pause, simlock commands, oh my! |
| 26 | Block Event | Whenever a block event happens it is sent from the server to sync client and server, with arbitrarily encoded information in b0 and b1. |
| 27 | Actor Event | All kinds of actor state changes (see Actor::handleEntityEvent) ranging from a crossbow being ready to fire to taming animals... , |
| 28 | Mob Effect | At the start of the game the server sends any mob effects with _sendAdditionalLevelData() if the joining player saved out with them, |
| 29 | Update Attributes | Occasionally updating player attributes (buffs/debuffs, health, etc) |
| 30 | Inventory Transaction |  |
| 31 | Mob Equipment | A bunch of things use this both server to client and can still be sent from the client if LocalPlayer's inventory doesn't match the inventory sent (deprecated pattern). |
| 32 | Mob Armor Equipment | This is related to MobEquipmentPackets, but armor specifically and passes ALL equipment changes at once instead of one slot at a time. |
| 33 | Interact | Used for inventory button press and in _updateInteraction() for a variety of purposes. |
| 34 | Block Pick Request | Player picks up a block in the world; client to server. |
| 35 | Actor Pick Request | Player clicks on an actor in the world, e.g., a chicken. |
| 36 | Player Action | Sent from the client whenever the player performs an action (dashing, undashing, use an item, mine/hit, use a block, etc). |
| 38 | Hurt Armor | Sends the damage taken after armor is taken into account. This looks like it is trying to be phased out, this is not sent while the ItemStackNetManagerServer is active. |
| 39 | Set Actor Data | Regular Actor Data delta packets, sent from the level on tick, mob and actor during normal tick |
| 40 | Set Actor Motion | This is technically sent by both server and client, but only the client is receiving any packets. |
| 41 | Set Actor Link | Sent by both client and server, only received by LegacyClientHandler. |
| 42 | Set Health | This packet is sent to the client when the player is spawned in and when they respawn. |
| 43 | Set Spawn Position | When a player logs in or the SetWorldSpawnCommand is used this is sent from the server to the client. |
| 44 | Animate Actor | Used when critting and megacritting and apparently swinging swords. |
| 45 | Respawn | Sent as a handshake between the client and server to respawn the player. For some reason each respawn 1 packet is sent from the client |
| 46 | Container Open | Sent from the server so that the client knows to open the container screen and do the chest opening animation. |
| 47 | Container Close | After the game deletes the container manager on the client, the client sends this packet. |
| 48 | Player Hotbar | Sent from the server when the player uses pick block on actors or blocks, in addition to the player uses the clear, give, |
| 49 | Inventory Content | This is used for updating an entire container. Example uses include: player respawned, replace items command, 3rd party content calls sendInventory(), block picking. |
| 50 | Inventory Slot | Updates one slot in an inventory rather than the whole thing. So like animal inventory (horses, donkeys, etc) and chests. |
| 51 | Container Set Data | This is sent from the server basically any time that the "cooking" state of the brewing stand or the furnace changes (i.e. the loading bar) |
| 52 | Crafting Data | Sent from the server on level startup to send all recipes to the client. As of this writing it's a ~150k packet. |
| 54 | Gui Data Pick Item | The server telling the client what item slot to hover over in the hotbar, this is only used when players use pick block, |
| 56 | Block Actor Data | Sends the entire user data compound tag and the block position to the client. |
| 57 | Player Input |  |
| 58 | Level Chunk Packet | Used to start a chunk transaction.Used to start a Chunk Transaction - sends a list of hashes for the chunks it needs to send, followed by border blocks, block entities, and biomes. |
| 59 | Set Commands Enabled | This is used by the world settings screen, cheats, EDU builds for teachers, and various other places to enable cheats/commands |
| 60 | Set Difficulty | Used for when a client changes difficulty through the menu or when the server changes the difficulty. |
| 61 | Change Dimension | The server sends this packet from the level to kick off dimension changing process. |
| 62 | Set Player Game Type | The client handles the change of the UI element (the gametype dropdown, although this can be avoided by changing via command or on the server), |
| 63 | Player List | Sent from the Server at the start of the game or when a player is added (or if the game does a clean up of disconnected players) |
| 64 | Simple Event | This packet is used for enabling/disabling commands and for unlocking world template settings |
| 65 | Telemetry Event | This is a legacy packet and should not be used anymore, although server side telemetry is not widely used/tested yet. |
| 66 | Spawn Experience Orb | DEPRECATED |
| 67 | ClientboundMapItemDataPacket | This is sent either if the user is creating a new map, if a map that exists cannot be found, or if the user is creating a locked copy of a map. |
| 68 | MapInfoRequestPacket | In the case of the client being unable to find map data for a map item it sends a uuid for a map to the server. |
| 69 | Request Chunk Radius | The client can't just change the view radius without the server's approval, otherwise there could be holes on unrendered area. |
| 70 | Chunk Radius Updated | Sent when the world is loading. We don't know why it is sent four times. Defines the tick distance. |
| 72 | Game Rules Changed | Sent from server whenever any combination of gamerules is changed. the underlying data is a vector of GameRules |
| 73 | Camera | Used only in EDU through the tripod camera item or the TakePictureCommand. Sends the camera actor id and the target player id from the server. |
| 74 | Boss Event | Two-way packet. |
| 75 | Show Credits | Starts on server when the credits screen should pop up. That packet is sent to the client. |
| 76 | Available Commands | This very large packet (>10k) sends the available slash commands as part of the login process. |
| 77 | Command Request | "slash" command execution, client to server. |
| 78 | Command Block Update | Sent when you close the command block screen on the client |
| 79 | Command Output | "slash" command execution, server to client. |
| 80 | UpdateTradePacket | This is used when the player trades with an npc. This sends all of the updated trade info in one big ol' packet. |
| 81 | Update Equip | Seemingly only used for the Horse Inventory... More specifically when the player opens the horse inventory. |
| 82 | Resource Pack Data Info | Sent from the serverFileChunkUploader during the initialization of the file uploader. This packet is sent to the primary client. |
| 83 | ResourcePackChunkDataPacket |  |
| 84 | ResourcePackChunkRequestPacket |  |
| 85 | Transfer Player | Used to kick off transferring the client between online games |
| 86 | Play Sound | This packet is only used via command or script event. This is for 3rd party content. |
| 87 | Stop Sound | Allows you to stop a sound or all sounds on all clients, only used in a /command |
| 88 | Set Title | Used by 3rd party content for the purpose of showing ui banners. There are 2 commands associated with it: title and titleraw. |
| 89 | Add Behavior Tree | For automation. |
| 90 | Structure Block Update | After the client makes changes in the Structure Block Screen we tell the server to update based off of that. This only sent when you close the UI. |
| 91 | Show Store Offer | Where we want the client to redirect the user. The server can redirect the user to a 3rd party server page (if said server |
| 92 | Purchase Receipt | Sent from client to serverSent from the client after we make a purchase in the store OR if we login and our entitlements are verified. |
| 93 | Player Skin | This packet is used for when the player changes the skin they are using (in game or out of game). |
| 94 | Sub Client Login | This packet starts the login process of subclients (splitscreen) |
| 95 | Initiates websocket connection. | Only used though command to connect to server URLs. This is primarily used by EDU for connecting to their companion apps |
| 96 | Set Last Hurt By | Any time a player is hit, the id of the last mob that attacked them is sent to the client |
| 97 | Book Edit | Sends the updated state of the book and quill item from client to server during use, i.e. before you sign it, making it uneditable. |
| 98 | NPC Request | Used for a number of interactions with the NPC Component. |
| 99 | Photo Transfer | There is a camera item in EDU and they can use it to take screenshots and add them to a scrapbook. |
| 100 | Modal Form Request | Not sent from vanilla. The feature is meant for third-party servers to be able to drive dynamic ui forms. |
| 101 | Modal Form Response | Fired in response to third-party server request to show the custom UI screen. |
| 102 | Server Settings Request | Sent during the initialization of world settings on the client. It is also an empty packet. There is no handler for this packet, should be removed. |
| 103 | Server Settings Response |  |
| 104 | Show Profile | The only use in vanilla is a test command called ProfileCommand. It makes the user's xbox profile popup. |
| 105 | Set Default Game Type | Same as SetPlayerGameTypePacket & UpdatePlayerGameTypePacket, the only difference is that this changes the default for all clients |
| 106 | Remove Objective | Using the scoreboard command, users can remove objectives that are tracked on the scoreboard. This is just the name of the objective. |
| 107 | Set Display Objective | Sent from the server for 3rd party content to display current objectives and status |
| 108 | Set Score | This packet is used to set the scoreboard which is used for 3rd party content. |
| 109 | Lab Table | For the EDU Chemistry Lab Table block actor. The packet can be fired from the client through the UI or from the server during updates. |
| 110 | Update Block Synced | Used to sync moving blocks with clients so they render correctlyVariation of UpdateBlockPacket that includes information to sync entities with renderchunk generation. |
| 111 | Move Actor Delta | This packet is all the deltas of actors position, rotation, and head rotation. This is used for all actors. |
| 112 | Set Scoreboard Identity | Send an update packet for a player identity definition iff a tracked player has logged in with a different display name. |
| 113 | Set Local Player As Initialized | Client tells the server that the client is ready to roll. |
| 114 | Update Soft Enum | This is used for the scoreboard and tag systems (overwhelmingly used by 3rd party content); |
| 115 | Ping Packet | DEPRECATED. Was for testing / debug / telemetryFor testing / debug / telemetry: |
| 118 | SpawnParticleEffectPacket | This is not used for much anymore, only the Particle command (spawn particle by name at a location) and for |
| 119 | Available Actor Identifiers | On world start, send clients the info for all available actors.Sends the whole list of actor identifiers at game start from the server. |
| 120 | LevelSoundEventPacketV2 |  |
| 121 | Network Chunk Publisher Update | Tells clients to update the chunk view for the local player.Used (from the server) when a user's Chunk View moves, I.e. the area that determines what chunks exist |
| 122 | Biome Definition List | On world start, send clients the info for all available biomes.Sends the whole list of the biomes from server to the client at the start of the game from _sendLevelData() |
| 123 | Level Sound Event | With support for custom entities. Entity Id is a string and Event Id is an integer. |
| 124 | LevelEventGenericPacket |  |
| 125 | LecternUpdatePacket | This is used for the Lectern Block Actor. It is a request from the client to either turn the page in the lectern or drop the book. |
| 129 | Client Cache Status Packet | It is sent by the Client once, at login, to communicate if it supports the cache or not.Sent by the Client once, at login, to communicate if it supports the client blob cache protocol or not. |
| 130 | On-Screen Texture Animation | Sent from the player (and in one case from the village) to make those really cool animated effects for the hero of the village |
| 131 | Create Locked Map | Ask server to create a locked map.This is fired when the user locks a map item utilizing the Cartography Table in game. |
| 132 | Structure Data Request | Used to request structure information from a server.How we want to get our structure: by capturing what is live in the world, |
| 133 | Structure Data Response | Used to reply to a request for structure information.This is used in exporting from load, exporting from save, and querying saved structures from structure blocks. |
| 135 | Client Cache Blob Status Packet | Sent periodically by the client to update the server on which blob it has (ACK) and which blobs it is lacking (MISS).Indicates status of binary blob transfers from server. Used heavily when server is sending chunks. |
| 136 | Client Cache Miss Response Packet | Any missing blob should just be thrown into one of these packet ASAP and sent.Only active in a *real* client-server scenario. This packet is just a list of pairs sent from server to client. |
| 137 | Education Settings Packet | Transmits EducationLevelSettings to all clients.Currently transmits EducationLevelSettings to all clients when the game is starting. |
| 138 | Emote Packet | A client sends this to the server to notify other clients about the emote.Sent in both directions; by client to request that an emote is played and then from the server to the clients |
| 139 | Multiplayer Settings Packet | EDU: Syncs multiplayer settingsThis is used by EDU for joining players and removing players from your session, |
| 140 | Settings Command Packet | Requests a setting to be changed through commands.Used when the player changes the world settings like doDayNightCycle or WeatherCycle via the world settings menu |
| 141 | Anvil Damage Packet | Requests an anvil to be damaged.Sends the current damage the anvil has taken per use from client. |
| 142 | Completed Using Item | Send server to client to complete the using item process. An example is when you finish drinking or eating. |
| 143 | NetworkSettingsPacket | Sends tunable options from host to client (compression threshold and algorithm) |
| 144 | Player Auth Input | Added for Server Authoritative Movement to sync all player input with the server.Server Authoritative Movement |
| 145 | CreativeContentPacket | Sent once by the server on startup to tell clients all of the items that can show up in the creative menu, blocks and items. |
| 146 | PlayerEnchantOptionsPacket | This packet is sent from the server whenever a player rerolls a new set of enchantment options from the enchantment table |
| 147 | ItemStackRequestPacket | The new server auth inventory item transaction request. This is done in batches of items, and is as of Dec 2019 |
| 148 | ItemStackResponsePacket | The new server auth inventory item transaction response, sent from the server. |
| 149 | PlayerArmorDamagePacket | Sent from server whenever the player's armor takes damage. This packet sends all armor data at once. |
| 150 | CodeBuilderPacket | This is EDU exclusively. It is sent once from _sendLevelData() in the start of a game from the server, and once per CodeBuilderCommand |
| 151 | UpdatePlayerGameTypePacket |  |
| 152 | EmoteListPacket | Allows clients to download emotes that other clients have equipped. |
| 153 | PositionTrackingDBServerBroadcastPacket | Server to client packet for server authoritative runtime database (with persistent tracking) of the player's position |
| 154 | PositionTrackingDBClientRequestPacket | Client to server packet for server authoritative runtime database (with persistent tracking) of the player's position |
| 155 | Debug Info Packet | Sent from server to client to print debug info in chat. |
| 156 | PacketViolationWarningPacket | Tells the client to start/stop using connection throttling |
| 157 | MotionPredictionHintsPacket | Sent from server to client to help with client-side prediction of object movement |
| 158 | AnimateEntityPacket               | Triggers a one-off animation on the client it is sent to.                                           |
| 159 | CameraShakePacket                 | Controls trigger camera shake movements on the client's player camera.                              |
| 160 | PlayerFogPacket                   | Tracks the active fog stack from the server so local players can apply different fog settings.     |
| 161 | CorrectPlayerMovePredictionPacket | Sent to a player when their simulation of movement mismatches enough from the server for correction.|
| 162 | ItemComponentPacket               | Definitions for component items. Should be fine to send one with an empty mItems array after the StartGamePacket.|
| 164 | ClientboundDebugRendererPacket    | Sent from the server to client to add/remove debug rendering objects.                               |
| 165 | SyncActorPropertyPacket           | Allows synchronization of Actor properties across the network.                                       |
| 166 | AddVolumeEntityPacket             | Sends a volume entity's definition and components from server to client.                              |
| 167 | RemoveVolumeEntityPacket          | Sends a volume entity to be removed from server to client.                                           |
| 168 | SimulationTypePacket              | Sent from the server to the client when setting the simulation type for toolbox mode.                |
| 169 | NpcDialoguePacket                 | Sent from the server to client when remote firing an NPC dialogue window for a client.               |
| 170 | EduUriResourcePacket              | Transmits Edu Shared Uri Resource settings to all clients.                                           |
| 171 | CreatePhotoPacket                 | Allows players to export photos from their portfolios into photo items in their inventory. EDU.     |
| 172 | UpdateSubChunkBlocksPacket        | Sent for every set of blocks changed in a sub chunk every tick.                                      |
| 174 | SubChunkPacket                    | Sent from server to client representing a batch of subchunk data and the required information to place the subchunk in the correct part of the world. |
| 175 | SubChunkRequestPacket             | Sent from the client to the server representing a batch of subchunks that the client requests from the server. |
| 176 | PlayerStartItemCooldownPacket     | Sent by the player to start the cooldown on an item.                                                 |
| 177 | ScriptMessagePacket               | Used to send custom messages between client and server.                                               |
| 178 | CodeBuilderSourcePacket           | EDU exclusive, used in getInterface() of WebviewSystem.                                              |
| 179 | TickingAreasLoadStatusPacket      | Used to inform the client that the server is waiting for ticking areas to finish preloading.         |
| 180 | DimensionDataPacket               | Brief packet containing data-driven dimension properties.                                             |
| 181 | AgentActionEventPacket            | Packet containing data of Agent Action Type.                                                         |
| 182 | ChangeMobPropertyPacket           | Packet containing data for changing mob property.                                                    |
| 183 | LessonProgressPacket              | Tracks the progress of a lesson.                                                                    |
| 184 | RequestAbilityPacket              | Sent from client to server to request an ability change.                                              |
| 185 | RequestPermissionsPacket          | Sent from client to server to request new permission levels. Can only be used by Operators or Hosts. |
| 186 | ToastRequestPacket                | Pushes a UI toast message to be displayed by the client.                                              |
| 187 | UpdateAbilitiesPacket             | Sent by the server to update the state of a player's Abilities.                                       |
| 188 | UpdateAdventureSettingsPacket     | Sent by the server to update the state of AdventureSettings.                                           |
| 189 | DeathInfoPacket                   | Sent from the server to client when a player dies.                                                     |
| 190 | EditorNetworkPacket               | General use Editor specific packet - carries a payload of whatever serialized.                        |
| 191 | FeatureRegistryPacket             | Tracks the active feature registry data from the server so that client can place the features themselves. |
| 192 | ServerStatsPacket                 | Used to send performance and other valuable stats back to the client.                                  |
| 193 | RequestNetworkSettingsPacket      | Requests tunable options from host to client (compression threshold and algorithm).                     |
| 194 | GameTestRequestPacket             | Internal Text Packet.                                                                                 |
| 195 | GameTestResultsPacket             | Internal Text Packet.                                                                                 |
| 196 | UpdateClientInputLocksPacket      | Used to update the player's input permissions.                                                        |
| 198 | CameraPresetsPacket               | Used to sync CameraPresets data from server to clients.                                                |
| 199 | UnlockedRecipesPacket             | Sent from server to client, for all previously unlocked recipes on load.                                |
| 300 | CameraInstructionPacket           | Used to send a CameraInstruction from the server to the specified clients.                             |
| 301 | CompressedBiomeDefinitionList    |                                                                                                        |
| 302 | TrimDataPacket                    | Sent from the server on level startup to send all trim patterns to the client.                         |
| 303 | OpenSignPacket                    | Sent from the server so that the client knows to open the sign screen.                                  |
| 304 | AgentAnimationPacket              | Broadcasted to other players when an Agent performs an animation.                                       |
| 305 | RefreshEntitlementsPacket         |                                                                                                        |
| 306 | PlayerToggleCrafterSlotRequestPacket |                                                                                                  |
| 307 | SetPlayerInventoryOptionsPacket   |                                                                                                        |
| 308 | SetHudPacket                      | This packet is only used via the set hud command. This is for 3rd party content.                        |


## C++ Implementation
```cpp
enum class PacketTypes : int32_t {
    KeepAlive = 0x0,
    Login = 0x1,
    PlayStatus = 0x2,
    ServerToClientHandshake = 0x3,
    ClientToServerHandshake = 0x4,
    Disconnect = 0x5,
    ResourcePacksInfo = 0x6,
    ResourcePackStack = 0x7,
    ResourcePackClientResponse = 0x8,
    Text = 0x9,
    SetTime = 0xA,
    StartGame = 0xB,
    AddPlayer = 0xC,
    AddActor = 0xD,
    RemoveActor = 0xE,
    AddItemActor = 0xF,
    TakeItemActor = 0x11,
    MoveActorAbsolute = 0x12,
    MovePlayer = 0x13,
    RiderJump = 0x14,
    UpdateBlock = 0x15,
    AddPainting = 0x16,
    TickSync = 0x17,
    LevelSoundEventV1 = 0x18,
    LevelEvent = 0x19,
    TileEvent = 0x1A,
    ActorEvent = 0x1B,
    MobEffect = 0x1C,
    UpdateAttributes = 0x1D,
    InventoryTransaction = 0x1E,
    MobEquipment = 0x1F,
    MobArmorEquipment = 0x20,
    Interact = 0x21,
    BlockPickRequest = 0x22,
    ActorPickRequest = 0x23,
    PlayerAction = 0x24,
    ActorFall = 0x25,
    HurtArmor = 0x26,
    SetActorData = 0x27,
    SetActorMotion = 0x28,
    SetActorLink = 0x29,
    SetHealth = 0x2A,
    SetSpawnPosition = 0x2B,
    Animate = 0x2C,
    Respawn = 0x2D,
    ContainerOpen = 0x2E,
    ContainerClose = 0x2F,
    PlayerHotbar = 0x30,
    InventoryContent = 0x31,
    InventorySlot = 0x32,
    ContainerSetData = 0x33,
    CraftingData = 0x34,
    CraftingEvent = 0x35,
    GuiDataPickItem = 0x36,
    AdventureSettings = 0x37,
    BlockActorData = 0x38,
    PlayerInput = 0x39,
    LevelChunk = 0x3A,
    SetCommandsEnabled = 0x3B,
    SetDifficulty = 0x3C,
    ChangeDimension = 0x3D,
    SetPlayerGameType = 0x3E,
    PlayerList = 0x3F,
    SimpleEvent = 0x40,
    Event = 0x41,
    SpawnExperienceOrb = 0x42,
    ClientboundMapItemData = 0x43,
    MapInfoRequest = 0x44,
    RequestChunkRadius = 0x45,
    ChunkRadiusUpdated = 0x46,
    ItemFrameDropItem = 0x47,
    GameRulesChanged = 0x48,
    Camera = 0x49,
    BossEvent = 0x4A,
    ShowCredits = 0x4B,
    AvailableCommands = 0x4C,
    CommandRequest = 0x4D,
    CommandBlockUpdate = 0x4E,
    CommandOutput = 0x4F,
    UpdateTrade = 0x50,
    UpdateEquip = 0x51,
    ResourcePackDataInfo = 0x52,
    ResourcePackChunkData = 0x53,
    ResourcePackChunkRequest = 0x54,
    Transfer = 0x55,
    PlaySound = 0x56,
    StopSound = 0x57,
    SetTitle = 0x58,
    AddBehaviorTree = 0x59,
    StructureBlockUpdate = 0x5A,
    ShowStoreOffer = 0x5B,
    PurchaseReceipt = 0x5C,
    PlayerSkin = 0x5D,
    SubClientLogin = 0x5E,
    AutomationClientConnect = 0x5F,
    SetLastHurtBy = 0x60,
    BookEdit = 0x61,
    NpcRequest = 0x62,
    PhotoTransfer = 0x63,
    ModalFormRequest = 0x64,
    ModalFormResponse = 0x65,
    ServerSettingsRequest = 0x66,
    ServerSettingsResponse = 0x67,
    ShowProfile = 0x68,
    SetDefaultGameType = 0x69,
    RemoveObjective = 0x6A,
    SetDisplayObjective = 0x6B,
    SetScore = 0x6C,
    LabTable = 0x6D,
    UpdateBlockSynced = 0x6E,
    MoveActorDelta = 0x6F,
    SetScoreboardIdentity = 0x70,
    SetLocalPlayerAsInitialized = 0x71,
    UpdateSoftEnum = 0x72,
    NetworkStackLatency = 0x73,
    BlockPalette = 0x74,
    ScriptCustomEvent = 0x75,
    SpawnParticleEffect = 0x76,
    AvailableActorIdentifiers = 0x77,
    LevelSoundEventV2 = 0x78,
    NetworkChunkPublisherUpdate = 0x79,
    BiomeDefinitionList = 0x7A,
    LevelSoundEvent = 0x7B,
    LevelEventGeneric = 0x7C,
    LecternUpdate = 0x7D,
    VideoStreamConnect = 0x7E,
    AddEntity = 0x7F,
    RemoveEntity = 0x80,
    ClientCacheStatus = 0x81,
    OnScreenTextureAnimation = 0x82,
    MapCreateLockedCopy = 0x83,
    StructureTemplateDataRequest = 0x84,
    StructureTemplateDataResponse = 0x85,
    UpdateBlockProperties = 0x86,
    ClientCacheBlobStatus = 0x87,
    ClientCacheMissResponse = 0x88,
    EducationSettings = 0x89,
    Emote = 0x8A,
    MultiplayerSettings = 0x8B,
    SettingsCommand = 0x8C,
    AnvilDamage = 0x8D,
    CompletedUsingItem = 0x8E,
    NetworkSettings = 0x8F,
    PlayerAuthInput = 0x90,
    CreativeContent = 0x91,
    PlayerEnchantOptions = 0x92,
    ItemStackRequest = 0x93,
    ItemStackResponse = 0x94,
    PlayerArmorDamage = 0x95,
    CodeBuilder = 0x96,
    UpdatePlayerGameType = 0x97,
    EmoteList = 0x98,
    PositionTrackingDBServerBroadcast = 0x99,
    PositionTrackingDBClientRequest = 0x9A,
    DebugInfo = 0x9B,
    PacketViolationWarning = 0x9C,
    MotionPredictionHints = 0x9D,
    AnimateEntity = 0x9E,
    CameraShake = 0x9F,
    PlayerFog = 0xA0,
    CorrectPlayerMovePrediction = 0xA1,
    ItemComponent = 0xA2,
    ClientboundDebugRenderer = 0xA4,
    SyncActorProperty = 0xA5,
    AddVolumeEntity = 0xA6,
    RemoveVolumeEntity = 0xA7,
    SimulationType = 0xA8,
    NpcDialogue = 0xA9,
    EduUriResource = 0xAA,
    CreatePhoto = 0xAB,
    UpdateSubChunkBlocks = 0xAC,
    SubChunk = 0xAE,
    SubChunkRequest = 0xAF,
    PlayerStartItemCooldown = 0xB0,
    ScriptMessage = 0xB1,
    CodeBuilderSource = 0xB2,
    TickingAreasLoadStatus = 0xB3,
    DimensionData = 0xB4,
    AgentActionEvent = 0xB5,
    ChangeMobProperty = 0xB6,
    LessonProgress = 0xB7,
    RequestAbility = 0xB8,
    RequestPermissions = 0xB9,
    ToastRequest = 0xBA,
    UpdateAbilities = 0xBB,
    UpdateAdventureSettings = 0xBC,
    DeathInfo = 0xBD,
    EditorNetwork = 0xBE,
    FeatureRegistry = 0xBF,
    ServerStats = 0xC0,
    RequestNetworkSettings = 0xC1,
    GameTestRequest = 0xC2,
    GameTestResults = 0xC3,
    UpdateClientInputLocks = 0xC4,
    CameraPresets = 0xC6,
    UnlockedRecipes = 0xC7,
    CameraInstruction = 0x12C,
    CompressedBiomeDefinitionList = 0x12D,
    TrimData = 0x12E,
    OpenSign = 0x12F,
    AgentAnimation = 0x130,
    RefreshEntitlements = 0x131,
    PlayerToggleCrafterSlotRequest = 0x132,
    SetPlayerInventoryOptions = 0x133,
    SetHud = 0x134
};
```
