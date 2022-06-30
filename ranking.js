const config = require("./config.json");
const canvacord = require("canvacord");
const Discord = require("discord.js");
const prefix = config.PREFIX;
const embedcolor = config.embedcolor;
const maximum_leaderboard = config.maximum_leaderboard;
const Canvas = require("discord-canvas-spanish-1ly4s0")
const db = require("quick.db")


const ErrorRol = new Discord.MessageEmbed()
      .setColor('EFD200')
      .setTitle("Comando Premium")
      .setDescription(`> Este comando es premium, puedes solicitarlo uniéndote en el servidor de Discord [aqui](https://discord.gg/6NHZDRcQFq)`)

//maximum 50 users for the leaderboard!

module.exports = async function (client) {
    const description = {
        name: "RANKING",
        filename: "ranking.js",
        version: "2.1"
    }
    //log that the module is loaded
    console.log(`Sistema de ranking, correcto`)
    //voice state update event to check joining/leaving channels
    client.on("message", async (message) => {

        if (message.author.bot || !message.guild) return;
        //get the key of the user for this guild
        const key = `${message.guild.id}-${message.author.id}`;
        /**
         * databasing
         * @info General databasing, which sets the userinto the database if he types something
         */
        async function databasing(rankuser) {
            //if(rankuser && rankuser.bot) return console.log("GOTTA IGNORE BOT")
            client.points.ensure(rankuser ? `${message.guild.id}-${rankuser.id}` : `${message.guild.id}-${message.author.id}`, {
                user: rankuser ? rankuser.id : message.author.id,
                usertag: rankuser ? rankuser.tag : message.author.tag,
                xpcounter: 1,
                guild: message.guild.id,
                points: 0,
                neededpoints: 400,
                level: 1,
                oldmessage: "",
            });
            client.points.set(rankuser ? `${message.guild.id}-${rankuser.id}` : `${message.guild.id}-${message.author.id}`, rankuser ? rankuser.tag : message.author.tag, `usertag`); //set the usertag with EVERY message, if he has nitro his tag might change ;)
            client.points.set(message.guild.id, 1, `setglobalxpcounter`); //set points to 0
        }
        databasing();

        /**
         * ARGUMENTS
         * @info General arguments for the Whole message Event
         */
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();


        /**
         * COMMANDS
         * @info if a message starts with the prefix, then run it
         */
        if (message.content.startsWith(prefix)) {

          const ErrorRol = new Discord.MessageEmbed()
            .setColor('#b700ff')
            .setTitle("RANKING")
            .setDescription(`✅ No eres el creador de este bot, si necesitas ayuda, contacta con 1ly4s0#0001`)
            switch (command) {
                case `rank`:
                    rank(message.mentions.users.first() || message.author);
                    break;
                    /////////////////////////////////
                case `leaderboard`:
                case `lb`:
                    leaderboard();
                    break;
                    /////////////////////////////////
                case `setxpcounter`:
                if (!message.member.hasPermission("ADMINISTRATOR") || !message.member.hasPermission("MANAGE_GUILD")) return message.reply("No tienes permisos para usar este comando")
                    setxpcounter();
                break;
                    /////////////////////////////////
                case `setglobalxpcounter`:
                if (!message.member.hasPermission("ADMINISTRATOR") || !message.member.hasPermission("MANAGE_GUILD")) return message.reply("No tienes permisos para usar este comando")
                    setglobalxpcounter();
                break;
                    /////////////////////////////////
                case `addpoints`:
                    if(!message.member.id =="534767171579019266") 
                    return message.channel.send(ErrorRol);
                    

                    addpoints();
                    break;
                    /////////////////////////////////
                case `setpoints`:

                    setpoints();
                    break;
                    
                    /////////////////////////////////
                case `removepoints`:
                    if(!message.member.id ==("534767171579019266")) {const ErrorRol = new Discord.MessageEmbed()
                    .setColor('#b700ff')
                    .setTitle("RANKING")
                    .setDescription(`✅ No eres el creador de este bot, si necesitas ayuda, contacta con 1ly4s0#0001`)
                    message.channel.send(ErrorRol)}
                    else
                    {

                    removepoints();
                    break;
                    }
                    /////////////////////////////////
                case `addlevel`:


                    addlevel();
                    break;
                    
                    /////////////////////////////////
                case `setlevel`:
                    if(!message.member.id ==("534767171579019266")) {const ErrorRol = new Discord.MessageEmbed()
                    .setColor('#b700ff')
                    .setTitle("RANKING")
                    .setDescription(`✅ No eres el creador de este bot, si necesitas ayuda, contacta con 1ly4s0#0001`)
                    message.channel.send(ErrorRol)
                    }

                    setlevel();
                    break;
                    /////////////////////////////////
                case `removelevel`:
                    if(!message.member.id ==("534767171579019266")) {const ErrorRol = new Discord.MessageEmbed()
                    .setColor('#b700ff')
                    .setTitle("RANKING")
                    .setDescription(`✅ No eres el creador de este bot, si necesitas ayuda, contacta con 1ly4s0#0001`)
                    message.channel.send(ErrorRol)}

                    removelevel();
                    break;
                    /////////////////////////////////
                case `resetranking`:
                    if(!message.member.id ==("534767171579019266")) {const ErrorRol = new Discord.MessageEmbed()
                    .setColor('#b700ff')
                    .setTitle("RANKING")
                    .setDescription(`✅ No eres el creador de este bot, si necesitas ayuda, contacta con 1ly4s0#0001`)
                    message.channel.send(ErrorRol)}

                    resetranking();
                    break;
                    /////////////////////////////////
                case `registerall`:
                    if (!message.member.hasPermission("ADMINISTRATOR") || !message.member.hasPermission("MANAGE_GUILD")) return message.reply("No tienes permisos para usar este comando")

                    registerall();
                    break;
                    /////////////////////////////////
                case `addrandomall`:
                    if(!message.member.id ==("534767171579019266")) {const ErrorRol = new Discord.MessageEmbed()
                    .setColor('#b700ff')
                    .setTitle("RANKING")
                    .setDescription(`✅ No eres el creador de este bot, si necesitas ayuda, contacta con 1ly4s0#0001`)
                    message.channel.send(ErrorRol)}

                    addrandomall();
                    break;
                    /////////////////////////////////
                case `resetrankingall`:
                    if (!message.member.hasPermission("ADMINISTRATOR") || !message.member.hasPermission("MANAGE_GUILD")) return message.reply("No tienes permisos para usar este comando")

                    resetrankingall()
                    break;
                    /////////////////////////////////
                case `levelhelp`:
                case `rankinghelp`:
                case `levelinghelp`:
                case `rankhelp`:
                    levelinghelp();
                    break;
                    /////////////////////////////////
                default:
                    break;
            }
            return;
        }


        /**
         * Anti double messages
         * @info if the old message is the same as the message before: SKIP
         */
        async function anti_double_messages() {
            const oldmessage = client.points.get(key, `oldmessage`);
            if (oldmessage.toLowerCase() === message.content.toLowerCase().replace(/\s+/g, '')) {
                return console.log("!");
            }
            client.points.set(key, message.content.toLowerCase().replace(/\s+/g, ''), `oldmessage`); //setting the new old message
        }
        anti_double_messages();



        /**
         * Giving Ranking Points
         * @info adding a random number rounded, between 1 and 5
         */
        async function Giving_Ranking_Points(thekey, maxnumber) {
            let setglobalxpcounter = client.points.get(message.guild.id, "setglobalxpcounter")
            if (!maxnumber) maxnumber = 5;
            var randomnum = ( Math.floor(Math.random() * Number(maxnumber)) + 1 ) * setglobalxpcounter;
            randomnum *= Number(client.points.get(key, `xpcounter`));
            randomnum = Number(Math.floor(randomnum));

            const curPoints = client.points.get(thekey ? thekey : key, `points`);
            const neededPoints = client.points.get(thekey ? thekey : key, `neededpoints`);
            let leftpoints = neededPoints - curPoints;

            let toaddpoints = randomnum;
            addingpoints(toaddpoints, leftpoints);

            async function addingpoints(toaddpoints, leftpoints) {
                if (toaddpoints >= leftpoints) {
                    client.points.set(thekey ? thekey : key, 0, `points`); //set points to 0
                    client.points.inc(thekey ? thekey : key, `level`); //add 1 to level
                     //get current NEW level
                    const newLevel = client.points.get(thekey ? thekey : key, `level`);
                    /**
                     * HARDEN UP THE NEXT LEVEL UP
                     * @info The neededpoints shall raise always, when the newLevel is divideable by 4, at levels: 4,8,12,16,20,24,28,32,36,40,44,...
                     */
                    if (newLevel % 4 === 0) client.points.math(thekey ? thekey : key, `+`, 100, `neededpoints`)

                    const newneededPoints = client.points.get(thekey ? thekey : key, `neededpoints`); //get NEW needed Points
                    const newPoints = client.points.get(thekey ? thekey : key, `points`); //get current NEW points

                    addingpoints(toaddpoints - leftpoints, newneededPoints); //Ofc there is still points left to add so... lets do it!
                    LEVELUP() //SEND LEVEL UP EMBED MESSAGE
                } else {
                    client.points.math(thekey ? thekey : key, `+`, Number(toaddpoints), `points`)
                }
            }
        }
        Giving_Ranking_Points();

        /**
         * CURRENT DATA
         * @info getting the current data for LEVEL, POINTS and NEEDEDPOINTS
         */
        const curLevel = client.points.get(key, `level`);
        const curPoints = client.points.get(key, `points`);
        const neededPoints = client.points.get(key, `neededpoints`);


        /**
         * LEVELUP
         * @info curPoints >= neededPoints | =>
         * @info if the current points are equal or more then the neededpoints the points shall reset and the level shall raise!
         */
        async function LEVELUP() {
                const newLevel = client.points.get(key, `level`); //get current NEW level
                const newPoints = client.points.get(key, `points`); //get current NEW points
                const newneededPoints = client.points.get(key, `neededpoints`); //get NEW needed Points

                //THE INFORMATION EMBED
                const embed = new Discord.MessageEmbed()
                    .setAuthor(`¡GG ${message.author.username}!`, message.member.user.displayAvatarURL({
                        dynamic: true
                    }))
                    .setDescription(`<a:tada:982320662364430366> ¡Has subido al nivel **${newLevel}**! (Puntos: **${newPoints}** de **${newneededPoints}**)`)
                    .setColor(embedcolor);
                //send ping and embed message
                message.reply(embed);
        }


        /**
         * @param { async functionS AREA }
         * @info async functionS
         * @info Every command leads into a single async function, which may or may not be able to work together!
         */

        /**
         * @info this async function "BLOCK" is for the USER RANK and for LEADERBOARD
         */
         async function rank(the_rankuser) {
            /**
             * GET the Rank User
             * @info you can tag him
             */
            try {
                let rankuser = the_rankuser ? the_rankuser : message.mentions.users.first() ? message.mentions.users.first() : args[0] ? args[0].length == 18 ? message.guild.members.cache.get(args[0]).user : message.guild.members.cache.find(u => u.user.username.toLowerCase().includes(String(args[0]).toLowerCase())).user : message.author
                if (!rankuser) return message.reply("Menciona a alguien o pon un nivel para eliminar");
                // if(rankuser.bot) return message.reply("NO BOTS!");
                //Call the databasing async function!
                const key = `${message.guild.id}-${rankuser.id}`;
                databasing(rankuser);
                //do some databasing
                const filtered = client.points.filter(p => p.guild === message.guild.id).array();
                const sorted = filtered.sort((a, b) => b.level - a.level || b.points - a.points);
                const top10 = sorted.splice(0, message.guild.memberCount);
                let i = 0;
                //count server rank sometimes an error comes
                for (const data of top10) {
                    try {
                        i++;
                        if (data.user === rankuser.id) break; //if its the right one then break it ;)
                    } catch {
                        i = `Error al contar el rango`;
                        break;
                    }
                }
                //math
                let curpoints = Number(client.points.get(key, `points`).toFixed(2));
                //math
                let curnextlevel = Number(client.points.get(key, `neededpoints`).toFixed(2));
                //if not level == no rank
                if (client.points.get(key, `level`) === undefined) i = `No Rank`;
                //define the ranking card
              /*
                const rank = new canvacord.Rank()
                    .setAvatar(rankuser.displayAvatarURL({
                        dynamic: false,
                        format: 'png'
                    }))
                    .setCurrentXP(Number(curpoints.toFixed(2)), embedcolor)
                    .setRequiredXP(Number(curnextlevel.toFixed(2)), embedcolor)
                    .setStatus(rankuser.presence.status)
                    .renderEmojis(true)
                    .setProgressBar(embedcolor, "COLOR")
                    .setRankColor(embedcolor, "COLOR")
                    .setLevelColor(embedcolor, "COLOR")
                    .setUsername(rankuser.username, embedcolor)
                    .setRank(Number(i), "Rank", true)
                    .setBackground("IMAGE", "https://cdn.discordapp.com/attachments/933698201486237716/972041721393328148/unknown.png")
                    .setLevel(Number(client.points.get(key, `level`)), "Nivel", true)
                    .setDiscriminator(rankuser.discriminator, embedcolor);
                rank.build()
                    .then(data => {
                        //add rankcard to attachment
                        const attachment = new Discord.MessageAttachment(data, "RankCard.png");
                        //define embed
                        const embed = new Discord.MessageEmbed()
                            .setTitle(`Ranking de:  ${rankuser.username}`)
                            .setColor(embedcolor)
                            .setImage("attachment://RankCard.png")
                            .attachFiles(attachment)
                        //send that embed
                        message.channel.send(embed);
                        return;
                    });
            } catch (error) {
                console.log(error.stack)
                message.reply("Error al generar el rango, vuelve a intentarlo o contacta usando **n!contacto**");
            }
*/
const image = await new Canvas.RankCard()
    .setAvatar(rankuser.displayAvatarURL({ format: "png" }))
    .setXP("current", Number(curpoints.toFixed(2)))
    .setXP("needed", Number(curnextlevel.toFixed(2)))
    .setLevel(Number(client.points.get(key, `level`)))
    .setRank(Number(i))
    .setReputation(10)
    .setRankName("PUNTOS")
    .setUsername(rankuser.username)
    .setBadge(1, "gold")
    .setBadge(3, "diamond")
    .setBadge(5, "silver")
    .setBadge(6, "bronze")
    .setBackground("https://cdn.discordapp.com/attachments/933698201486237716/977847344483692574/istockphoto-1167782983-612x612.jpg")
    .toAttachment();

const attachment = new Discord.MessageAttachment(image.toBuffer(), "rank-card.png");

message.channel.send(attachment);
                    
            } catch (error) {
                console.log(error.stack)
                message.reply("Error al generar el rango, vuelve a intentarlo o contacta usando **n!contacto**");
            }
        }
      

                 function leaderboardembed() {
            const filtered = client.points.filter(p => p.guild === message.guild.id).array();
            let orilent;
            const sorted = filtered.sort((a, b) => b.level - a.level || b.points - a.points);
            let embeds = [];
            let j = 0;
            let maxnum = 50;
            orilent = sorted.length;
            if(isNaN(maxnum)) {
                console.log("maximum_leaderboard NOT A NUMBER")
                maxnum = 50;}
            if (maxnum > sorted.length)
                maxnum = sorted.length + (10 - Number(String(sorted.length/10).slice(2)));
            if(maxnum < 10) maxnum = 10;
            for (let i = 10; i <= maxnum; i += 10) {
                const top = sorted.splice(0, 10);
                const embed = new Discord.MessageEmbed()
                    .setTitle(`\`${message.guild.name}\` | Clasificaciones`)
                    .setTimestamp()
                    .setDescription(`Top ${i<orilent?i:orilent}/${orilent} Ranking:`)
                    .setColor(embedcolor);
                for (const data of top) {
                    j++;
                    try {
                        embed.addField(`**${j}**. \`${data.usertag}\``, `**Puntos:** \`${data.points.toFixed(2)}\` / \`${data.neededpoints}\` | **Nivel:** \`${data.level}\``);
                    } catch {
                        embed.addField(`**${j}**. \`${data.usertag}\``, `**Puntos:** \`${data.points.toFixed(2)}\` / \`${data.neededpoints}\` | **Nivel:** \`${data.level}\``);
                    }
                }
                embeds.push(embed);
            }
            return embeds;
        }
        async function leaderboard() {
            let currentPage = 0;
            const embeds = leaderboardembed();
            if(embeds.length == 1){
                return message.channel.send(embeds[0])
            }
            const lbembed =  await message.channel.send(
                `**Página actual - ${currentPage + 1}/${embeds.length}**`,
                embeds[currentPage]
            );

            try {
                  lbembed.react("⏪");
                 lbembed.react("⏹");
                 lbembed.react("⏩");
            } catch (error) {
                console.error(error);
            }

            const filter = (reaction, user) => ["⏪", "⏹", "⏩"].includes(reaction.emoji.name) && message.author.id === user.id;
            const collector = lbembed.createReactionCollector(filter, {
                time: 60000
            });

            collector.on("collect", async (reaction, user) => {
                try {
                    if (reaction.emoji.name === "⏩") {
                        if (currentPage < embeds.length - 1) {
                            currentPage++;
                            lbembed.edit(`**Página actual - ${currentPage + 1}/${embeds.length}**`, embeds[currentPage]);
                        }
                    } else if (reaction.emoji.name === "⏪") {
                        if (currentPage !== 0) {
                            --currentPage;
                            lbembed.edit(`**Página actual - ${currentPage + 1}/${embeds.length}**`, embeds[currentPage]);
                        }
                    } else {
                        collector.stop();
                        reaction.message.reactions.removeAll();
                    }
                    await reaction.users.remove(message.author.id);
                } catch (error) {
                    console.error(error);
                }
            });
        }

        async function setxpcounter(){
            try {
            /**
                 * GET the Rank User
                 * @info you can tag him
                 */
                if (!args[0]) return message.reply("Menciona a un usuario o añade un numero");
                let rankuser = message.mentions.users.first();
                if (!rankuser) return message.reply("Menciona a un usuario");
                // if(rankuser.bot) return message.reply("NO BOTS!");
                //Call the databasing async function!
                const key = `${message.guild.id}-${rankuser.id}`;
                databasing(rankuser);
                if (!args[1]) return message.reply("> Pon puntos para añadir \n> Uso: `n!setxpcounter @usuario 2`");
                client.points.set(key, Number(args[1]), `xpcounter`); //set points to 0
                const embed = new Discord.MessageEmbed()
                .setColor(embedcolor)
                .setDescription(`Se estableció con éxito el contador de XP **x${args[1]}** para: **${rankuser.tag}**`)
                message.reply(embed);
            } catch (error) {
                console.log(error.stack)
                message.reply("Error al crear el contador de XP la respuesta, vuelve a intentarlo o contacta usando **n!contacto**");
            }
        }

        async function setglobalxpcounter(){
            try {
              
                if (!args[0]) return message.reply("Pon los puntos que quieres añadir. \n> Ejemplo: `n!setglobalxpcounter 2`");
                client.points.set(message.guild.id, Number(args[0]), `setglobalxpcounter`); //set points to 0
                const embed = new Discord.MessageEmbed()
                .setColor(embedcolor)
                .setDescription(`Estableció con éxito el contador de EXP Global **x${args[0]}** Para: **${message.guild.name}**`)
                message.reply(embed);
            } catch {
            }
        }
        /**
         * @info this async function "BLOCK" is for managing the POINTS, adding, setting and removing! PER USER
         */
        async function addpoints(amount) {
            try {
                /**
                 * GET the Rank User
                 * @info you can tag him
                 */
                                              let ide = await db.get("usuarios_premium")
              if(!ide.includes(message.author.id)) return message.channel.send(ErrorRol);
                  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("No tienes permisos para usar este comando");
                if (!args[0]) return message.reply("Menciona a alguien o pon un nivel para eliminar");
                let rankuser = message.mentions.users.first();
                if (!rankuser) return message.reply("Menciona");
                if(rankuser.bot) return message.reply("NO BOTS!");
                //Call the databasing async function!
                const key = `${message.guild.id}-${rankuser.id}`;
                databasing(rankuser);

                const curPoints = client.points.get(key, `points`);
                const neededPoints = client.points.get(key, `neededpoints`);
                let leftpoints = neededPoints - curPoints;
                if (!args[1] && !amount) return message.reply("Pon los puntos que quieres añadir. Ejemplo:\n> n!addpoints @usuario 100");
                if (!amount) amount = Number(args[1]);
                if (amount < 0) removepoints(amount);
                let toaddpoints = amount;
                addingpoints(toaddpoints, leftpoints);

                async function addingpoints(toaddpoints, leftpoints) {
                    if (toaddpoints >= leftpoints) {
                        client.points.set(key, 0, `points`); //set points to 0
                        client.points.inc(key, `level`); //add 1 to level
                        //HARDING UP!
                        const newLevel = client.points.get(key, `level`); //get current NEW level
                        if (newLevel % 4 === 0) client.points.math(key, `+`, 100, `neededpoints`)

                        const newneededPoints = client.points.get(key, `neededpoints`); //get NEW needed Points
                        const newPoints = client.points.get(key, `points`); //get current NEW points

                        //THE INFORMATION EMBED
                        const embed = new Discord.MessageEmbed()
                            .setAuthor(`Ranking de: ${rankuser.tag}`, rankuser.displayAvatarURL({
                                dynamic: true
                            }))
                            .setDescription(`¡Has subido a nivel **${newLevel}**! (Puntos: **${newPoints + toaddpoints - leftpoints}** de **${newneededPoints}**) `)
                            .setColor(embedcolor);
                        //send ping and embed message only IF the adding will be completed!
                        if (toaddpoints - leftpoints < newneededPoints)
                            message.channel.send(rankuser, embed);

                        addingpoints(toaddpoints - leftpoints, newneededPoints); //Ofc there is still points left to add so... lets do it!
                    } else {
                        client.points.math(key, `+`, Number(toaddpoints), `points`)
                    }
                }


                const embed = new Discord.MessageEmbed()
                    .setColor(embedcolor)
                    .setDescription(`Se añadieron correctamente **${toaddpoints}** puntos a: **${rankuser.tag}**`)
                message.reply(embed);
                rank(rankuser); //also sending the rankcard
            } catch (error) {
                console.log(error.stack)
                message.reply("Error al añadir puntos, vuelve a intentarlo o contacta usando **n!contacto**");
            }
        }

        async function setpoints() {
            try {
                /**
                 * GET the Rank User
                 * @info you can tag him
                 */
                                              let ide = await db.get("usuarios_premium")
              if(!ide.includes(message.author.id)) return message.channel.send(ErrorRol);
                  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("No tienes permisos para usar este comando");
                if (!args[0]) return message.reply("Menciona a alguien o pon un nivel para eliminar");
                let rankuser = message.mentions.users.first();
                if (!rankuser) return message.reply("Menciona a alguien");
                // if(rankuser.bot) return message.reply("NO BOTS!");
                //Call the databasing async function!
                const key = `${message.guild.id}-${rankuser.id}`;
                databasing(rankuser);

                let toaddpoints = Number(args[1]);
                if (!args[1]) return message.reply("Pon puntos para añadir. Ejemplo: \n> n!addpoints @usuario 100");
                if (Number(args[1]) < 0) args[1] = 0;
                const neededPoints = client.points.get(key, `neededpoints`);
                addingpoints(toaddpoints, neededPoints);

                async function addingpoints(toaddpoints, neededPoints) {
                    if (toaddpoints >= neededPoints) {
                        client.points.set(key, 0, `points`); //set points to 0
                        client.points.inc(key, `level`); //add 1 to level
                        //HARDING UP!
                        const newLevel = client.points.get(key, `level`); //get current NEW level
                        if (newLevel % 4 === 0) client.points.math(key, `+`, 100, `neededpoints`)

                        const newneededPoints = client.points.get(key, `neededpoints`); //get NEW needed Points
                        const newPoints = client.points.get(key, `points`); //get current NEW points

                        //THE INFORMATION EMBED
                        const embed = new Discord.MessageEmbed()
                            .setAuthor(`¡GG  ${rankuser.username}!`, rankuser.displayAvatarURL({
                                dynamic: true
                            }))
                            .setDescription(`<a:tada:982320662364430366> ¡Has subido al nivel **${newLevel}**! (Puntos: **${newPoints}** de **${newneededPoints}**)`)
                            .setColor(embedcolor);
                        //send ping and embed message
                        message.channel.send(rankuser, embed);

                        addingpoints(toaddpoints - neededPoints, newneededPoints); //Ofc there is still points left to add so... lets do it!
                    } else {
                        client.points.set(key, Number(toaddpoints), `points`)
                    }
                }

                const embed = new Discord.MessageEmbed()
                    .setColor(embedcolor)
                    .setDescription(`Se establecieron correctamente **${toaddpoints}** puntos a: **${rankuser.tag}**`)
                message.channel.send(embed);
                rank(rankuser); //also sending the rankcard
            } catch (error) {
                console.log(error.stack)
                message.reply("Error al establecer los puntos, vuelve a intentarlo o contacta usando **n!contacto**");
            }
        }

        async function removepoints(amount) {
            try {
                /**
                 * GET the Rank User
                 * @info you can tag him
                 */
                                              let ide = await db.get("usuarios_premium")
              if(!ide.includes(message.author.id)) return message.channel.send(ErrorRol);
                  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("No tienes permisos para usar este comando");
                if (!args[0]) return message.reply("Menciona a alguien o pon un nivel para eliminar");
                let rankuser = message.mentions.users.first();
                if (!rankuser) return message.reply("Menciona a alguien");
                // if(rankuser.bot) return message.reply("NO BOTS!");
                //Call the databasing async function!
                const key = `${message.guild.id}-${rankuser.id}`;
                databasing(rankuser);

                const curPoints = client.points.get(key, `points`);
                const neededPoints = client.points.get(key, `neededpoints`);

                if (!args[1] && !amount) return message.reply("Añade un valor para eliminar. Ejemplo: **n!addpoints @usuario 100**");
                if (!amount) amount = Number(args[1]);
                if (amount < 0) addpoints(amount);

                removingpoints(amount, curPoints);

                async function removingpoints(amount, curPoints) {
                    if (amount > curPoints) {
                        let removedpoints = amount - curPoints - 1;
                        client.points.set(key, neededPoints - 1, `points`); //set points to 0
                        if (client.points.get(key, `level`) == 1) return message.reply("Ya tiene 0 puntos, no puedo restarle.");
                        client.points.dec(key, `level`); //remove 1 from level
                        //HARDING UP!
                        const newLevel = client.points.get(key, `level`); //get current NEW level
                        if ((newLevel + 1) % 4 === 0) { //if old level was divideable by 4 set neededpoints && points -100
                            client.points.math(key, `-`, 100, `points`)
                            client.points.math(key, `-`, 100, `neededpoints`)
                        }

                        const newneededPoints = client.points.get(key, `neededpoints`); //get NEW needed Points
                        const newPoints = client.points.get(key, `points`); //get current NEW points

                        //THE INFORMATION EMBED
                        const embed = new Discord.MessageEmbed()
                            .setAuthor(`¡NOO **${rankuser.tag}**!`, rankuser.displayAvatarURL({
                                dynamic: true
                            }))
                            .setDescription(`¡Has bajado a nivel: **\`${newLevel} !!\`**! (Puntos: **${newPoints - amount + removedpoints}** de **${newneededPoints}**)`)
                            .setColor(embedcolor);
                        //send ping and embed message only IF the removing will be completed!
                        if (amount - removedpoints < neededPoints)
                            message.channel.send(rankuser, embed);

                        removingpoints(amount - removedpoints, newneededPoints); //Ofc there is still points left to add so... lets do it!
                    } else {
                        client.points.math(key, `-`, Number(amount), `points`)
                    }
                }

                const embed = new Discord.MessageEmbed()
                    .setColor(embedcolor)
                    .setDescription(`Se borraron correctamente **${amount}** puntos a: **${rankuser.tag}**`)
                message.reply(embed);
                rank(rankuser); //also sending the rankcard
            } catch (error) {
                console.log(error.stack)
                message.reply("Error al eliminar los puntos, vuelve a intentarlo o contacta usando **n!contacto**");
            }
        }

        /**
         * @info this async function "BLOCK" is for managing the LEVELS, adding, setting and removing! PER USER
         */
        async function addlevel() {
            try {
                /**
                 * GET the Rank User
                 * @info you can tag him
                 */
                                              let ide = await db.get("usuarios_premium")
              if(!ide.includes(message.author.id)) return message.channel.send(ErrorRol);
                  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("No tienes permisos para usar este comando");
                if (!args[0]) return message.reply("Menciona a alguien o pon un nivel para eliminar");
                let rankuser = message.mentions.users.first();
                if (!rankuser) return message.reply("Menciona a alguien");
                // if(rankuser.bot) return message.reply("NO BOTS!");

                //Call the databasing async function!
                const key = `${message.guild.id}-${rankuser.id}`;
                databasing(rankuser);
                let newLevel = client.points.get(key, `level`);
                if (!args[1]) return message.reply("¡Agregue la cantidad de niveles a los que desea agregar! \n> Ejemplo: n!addlevel @usuario 4");
                if (Number(args[1]) < 0) args[1] = 0;
                for (let i = 0; i < Number(args[1]); i++) {
                    client.points.set(key, 0, `points`); //set points to 0
                    client.points.inc(key, `level`); //add 1 to level
                    //HARDING UP!
                    newLevel = client.points.get(key, `level`); //get current NEW level
                    if (newLevel % 4 === 0) client.points.math(key, `+`, 100, `neededpoints`)
                }
                const newneededPoints = client.points.get(key, `neededpoints`); //get NEW needed Points
                const newPoints = client.points.get(key, `points`); //get current NEW points

                //THE INFORMATION EMBED
                const embed = new Discord.MessageEmbed()
                    .setAuthor(`¡GG ${rankuser.username}!`, rankuser.displayAvatarURL({
                        dynamic: true
                    }))
                    .setDescription(`<a:tada:982320662364430366> ¡Has subido a nivel **${newLevel}**! (Puntos: **${newPoints}** de **${newneededPoints}**)`)
                    .setColor(embedcolor);
                message.channel.send(rankuser, embed);
                rank(rankuser); //also sending the rankcard
                const sssembed = new Discord.MessageEmbed()
                .setColor(embedcolor)
                .setDescription(`Se añadieron correctamente **${args[1]}** nivel/es a: **${rankuser.tag}**`)
                message.reply(sssembed);
            } catch (error) {
                console.log(error.stack)
                message.reply("Error al añadir el nivel, vuelve a intentarlo o contacta usando **n!contacto**");
            }
        }

        async function setlevel() {
            try {
                /**
                 * GET the Rank User
                 * @info you can tag him
                 */
                                              let ide = await db.get("usuarios_premium")
              if(!ide.includes(message.author.id)) return message.channel.send(ErrorRol);
                  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("No tienes permisos para usar este comando");
                if (!args[0]) return message.reply("Menciona a alguien o pon un nivel para eliminar");
                let rankuser = message.mentions.users.first();
                if (!rankuser) return message.reply("Menciona a alguien o pon un nivel para eliminar");
                // if(rankuser.bot) return message.reply("NO BOTS!");

                //Call the databasing async function!
                const key = `${message.guild.id}-${rankuser.id}`;
                databasing(rankuser);

                if (!args[1]) return message.reply("¡Agregue la cantidad de niveles que desea establecer! Uso: !setlevel @usuario 3");
                if (Number(args[1]) < 1) args[1] = 1;
                client.points.set(key, Number(args[1]), `level`); //set level to the wanted level
                client.points.set(key, 0, `points`); //set the points to 0

                let newLevel = client.points.get(key, `level`); //set level to the wanted level
                let counter = Number(newLevel) / 4;

                client.points.set(key, 400, `neededpoints`) //set neededpoints to 0 for beeing sure
                //add 100 for each divideable 4
                for (let i = 0; i < Math.floor(counter); i++) {
                    client.points.math(key, `+`, 100, `neededpoints`)
                }
                const newneededPoints = client.points.get(key, `neededpoints`); //get NEW needed Points

                const newPoints = client.points.get(key, `points`); //get current NEW points
                //THE INFORMATION EMBED
                const embed = new Discord.MessageEmbed()
                    .setAuthor(`¡GG ${rankuser.username}!`, rankuser.displayAvatarURL({
                        dynamic: true
                    }))
                    .setDescription(`<a:tada:982320662364430366> ¡Has subido a nivel **${newLevel}**! (Puntos: **${newPoints}** de **${newneededPoints}**) `)
                    .setColor(embedcolor);
                message.channel.send(rankuser, embed);
                rank(rankuser); //also sending the rankcard
                const sssembed = new Discord.MessageEmbed()
                .setColor(embedcolor)
                .setDescription(`Se estableció correctamente el nivel  **${args[1]}** a **${rankuser.tag}**`)
                message.reply(sssembed);
            } catch (error) {
                console.log(error.stack)
                message.reply("Error al establecer el nivel, vuelve a intentarlo o contacta usando **n!contacto**");
            }
        }

        async function removelevel() {
            try {
                /**
                 * GET the Rank User
                 * @info you can tag him
                 */
                if (!args[0]) return message.reply("Menciona a alguien o pon un nivel para eliminar");
                let rankuser = message.mentions.users.first();
                if (!rankuser) return message.reply("Menciona a alguien");
                // if(rankuser.bot) return message.reply("NO BOTS!");

                //Call the databasing async function!
                const key = `${message.guild.id}-${rankuser.id}`;
                databasing(rankuser);
                let newLevel = client.points.get(key, `level`);
                if (!args[1]) return message.reply("¡Agregue la cantidad de niveles a los que desea eliminar! \n> Ejemplo: n!removelevel @usuario 4");
                if (Number(args[1]) < 0) args[1] = 0;
                for (let i = 0; i < Number(args[1]); i++) {
                    client.points.set(key, 0, `points`); //set points to 0
                    client.points.dec(key, `level`); //add 1 to level
                    //HARDING UP!
                    newLevel = client.points.get(key, `level`); //get current NEW level
                    if(newLevel < 1) client.points.set(key, 1 ,`level`); //if smaller then 1 set to 1
                }
                snewLevel = client.points.get(key, `level`); //get current NEW level
                let counter = Number(snewLevel) / 4;

                client.points.set(key, 400, `neededpoints`) //set neededpoints to 0 for beeing sure
                //add 100 for each divideable 4
                for (let i = 0; i < Math.floor(counter); i++) {
                    client.points.math(key, `+`, 100, `neededpoints`)
                }
                const newneededPoints = client.points.get(key, `neededpoints`); //get NEW needed Points
                const newPoints = client.points.get(key, `points`); //get current NEW points

                //THE INFORMATION EMBED
                const embed = new Discord.MessageEmbed()
                    .setAuthor(`¡NOO ${rankuser.tag}`, rankuser.displayAvatarURL({
                        dynamic: true
                    }))
                    .setDescription(`Has bajado a nivel **${newLevel}**! (Puntos: **${newPoints}** de **${newneededPoints}**) `)
                    .setColor(embedcolor);
                message.channel.send(rankuser, embed);
                rank(rankuser); //also sending the rankcard
                const sssembed = new Discord.MessageEmbed()
                .setColor(embedcolor)
                .setDescription(`Se eliminaron correctamente \`${args[0]}\` niveles de:  \`${rankuser.tag}\``)
                message.reply(sssembed);
            } catch (error) {
                console.log(error.stack)
                message.reply("Error al generar la subida de nivel, vuelve a intentarlo o contacta usando **n!contacto**");
            }
        }

        /**
         * @info This async function is for ressetting a single USER
         */
        async function resetranking() {
            try {
                /**
                 * GET the Rank User
                 * @info you can tag him
                 */
                if (!args[0]) return message.reply("Menciona a alguien o pon un nivel para eliminar");
                let rankuser = message.mentions.users.first();
                if (!rankuser) return message.reply("Menciona a alguien o pon un nivel para eliminar");
                // if(rankuser.bot) return message.reply("NO BOTS!");

                //Call the databasing async function!
                const key = `${message.guild.id}-${rankuser.id}`;
                databasing(rankuser);

                client.points.set(key, 1, `level`); //set level to 0
                client.points.set(key, 0, `points`); //set the points to 0
                client.points.set(key, 400, `neededpoints`) //set neededpoints to 0 for beeing sure
                client.points.set(key, "", `oldmessage`); //set old message to 0

                //THE INFORMATION EMBED
                const embed = new Discord.MessageEmbed()
                    .setAuthor(`¡NOO ${rankuser.tag}`, rankuser.displayAvatarURL({
                        dynamic: true
                    }))
                    .setDescription(`Has sido restablecido a nivel: **\`1\`**! (Puntos: \`0\` / \`400\`) `)
                    .setColor(embedcolor);
                message.channel.send(rankuser, embed);
                rank(rankuser); //also sending the rankcard
                const sssembed = new Discord.MessageEmbed()
                .setColor(embedcolor)
                .setDescription(`Clasificación restablecida con éxito a:  \`${rankuser.tag}\``)
                message.reply(sssembed);
            } catch (error) {
                console.log(error.stack)
                message.reply("Error al reiniciar el nivel, vuelve a intentarlo o contacta usando **n!contacto**");
            }
        }


        /**
         * @info this async function "BLOCK" is for managing the POINTS for EVERYONE, like randompoints to EVERYONE, and registering EVERYONE and resetting EVERYONE
         */
        async function registerall() {
            let allmembers = message.guild.members.cache.keyArray();
            for (let i = 0; i < allmembers.length; i++) {
                //Call the databasing async function!
                let rankuser = message.guild.members.cache.get(allmembers[i]).user;
                databasing(rankuser);
            }
            const embed = new Discord.MessageEmbed()
            .setColor(embedcolor)
            .setDescription(`Registrado a todos con éxito`)
            message.reply(embed);
        }

         function resetrankingall() {
            let allmembers = message.guild.members.cache.keyArray();
            for (let i = 0; i < allmembers.length; i++) {
                let rankuser = message.guild.members.cache.get(allmembers[i]).user;
                const key = `${message.guild.id}-${rankuser.id}`;
                client.points.set(key, 1, `level`); //set level to 0
                client.points.set(key, 0, `points`); //set the points to 0
                client.points.set(key, 400, `neededpoints`) //set neededpoints to 0 for beeing sure
                client.points.set(key, "", `oldmessage`); //set old message to 0
            }
            const embed = new Discord.MessageEmbed()
            .setColor(embedcolor)
            .setDescription(`Se reinciaron los puntos a todos correctamente`)
            message.reply(embed);
        }

        async function addrandomall() {
            let maxnum = 5;
            if (args[0]) maxnum = Number(args[0]);
            if(!args[0]) return message.reply("Pon un valor");
            let allmembers = message.guild.members.cache.keyArray();
            for (let i = 0; i < allmembers.length; i++) {
                //Call the databasing async function!
                let rankuser = message.guild.members.cache.get(allmembers[i]).user;
                databasing(rankuser);
                if(rankuser.bot) continue;
                Giving_Ranking_Points(`${message.guild.id}-${rankuser.id}`, maxnum);
                Giving_Ranking_Points(`${message.guild.id}-${message.author.id}`, maxnum);
            }
            const embed = new Discord.MessageEmbed()
            .setColor(embedcolor)
            .setDescription(`Se añadieron correctamente ${args[0]} puntos a todos los usuarios`)
            message.reply(embed);
        }



        async function levelinghelp() {
            const embed = new Discord.MessageEmbed()
                .setTitle(`\`${message.guild.name}\` | Comandos de ranking`)
                .setTimestamp()
                .setDescription(`> **AYUDA:**  \`${prefix}levelinghelp\``)
                .setColor(embedcolor)
                .addFields([{
                        name: "`n!rank [@usuario]`",
                        value: ">>> *Muestra el rango de un usuario.*",
                        inline: true
                    },
                    {
                        name: "`n!leaderboard`",
                        value: ">>> *Muestra la clasificación del top 10*",
                        inline: true
                    },
                    {
                        name: "`n!setxpcounter <@usuario> <cantidad>`",
                        value: ">>> *Cambia la cantidad de cuánto contar, x1, x2, x3, ...*",
                        inline: true
                    },

                    {
                        name: "`n!addpoints <@usuario> <cantidad>`",
                        value: ">>> *Agrega una cantidad específica de puntos a un usuario*",
                        inline: true
                    },
                    {
                        name: "`n!setpoints <@usuario> <cantidad>`",
                        value: ">>> *Establece una cantidad específica de puntos para un usuario*",
                        inline: true
                    },
                    {
                        name: "`n!removepoints <@usuario> <cantidad>`",
                        value: ">>> *Elimina una cantidad específica de puntos a un usuario*",
                        inline: true
                    },

                    {
                        name: "`n!addlevel <@usuario> <cantidad>`",
                        value: ">>> *Agrega una cantidad específica de niveles a un usuario*",
                        inline: true
                    },
                    {
                        name: "`n!setlevel <@usuario> <cantidad>`",
                        value: ">>> *Establece una cantidad específica de niveles para un usuario*",
                        inline: true
                    },
                    {
                        name: "`n!removelevel <@usuario> <cantidad>`",
                        value: ">>> *Elimina una cantidad específica de niveles a un usuario*",
                        inline: true
                    },

                    {
                        name: "`n!resetranking <@usuario>`",
                        value: ">>> *Restablece el ranking de un usuario.*",
                        inline: true
                    },
                    {
                        name: "`n!setglobalxpcounter <cantidad>`",
                        value: ">>> *Establece el contador de xp global para este gremio, estándar 1*",
                        inline: true
                    },
                    {
                        name: "\u200b",
                        value: "\u200b",
                        inline: true
                    },

                    {
                        name: "`n!registerall`",
                        value: ">>> *Registra a todos en el servidor en la base de datos*",
                        inline: true
                    },
                    {
                        name: "`n!resetrankingall`",
                        value: ">>> *Restablece la clasificación de todos en este servidor*",
                        inline: true
                    },
                    {
                        name: "`n!addrandomall`",
                        value: ">>> *Añade una cantidad aleatoria de puntos a todos*",
                        inline: true
                    }
                ])
            message.channel.send(embed)
        }

    })
}
