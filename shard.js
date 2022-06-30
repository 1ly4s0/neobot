const { ShardingManager } = require("discord.js");

// Create your ShardingManager instance
const manager = new ShardingManager("./index.js", {
    // for ShardingManager options see:
    // https://discord.js.org/#/docs/main/stable/class/ShardingManager
    totalShards: "auto",
    token: process.env.token
});

// Emitted when a shard is created
manager.on("shardCreate", (shard) => console.log(`Shard ${shard.id} launched`));

// Spawn your shards
manager.spawn();