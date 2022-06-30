const express = require('express')
const server = express();
const Discord = require('discord.js');
const MessageSelectMenu = require("discord.js")
//const Client = new Discord.Client({ ws: { properties: { $browser: "Discord Android" }}});

/*
const Client = new Discord.Client({
  ws: {
    intents: [
      'GUILD_MEMBERS',
      'GUILD_MESSAGES',
      'GUILD_MESSAGE_REACTIONS' //<--- the intent you need to detect reactions on messages in a guild
    ]
  }
});
*/

const math = require("mathjs")
const db = require("quick.db")
const { MessageAttachment } = require('discord.js')

const instagram = require('user-instagram');    
 
/* eslint-disable no-unused-vars */
const { MessageEmbed, version: djsversion } = require('discord.js');
const { formatBytes, parseDur } = require('./functions.js');
const cpuStat = require('cpu-stat');
const os = require('os');
const formatOS = {
  aix: 'IBM AIX',
  darwin: 'Darwin',
  freebsd: 'FreeBSD',
  linux: 'Linux',
  openbsd: 'OpenBSD',
  sunos: 'SunOS',
  win32: 'Windows',
};



const fs = require("fs");
const enmap = require('enmap');
const settings = new enmap({
  name: 'settings',
  autoFetch: true,
  cloneLevel: 'deep',
  fetchAll: true,
});

const { Intents } = require('discord.js');

const myIntents = new Intents();
myIntents.add(Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MEMBERS);



const client = new Discord.Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
    ws: { properties: { $browser: "Discord iOS" }}
});





client.on('ready', async () => {
     await instagram.authenticate(process.env.usuario_instagram, process.env.contraseña_instagram).then(() => {
        console.log("Instagram API Authenticated");
    }).catch(err => {
        console.log(err);
});

    client.api.applications(client.user.id).guilds.commands.post({
        data: {
            name: "hello",
            description: "comando de testing"
            // possible options here e.g. options: [{...}]
        }
    });

  client.api.applications(client.user.id).guilds.commands.post({
        data: {
            name: "afk",
            description: "Establece tu estado de AFK para que nadie te mencione."
            // possible options here e.g. options: [{...}]
        }
    });
        client.api.applications(client.user.id).commands.post({
        data: {
            name: "calculator",
            description: "Usa el comando de la calculadora para así hacer hacer operaciones matemáticas."
            // possible options here e.g. options: [{...}]
        }
    });



    client.ws.on('INTERACTION_CREATE', async interaction => {
        const command = interaction.data.name.toLowerCase();
        const args = interaction.data.options;

        if (command === 'test'){ 
            // here you could do anything. in this sample
            // i reply with an api interaction
            client.api.interactions(interaction.id, interaction.token).callback.post({
                data: {
                    type: 4,
                    data: {
                        content: "hello world!!!"
                    }
                }
            })
        }
    });
  
});



    client.ws.on('INTERACTION_CREATE', async interaction => {
        const command = interaction.data.name.toLowerCase();
        const args = interaction.data.options;

        if (command === 'afk'){ 

    let razon = args.slice(1).join(" ");
    if(!razon){
      razon = "No especificado"
    } 
    
    await db.set(`afk-${message.author.id}`, razon)
        const Embed = new Discord.MessageEmbed()
      .setColor("RED")
      .setAuthor(message.author.tag)
      .setTitle("AFK")
      .setDescription(`> **Ahora estás AFK.** \n\n> **Razón del AFK es:**  _${razon}_`)
    .setThumbnail(message.author.displayAvatarURL({ dynamic: true, size: 512 }))
    .setFooter("Avisaré a los que te mencionen")
    const Embed1 = new Discord.MessageEmbed()
    .setTitle("AFK")
    .setDescription("<:adv:980146819168350249> | Se está estableciendo tu AFK, por favor, espere...")
      .setColor("YELLOW")
    .setFooter("Esto se hace para evitar colapsar al BOT")
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true, size: 512 }))
        let mensaje = await interaction.reply(Embed1)
  setTimeout(function(){ 
    mensaje.edit(Embed)
 }, 5000)
        }
    });



    client.ws.on('INTERACTION_CREATE', async interaction => {
        const command = interaction.data.name.toLowerCase();
        const args = interaction.data.options;

        if (command === 'ping'){
            // here you could do anything. in this sample
            // i reply with an api interaction
            client.api.interactions(interaction.id, interaction.token).callback.post({
                data: {
                    type: 4,
                    data: {
                        content: "Pong!"
                    }
                }
            })
        }

      if (command === 'calculator'){

            // here you could do anything. in this sample
            // i reply with an api interaction

    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
    
    const args = message.content.slice('').trim().split(/ +/g);


    let button = new Array([], [], [], [], []);
    let row = [];
    let row2 = "";
    let text = ["clear", "(", ")", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", ".", "0", "00", "="];
    let current = 0;
    let time = 60000;

    for (let i = 0; i < text.length; i++) {
      if (button[current].length === 4) current++;
      button[current].push(createButton(text[i]));
      if (i === text.length - 1) {
        for (let btn of button) row.push(addRow(btn));
      }
    }

    const embed = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setTitle("**CALDULADORA**")
      .setDescription("```0```")
          const exampleEmbed = new Discord.MessageEmbed({
    title: 'a',
    description: "a",
    type: 'rich',
  });




              client.api.interactions(interaction.id, interaction.token).callback.post({
                data: {
                    type: 4,
                    data: {
                        content: "hello world!!!",
                         embeds: [ exampleEmbed ] 
                    }
                }
            })
      .then((msg) => {
      let isWrong = false;
      let value = "";
      let embed1 = new Discord.MessageEmbed()
        .setColor("BLUE")

      function createCollector(val, result = false) {
        let filter = (buttons1) => buttons1.clicker.user.id === interaction.author.id && buttons1.id === "cal" + val;
        let collect = msg.createButtonCollector(filter, { time: 60000 });

        collect.on("collect", async x => {
          x.reply.defer()

          if (result === "new") value = "0"
          else if (isWrong) {
            value = val
            isWrong = false;
          }
          else if (value === "0") value = val;
          else if (result) {
            isWrong = true;
            value = mathEval(value);
          }
          else value += val
          embed1.setTitle("**Calculadora**")
          embed1.setDescription("```" + value + "```")
          msg.edit({
            embed: embed1,
            components: row
          })
        })
      }

      for (let txt of text) {
        let result;
        if (txt === "clear") result = "new";
        else if (txt === "=") result = true;
        else result = false
        createCollector(txt, result)
      }

      setTimeout(() => {
        embed1.setDescription("Se acabó el tiempo en el que estabas usando la calculadora")
        embed1.setColor("RED")
        msg.edit({
          embed: embed1,
          components: row2,
        })
      }, time)
    })

    function addRow(btns) {
      let row1 = new MessageActionRow()
      for (let btn of btns) {
        row1.addComponent(btn);
      }
      return row1;
    }

    function createButton(label, style = "grey") {
      if (label === "clear") style = "red"
      else if (label === ".") style = "grey"
      else if (label === "=") style = "green"
      else if (isNaN(label)) style = "blurple"

      const btn = new MessageButton()
        .setLabel(label)
        .setStyle(style)
        .setID("cal" + label)
      return btn;
    }

    function mathEval(input) {
      try {
        let res = math.evaluate(input)
        return res;
      } catch {
        return "Error al calcular! Escribe bien la operación.";
      }
    }
        }
    });







const ms = require("ms");

/*
client.on("message", async (message) => {

    
  if (message.author.bot) return;
  let msg = message.content;

  let emojis = msg.match(/(?<=:)([^:\s]+)(?=:)/g)
  if (!emojis) return;
  emojis.forEach(m => {
    let emoji = client.emojis.cache.find(x => x.name === m)
    if (!emoji) return;
    let temp = emoji.toString()
    if (new RegExp(temp, "g").test(msg)) msg = msg.replace(new RegExp(temp, "g"), emoji.toString())
    else msg = msg.replace(new RegExp(":" + m + ":", "g"), emoji.toString());
  })

  if (msg === message.content) return;

  let webhook = await message.channel.fetchWebhooks();
  let number = randomNumber(1, 2);
  webhook = webhook.find(x => x.name === "NEO - Emojis sin Nitro" + number);

  if (!webhook) {
    webhook = await message.channel.createWebhook(`NEO - Emojis sin Nitro` + number, {
      avatar: client.user.displayAvatarURL({ dynamic: true })
    });
  }

  await webhook.edit({
    name: message.member.nickname ? message.member.nickname : message.author.username,
    avatar: message.author.displayAvatarURL({ dynamic: true })
  })

  message.delete().catch(err => { })
  webhook.send(msg).catch(err => { })

  await webhook.edit({
    name: `NEO - Emojis sin Nitro` + number,
    avatar: client.user.displayAvatarURL({ dynamic: true })
  })


})

function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
} 
*/

const config2 = require('./settings.json');
const DisTube = require('distube')
const prefix = "n!";
const { MessageActionRow, MessageButton } = require("discord-buttons");

const TicTacToe = require('discord-tictactoe');

const game = new TicTacToe({ language: 'es' })




server.all('/', (req, res) => {
  res.send('> Bot encendido');
});
server.listen(3000, () => {
  console.log('Web > Encendida');
});




const bot = new Discord.Client({
  disableEveryone: true,
  autoReconnect: true,
  disabledEvents: ["TYPING_START"],
  partials: ['MESSAGE', 'CHANNEL', 'GUILD_MEMBER', 'REACTION']
});

client.on("ready", () => {
    console.log("Música, listo 🎶");
});
const { loadCommands } = require('./utils/loadCommands');

bot.distube = new DisTube(bot, { searchSongs: false, emitNewSongOnly: true });
bot.distube.on("playSong", (message, queue, song) =>{
          const Embed = new Discord.MessageEmbed()
            .setTitle("MÚSICA")
            .setDescription(`Estas escuchando ${song.name} - Pedida por ${song.user} \n0:01 ❍─────────────────────────────── ${song.formattedDuration}`)
            .setFooter(`Musica solicitada por ${message.author.tag}`, message.author.displayAvatarURL())
            .setImage("https://cdn.discordapp.com/attachments/848130595560357918/892441640936046672/BARRA.gif")
            .setTimestamp();
            message.channel.send(Embed)
          })
	
bot.distube.on("addSong", (message, queue, song) => {
const Embed = new Discord.MessageEmbed()
  .setTitle("MÚSICA")
  .setDescription(`${song.name} - ${song.formattedDuration} añadida a la cola por ${song.user}`)
  .setFooter(`Musica solicitada por ${message.author.tag}`, message.author.displayAvatarURL())
  .setImage("https://cdn.discordapp.com/attachments/848130595560357918/892441640936046672/BARRA.gif")
  .setTimestamp();
  message.channel.send(Embed)
  })

require('./utils/loadEvents')(bot);

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
client.snipes = new Discord.Collection();

client.on("ready", () => {
  console.log("Estado, listo!");
  
  client.user.setActivity(`Usa n!help para ayudarte || Estoy en ${client.guilds.cache.size} servers | ${client.users.cache.size} users`);
  });
  

loadCommands(bot);


    client.ws.on('INTERACTION_CREATE', async interaction => {
        const command = interaction.data.name.toLowerCase();
        const args = interaction.data.options;

        if (command === 'calculator'){

            // here you could do anything. in this sample
            // i reply with an api interaction

    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
    



    let button = new Array([], [], [], [], []);
    let row = [];
    let row2 = "";
    let text = ["clear", "(", ")", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", ".", "0", "00", "="];
    let current = 0;
    let time = 60000;

    for (let i = 0; i < text.length; i++) {
      if (button[current].length === 4) current++;
      button[current].push(createButton(text[i]));
      if (i === text.length - 1) {
        for (let btn of button) row.push(addRow(btn));
      }
    }

    const embed = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setTitle("**CALDULADORA**")
      .setDescription("```0```")





               client.api.interactions(interaction.id, interaction.token).callback.post({
                data: {
                    type: 4,
                    data: {
                        content: "Calculadora",
                         embeds:[ embed ]
                    }
                }
            })
          const msg = await interaction.fetchReply();
      let isWrong = false;
      let value = "";
      let embed1 = new Discord.MessageEmbed()
        .setColor("BLUE")

      function createCollector(val, result = false) {
        let filter = (buttons1) => buttons1.clicker.user.id === interaction.author.id && buttons1.id === "cal" + val;
        let collect = msg.createButtonCollector(filter, { time: 60000 });

        collect.on("collect", async x => {
          x.reply.defer()

          if (result === "new") value = "0"
          else if (isWrong) {
            value = val
            isWrong = false;
          }
          else if (value === "0") value = val;
          else if (result) {
            isWrong = true;
            value = mathEval(value);
          }
          else value += val
          embed1.setTitle("**Calculadora**")
          embed1.setDescription("```" + value + "```")
          msg.editReply({
            embed: embed1,
            components: row
          })
        })
      }

      for (let txt of text) {
        let result;
        if (txt === "clear") result = "new";
        else if (txt === "=") result = true;
        else result = false
        createCollector(txt, result)
      }

      setTimeout(() => {
        embed1.setDescription("Se acabó el tiempo en el que estabas usando la calculadora")
        embed1.setColor("RED")
        msg.editReply({
          embed: embed1,
          components: row2,
        })
      }, time)
    

    function addRow(btns) {
      let row1 = new MessageActionRow()
      for (let btn of btns) {
        row1.addComponent(btn);
      }
      return row1;
    }

    function createButton(label, style = "grey") {
      if (label === "clear") style = "red"
      else if (label === ".") style = "grey"
      else if (label === "=") style = "green"
      else if (isNaN(label)) style = "blurple"

      const btn = new MessageButton()
        .setLabel(label)
        .setStyle(style)
        .setID("cal" + label)
      return btn;
    }

    function mathEval(input) {
      try {
        let res = math.evaluate(input)
        return res;
      } catch {
        return "Error al calcular! Escribe bien la operación.";
      }
    }
        }
    });

require("discord-buttons")(client);
client.on("message", async message => {
  if (message.content.startsWith("n!calculator")) {

    
    

    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
    
    const args = message.content.slice('').trim().split(/ +/g);


    let button = new Array([], [], [], [], []);
    let row = [];
    let row2 = "";
    let text = ["clear", "(", ")", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", ".", "0", "00", "="];
    let current = 0;
    let time = 60000;

    for (let i = 0; i < text.length; i++) {
      if (button[current].length === 4) current++;
      button[current].push(createButton(text[i]));
      if (i === text.length - 1) {
        for (let btn of button) row.push(addRow(btn));
      }
    }

    const embed = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setTitle("**CALDULADORA**")
      .setDescription("```0```")

    message.channel.send({
      embed: embed,
      components: row
    }).then((msg) => {
      let isWrong = false;
      let value = "";
      let embed1 = new Discord.MessageEmbed()
        .setColor("BLUE")

      function createCollector(val, result = false) {
        let filter = (buttons1) => buttons1.clicker.user.id === message.author.id && buttons1.id === "cal" + val;
        let collect = msg.createButtonCollector(filter, { time: 60000 });

        collect.on("collect", async x => {
          x.reply.defer()

          if (result === "new") value = "0"
          else if (isWrong) {
            value = val
            isWrong = false;
          }
          else if (value === "0") value = val;
          else if (result) {
            isWrong = true;
            value = mathEval(value);
          }
          else value += val
          embed1.setTitle("**Calculadora**")
          embed1.setDescription("```" + value + "```")
          msg.edit({
            embed: embed1,
            components: row
          })
        })
      }

      for (let txt of text) {
        let result;
        if (txt === "clear") result = "new";
        else if (txt === "=") result = true;
        else result = false
        createCollector(txt, result)
      }

      setTimeout(() => {
        embed1.setDescription("Se acabó el tiempo en el que estabas usando la calculadora")
        embed1.setColor("RED")
        msg.edit({
          embed: embed1,
          components: row2,
        })
      }, time)
    })

    function addRow(btns) {
      let row1 = new MessageActionRow()
      for (let btn of btns) {
        row1.addComponent(btn);
      }
      return row1;
    }

    function createButton(label, style = "grey") {
      if (label === "clear") style = "red"
      else if (label === ".") style = "grey"
      else if (label === "=") style = "green"
      else if (isNaN(label)) style = "blurple"

      const btn = new MessageButton()
        .setLabel(label)
        .setStyle(style)
        .setID("cal" + label)
      return btn;
    }

    function mathEval(input) {
      try {
        let res = math.evaluate(input)
        return res;
      } catch {
        return "Error al calcular! Escribe bien la operación.";
      }
    }

  }
});
/*
client.on("message", async message => {
  if (message.content.startsWith("n!setcomandosusados")) {

    ;
    
    await db.set("comandos_usados", "0");

    let numerodecomandosusados = await db.get("comandos_usados");
    
    let nuevonumero = math.evaluate(`${numerosdecomandosusados} + 1`);

    message.channel.send(nuevonumero);


  }
});
*/



client.on("message", async message => {
  if (message.content.startsWith("n!poll")) {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("No tienes permisos para usar este comando");
    const args = message.content.trim().split(/ +/g);
    let sayChannel = message.mentions.channels.first();
    if (!sayChannel) return message.channel.send(`:x:| ${message.author} menciona un canal primero`)
    let sayMsg = args.slice(2 || 0, args.length).join(" ");
    if (!sayMsg) return message.channel.send(`Pon un texto para el encuesta`)
    var role = message.member.highestRole;
    var embed = new MessageEmbed()
      .setColor("RANDOM")
      .setTitle(`Encuesta:\n **${sayMsg}**`)
      .setDescription(`\n\n\n> Servidor ${message.guild.name} \n> Autor <@${message.author.id}>`)


      .setTimestamp()
    message.channel.send(`Tu encuesta está lista en <#${sayChannel.id}>`)
    sayChannel.send({ embed }).then(m => {
      m.react('✅');
      m.react('❌');
      m.react('🤔');
    })
      .catch({});

    
    

    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)

  }
});

client.on("message", async message => {
  if (message.content.startsWith("n!neoabandonar")) {
    if (!message.author.id === "534767171579019266") return message.channel.send("No puedes hacer esto :v")
    const args = message.content.slice('').trim().split(/ +/g);

    let id = args.slice(1).join(" ")
    let guild = client.guilds.cache.get(id);
    message.channel.send(`Listo! Abandoné el servidor ${guild.name}`)
    bot.guilds.cache.get(id).leave()


  }
});

const Screenshoter = require("discord-screenshot");
client.on("message", async message => {
  if (message.content.startsWith("n!captura")) {
    const args = message.content.trim().split(/ +/g);
    ;
    
    let captura = args.slice(1).join("");
    
    let paginas_prohibidas = await db.get("paginas_prohibidas");
    if(paginas_prohibidas.includes(`${captura}`)) return message.channel.send("Eh, esa página no.")

    
    const result = await Screenshoter.screenshot(`${captura}`)
    
          const ReportEmbed = new Discord.MessageEmbed()
          .setColor('#b700ff')
          .setTitle("Captura de Pantalla de Web")
          .setDescription(`> La página web que querías que poniera es **${captura}** \n\n> Captura:`)
            .setImage("attachment://Screenshot.png")
        .attachFiles(result);
          //.setImage(`https://cdn.discordapp.com/attachments/933698201486237716/${ide.id}/Screenshot.png`)

      message.channel.send(ReportEmbed)
    
    

    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)// https://cdn.discordapp.com/attachments/813400207638790154/841331537773068338/Screenshot.png


  }
});


client.on("message", async message => {
  if (message.content.startsWith("n!añadirlistanegra")) {
  
        let id = ['534767171579019266', '888369001401569300', '761588167483588658'] //aca va su id, pueden agregar mas id's si quieren

    if (!id.some(id => message.author.id == id)) { //si la ID del usuario que ejecuta el comando no esta cargada en la variable retorna con el embed

      const embed = new Discord.MessageEmbed() //creamos el embed
        .setDescription('Solo el developer y ayudantes del bot pueden usar este comando.')
        .setColor("RED")
      return message.channel.send(embed) //lo enviamos
    } //cerramos
    
    const args = message.content.trim().split(/ +/g);
    ;
    
    let web = args.slice(1).join("");

    if(!web) return message.channel.send("Pon una web.")

    let paginas_prohibidas = await db.get("paginas_prohibidas");
    if(paginas_prohibidas.includes(`${web}`)) return message.channel.send("<:no:973283751582908426> La web ya está en la base de datos.")
    
    await db.push("paginas_prohibidas", `${web}`);

    const Embed = new Discord.MessageEmbed()
    .setTitle("Lista Negra")
    .setDescription("<:check:971080303789625425> Página añadida a la lista negra correctamente.")
    message.channel.send(Embed)

    

    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)


  }
});

client.on("message", async message => {
  if (message.content.startsWith("n!eliminarpremium")) {
  
        let id = ['534767171579019266', '888369001401569300', '761588167483588658', '506103750600163380'] //aca va su id, pueden agregar mas id's si quieren

    if (!id.some(id => message.author.id == id)) { //si la ID del usuario que ejecuta el comando no esta cargada en la variable retorna con el embed

      const embed = new Discord.MessageEmbed() //creamos el embed
        .setDescription('Solo el developer y ayudantes del bot pueden usar este comando.')
        .setColor("RED")
      return message.channel.send(embed) //lo enviamos
    } //cerramos
    
    const args = message.content.trim().split(/ +/g);
    ;
    
    let usuario  = args.slice(1).join("");

    if(!usuario) return message.channel.send("Pon un usuario")
    
    await db.delete("usuarios_premium", `${usuario}`);

    const Embed = new Discord.MessageEmbed()
    .setTitle("Lista Negra")
    .setDescription("<:check:971080303789625425> Usuario Eliminado Correctamente de la lista premium.")
    message.channel.send(Embed)

    

    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)


  }
});
/*
client.on("message", async message => {
  if (message.content.startsWith("n!añadirpremium")) {
        let id = ['534767171579019266', "506103750600163380"] //aca va su id, pueden agregar mas id's si quieren

    if (!id.some(id => message.author.id == id)) { //si la ID del usuario que ejecuta el comando no esta cargada en la variable retorna con el embed

      const embed = new Discord.MessageEmbed() //creamos el embed
        .setDescription('Solo el developer y ayudantes del bot pueden usar este comando.')
        .setColor("RED")
      return message.channel.send(embed) //lo enviamos
    } //cerramos
    
    const args = message.content.trim().split(/ +/g);
    ;
    
    let web = args.slice(1).join("");

    if(!web) return message.channel.send("Pon una web.")

    let usuarios_premium = await db.get("usuarios_premium");
    if(usuarios_premium.includes(`${web}`)) return message.channel.send("<:no:973283751582908426> El usuario ya está en la base de datos.")
    
    await db.push("usuarios_premium", `${web.id}`);

    const Embed = new Discord.MessageEmbed()
    .setTitle("Lista Negra")
    .setDescription("<:check:971080303789625425> Página añadida a la lista negra correctamente.")
    message.channel.send(Embed)


  }
});*/



client.on("message", async message => {
  if (message.content.startsWith("n!listanegra")) {
        let id = ['534767171579019266', '888369001401569300', '761588167483588658'] //aca va su id, pueden agregar mas id's si quieren

    if (!id.some(id => message.author.id == id)) { //si la ID del usuario que ejecuta el comando no esta cargada en la variable retorna con el embed

      const embed = new Discord.MessageEmbed() //creamos el embed
        .setDescription('Solo el developer y ayudantes del bot pueden usar este comando.')
        .setColor("RED")
      return message.channel.send(embed) //lo enviamos
    } //cerramos
    

    ;
    
    let webs = await db.get("paginas_prohibidas").join("\n -> ");

    const Embed = new Discord.MessageEmbed()
    .setTitle("Lista Negra")
    .setDescription(`Webs en la lista negra:\n\n-> ${webs}`)
    message.channel.send(Embed)

    
    

    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)


  }
});



client.on("message", async message => {
  if (message.content.startsWith("n!dados")) {

    let links = ["https://cdn.discordapp.com/attachments/684757256658747451/794277079243685888/dado-1.png", "https://cdn.discordapp.com/attachments/684757256658747451/794277107537805332/dado-2.png", "https://cdn.discordapp.com/attachments/684757256658747451/794277142800105483/dado-3.png", "https://cdn.discordapp.com/attachments/684757256658747451/794277176592826368/dado-4.png", "https://cdn.discordapp.com/attachments/684757256658747451/794277207619010590/dado-5.png", "https://cdn.discordapp.com/attachments/684757256658747451/794277245157113866/dado-6.png"] //estas son las imagenes de los dados que usara el bot, ustedes lo pueden cambiar si no les gusta
    var dado = links[Math.floor(Math.random() * links.length)] //usamos [Math.floor(Math.random() * links.length)] para que escoja un link random de los de arriba
    const embed = new Discord.MessageEmbed() //creamos el embed
      .setTitle(`${message.author.username} ha tirado el dado.`)
      .setDescription("El dado a caido en:")
      .setImage(dado) //llamamos a la variable que hara que los links se randomizen cada vez que alguien use el comando
      .setColor("RANDOM")

    message.channel.send(embed);

    
    

    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
  }
});







//creating a new discord.js client
require("discordjs-activity")

client.on("message", async (message) => {
  if (message.author.bot) return
  if (message.content.startsWith("n!actividad youtube")) {
    let VoiceChannel = message.mentions.channels.first();//Voice Channel ID
    if (!VoiceChannel) return message.channel.send("Menciona un canal");
    let Invite = await VoiceChannel.activityInvite("youtube_together")
    //Application Name [youtube_together, fishington, chess_in_the_park, betrayal, poker_night, chess_in_the_park_dev]
    if (Invite) {
      const Info = new Discord.MessageEmbed()
        .setColor('#b700ff')
        .setTitle("YouTube")
        .setDescription("Únete aqui: \nhttps://discord.com/invite/" + Invite.code)
        .setImage("https://camo.githubusercontent.com/2da88bbb5592e416b8bae9c6ebce4db93e0b12b1ff3b2c8e9c575bf42bdaa6a2/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f3734393235343937303030333432333334352f3834393838393235343332373035383434322f756e6b6e6f776e2e706e67")
      message.channel.send(Info)// send's invite link in the channel
    }
  }
})
client.on("message", async (message) => {
  if (message.author.bot) return
  if (message.content.startsWith("n!actividad betrayal")) {
    let VoiceChannel = message.mentions.channels.first();//Voice Channel ID
    if (!VoiceChannel) return message.channel.send("Menciona un canal");
    let Invite = await VoiceChannel.activityInvite("betrayal")
    //Application Name [youtube_together, fishington, chess_in_the_park, betrayal, poker_night, chess_in_the_park_dev]
    if (Invite) {
      const Info = new Discord.MessageEmbed()
        .setColor('#b700ff')
        .setTitle("YouTube")
        .setDescription("Únete aqui: \nhttps://discord.com/invite/" + Invite.code)
        .setImage("https://camo.githubusercontent.com/d8954d24395252423ef56106ade9e9b8081dd42b1c1aca0f9e570ab59a7abc9a/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f3734393235343937303030333432333334352f3834393839313732353134343735323137382f756e6b6e6f776e2e706e67")
      message.channel.send(Info)// send's invite link in the channel
    }
  }
})
client.on("message", async (message) => {
  if (message.author.bot) return
  if (message.content.startsWith("n!actividad doodlecrew")) {
    let VoiceChannel = message.mentions.channels.first();//Voice Channel ID
    if (!VoiceChannel) return message.channel.send("Menciona un canal");
    let Invite = await VoiceChannel.activityInvite("doodlecrew")
    //Application Name [youtube_together, fishington, chess_in_the_park, betrayal, poker_night, chess_in_the_park_dev]
    if (Invite) {
      const Info = new Discord.MessageEmbed()
        .setColor('#b700ff')
        .setTitle("Doodle Crew")
        .setDescription("Únete aqui: \nhttps://discord.com/invite/" + Invite.code)
        .setImage("https://camo.githubusercontent.com/b1fa6c4b6125a4b5410f0fae060559e0270045f74679451f6328941311221306/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f3835393037343830373133323139323736392f3839313838383336313434313231303339382f756e6b6e6f776e2e706e67")
      message.channel.send(Info)// send's invite link in the channel
    }
  }
})
client.on("message", async (message) => {
  if (message.author.bot) return
  if (message.content.startsWith("n!actividad poker_night")) {
    let VoiceChannel = message.mentions.channels.first();//Voice Channel ID
    if (!VoiceChannel) return message.channel.send("Menciona un canal");
    let Invite = await VoiceChannel.activityInvite("poker_night")
    //Application Name [youtube_together, fishington, chess_in_the_park, betrayal, poker_night, chess_in_the_park_dev]
    if (Invite) {
      const Info = new Discord.MessageEmbed()
        .setColor('#b700ff')
        .setTitle("Poker Night")
        .setDescription("Únete aqui: \nhttps://discord.com/invite/" + Invite.code)
        .setImage("https://camo.githubusercontent.com/3481e4d20d144ac22d0d01f577abbb9d858f31e17cfcaebe32de47bad832a582/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f3734393235343937303030333432333334352f3834393838393734373739343635373239302f756e6b6e6f776e2e706e67")
      message.channel.send(Info)// send's invite link in the channel
    }
  }
})
client.on("message", async (message) => {
  if (message.author.bot) return
  if (message.content.startsWith("n!actividad wordsnacks")) {
    let VoiceChannel = message.mentions.channels.first();//Voice Channel ID
    if (!VoiceChannel) return message.channel.send("Menciona un canal");
    let Invite = await VoiceChannel.activityInvite("wordsnacks")//Application Name [youtube_together, fishington, chess_in_the_park, betrayal, poker_night, chess_in_the_park_dev]
    if (Invite) {
      const Info = new Discord.MessageEmbed()
        .setColor('#b700ff')
        .setTitle("Word Snacks")
        .setDescription("Únete aqui: \nhttps://discord.com/invite/" + Invite.code)
        .setImage("https://camo.githubusercontent.com/490ff51d6fc4d65e40b6f92d904e039077b1f850c884399cf1ed83d3eac146f8/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f3835393037343830373133323139323736392f3839313838393434383630343830373230392f756e6b6e6f776e2e706e67")
      message.channel.send(Info)// send's invite link in the channel
    }
  }
})
client.on("message", async (message) => {
  if (message.author.bot) return
  if (message.content.startsWith("n!actividad lettertile")) {
    let VoiceChannel = message.mentions.channels.first();//Voice Channel ID
    if (!VoiceChannel) return message.channel.send("Menciona un canal");
    let Invite = await VoiceChannel.activityInvite("lettertile")//Application Name [youtube_together, fishington, chess_in_the_park, betrayal, poker_night, chess_in_the_park_dev]
    if (Invite) {
      const Info = new Discord.MessageEmbed()
        .setColor('#b700ff')
        .setTitle("Letter Tile")
        .setDescription("Únete aqui: \nhttps://discord.com/invite/" + Invite.code)
        .setImage("https://camo.githubusercontent.com/84a7490108631fb3010e6b5c9fd7b449229354bf5d373120c5377d54ca26c9ac/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f3835393037343830373133323139323736392f3839313838393836343937333337373534362f756e6b6e6f776e2e706e67")
      message.channel.send(Info)// send's invite link in the channel
    }
  }
})
client.on("message", async (message) => {
  if (message.author.bot) return
  if (message.content === "n!actividad") {
    const Info = new Discord.MessageEmbed()
      .setColor('#b700ff')
      .setTitle("Actividades")
      .setDescription("Hola! Parece que necesitas ayuda con las actividades. \n Las actividades que hay són: \n> YouTube - `n!actividad youtube` \n> Poker - `n!actividad poker_night` \n> Letter Tile - `n!actividad lettertile` \n> Word Snacks - `n!actividad wordsnacks` \n> Doodle Crew - `n!actividad doodlecrew` \n ⚠️Recuerda mencionar un canal ⚠️ ")
      .setImage("https://camo.githubusercontent.com/1ecd7ff7e1bcc5b248106ddaa91a5ae4f6effb5013981bb75991e11614a50953/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f3734393235343937303030333432333334352f3834393838343139313437343035373233372f59504e5469477768546c3041414141415355564f524b35435949492e706e67")
    message.channel.send(Info)// send's invite link in the channel
  }
})
client.on("message", async (message) => {
  if (message.author.bot) return
  if (message.content === "n!help actividades") {
    const Info = new Discord.MessageEmbed()
      .setColor('#b700ff')
      .setTitle("Actividades")
      .setDescription("Hola! Parece que necesitas ayuda con las actividades. \n Las actividades que hay són: \n> YouTube - `n!actividad youtube` \n> Poker - `n!actividad poker_night` \n> Letter Tile - `n!actividad lettertile` \n> Word Snacks - `n!actividad wordsnacks` \n> Doodle Crew - `n!actividad doodlecrew` \n> Betrayal - `n!actividad betrayal`\n ⚠️Recuerda mencionar un canal ⚠️ ")
      .setImage("https://camo.githubusercontent.com/1ecd7ff7e1bcc5b248106ddaa91a5ae4f6effb5013981bb75991e11614a50953/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f3734393235343937303030333432333334352f3834393838343139313437343035373233372f59504e5469477768546c3041414141415355564f524b35435949492e706e67")
    message.channel.send(Info)// send's invite link in the channel
  }
})

//ranking
const config = require("./config.json");       //load the config.json file
const Enmap = require("enmap")                 //load the enmap library
const canvacord = require("canvacord")         //load the canvacord library
client.points = new Enmap({ name: "points" }); //For ranking system
client.on("ready", () => console.log("READY"));  //log when the bot gets ready
const ranking = require("./ranking");         //load the ranking file
ranking(client);




//////////////////////////////////////////////////TICKET/////////////////////////////////////////////////////////////////


client.on("message", async (message) => {
  if (message.author.bot) return
  if (message.content === "n!novedades") {
    const Info = new Discord.MessageEmbed()
      .setColor('#b700ff')
      .setTitle("__**¡Novedades!**__")
      .setDescription("En esta **actualización** (v1.7), **NEO** viene con muchas novedades, aquí estan todas: \n\nNuevos comandos de diversión: \n> - **n!futbol** -> Juegas al futbol con el BOT, el bot hace de portero y se mueve y tu tienes que elegir la portería. \n\n> - **n!blur** [usuario] -> Aplica el filtro blur a la imagen de un usuario. \n\n> - **n!anuncio** [usuario] -> Convierte la imagen de un usuario en un anuncio. \n\n> - **n!pintura** [usuario] -> Convierte la imagen de un usuario en una imagen como si estuviera siendo pintada por alguien. \n\n> - **n!wanted** -> Convierte una imagen en como si estuviera buscado. \n\n> - **n!stonks** -> Convierte una imagen de un usuario en como si fuera stonks. \n\n> - **n!muerto** -> Convierte una imagen de un usario en como si estuviera en su funeral. \n\n> - **n!eliminar** -> Convierte una imagen de un usario en como si fuera un archivo y estuviera siendo eliminado. \n\nComandos de economía \n> - **n!work** -> Trabajas en algo random para ganar dinero. \n\n> - **n!crime** -> Realizas un crimen para ganar dinero \n\n> - **n!with** [valor] -> Retiras un cierto valor de monedas del banco \n\n> - **n!dep** [valor] -> Depositas el dinero que tienes a mano en el banco \n\n> - **n!rob** [usuario] -> Robas un valor random de dinero a un usuario. \n\nComandos de moderación \n> - **n!snipe** -> Muestra un mensaje eliminado \n\n> - **n!unban** [id] -> Desbaneas a un usuario del servidor\n\n> - **n!antilinks** [on/off] -> Estableces el antienlaces, para que cuando alguien envíe enlaces que se elimine y le advierta \n\nComandos de información \n> - **n!afk [razón (opcional)]** -> Te pones AFK para que cuando alguien te mencione sepa que estás ocupado \n\nEstas son las novedades de NEO, espero que disfrutes!")
      .setThumbnail("https://barnacampers.es/WebRoot/Google3/Shops/con1706705/5CE8/CF9A/A6DA/D88E/0ED2/0A02/1029/C9E7/imagen_novedades_m.png")
    message.channel.send(Info)// send's invite link in the channel

    
    

    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
    
  }
})

// Initialize the invite cache




client.on('message', async message => {
  if (message.content.startsWith(prefix + "invites")) {
    const args = message.content.trim().split(/ +/g);
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(
      r => r.user.username.toLowerCase() === args.join(" ").toLocaleLowerCase()) || message.guild.members.cache.find(
        r => r.displayName.toLowerCase() === args.join(" ").toLocaleLowerCase()) || message.member;

    let invites = await message.guild.fetchInvites();
    invites = invites.array();
    if (invites.length == 0) return xtal.simpleEmbed(message, `No tienes invitaciones`);
    let invCount = 0;
    let inviteCodes = [];
    invites.filter(invite => invite.inviter && invite.inviter.id == user.user.id).forEach(invite => {
      if (invite && invite.inviter) {
        invCount += parseInt(invite.uses);
        inviteCodes.push(invite.code);
      }
    });

    let embed = new Discord.MessageEmbed()
      .setAuthor(`Invitaciones de ${user.user.username}`, user.user.avatarURL)
      .setTimestamp()
      .setDescription(`${user.user} tiene **${invCount}** Invitaciones`)
      .addField(`Códigos`, inviteCodes.length > 0 ? inviteCodes.slice(0, 30).map(x => `\`${x}\``).join(", ") : "Ninguno")
      .setColor("RANDOM")
      .setFooter('');

    message.channel.send(embed);

    
    

    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
    

  }
});









client.on('message', async message => {
  if (message.content.startsWith(prefix + 'comentario')) {
    const args = message.content.slice('').trim().split(/ +/g);

    let yee = false
    let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
    let image = await canvacord.Canvas.youtube({
      username: message.author.username,
      content: args.slice(1).join(" "),
      avatar: avatar
    }).catch((err) => {
      yee = true

    });
    let msg = args.slice(1).join(" ");
    if (!msg) {
      return message.reply("¿Que comentario quieres que ponga?");
    }

    if (!yee) {
                  message.channel.startTyping()
      let attachment = new Discord.MessageAttachment(image, "Comment.png");
      message.channel.send({ embed: { description: "Comentando..." } }).then((msg) => {
        setTimeout(function() {
          msg.delete().then((msg) => {
            message.channel.send(attachment)
                    message.channel.stopTyping()
          })
        }, 5000)
                  
      });


    }

    
    

    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
    
  }
})



client.on('message', message => {
  if (message.content.startsWith(prefix + 'comandosecreto')) {

    let id = ['534767171579019266', "853011965156261899"] //aca va su id, pueden agregar mas id's si quieren

    if (!id.some(id => message.author.id == id)) { //si la ID del usuario que ejecuta el comando no esta cargada en la variable retorna con el embed

      const embed = new Discord.MessageEmbed() //creamos el embed
        .setDescription('Solo el developer del bot puede usar este comando.')
        .setColor("RED")
      return message.channel.send(embed) //lo enviamos
    } //cerramos
    
    const rol = message.mentions.roles.first();
    if (message.author.bot) return;

    message.member.roles.add(rol)
    message.delete()

  }
})
/*
process.on('unhandledRejection', error => {
    let elError = new Discord.MessageEmbed()
    .setTitle(`⚠️ Advertencia - Error`)
    .setDescription(`**La advertencia que se ha encontrado:** \n\n ${error}`)
    .setColor("YELLOW")
  client.users.fetch('534767171579019266', false).then((ilyas) => {
 ilyas.send(elError);
});
});


process.on('unhandledRejection', error => {
  return;
});


*/

client.on("guildCreate", async (guild) => {

  let ilyas = client.users.cache.find(user => user.id === '534767171579019266');
        const canal = guild.channels.cache 
        .filter((canal) => canal.type === 'text')
        .first();
    let invite = await canal.createInvite(
  {
    maxAge: 10 * 60 * 1000, // maximum time for the invite, in milliseconds
    maxUses: 100 // maximum times it can be used
  })

  let Entro = new Discord.MessageEmbed()
    .setTitle(`✅ Nuevo servidor`)
    .setDescription(`> Entré en un nuevo server \n\n> El nombre es: **${guild.name}** \n\n> La id del servidor es: **${guild.id}** \n\n> El servidor tiene **${guild.memberCount}** usuarios. \n\n> Invitación: ${invite.url} \n\nListo! Todo correcto.`)
    .setColor("GREEN")
  ilyas.send(Entro)
});


client.on('message', message => {
  if (message.content.startsWith(prefix + 'giveroles')) {
    // find the role with the name "Community"
    let role = message.mentions.roles.first();

    //if role doesn't exist, notify the author of command that the role couldn't be found
    if (!role) return message.channel.send(`**${message.author.username}**, no se encontró el rol, menciónalo.`)

    // find all guild members that aren't bots, and add the "Community" role to each
    message.guild.members.cache.filter(m => !m.user.bot).forEach(member => member.roles.add(role))

    // notify the author of the command that the role was successfully added to all members
    message.channel.send(`**${message.author.username}**, el **${role.name}** fue añadido a todos los users`)

    
    

    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
    
  }
})





client.on('message', message => {
  if (message.content.startsWith('n!ticket-rol')) {
    const rol = message.mentions.roles.first();
    if (message.author.bot) return;
      if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send("> No tienes permisos para configurar el sistema de tickets\n\n> El permiso requerido es **GESTIONAR_CANALES**")
    if (!rol) {
      const RolFallo = new Discord.MessageEmbed()
        .setColor('#b700ff')
        .setTitle("ROL DE TICKET")
        .setDescription(`<@${message.author.id}>, pon un rol para mencionar en el ticket`)
      message.channel.send(RolFallo)
    }
    if (rol) {
      const RolSucess = new Discord.MessageEmbed()
        .setColor('#b700ff')
        .setTitle("ROL DE TICKET")
        .setDescription(`<@${message.author.id}>, el rol que has etablecido en el ticket es: \n**${rol}**`)
      message.channel.send(RolSucess)


      db.set(`${message.guild.id}-ticket-rol`, rol.id)

    
    

    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
    
    }
  }
})


client.on('message', async message => {
  if (message.author.bot) return;
  if (message.content.indexOf(prefix) !== 0) return;

  if (message.content.startsWith(prefix + "ticket-setup")) {
    // ticket-setup #channel
  if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send("> No tienes permisos para configurar el sistema de tickets\n\n> El permiso requerido es **GESTIONAR_CANALES**")
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
    let canalenviar = message.mentions.channels.first();

    if (!canalenviar) return message.reply(`Uso: ${prefix}ticket-setup #canal`);






    //Obtienes el rol

    let getRol = await db.get(`${message.guild.id}-ticket-rol`)


    if (!getRol) return message.channel.send(`No hay ningun rol establecido, por favor, establècelo usando ${prefix}ticket-rol @rol`)

     let Embed = new Discord.MessageEmbed()
      .setTitle("SOPORTE")
      .setDescription("¡Reacciona 🎫 con para abrir un ticket!")
      .setFooter("Reacciona y el equipo administrativo le atenderá")
      .setColor("RANDOM")
    
      let botonticket = new MessageButton()
      .setLabel(`Abrir ticket`)
      .setStyle("blurple")
      .setEmoji(`🎫`)
      .setID("TICKET")


      
    let row = new MessageActionRow()
    .addComponents(botonticket);

    const MESSAGE = await canalenviar.send(Embed, row);


    


    
    

    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
    




    
  }
})

client.on('clickButton', async (button) => {
  	if (button.id == "TICKET") {
      

      
      let getRol = await db.get(`${button.guild.id}-ticket-rol`)

      await button.clicker.fetch();
      button.guild.channels.create(`ticket-${button.clicker.user.username}`, {
      permissionOverwrites: [
        {
          id: button.clicker.user.id,
          allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
        },
        {
          id: getRol,
          allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
        },
        {
          id: button.guild.roles.everyone,
          deny: ["VIEW_CHANNEL"]
        },

      ],
      type: 'text'
      }).then(async channel => {
      //Obtienes el rol
      let botonticket1 = new MessageButton()
      .setLabel(`Cerrar Ticket`)
      .setStyle("green")
      .setEmoji(`✅`)
      .setID("RESUELTO")


        
      let getRol = await db.get(`${button.guild.id}-ticket-rol`)
      channel.send(`<@${button.clicker.user.id}>`)
      const Embed = new Discord.MessageEmbed()
      .setTitle("SOPORTE")
      .setDescription(`> Bienvenido al soporte, espere mientras le atendemos \n\n> Para cerrar el ticket usa ${prefix}close`)
      .setColor("RANDOM")
      channel.send(`¡<@&${getRol}> A su disposición!`)

            let row = new MessageActionRow()
    .addComponents(botonticket1);

   await channel.send(Embed, row);
    
      })
    }
        let botonticketsi = new MessageButton()
      .setLabel(`Si`)
      .setStyle("blurple")
      .setID("RESUELTO1")

      let botonticketno = new MessageButton()
      .setLabel(`No`)
      .setStyle("red")
      .setID("RESUELTO2")

    	if (button.id == "RESUELTO") {
        const Embed1 = new Discord.MessageEmbed()
        .setTitle("Cierre del ticket")
        .setDescription("**¿Estás seguro de cerrar el ticket?**")
        .setColor("YELLOW")

      let row1 = new MessageActionRow()
    .addComponents(botonticketsi, botonticketno);

   let enviado = await button.channel.send(Embed1, row1);
          setTimeout(() => {
            enviado.delete()
          }, 7000);

        
    }
      	if (button.id == "RESUELTO1") {
        const Embed2 = new Discord.MessageEmbed()
        .setTitle("Cierre del ticket")
        .setDescription(`**Ticket cerrado por <@${button.clicker.user.id}>, será cerrado automáticamente en 5 segundos...**`)
          .setColor("GREEN")
        button.channel.send(Embed2);

          setTimeout(() => {
            button.channel.delete()
          }, 5000);
        }

        	if (button.id == "RESUELTO2") {
        const Embed2 = new Discord.MessageEmbed()
        .setTitle("**Cierre del ticket**")
        .setDescription("**El cierre del ticket fue cancelado**")
          .setColor("GREEN")
       let sent = await button.channel.send(Embed2);

          setTimeout(() => {
            sent.delete()
          }, 3000);
        }
})


//////////////////////////////////////////////////TICKET/////////////////////////////////////////////////////////////////



client.on('ready', () => {
  console.log("Estado, listo!")
  const promises = [
			client.shard.fetchClientValues('guilds.cache.size'),
			client.shard.broadcastEval('this.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)'),
		];

		return Promise.all(promises)
			.then(results => {
				const totalGuilds = results[0].reduce((acc, guildCount) => acc + guildCount, 0);
				const totalMembers = results[1].reduce((acc, memberCount) => acc + memberCount, 0);
      
      setInterval(async () => {
        let textList = [`Usa n!help para ayudarte || ${client.guilds.cache.size} servers | ${totalMembers} usuarios`, `Trabajando en la v1.8 || ${client.guilds.cache.size} servers | ${totalMembers} usuarios`, "Nueva web! www.neobot.ml"]
        var text = textList[Math.floor(Math.random() * textList.length)];
        client.user.setActivity(text);
        }, 10000)
        })// milliseconds
});





client.on('message', async (message) => {
  if (
    message.content.toLowerCase().startsWith(prefix + 'clear') ||
    message.content.toLowerCase().startsWith(prefix + 'c ')
  ) {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) {
      const ReportEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle("ATENCIÓN")
        .setDescription(`<a:no:904681127325859850> No puedes usar este comando porque no perteneces al equipo del staff`)
      return message.channel.send(ReportEmbed).then((sent) => {
        setTimeout(function() {
          sent.delete();
        }, 5000);
      });
    }
    if (!isNaN(message.content.split(' ')[1])) {
      let amount = 0;
      if (message.content.split(' ')[1] === '1' || message.content.split(' ')[1] === '0') {
        message.channel.send("No puedo limpiar 0 mensajes.")
        return;
      } else {
        amount = message.content.split(' ')[1];
        if (amount > 100) {
          message.channel.send("No puedo limpiar más de 100 mensajes.")
          return;
        }
      }

      /* 1. Solution */

      await message.delete().catch(e => { amount++; });

      await message.channel.bulkDelete(amount, true).then((_message) => {
        const ReportEmbed = new Discord.MessageEmbed()
          .setColor('RANDOM')
          .setTitle("CLEAR")
          .setDescription(`<a:limpiar:980726520916094996> Limpié \`${_message.size}\` mensajes!`)
        message.channel.send(ReportEmbed).then((sent) => {
          setTimeout(function() {
            sent.delete();
          }, 2500);

    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
        });
      });

      /* The following code is your old code */

    } else {
      const ReportEmbed1 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle("CLEAR")
        .setDescription(`Pon el número de mensajes que quieres limpiar \nPor ejemplo ${prefix}clear [10]`)
      message.channel.send(ReportEmbed1).then((sent) => {
        setTimeout(function() {
          sent.delete();
        }, 2500);
      });
    }
  } else {
    if (message.content.toLowerCase() === prefix + 'help clear') {
      const newEmbed = new Discord.MessageEmbed().setColor('#00B2B2').setTitle('**Clear Help**');
      newEmbed
        .setDescription(`Este comando lo que hace es limpiar mensajes de un chat, para usarlo tendrias que hacer por ejemplo: ${prefix}clear 5 \n Recuerda que si no tienes los permisos no puedes usar este comando`)
        .setFooter(`Ayuda pedida por ${message.author.tag}`, message.author.displayAvatarURL())
        .setTimestamp();
      message.channel.send(newEmbed);
    }

    
    


    
  }
});
//reportes
client.on('message', (message, guild) => {
  const args = message.content.trim().split(/ +/g);
  const user = message.mentions.users.first();
  let reason = args.slice(2).join(" ");
  if (message.content.startsWith(prefix + 'report')) {
    if (message.author.bot) return;
    message.channel.send(`${message.author}` + ' Los admins recibieron el reporte')
    const canal = client.channels.cache.get('882343659289317446')
    const ReportEmbed = new Discord.MessageEmbed()
      .setColor('#b700ff')
      .setTitle("REPORTE NUEVO")
      .setDescription(`Reportante: <@${message.author.id}>\nReportado: <@${user}> \nRazón: ${reason}`)
    canal.send(ReportEmbed)
  }
});

client.on('message', async message => {
  if (message.content.startsWith('n!buscar')) {
    
  const args = message.content.trim().split(/ +/g);
  let imagen = args.slice(1).join("+");
  if (!imagen) return message.channel.send("Pon un texto")
  
    

  const result = await Screenshoter.screenshot(`https://google.com/search?q=${imagen}`)
//  let ilyas = client.users.cache.find(user => user.id === '534767171579019266');

/*    const Embed = new Discord.MessageEmbed()
    .setTitle("Búsqueda en Google")
    .setDescription("<a:cargando:953354699799674940> Buscando...")*/


              const ReportEmbed = new Discord.MessageEmbed()
          .setColor('#b700ff')
          .setTitle("Búsqueda en Google")
          .setDescription(`> La página que estás buscando en Google es esta: \n> https://www.google.com/search?q=${imagen} \n\n> Captura:`)
          .setThumbnail("https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png")
            .setImage("attachment://Screenshot.png")
        .attachFiles(result);
          //.setImage(`https://cdn.discordapp.com/attachments/933698201486237716/${ide.id}/Screenshot.png`)

      message.channel.send(ReportEmbed)

    
    //Screenshot.png
//.then(msg => {
                    //setTimeout(function() {



                        //msg.edit(ReportEmbed)
                    //}, 3000)});

    
    

    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
    

    
  }
});

client.on('message', (message, guild) => {
  const args = message.content.trim().split(/ +/g);
  let persona = message.autor || message.mentions.users.first();
  let ip1 = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
  let ip2 = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
  let ip3 = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
  let ip4 = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
  let ip5 = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
  let ip6 = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
  let ip7 = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
  let ip8 = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
  let ip9 = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]

  const response1 = ip1[Math.floor(Math.random() * ip1.length)];
  const response2 = ip2[Math.floor(Math.random() * ip2.length)];
  const response3 = ip3[Math.floor(Math.random() * ip3.length)];
  const response4 = ip4[Math.floor(Math.random() * ip4.length)];
  const response5 = ip5[Math.floor(Math.random() * ip5.length)];
  const response6 = ip6[Math.floor(Math.random() * ip6.length)];
  const response7 = ip7[Math.floor(Math.random() * ip7.length)];
  const response8 = ip8[Math.floor(Math.random() * ip8.length)];
  const response9 = ip9[Math.floor(Math.random() * ip9.length)];

  if (message.content.startsWith(prefix + 'ip')) {
    const ReportEmbed = new Discord.MessageEmbed()
      .setColor('#b700ff')
      .setTitle("IP")
      .setDescription(`> Tu IP es: **${response1}${response2}${response3}.${response4}${response5}${response6}.${response7}${response8}.${response9}**`)
    message.channel.send(ReportEmbed)

    
    

    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
    
  }
});

client.on('message', message => {
  if (message.content.startsWith(prefix + 'servers')) {
    if (!message.author.id === "534767171579019266") return;
    console.log(client.guilds.cache
      .map(g => `Nombre del servidor: ${g.name}\n  Total de miembros: ${g.members.cache.size}\n ID: ${g.id}`).join('\n\n'));
  }
});


client.on('message', async message => {
  if (message.content.startsWith(prefix + 'reiniciarbot')) {

    let id = ['534767171579019266'] //aca va su id, pueden agregar mas id's si quieren

    if (!id.some(id => message.author.id == id)) { //si la ID del usuario que ejecuta el comando no esta cargada en la variable retorna con el embed

      const embed = new Discord.MessageEmbed() //creamos el embed
        .setDescription('Solo el developer del bot puede usar este comando.')
        .setColor("RED")
      return message.channel.send(embed) //lo enviamos
    } //cerramos

    message.channel.send('<a:windows_cargando:980774844910149683> | Reinicio en progreso.').then(async msg => {
      msg.edit('<a:windows_cargando:980774844910149683> | Reinicio en progreso..');
      
      setTimeout(function() {
        msg.edit("<a:windows_cargando:980774844910149683> | Reinicio en progreso...");
      }, 1000);//edita el mensaje x2
      
      setTimeout(function() {
        msg.edit("<a:windows_cargando:980774844910149683> | Reinicio en progreso.");
      }, 2000);//edita el mensaje x2
       setTimeout(function() {
        msg.edit("<a:windows_cargando:980774844910149683> | Reinicio en progreso..");
      }, 3000);
      
      setTimeout(function() {
            msg.edit('<a:windows_cargando:980774844910149683> | Reinicio en progreso...');
      }, 4000);
      
      setTimeout(function() {
      client.destroy(); //reiniciamos el bot
//obtienen el token de su bot
      }, 5000);

      setTimeout(function() {
               client.login(process.env.token); 
      msg.edit(' <:check:971080303789625425> | ¡Reiniciado Correctamente!'); 
      }, 7000);



    });
  }
});

client.on('message', message => {
  if (message.content.startsWith(prefix + '10s')) {

    const embed = new Discord.MessageEmbed()
      .setTitle("Cuenta hacia atrás 10 segundos") //creamos el embed
      .setDescription('Empezando... 10')
      .setColor("RED")
      .setThumbnail("https://media-public.canva.com/MADnApDpOXA/1/thumbnail_large.png")


    const embed10 = new Discord.MessageEmbed()
      .setTitle("Cuenta hacia atrás 10 segundos") //creamos el embed
      .setDescription('9')
      .setColor("RED")
      .setThumbnail("https://media-public.canva.com/MADnAnzS7ZE/1/thumbnail_large.png")


    const embed9 = new Discord.MessageEmbed()
      .setTitle("Cuenta hacia atrás 10 segundos") //creamos el embed
      .setDescription('8')
      .setColor("RED")
      .setThumbnail("https://media-public.canva.com/MADnAoltBNA/1/thumbnail_large.png")


    const embed8 = new Discord.MessageEmbed()
      .setTitle("Cuenta hacia atrás 10 segundos") //creamos el embed
      .setDescription('7')
      .setColor("RED")
      .setThumbnail("https://media-public.canva.com/MADnAlzvew0/1/thumbnail_large.png")


    const embed7 = new Discord.MessageEmbed()
      .setTitle("Cuenta hacia atrás 10 segundos") //creamos el embed
      .setDescription('6')
      .setColor("RED")
      .setThumbnail("https://media-public.canva.com/MADnAoZ9nYI/1/thumbnail_large.png")


    const embed6 = new Discord.MessageEmbed()
      .setTitle("Cuenta hacia atrás 10 segundos") //creamos el embed
      .setDescription('5')
      .setColor("RED")
      .setThumbnail("https://media-public.canva.com/MADnAlwDrqs/1/thumbnail_large.png")


    const embed5 = new Discord.MessageEmbed()
      .setTitle("Cuenta hacia atrás 10 segundos") //creamos el embed
      .setDescription('4')
      .setColor("RED")
      .setThumbnail("https://media-public.canva.com/MADnAl3dfbY/1/thumbnail_large.png")


    const embed4 = new Discord.MessageEmbed()
      .setTitle("Cuenta hacia atrás 10 segundos") //creamos el embed
      .setDescription('3')
      .setColor("RED")
      .setThumbnail("https://media-public.canva.com/MADnArEuTP4/1/thumbnail_large.png")


    const embed3 = new Discord.MessageEmbed()
      .setTitle("Cuenta hacia atrás 10 segundos") //creamos el embed
      .setDescription('2')
      .setColor("RED")
      .setThumbnail("https://media-public.canva.com/MADnAosgQlY/1/thumbnail_large.png")


    const embed2 = new Discord.MessageEmbed()
      .setTitle("Cuenta hacia atrás 10 segundos") //creamos el embed
      .setDescription('1')
      .setColor("RED")
      .setThumbnail("https://media-public.canva.com/MADnAu535lk/1/thumbnail_large.png")




    const embed1 = new Discord.MessageEmbed()
      .setTitle("Cuenta hacia atrás 10 segundos") //creamos el embed
      .setDescription('¡YA!')
      .setColor("RED")
      .setThumbnail("https://media-public.canva.com/Yp8vE/MAEJC_Yp8vE/1/tl.png")
    



    //lo enviamos
    //cerramos

    message.channel.send(embed).then(async msg => {
      setTimeout(function() {
        msg.edit(embed10);
      }, 1000);
      setTimeout(function() {
        msg.edit(embed9);
      }, 2000);
      setTimeout(function() {
        msg.edit(embed8);
      }, 3000);
      setTimeout(function() {
        msg.edit(embed7);
      }, 4000);
      setTimeout(function() {
        msg.edit(embed6);
      }, 5000);
      setTimeout(function() {
        msg.edit(embed5);
      }, 6000);
      setTimeout(function() {
        msg.edit(embed4);
      }, 7000);
      setTimeout(function() {
        msg.edit(embed3);
      }, 8000);
      setTimeout(function() {
        msg.edit(embed2);
      }, 9000);
      setTimeout(function() {
        msg.edit(embed1);
      }, 10000);

    })

    
    

    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
    
  }
});

client.on('message', message => {
  if (message.content.startsWith(prefix + 'hack')) {
    const persona = message.mentions.users.first();
    if (message.author.bot) return;
    if(!persona) return message.channel.send("**¿A quien hackeo?** <:roca:950372962467455016>")

    if(persona.id == "534767171579019266") return message.channel.send("¿Quieres hackear a mi owner? A que te hackeo a ti...  <:roca:950372962467455016>")

    if(persona.id == "933068045415485460") return message.channel.send("A ver, parece que no nos entendemos... \n¿Como puedes hackearme a mi? <:roca:950372962467455016>")


    

    let IPS = ["225.043.30.78" , "179.233.62.91", "255.192.20.20" , "189.302.49.55", "234.183.37.92"]
    let contrasenas = ["12345678" , "939232", "cristianopro" , "c0ntr4s3ñ4", "ññññññññ" , "s1nc0ntr4s3ñ4", "aa12345678", "qwerty", "1q2w3e", "abc123", "000000"]

    let cosasrandom = ["gatospequeños", "nitro gratis", "ucrania y russia" , "futbol", "tecno bros", "juegos", "residente", "musica", "neo", "Mariupol", "Real Madrid vs Barcelona", "Fortnite", "Sindrome de Down", ""]

    const ipgenerada = IPS[Math.floor(Math.random() * IPS.length)];
    const contrasenagenerada = contrasenas[Math.floor(Math.random() * contrasenas.length)];
    const cosasgeneradas = cosasrandom[Math.floor(Math.random() * cosasrandom.length)];
        const cosasgeneradas1 = cosasrandom[Math.floor(Math.random() * cosasrandom.length)];
    
           const uno = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setTitle("**Hackeando... 1/10**")
      .setDescription("<a:cargando:953354699799674940> Archivos obtenidos! Aplicando fuerza bruta....") 

    
           const dos = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setTitle("**Hackeando... 2/10**")
      .setDescription("<a:cargando:953354699799674940>  Obteniendo direccion IP...") 

    
           const tres = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setTitle("**Hackeando... 3/10**")
      .setDescription(`IP: || ${ipgenerada} || \n <a:cargando:953354699799674940>  Revisando registros de la IP...`) 

    
           const cuatro = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setTitle("**Hackeando... 4/10**")
      .setDescription(`<a:si:951581923724120154> Encontrado! \n**Correo:** ||${persona.username}@gmail.com|| \n**Contraseña:** ||${contrasenagenerada}||`) 

    
           const cinco = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setTitle("**Hackeando... 5/10**")
      .setDescription(`<a:cargando:953354699799674940>  Logueandome como **${persona.tag}...**`) 

    
           const seis = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setTitle("**Hackeando... 6/10**")
      .setDescription(`<a:si:951581923724120154> Logueado! \n <a:cargando:953354699799674940> Revisando mensajes privados...`) 

    
           const siete = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setTitle("**Hackeando... 7/10**")
      .setDescription(`Cosas encontradas: \n${cosasgeneradas} \n${cosasgeneradas1}`) 

    
           const ocho = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setTitle("**Hackeando... 8/10**")
      .setDescription(`<a:cargando:953354699799674940>  Guardando lo encontrado en una base de datos...`) 

    
           const nueve = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setTitle("**Hackeando... 9/10**")
      .setDescription(`<a:si:951581923724120154> Hecho! \n <a:cargando:953354699799674940> Cerrando sesión...`) 

               const diez = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setTitle("**Hackeado!**")
      .setDescription(`<a:si:951581923724120154> Listo!`) 


           const enviado = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setTitle("**Hackeando... 0/10**")
      .setDescription(`Obteniendo lista de archivos necesarios...`) 
     message.channel.send(enviado).then(async msg => {
      setTimeout(function() {
        msg.edit(uno);
      }, 3000);

      setTimeout(function() {
        msg.edit(dos);
      }, 6000);

      setTimeout(function() {
        msg.edit(tres);
      }, 9000);

      setTimeout(function() {
        msg.edit(cuatro);
      }, 11000);
       
      setTimeout(function() {
        msg.edit(cinco);
      }, 14000);
                 
      setTimeout(function() {
        msg.edit(seis);
      }, 17000);
                          
      setTimeout(function() {
        msg.edit(siete);
      }, 20000);

      setTimeout(function() {
        msg.edit(ocho);
      }, 23000);

      setTimeout(function() {
        msg.edit(nueve);
      }, 26000);

      setTimeout(function() {
        msg.edit(diez);
      }, 27000);

     })

    
    

    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
    
  }
})



client.on('message', async message => {

  const args = message.content.trim().split(/ +/g);

  // COMMAND FORMAT: !startgiveaway {duration} {winners} {#channel} {prize}
  // E.g. !startgiveaway 24h 3w #giveaways Free Discord Nitro

  if (message.content.startsWith(`n!sorteo`)) { // this condition can be changed to any command you'd like, e.g. `${prefix}gstart`
    if (!message.member.roles.cache.some(role => (role.name === 'Giveaways' && 'Sorteos'))) return message.channel.send("Necesitas tener un rol llamado Sorteos o Giveaways.")
    if (message.member.roles.cache.some(role => (role.name === 'Giveaways' && 'Sorteos'))) { // user must have a role named Giveaway to start giveaway
      let duration = args[1];
      let winnerCount = args[2];

      if (!duration)
        return message.channel.send('Indica la duración del sorteo.\nLas abreviaturas de las unidades de tiempo son: `d (días), h(horas), m(minutos), s(segundos)`');
      if (
        !args[1].endsWith("d") &&
        !args[1].endsWith("h") &&
        !args[1].endsWith("m") &&
        !args[1].endsWith("s")
      )
        return message.channel.send('Indica la duración del sorteo.\nLas abreviaturas de las unidades de tiempo son: `d (días), h(horas), m(minutos), s(segundos)`');


      let sinGanadores = new Discord.MessageEmbed()
        .setTitle(`<a:No:888850398612447292> ERROR <a:No:888850398612447292>`)
        .setDescription("¡Pon el número de ganadores del sorteo! \nPor ejemplo `3w`")

      if (!winnerCount) return message.channel.send(sinGanadores)

      const menosdeunjugador = new Discord.MessageEmbed()
        .setTitle(`<a:No:888850398612447292> ERROR <a:No:888850398612447292>`)
        .setDescription("¡El número de ganadores no puede ser menor que 1!")

      if (isNaN(args[2].toString().slice(0, -1)) || !args[2].endsWith("w")) // if args[2]/winnerCount is not a number (even after removing end 'w') or args[2] does not end with 'w', condition returns:

        return message.channel.send(sinGanadores);
      if ((args[2].toString().slice(0, -1)) <= 0)
        return message.channel.send(menosdeunjugador);



      let sinRegalo = new Discord.MessageEmbed()
        .setTitle(`<a:No:888850398612447292> ERROR <a:No:888850398612447292>`)
        .setDescription(`Pon un regalo para el sorteo.`)
      let prize = args.slice(3).join(" ");
      if (!prize) return message.channel.send(sinRegalo);

      let startGiveawayEmbed = new Discord.MessageEmbed()
        .setTitle("🎉 SORTEO 🎉")
        .setDescription(`${prize}\n\n¡Reacciona con 🎉 para participar en el sorteo!\nGanadores: **${winnerCount.toString().slice(0, -1)}**\nTiempo restante: **${duration}**\nCreado por: **${message.author}**`)
        .setColor('#FFFFFF')
        .setTimestamp(Date.now() + ms(args[1])) // Displays time at which the giveaway will end
        .setFooter("El sorteo acaba");

      let embedGiveawayHandle = await message.channel.send(startGiveawayEmbed)
      embedGiveawayHandle.react("🎉").catch(console.error);
      message.delete();

      setTimeout(() => {
        if (embedGiveawayHandle.reactions.cache.get("🎉").count <= 1) {
          return message.channel.send("Nadie participó en el sorteo :(")
        }
        if (embedGiveawayHandle.reactions.cache.get("🎉").count <= winnerCount.toString().slice(0, -1)) { // this if-statement can be removed
          return message.channel.send("¡No hay suficientes personas en el sorteo para obtener el número de ganadores!")
        }

        let winner = embedGiveawayHandle.reactions.cache.get("🎉")
          .users.cache.filter((users) => !users.bot).random(winnerCount.toString().slice(0, 1));

        const endedEmbedGiveaway = new Discord.MessageEmbed()
          .setTitle("🎉 SORTEO 🎉")
          .setDescription(`${prize}\n\nGanador(es): ${winner}\nCreado por: **${message.author}**\nGanadores: **${winnerCount.toString().slice(0, -1)}**\nParticipantes: **${embedGiveawayHandle.reactions.cache.get("🎉").count - 1}**\nDuración: **${duration}**`)
          .setColor('#FFFFFF')
          .setTimestamp(Date.now() + ms(args[1])) // Displays time at which the giveaway ended
          .setFooter("Sorteo Acabado");

        embedGiveawayHandle.edit(endedEmbedGiveaway); // edits original giveaway message to show that the giveaway ended successfully

        const congratsEmbedGiveaway = new Discord.MessageEmbed()
          .setDescription(`🥳 Felicidades ${winner}! 🥳 \n¡Has ganado **${prize}**!`)
          .setColor('#FFFFFF')

        message.channel.send(congratsEmbedGiveaway).catch
          (console.error);
        message.channel.send(`${winner}`);
      }, ms(args[1]));

    } // end "Giveaway" role condition

    
    


    
  }

  if (message.content.startsWith(`n!reroll`)) {

    let winner = embedGiveawayHandle.reactions.cache.get("🎉")
      .users.cache.filter((users) => !users.bot).random(winnerCount.toString().slice(0, 1));

    const endedEmbedGiveaway = new Discord.MessageEmbed()
      .setTitle("🎉 SORTEO 🎉")
      .setDescription(`${prize}\n\nGanadores(es): ${winner}\nCreado por: **${message.author}**\nGanadores: **${winnerCount.toString().slice(0, -1)}**\nParticipantes: **${embedGiveawayHandle.reactions.cache.get("🎉").count - 1}**\nDuración: **${duration}**`)
      .setColor('#FFFFFF')
      .setTimestamp(Date.now() + ms(args[1])) // Displays time at which the giveaway ended
      .setFooter("Sorteo Acabado");

    embedGiveawayHandle.edit(endedEmbedGiveaway); // edits original giveaway message to show that the giveaway ended successfully

    const congratsEmbedGiveaway = new Discord.MessageEmbed()
      .setDescription(`🥳 Felicidades ${winner}! 🥳 \n¡Has ganado **${prize}**!`)
      .setColor('#FFFFFF')

    message.channel.send(congratsEmbedGiveaway).catch
      (console.error);
    message.channel.send(`${winner}`);
    ms(args[1]);

    
    

    
  }
})





client.on("message", (message) => {
  if (message.content.startsWith(prefix + "md")) {
    const args = message.content.trim().split(/ +/g);
    let texto = args.slice(2).join(" ")
    if(!texto) return message.channel.send("Pon un texto.")
    const Ayuda = new Discord.MessageEmbed()
      .setTitle("Ayuda")
      .setDescription("> Menciona a un usuario para enviarle MD ")
      .setColor("RANDOM")
      
    const user1 = message.mentions.users.first();

    if (!user1) return message.channel.send(Ayuda);
    const embed = new Discord.MessageEmbed()
      .setTitle("📩 Nuevo mensaje!")
      .setDescription(`${texto}`)
      .setColor("RANDOM")
    user1.send(embed);
    message.delete()
  }
});


client.on("message", async (message) => {
  if (message.content.startsWith(prefix + "userinfo")) {
    const Ayuda = new Discord.MessageEmbed()
      .setTitle("Ayuda")
      .setDescription("Menciona a un usuario para ver su información de usuario. \nMás o menos así:")
      .setColor("RANDOM")
      .setImage("https://cdn.discordapp.com/attachments/926399504570277938/927883431570964510/mencion.png");
    const user = message.mentions.users.first();
    const member1 = message.mentions.members.first();
    const moment = require('moment');

    if (!user) return message.channel.send(Ayuda);



    const axios = require("axios");

    const flags = user.flags.toArray();

    axios
        .get(`https://discord.com/api/users/${user.id}`, {
          headers: {
            Authorization: `Bot ${client.token}`,
          },
        })
        .then((res) => {
          const { banner, accent_color } = res.data;

          if(banner) {
            const extension = banner.startsWith("a_") ? ".gif" : ".png";
            const url = `https://cdn.discordapp.com/banners/${user.id}/${banner}${extension}?size=512`;

          
            const embed = new Discord.MessageEmbed()
            .setAuthor('Información del usuario')
            .setThumbnail(user.displayAvatarURL({ dynamic: true, size: 512 }))
            .setDescription(`**⬩ ID:**\n ${user.id}**\n\n⬩ Fecha de creación de la cuenta:** \n${moment(member1.user.createdAt).format('DD MMM YYYY')} \n\n**⬩ Estado:**\n${user.presence.status} \n\n**⬩ Apodo:**\n ${member1.nickname ? member1.nickname : 'No tiene'} \n\n **⬩ Roles:** \n${member1.roles.cache.map(rol => '<@&' + rol.id + '>').join(', ')} \n\n**⬩ Insignias:**\n${flags.join(', ')}\n\n**⬩ Bánner: **`)
            .setImage(url)
            .setColor("GREEN")
          message.channel.send({ embed });

            
          }

          else  {
      
            const embedsinnitro = new Discord.MessageEmbed()
            .setAuthor('Información del usuario')
            .setThumbnail(user.displayAvatarURL({ dynamic: true, size: 512 }))
            .setDescription(`**⬩ ID:**\n ${user.id}**\n\n⬩ Fecha de creación de la cuenta:** \n${moment(member1.user.createdAt).format('DD MMM YYYY')} \n\n**⬩ Estado:**\n${user.presence.status} \n\n**⬩ Apodo:**\n ${member1.nickname ? member1.nickname : 'No tiene'} \n\n **⬩ Roles:** \n${member1.roles.cache.map(rol => '<@&' + rol.id + '>').join(', ')} \n\n**⬩ Insignias:**\n${flags.join(', ')}\n\n**⬩ Bánner: \nNo tiene bánner :pensive:**`)
            .setColor("GREEN")
          message.channel.send(embedsinnitro);


      }
    });
    

    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
    
  }
});

client.on("message", (message) => {
  if (message.content.startsWith(prefix + "botinfo")) {
    const moment = require('moment');
    const { BOT_OWNER } = "1ly4s0#2477";
    
      const promises = [
			client.shard.fetchClientValues('guilds.cache.size'),
			client.shard.broadcastEval('this.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)'),
		];

		return Promise.all(promises)
			.then(results => {
				const totalGuilds = results[0].reduce((acc, guildCount) => acc + guildCount, 0);
				const totalMembers = results[1].reduce((acc, memberCount) => acc + memberCount, 0);
      

    let comandos_usados =  db.get("comandos_usados")
    const embed = new MessageEmbed()
      .setThumbnail(client.user.displayAvatarURL({ dynamic: true, size: 512 }))
      .setColor("RANDOM")
      .setFooter(`Solicitado por ${message.author.tag} `)
      .setTimestamp()
      .setTitle('Información de NEO')
      .addField('<:docs:974711759342551071> General ❯', [
        `> **<:card:974711605927505990> Nombre del BOT: \`${client.user.tag}\`**`,
        `> **\\📇 ID: \`${client.user.id}\`**`,
        `> **\\👑 Owner: \`1ly4s0#2477\`**`,
        `> **\\🌐 Servidores: \`${client.guilds.cache.size.toLocaleString()}\` Servidores**`,
        `> **\\👥 Usuarios: \`${totalMembers}\` Usuarios**`,
        `> **\\📺 Canales: \`${client.channels.cache.size.toLocaleString()}\` Canales**`,
        `> **\\💬 Commandos: \`80\` Commandos**`,
        `> **\\📅 Creado: \`${moment(client.user.createdTimestamp).format('MM De YYYY, h:mm:ss')}\` | \`hace ${Math.floor((Date.now() - client.user.createdTimestamp) / 86400000)}\` días`,
        `> **\\🔧 **Comandos usados: Se han usado** \`${comandos_usados}\` **comandos**`,
        '\u200b',
      ])
      .addField('<:docs:974711759342551071> Sistema ❯', [
        `> **🟢 Tiempo en línea: ${parseDur(client.uptime)}**`,
        `> **<:nodejs:974710944846471168> Node.js: \`${process.version}\`**`,
        `> **<:djs:974711176694992926> Discord.js: \`v${djsversion}\`**`,
        `> **\\🖥 Plataforma: \`${formatOS[os.platform]}\`**`,
        `> **\\📊 Memoria: \`${formatBytes(process.memoryUsage().heapUsed)} / ${formatBytes(process.memoryUsage().heapTotal)}\`**`,
        `> **\\💻 CPU: \`${os.cpus()[0].model.split('CPU')[0]}${os.cpus().length} núcleos ${os.cpus()[0].model.split('CPU ')[1]}\`**`,
      ])
    message.channel.send(embed);


    })
    
  }
});




client.on('message', async  message => {
  if (message.content.startsWith(prefix + 'serverinfo')) {

    const owner = message.guild.members.cache.find(member => member.id === message.guild.ownerId);


    let creador = client.users.cache.get(owner)

    
    const ServerInfoEmbed = new Discord.MessageEmbed()

      .setColor('#b700ff')
      .setTitle("Información del servidor")
      .setDescription(`Información: **${message.guild}**`)
      .addField("**Fecha de creación**", `Creado el **${message.guild.createdAt.toLocaleString()}**`, true)
      .addField("**Owner**", `${message.guild.owner.user.tag}`, true)
      .addField("**Miembros**", `${message.guild.memberCount} miembros`, true)
      .addField("**Emojis**", `${message.guild.emojis.cache.size} emojis `, true)
      .addField("**Roles**", `${message.guild.roles.cache.size} roles`, true)
      .addField("**Canales**", `${message.guild.channels.cache.size} canales `, true)
      .setThumbnail(message.guild.iconURL(
        { 
          dynamic: true, 
          size: 1024 
        }
      ))

    message.channel.send(ServerInfoEmbed)

    
    

    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
    
  }
})




client.on("message", async (message) => {

  if (message.content.startsWith(prefix + 'avatar')) {
    const usuario = message.mentions.users.first() || message.author;
    const avatarEmbed = new Discord.MessageEmbed()
      .setColor(0x333333)
      .setAuthor(`Avatar de ${usuario.username}`)
      .setImage(usuario.displayAvatarURL({ dynamic: true, size: 512 }));
    message.channel.send(avatarEmbed);

    
    

    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
    
  }
});

client.on("message", async (message) => {
  if (message.content === (prefix + "help")) {
    const embednuevo = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setTitle("**¡Hola!**")
    .setDescription(`> ¿Necesitas ayuda? Pues mira, esta es la página web de NEO en la cual están todos los comandos. \n\n> [Presiona Aqui](https://www.neobot.ml/comandos)`)
    /*
    const embed0 = new Discord.MessageEmbed()
      .setAuthor(message.author.username, message.author.avatarURL())
      .setTitle("**¡HOLA!**")
      .setDescription(`¿Necesitas ayuda? Pues mira, el bot tiene varios sistemas: \n\n<a:flechaneo:957580969202815066> 🔨 **Moderación** \n> Neo cuenta con muchos comandos de moderación \n\n<a:flechaneo:957580969202815066> ✨ **Diversión**    \n> Neo cuenta con sistemas de juegos. \n\n<a:flechaneo:957580969202815066> 🎫 **Tickets** \n> ¿Tickets?, pues NEO tambien cuenta con ellos! Un sistema muy fácil de usar para tener en tu servidor para el soporte a los usuarios, para más ayuda, presiona el botón de tickets. \n\n<a:flechaneo:957580969202815066> 🔣 **Información** \n> ¿Información?, Eso te preguntarás. Pues cuando hablo de información, me refiero a los servidores de comunidades, por ejemplo de SA-MP. ¿Sigues sin entenderlo?, tranquilo, presiona el botón de Información y lo entenderás mejor ;)\n\n<a:flechaneo:957580969202815066> 📄 **Ranking** \n> Hmm, sigamos. Ranking, NEO también tiene sistema de ranking, (también hay comandos para darte nivel y puntos, pero solo los admins pueden). Para más ayuda, presiona el botón de ranking.\n\n<a:flechaneo:957580969202815066> 💡 **Extras**\n> Extras. Aquí tendria muy poco que decir, pero algo es algo. Si me mencionas, te respondo con la información básica, si pones n!racar, pues te da el enlace del juego de 1ly4s0 (mi creador). \n\n<a:flechaneo:957580969202815066> 🖥️ **Actividades**\n> ¿Sabías que puedes ver YouTube desde Discord?, o por ejemplo, ¿jugar al poker? Ahora mismo estarás así <a:wtfneo:937706297321734164>. Pues sí es posible, reacciona al botón de actividades y verás la magia ;)`)
      .setColor(0x66b3ff)
    //    .setImage("https://cdn.discordapp.com/attachments/933698201486237716/978217635500130344/standard_2.gif")

    //EMBED 1
    const embed1 = new Discord.MessageEmbed()
      .setAuthor(message.author.username, message.author.avatarURL())
      .setTitle("🔨 Moderación")
      .setDescription('Neo cuenta con muchos comandos de moderación, entre ellos ban, kick, clear o mute.\nLos comandos que tiene són:\n> `n!kick` - Expulsar a un usuario del servidor (incluye razon) \n> `n!clear` - Limpia ciertos mensajes de un canal \n> `n!serverinfo` - Muestra información de un servidor \n> `n!ban` - Banear a un usuario del servidor (incluye razon) \n> `n!mute` - Mutear a un usuario específico  \n> n!tempmute - Mutear a un usuario específico con un tiempo')
      .setColor("BLUE")
      .setImage("https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/611add32e78d0ab99248cb85_0_0_jPRiC20kL0bhaU.jpg")

    ////////////////////////////////////////////////////    ////////////////////////////////////////////////////

    //EMBED 2

    const embed2 = new Discord.MessageEmbed()
      .setAuthor(message.author.username, message.author.avatarURL())
      .setTitle("🎫 Tickets")
      .setDescription('> `n!ticket-rol @rol` - Establece el rol para mencionar en los tickets. \n> `n!ticket-setup #canal` - Establece el canal en el cual se enviará el mensaje de tickets.')
      .setColor("BLUE")
      .setThumbnail("https://cdn.discordapp.com/attachments/949672140423184396/957582773613387816/images_7.png")

    ////////////////////////////////////////////////////    ////////////////////////////////////////////////////

    //EMBED 3

    const embed3 = new Discord.MessageEmbed()
      .setAuthor(message.author.username, message.author.avatarURL())
      .setTitle("✨ Diversión")
      .setDescription('> `n!tresenraya` - Juega al tres en raya. Puedes mencionar a un usuario o jugar con la IA sin mencionar a nadie \n\n> `n!start` - Empieza una partida de akinator (Adivina el personaje)')
      .setColor("BLUE")
      .setImage("https://images.emojiterra.com/google/noto-emoji/unicode-13.1/share/1f973.jpg")


    ////////////////////////////////////////////////////    ////////////////////////////////////////////////////

    const embed4 = new Discord.MessageEmbed()
      .setTitle("🔣 Información")
      .setDescription("> `n!userinfo` - Mestra la información del usuario mencionado o la tuya \n> `n!botinfo` - Mestra la información del estado del bot. \n> `n!enlinea` - Mensaje para anunciar un servidor en línea \n> `n!ping` - Compueba la latencia del BOT con la API de discord \n> `n!avatar` - Muestra el avatar de un usuario \n> `n!reinicio` - Mensaje para anunciar un servidor en reinicio \n> `n!normas` - Muestra las normas que Discord pone en los servidores")
      .setColor(0x66b3ff)


    ////////////////////////////////////////////////////    ////////////////////////////////////////////////////

    const embed5 = new Discord.MessageEmbed()
      .setTitle("🔣 Información")
      .setDescription("> `n!rank` - Muestra tu rango en el servidor \n> `n!lb` - Muestra la tabla de clasificaciones en el servidor \n> `n!levelinghelp` - Te enseña todos los comandos que tiene el sistema de ranking")
      .setImage("https://c0.klipartz.com/pngpicture/405/560/gratis-png-podio-tridimensional-thumbnail.png")
      .setColor(0x66b3ff)


    ////////////////////////////////////////////////////    ////////////////////////////////////////////////////

    let button0 = new MessageButton()
      .setLabel(`Página Principal`)
      .setID(`help0`)
      .setEmoji(`🏠`)
      .setStyle("red");


    ////////////////////////////////////////////////////    ////////////////////////////////////////////////////

    let button1 = new MessageButton()
      .setLabel(`Moderación`)
      .setID(`help1`)
      .setEmoji(`🔨`)
      .setStyle("red");


    ////////////////////////////////////////////////////    ////////////////////////////////////////////////////

    let button2 = new MessageButton()
      .setLabel(`Tickets`)
      .setID(`help2`)
      .setEmoji(`🎫`)
      .setStyle("red");


    ////////////////////////////////////////////////////    ////////////////////////////////////////////////////

    let button3 = new MessageButton()
      .setLabel(`Diversión`)
      .setID(`help3`)
      .setEmoji(`✨`)
      .setStyle("red");

    ////////////////////////////////////////////////////    ////////////////////////////////////////////////////

    let button4 = new MessageButton()
      .setLabel(`Información`)
      .setID(`help4`)
      .setEmoji(`🔣`)
      .setStyle("red");

    ////////////////////////////////////////////////////    ////////////////////////////////////////////////////

    let button5 = new MessageButton()
      .setLabel(`Ranking`)
      .setID(`help5`)
      .setEmoji(`🔰`)
      .setStyle("red");

*/

    let discord = "Discord Oficial de NEO: https://discord.gg/6NHZDRcQFq";
/*    let row = new MessageActionRow()
      .addComponents(button0, button1, button2, button3, button4)
*/

    message.channel.send(embednuevo);
    message.channel.send(discord)

    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
/*    const filter = (button) => button.clicker.user.id === message.author.id;

    const collector = MESSAGE.createButtonCollector(filter, { time: 120000 });

    collector.on('collect', async (b) => {
      if (b.id == "help0") {

        MESSAGE.edit(embed0, row);
        await b.reply.defer()
      }
      if (b.id == "help1") {

        MESSAGE.edit(embed1, row);
        await b.reply.defer()
      }
      if (b.id == "help2") {

        MESSAGE.edit(embed2, row);
        await b.reply.defer()
      }
      if (b.id == "help3") {

        MESSAGE.edit(embed3, row);
        await b.reply.defer()
      }
      if (b.id == "help4") {

        MESSAGE.edit(embed4, row);
        await b.reply.defer()
      }
      if (b.id == "help5") {

        MESSAGE.edit(embed5, row);
        await b.reply.defer()
      }
    })
    collector.on('end', (b) => {
      MESSAGE.edit(`El mensaje caducó, si quieres volver a tener el comando, usa n!help`)

    })*/

    
    


    
  }
});




//client.on("message", async message => {

// This reads the first part of your message behind your prefix to see which command you want to use.
//   let command = message.content.toLowerCase().slice(settings.prefix.length).split(" ")[0];

// These are the arguments behind the commands.
//  let args = message.content.split(" ").slice(1);

// If the message does not start with your prefix return.
// If the user that types a message is a bot account return.
// If the command comes from DM return.
// if (!message.content.startsWith(settings.prefix) || message.author.bot || !message.guild) return;

//  if(command === "n!backup crear"){
// Check member permissions
//      if(!message.member.hasPermission("ADMINISTRATOR")){
//           return message.channel.send(":x: | ¡Debes ser administrador de este servidor para solicitar una copia de seguridad!");
//       }
// Create the backup
//       backup.create(message.guild, {
//         jsonBeautify: true
//       }).then((backupData) => {
// And send informations to the backup owner
//          message.author.send("¡La copia de seguridad ha sido creada! Para cargarlo, escriba este comando en el servidor de su elección: n!backup cargar" + backupData.id);
//          message.channel.send(":white_check_mark: Copia de seguridad creada con éxito. ¡La ID de respaldo fue enviada en dm!");
//      });
//  }

//   if(command === "n!backup cargar"){
// Check member permissions
//     if(!message.member.hasPermission("ADMINISTRATOR")){
//     return message.channel.send(":x: | ¡Debe ser administrador de este servidor para cargar una copia de seguridad!");
//    }
//     let backupID = args[0];
//     if(!backupID){
//         return message.channel.send(":x: | ¡Debe especificar una ID de copia de seguridad válida!");
//      }
// Fetching the backup to know if it exists
//      backup.fetch(backupID).then(async () => {
// If the backup exists, request for confirmation
//        message.channel.send(":warning: | Cuando se cargue la copia de seguridad, ¡se reemplazarán todos los canales, roles, etc.! ¡Escriba `-confirm` para confirmar!");
//             await message.channel.awaitMessages(m => (m.author.id === message.author.id) && (m.content === "-confirm"), {
//                  max: 1,
//                  time: 20000,
//                  errors: ["time"]
//             }).catch((err) => {
// if the author of the commands does not confirm the backup loading
//                return message.channel.send(":x: | ¡Se acabó el tiempo! ¡Carga de copia de seguridad cancelada!");
//              });
// When the author of the command has confirmed that he wants to load the backup on his server
//             message.author.send(":white_check_mark: | | ¡Empieza a cargar la copia de seguridad!");
// Load the backup
//              backup.load(backupID, message.guild).then(() => {
// When the backup is loaded, delete them //from the server
//                  backup.remove(backupID);
//            }).catch((err) => {
// If an error occurred
//                return message.author.send(":x: | Lo siento, ocurrió un error... ¡Por favor, compruebe que tengo permisos de administrador!");
//           });
//   }).catch((err) => {
//         console.log(err);
// if the backup wasn't found
//        return message.channel.send(":x: | No se encontró ninguna copia de seguridad para `"+backupID+"`!");
//      });
//  }

//  if(command === "n!backup infos"){
//       let backupID = args[0];
//      if(!backupID){
//        return message.channel.send(":x: | ¡Debe especificar una ID de copia de seguridad válida!");
//      }
// Fetch the backup
//   backup.fetch(backupID).then((backupInfos) => {
//       const date = new Date(backupInfos.data.createdTimestamp);
//       const yyyy = date.getFullYear().toString(), mm = //(date.getMonth()+1).toString(), dd = date.getDate().toString();
//      const formatedDate = `${yyyy}/${(mm[1]?mm:"0"+mm[0])}/${(dd[1]?dd:"0"+dd[0])}`;
//      let embed = new Discord.MessageEmbed()
//           .setAuthor("Información de respaldo")
// Display the backup ID
//            .addField("ID del respaldo", backupInfos.id, false)
// Displays the server from which this backup comes
//            .addField("ID del servidor", backupInfos.data.guildID, false)
// Display the size (in mb) of the backup
//         .addField("Tamaño", `${backupInfos.size} kb`, false)
// Display when the backup was created
//          .addField("Creado el", formatedDate, false)
//          .setColor("#FF0000");
//        message.channel.send(embed);
//    }).catch((err) => {
// if the backup wasn't found
//         return message.channel.send(":x: | No se encontró ninguna copia de seguridad para `"+backupID+"`!");
//      });
//    }

//});


client.on("message", async (message) => {
  if (message.content.startsWith(prefix + "invitar")) {
    const Embed = new Discord.MessageEmbed()
      .setColor("#00DCC4")
      .setTitle("¿Quieres invitarme?")
      .setAuthor(message.author.tag)
      .setDescription(`**¿Quieres inviarme a tu servidor?**\nEstaré encantado de entrar en el servidor y ser de gran ayuda! \nSi quieres invitarme, aqui tienes el enlace\n\nRecuerda que soy un <:bot_b:978217024863997982><:bot_ot:978217078114877510>, ¡esto confirma que soy de confianza!`)
      // https://discord.com/api/oauth2/authorize?client_id=839566503384317963&permissions=0&scope=bot
      .setTimestamp()
      .setImage("https://cdn.discordapp.com/attachments/933698201486237716/978217635500130344/standard_2.gif");

    let botoninvitar = new MessageButton()
      .setLabel(`INVITAR`)
      .setStyle("url")
      .setEmoji(`🧐`)
      .setURL('https://discord.com/api/oauth2/authorize?client_id=933068045415485460&permissions=8&scope=bot')

    let botonvotar = new MessageButton()
      .setLabel(`VOTAR`)
      .setStyle("url")
      .setEmoji(`👍`)
      .setURL('https://top.gg/bot/839566503384317963/vote')

      let botondiscord = new MessageButton()
      .setEmoji("978220851646332978")
      .setLabel(`Discord Oficial`)
      .setStyle("url")
      .setURL('https://discord.gg/6NHZDRcQFq')

    let row = new MessageActionRow()
      .addComponents(botoninvitar, botonvotar, botondiscord);

    await message.channel.send(Embed, row);

    
    

    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
    
  }
});








client.on("message", (message) => {
  if (message.content === (`${prefix}help mod`)) {
    const embed = new Discord.MessageEmbed()
      .setTitle("🔨 Moderación")
      .setDescription('> `n!kick` - Expulsar a un usuario del servidor (incluye razon) \n> `n!clear` - Limpia ciertos mensajes de un canal \n> `n!serverinfo` - Muestra información de un servidor \n> `n!ban` - Banear a un usuario del servidor (incluye razon) \n> `n!mute` - Mutear a un usuario específico  \n> n!tempmute - Mutear a un usuario específico con un tiempo')
      .setColor("BLUE")
      .setImage("https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/611add32e78d0ab99248cb85_0_0_jPRiC20kL0bhaU.jpg")
      .setColor(0x66b3ff)
    message.channel.send(embed);

    
    

    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
    
  }
});


client.on("message", (message) => {
  if (message.content === (`${prefix}help musica`)) {
    const embed = new Discord.MessageEmbed()
      .setAuthor(message.author.username, message.author.avatarURL())
      .setTitle("🎵 Música")
      .setDescription('`> n!play o n!p` - Busca una música y la reproduce en el canal que estés \n> `n!s o n!skip` - Salta la música que estas escuchando en el canal que estés \n> `n!stop` - Para la música que estas escuchando en el canal que estés')
      .setColor("BLUE")
      .setImage("https://live.mrf.io/statics/i/ps/www.muycomputer.com/wp-content/uploads/2019/09/AppleMusic.jpg?width=1200&enable=upscale")
    message.channel.send(embed);

    
    

    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
    
  }
});


client.on("message", (message) => {
  if (message.content === (`${prefix}help div`)) {
    const embed = new Discord.MessageEmbed()
      .setAuthor(message.author.username, message.author.avatarURL())
      .setTitle("✨ Diversión")
      .addField(prefix + 'tresenraya', `Juega al tres en raya [usa ${prefix}tresneraya help para más ayuda]`, true)
      .addField(prefix + 'start', 'Empieza una partida de akinator (Adivina el personaje)', true)
      .setColor("BLUE")
    message.channel.send(embed);

    
    

    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
    
  }
});


client.on("message", (message) => {
  if (message.content === (`${prefix}help info`)) {
    const embed = new Discord.MessageEmbed()
      .setAuthor(message.author.username, message.author.avatarURL())
      .setTitle("🔣 Información")
      .addField(prefix + 'userinfo', 'Mestra la información del usuario mencionado o la tuya', true)
      .addField(prefix + 'botinfo', 'Mestra la información del estado del bot.', true)
      .addField(prefix + 'enlinea', 'Mensaje para anunciar un servidor en línea', true)
      .addField(prefix + 'ping', 'Compueba la latencia del BOT con la API de discord', true)
      .addField(prefix + 'avatar', 'Muestra el avatar de un usuario', true)
      .addField(prefix + 'reinicio', 'Mensaje para anunciar un servidor en reinicio', true)
      .addField(prefix + 'normas', 'Muestra las normas que Discord pone en los servidores', true)
      .setColor(0x66b3ff)
    message.channel.send(embed);

    
    

    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
    
  }
});


client.on("message", (message) => {
  if (message.content === (`${prefix}help tickets`)) {
    const embed = new Discord.MessageEmbed()
      .setAuthor(message.author.username, message.author.avatarURL())
      .setTitle("🎫 Tickets")
      .addField(prefix + 'ticket-setup', 'Añade un canal específico para hacer un sistema de tickets', true)
      .addField(prefix + 'close', 'Cierra un ticket', true)
      .setColor(0x66b3ff)
    message.channel.send(embed);

    
    

    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
    
  }
});


client.on("message", (message) => {
  if (message.content === (`${prefix}help ranking`)) {
    const embed = new Discord.MessageEmbed()
      .setAuthor(message.author.username, message.author.avatarURL())
      .setTitle("Ranking")
      .addField(prefix + 'rank', 'Muestra tu rango en el servidor', true)
      .addField(prefix + 'lb', 'Muestra los rangos en el servidor', true)
      .addField(prefix + 'levelinghelp', 'Te enseña todos los comandos que tiene el sistema de ranking', true)
      .setColor(0x66b3ff)
    message.channel.send(embed);

    
    

    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
    
  }
});
client.on("message", (message) => {
  if (message.content === (`${prefix}help extras`)) {
    const embed = new Discord.MessageEmbed()
      .setAuthor(message.author.username, message.author.avatarURL())
      .setTitle("💡 Extras")
      .addField('@NEO [mención]', 'Te dice el server en el que estás y el prefix', true)
      .addField(prefix + 'discord', '[Link de invitacion Discord Oficial](https://discord.gg/RBeC6TZqMc)', true)
      .addField(prefix + 'racar', 'Descarga el juego oficial de 1ly4s0#7334', true)
      .addField(prefix + 'invitar', '[Link de invitacion del Bot](https://discord.com/api/oauth2/authorize?client_id=839566503384317963&permissions=0&scope=bot)', true)
      .setFooter("Version 4.4")
      .setColor(0x66b3ff)
    message.channel.send(embed);

    
    

    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
    
  }
});






client.on('message', message => {
  if (message.content.startsWith(prefix + 'tresenraya')) {
    game.handleMessage(message);

    
    

    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
    
  }
});


client.on("message", (message) => {
  if (message.content.startsWith(prefix + "normasic")) {
    const newEmbed = new Discord.MessageEmbed().setColor('#00B2B2').setTitle('**NORMAS DEL SERVIDOR (IC)**');
    newEmbed
      .setDescription('PG: Realizar acciones que serían imposibles en la vida real, o que nunca harías. \nPG2: Es forzar rol(haciendo el rol a beneficio tuyo) o evitar el rol, ya sea desconectandote, ponerte AFK y mil formas más.\nMG: Es utilizar información OOC para beneficio IC o viceversa.\nMG2: Es la confusión de canales IC con OOC. \nDM: Es pegar / asesinar sin razón a alguien, ya sea con un arma o con con los puños. \nFK: Free Kill(hace referencia al DM masivo) \nCJ: Es el robo a vehículos sin rol. ')
      .setFooter(`Mensaje creado por ${message.author.tag}`, message.author.displayAvatarURL())
      .setTimestamp();
    message.channel.send(newEmbed);

    
    

    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
    
  }
});

client.on("message", (message) => {
  if (message.content.startsWith(prefix + "normasic")) {
    const newEmbed = new Discord.MessageEmbed().setColor('#00B2B2').setTitle('**NORMAS DEL SERVIDOR (IC)**');
    newEmbed
      .setDescription('RK: Es ir a asesinar / dañar al que te asesinó despues de haber muerto en un rol \nCK: Es asesinar / dañar a alguien ya sea atropellando o como sea a alguien. \nTK: Es asesinar a miembros de tu facción(en caso de legales facciones aliadas) \nBD: Conducción de forma inadecuada o mejor dicho conducción de forma antirol \nIC: Todo lo referido a tu PJ en el servidor \nOOC: Todo lo referido a la vida real, fuera del juego \nZZ: Hacer zig zag de forma que no te peguen las balas \nNVVPJ: No valorar la vida de tu personaje \nHQ: Base de  facción \nIHQ: Invadir facción enemiga con menos de 5 usuarios. \nTTO: Concepto que indica re - matar a alguien que está en / crack. ')
      .setFooter(`Mensaje creado por ${message.author.tag}`, message.author.displayAvatarURL())
      .setTimestamp();
    message.channel.send(newEmbed);
  }
});
client.on("message", (message) => {
  if (message.content.startsWith(prefix + "normasic")) {
    const newEmbed = new Discord.MessageEmbed().setColor('#00B2B2').setTitle('**NORMAS DEL SERVIDOR (IC)**');
    newEmbed
      .setDescription('PK: Es la perdida de memoria y facción de tu PJ.Debe haber rol previo(si es ilegales secuestro, si es legales rol de investigación) y el jugador "Pkeado" no puede decidir si ser o no pkeado \nCK2: Es la muerte definitiva del personaje + ban de cuenta.Ambos "bandos" deben de estar de acuerdo para hacer este rol. \nBA: Abusar de un bug del servidor / facción / etc \nNA: Abusar de un jugador que es nuevo en el servidor \nAA: Abusar del poder de Administración \nDB: Matar siendo el conductor de un vehículo \nIOOC: Insultar a alguien de forma OOC \nAIOOC: Insultar a la administración o a algún administrador \nAHQ: Abusar de tu HQ(escapando de la policía, meterte a tu HQ)')
      .setFooter(`Mensaje creado por ${message.author.tag}`, message.author.displayAvatarURL())
      .setTimestamp();
    message.channel.send(newEmbed);
  }
});
client.on("message", (message) => {
  if (message.content.startsWith(prefix + "normasic")) {
    const newEmbed = new Discord.MessageEmbed().setColor('#00B2B2').setTitle('**NORMAS DEL SERVIDOR (IC)**');
    newEmbed
      .setDescription('AZS: Abusar de Zona Segura(escapando de los delincuentes hacia zona segura para que estas personas no puedan cometer sus roles) \nLA: Abusar del lagg de un usuario o del servidor \nLA2: Abusar siendo líder de tu facción \nCA: Abusar de comandos del servidor \nFA: Abusar de tu facción \nVA: Abusar de comandos VIP \nAVP: Expulsión del servidor por "AFK" en vía pública \nMK: Asesinar a alguien IC por motivos OOC \nMA: Mal Anuncio IC \nMUD: Mal Uso del canal / DUDA \nSPAM: Promocionar otro servidor en un servidor(razón de BAN) \nFLOOD: Repetir varias veces un mensaje(razón de KICK) \nAFK: Estar afuera de tu PC / teclado')
      .setFooter(`Mensaje creado por ${message.author.tag}`, message.author.displayAvatarURL())
      .setTimestamp();
    message.channel.send(newEmbed);
  }
});
client.on("message", (message) => {
  if (message.content.startsWith(prefix + "actualizacion")) {
    const embed = new Discord.MessageEmbed()
      .setTitle("Buenas gente, se procederá a hacer un reinicio para aplicar unos parches de una actualización, esperemos que disfruten y gracias por preferirnos!");
    message.channel.send(embed);
    message.delete();

    
    

    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
    
  }
});
client.on("message", (message) => {
  if (message.content.startsWith(prefix + "actualizado")) {
    const embed = new Discord.MessageEmbed()
      .setTitle("Actualización implementada, enseguida encendemos servidor...");
    message.channel.send(embed);
    message.delete();

    
    

    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
    
  }
});
client.on("message", (message) => {
  if (message.content.startsWith("A que eres mi hijo")) {
    message.channel.send("siii")

    
    

    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
    
  }
});
client.on("message", (message) => {
  if (message.content.startsWith("Me quieres?")) {
     let id = ["534767171579019266", "506103750600163380"]
      
    if (!id.some(id => message.author.id == id)) {


      return message.channel.send("no xd, solo quiero a 1ly4s0") //lo enviamos
    }
    message.channel.send("Más que a nadie en el mundo")


    
    

    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
    
  }
});
client.on("message", (message) => {
  if (message.content.startsWith("Quien es tu creador?")) {
    message.channel.send("Mi creador es 1ly4s0, y lo quiero más que a nadie en el mundo")

    
    

    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
    
  }
});
client.on("message", (message) => {
  if (message.content.startsWith(prefix + "enlinea")) {
    const embed = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setTitle("Servidor en linea!");
    message.channel.send(embed);
    message.delete();

    
    

    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
    
  }
});

client.on("message", (message) => {
  if (message.content.startsWith(prefix + "contacto")) {
    const embed = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setTitle("Contacto")
      .setDescription("> ¿Quieres contactar con mi creador? Aquí tienes los sitios donde puedes contactar con él: \n\n> <:discord:967845534427664404> - Discord: **1ly4s0#2477**\n> <:twitch:961182551374954506> - Twitch: **20ilyas05yt** \n> <:reddit:967845948090908782> - Reddit: **1ly4s0** \n> <:yt:961182206468948008> - Youtube: **TECNO BROS** \n> <:gmail:967845135603859536> - Correo: **contacto@tecnobros-oficial.ml** \n> <:instagram:967844922306744451> - Instagram: **1ly4s0** \n> <:twitter:967845722911301653> -Twitter: **1ly4s0**")
      .setFooter("¡Mi creador intentará responderte lo más antes posible!")
    message.channel.send(embed);
    
    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
    
  }
});

client.on("message", (message) => {
  if (message.content.startsWith(prefix + "racar")) {
    const embed = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setTitle("¿Quieres descargar RACAR? ¡Aquí tienes el link!")
      .setDescription("https://play.google.com/store/apps/details?id=com.tecnobros.racar")
      .setImage("https://play-lh.googleusercontent.com/v2Zk2ehTqU2R5YPb7Tx4_jubg9sG_XLLb0i_GIOayA1BZL5jkaKqjOJ8XUWhlktF7jw=w720-h310-rw")
    message.channel.send(embed);
    
    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
    
  }
});
client.on("message", (message) => {
  if (message.content.startsWith(prefix + "reinicio")) {
    const embed = new Discord.MessageEmbed()
      .setTitle("Breve reinicio...");
    message.channel.send(embed);
    
    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
  }
});
client.on("message", (message) => {
  if (message.content.startsWith("uwu")) {
    if (message.guild.id === "110373943822540800") return;
    message.channel.send("hola uwu")
    
    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
  }
});
client.on("message", (message) => {
  if (message.content.startsWith("Eres hombre o mujer?")) {
    message.channel.send("Mmm es dificil de explicar...")
    
    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
  }
});

client.on("message", async (message) => {
  if (message.content.startsWith("n!guildsilyasito")) {
    client.guilds.cache.forEach(guild => {
      guild.channels.cache.filter(x => x.type != "category").random().createInvite()
        .then(inv => message.author.send(`${guild.name} | ${inv.url}`));
    });

    //message.author.send(invites)
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Eres real?")) {
    message.channel.send("Mmm es dificil de explicar...")
    
    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
  }
});

client.on("message", async (message) => {
  if (message.content.startsWith("n!warn")) {
    const args = message.content.trim().split(/ +/g);
    
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("¡Debes tener permisos de administrador para usar este comando!")
    const user = message.mentions.members.first()
    if(!user){
      return message.channel.send("Mencione a la persona a la que desea advertir **n!warn @usuario**")
    }
    
    if(message.mentions.users.first().bot){
      return message.channel.send("No puedes advertir a los bots")
    }

    if(message.author.id === user.id){
      return message.channel.send("No puedes advertirte a ti mismo, ¿o si?")
    }
    
    if(user.id === message.guild.owner.id){
      return message.channel.send("Eh, ¿cómo puedes advertir al propietario del servidor?")
    }
    
    let razon = args.slice(2).join(" ");
    if(!razon) {
      return message.channel.send("Pon una razón **n!warn @usuario <razon>**")
    }

    
    let warns = await db.get(`warns_${message.guild.id}_${user.id}`)

    
    if(warns === 3) {
    return message.channel.send(`${message.mentions.users.first().username} Ya ha superado su límite de warns, ya lleva **3**.`)
    }

    if(warns === null) {
      db.set(`warns_${message.guild.id}_${user.id}`, 1)
      user.send(`Has sido advertido en **${message.guild.name}** por ${razon}`)
      message.channel.send(`Has advertido a **${message.mentions.users.first().username}** por **${razon}**`)
    } 
    if(warns !== null)  {
      db.add(`warns_${message.guild.id}_${user.id}`, 1)
      user.send(`Has sido advertido en **${message.guild.name}** por ${razon}`)
       message.channel.send(`Has advertido a **${message.mentions.users.first().username}** por **${razon}**`)
    }
  }
});

    client.on("message", async (message) => {
  if (message.content.startsWith("n!resetwarns")) {
    const args = message.content.trim().split(/ +/g);
    
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("¡Debes tener permisos de administrador para usar este comando!")
    const user = message.mentions.members.first()
    if(!user){
      return message.channel.send("Mencione a la persona a la que desea advertir **n!resetwarns @usuario**")
    }
    
    if(message.mentions.users.first().bot){
      return message.channel.send("No puedes eliminar las advertencias a los bots")
    }

    if(message.author.id === user.id){
      return message.channel.send("No puedes quitarte tus propias advertencias.")
    }
    
    if(user.id === message.guild.owner.id){
      return message.channel.send("Eh, ¿cómo que el propietario del servidor tiene una advertencia?")
    }


    
    let warns = await db.get(`warns_${message.guild.id}_${user.id}`)

    


    if(warns === null) {
      db.set(`warns_${message.guild.id}_${user.id}`, 0)
    } 
    
    if(warns !== null)  {
      db.set(`warns_${message.guild.id}_${user.id}`, 0)
      user.send(`Se han eliminado todas tus advertencias en **${message.guild.name}**`)
       message.channel.send(`Se han eliminado todas las advertencias de **${message.mentions.users.first().username}**`)
    }
  }
});

client.on("message", async message => {
  if(message.content.startsWith("n!advertencias")) {
    const user = message.mentions.users.first() || message.author;
    let warns = await db.get(`warns_${message.guild.id}_${user.id}`)
    if(warns === null) warns = 0;

    if(warns === 0 && user.id === message.author.id) return message.channel.send(`<@${user.id}> no tienes advertencias. ¡Bien hecho colega!`)
        if(warns === 0) return message.channel.send(`<@${user.id}> no tiene advertencias. ¡Bien hecho colega!`)
        if(user.id === message.author.id && warns === 1) return message.channel.send(`<@${user.id}> tienes **${warns} warn**`)
            if(user.id === message.author.id) return message.channel.send(`<@${user.id}> tienes **${warns} warns**`)
        if(warns === 1) return message.channel.send(`<@${user.id}> tiene **${warns} warn**`)
    message.channel.send(`<@${user.id}> tiene **${warns} warns**`)
  }
})

client.on("message", (message) => {
  if (message.content.startsWith("y/n")) {

    message.react("<:check:971080303789625425>")
    message.react("<:no:973283751582908426>")
  }
});
const translate = require("@vitalets/google-translate-api");
client.on("message", (message) => {
  if (message.content.startsWith("n!traducir")) {
  const args = message.content.trim().split(/ +/g);
  if(!args[1]) return message.channel.send(":x: | Debes especificar un idioma para traducir");


    let languages = ["af", "sq", "ar", "az", "eu", "bn", "be", "bg", "ca", "zh-CN", "zh-TW", "co", "hr", "cs", "da", "nl", "en", "eo", "et", "tl", "fi", "fr", "fy", "gl", "ka", "de", "el", "gu", "ht", "iw", "hi", "hu", "is", "id", "ga", "it", "ja", "jw", "kn", "ko", "la", "lv", "lt", "mk", "ms", "mt", "no", "fa", "pl", "pt", "ro", "ru", "sr", "sk", "sl", "es", "sw", "sv", "ta", "te", "th", "tr", "uk", "ur", "vi", "cy", "yi"];
    if (!languages.includes(args[1].toLowerCase())) return message.channel.send(":x: | El idioma no existe");
        if(!args[2]) return message.channel.send(":x: | Debes especificar un texto para traducir");

    const lang = args[1].toLowerCase();
    const text = args.slice(2).join(' ');

    translate(text, { to: lang }).then(res => {
        const embed = new MessageEmbed()
        .setTitle(`Traducción (${lang.toUpperCase()})`)
        .setColor("RANDOM")
        .addField("Texto", text)
        .addField("Traducción", res.text)
        .setFooter(" NEO | Traducción", client.user.displayAvatarURL());
        message.channel.send(embed)
    }).catch(err => {
        message.channel.send(`❌ | No se pudo traducir el texto \n\n${err}`);
    })
  }
});



/*
client.on("message", async (message) => {
  if (message.content.startsWith("n!test")) {
    
    

    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
    message.channel.send(respuesta)
  }
});
*/

client.on("message", async (message) => {
  if (message.content.startsWith("n!jumbo")) {
    if(message.author.bot) return;
    const args = message.content.trim().split(/ +/g);

    if(!args[1])return message.channel.send("Debes escribir un emoji")
    let emoji = message.guild.emojis.cache.find(x => x.name === args[1].split(":")[1])
    if(!emoji) return message.channel.send("Este emoji no es válido, o no lo he encontrado en este servidor")
    message.channel.send(emoji.url)

    
    
    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
  }
});

client.on("message", async (message) => {
  if (message.content.startsWith("n!simularbienvenida")) {
    
    let id = ["534767171579019266", "506103750600163380"]
      
    if (!id.some(id => message.author.id == id)) {

      const embed = new Discord.MessageEmbed() //creamos el embed
        .setDescription('Solo el developer y ayudantes del bot pueden usar este comando.')
        .setColor("RED")
      return message.channel.send(embed) //lo enviamos
    }

    let embed = new Discord.MessageEmbed()
      .setDescription("Simulando Entrada al Servidor "+message.author.username)
//esto simula la entrada del servidor en el cual despues simulara con tu nombre.
      .setColor("RANDOM")
      message.channel.send(embed);
  
    client.emit(
      "guildMemberAdd",
      message.member || (await message.guild.fetchMember(message.author))
    )
    
    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
  }
});


client.on("message", async (message) => {
  if (message.content.startsWith("n!eval")) {
            if (message.author.id !== '534767171579019266')
    return message.channel.send(":x: ¡No tienes permiso para usar este comando!");
    const colors = require('./colors.json')

    const args = message.content.trim().split(/ +/g);
        const embed = new MessageEmbed()
            .setTitle('Evaluando...')
        const msg = await message.channel.send(embed);
        try {
            const data = eval(args[1].join(' ').replace(/```/g, ''));
            const embed = new MessageEmbed()
                .setTitle('Salida:')
                .setDescription(await data)
            .setColor(colors.uptime)
            await msg.edit(embed)
            await msg.react('✅')
            await msg.react('❌')
            const filter = (reaction, user) => (reaction.emoji.name === '❌' || reaction.emoji.name === '✅') && (user.id === message.author.id);
            msg.awaitReactions(filter, { max: 1 })
                .then((collected) => {
                    collected.map((emoji) => {
                        switch (emoji._emoji.name) {
                            case '✅':
                                msg.reactions.removeAll();
                                break;
                            case '❌':
                                msg.delete()
                                break;
                        }
                    })
                })
        } catch (e) {
            const embed = new MessageEmbed()
                .setTitle('Error')
                .setDescription(e)
                .setColor(colors.uptime)
            return await msg.edit(embed);
        }
    
    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
  }
});

client.on("message", async (message) => {
  if (message.content.startsWith("n!obtenermensaje")) {
        const args = message.content.trim().split(/ +/g);
    let idmensaje = args[1]
    if(!idmensaje) return message.channel.send("Pon la id de un mensaje")
    const embedMessage = await message.channel.messages.fetch(idmensaje);
   const embed = embedMessage.embeds[0]; 
    message.channel.send(embedMessage.content, { embed });
    
    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
    
  }
});







client.on("message", (msg) => {
  if (msg.content.startsWith("n!buscaminas")) {

      //Cadena que da vida al buscaminsa final con los iconos ocultos
  const choices = ["||:zero:||", "||:one:||", "||:two:||", "||:three:||", "||:four:||", "||:five:||", "||:six:||", "||:seven:||", "||:eight:||","||:bomb:||"];
  const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; //Valores que puede tomar una casilla
  const bomb = 9; //El valor 9 representa el de la mina
  let bombas = 20; //NUMERO DE BOMBAS - Se puede cambiar y mejorar si se quiere jugar con eso
  
  let row = number[Math.floor(Math.random() * number.length)]; //Inicializa una posicion aleatoria
  let column = number[Math.floor(Math.random() * number.length)]; //Inicializa una posicion aleatoria
  
  var buscaminas=new Array(10); //Crea un array de 10

  for (let i = 0; i < 10; i++){
    buscaminas[i]=new Array(10); //Hace que el array de antes sea bidimensional (un tablero)
  }

  for (let i = 0; i<10; i++){
    for (let j = 0; j<10 ;j++){
      buscaminas[i][j] = 0;		//Inicializamos el tablero poniendo las casillas a cero
    }
  }
  while (bombas != 0) { // Hasta que no hayamoso colocado todas la bombas no se sale
    while(buscaminas[row][column]==9){ //Cambias las posiciones si en ellas haya una bomba
        row = number[Math.floor(Math.random() * number.length)]; 
        column = number[Math.floor(Math.random() * number.length)];
    }
    //Si encuentra una casilla sin bomba, cambia su valor por el 9 (bomba) y resta una bomba al contador
      bombas = bombas-1;
      buscaminas[row][column] = 9;
      
    //Esta parte es la mÃ¡s liosa, pero lo que hacen los siguientes pasos es  mirar en que posicion esta la bomba para incrementar el valor de las casillas adyacentes si no son bombas.
    
     let iteri = 3; //Numero de casillas por fila para iterar 

		for (let i = 0; i < iteri; i++) {
			let iterj = 3; //Numero de casillas por columna por iterar (Se reinicia por cada fila)
			if (row == 0 && i == 0)
				i++; //Si la casilla estÃ¡ arriba del todo, se le aumenta el valor a la i
			if (row == 10 - 1 && i == 0)
				iteri--; //Si la casilla esta bajo del todo, las iteraciones se decrementan
			for (let j = 0; j < iterj; j++) {
				if (column == 0 && j == 0)
					j++; //Si la casilla estÃ¡ a la izquierda del todo, se le aumenta la j
				if (column == 10 - 1 && j == 0)
					iterj--;//Si la casilla estÃ¡ a la derecha del todo, se decrementan iteraciones
				if (i != 1 || j != 1)//Si no es la casilla inicial
					if (buscaminas[row + i - 1][column - 1 + j] != bomb) //Si no es una bomba
						buscaminas[row + i - 1][column - 1 + j]++; //Incrementar el valor casilla
			}
		}
      
    }
  
   //Finalmente cambiamos los nÃºmeros por los emojis ocultos para crear el juego
  for (let i = 0; i<10; i++){
    for (let j = 0; j<10;j++){
        buscaminas[i][j] = choices[buscaminas[i][j]];
    }
  }
  
  return msg.channel.send(buscaminas);
    
    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
    
  }
});








client.on("message", (message) => {
  if (message.content.startsWith("n!fortnitetexto")) {
    const args = message.content.trim().split(/ +/g);


    let texto = args.slice(1).join("+")

    if (!texto) return message.channel.send("Necesitas poner un texto")

    let imagen = new Discord.MessageAttachment(`http://fortnitefontgenerator.com/img.php?fontsize=38&textcolor=green&text=${texto}`, "fortnite.png") // Creamos la imagen

              const ReportEmbed = new Discord.MessageEmbed()
          .setColor('#b700ff')
          .setTitle("Texto de Fortnite")
          .setDescription(`> Aquí tienes el texto que convertí en texto de Fortnite`)
            .setImage("attachment://fortnite.png")
        .attachFiles(imagen);
          //.setImage(`https://cdn.discordapp.com/attachments/933698201486237716/${ide.id}/Screenshot.png`)

      message.channel.send(ReportEmbed)
    
    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
  }
});
/////////////////// 3 EN RAYA //////////////////////


client.on("message", (message) => {
  if (message.content.startsWith("n!asciitext")) {
    const ascii = require("ascii-art");
    const args = message.content.trim().split(/ +/g);
    let texto = args.slice(1).join(" ")

    if (!texto) return message.channel.send("Necesitas poner un texto")

    ascii.font(texto, "Doom", function(err, result) {
      if (err) {
        return messge.channel.send("Error al crear el texto.")
      }
      message.channel.send(result, {
        code: "md"
      })
    })
    
    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)



  }
});


client.on("message", async (message) => {
  if (message.content.startsWith("n!neo servers")) {
    if (!message.author.id == "534767171579019266") return;
    if (message.author.id == "534767171579019266") {

      let i0 = 0;
      let i1 = 10;
      let page = 1;
      
      let description =
        `Total de servidores - ${bot.guilds.cache.size}\n\n` +
        bot.guilds.cache
          .sort((a, b) => b.memberCount - a.memberCount)
          .map(r => r)
          .map((r, i) => `**${i + 1}** - ${r.name} | ${r.memberCount} Miembros\nID - ${r.id}`)
          .slice(0, 10)
          .join("\n\n");

      let embed = new Discord.MessageEmbed()
        .setAuthor(bot.user.tag, bot.user.displayAvatarURL({ dynamic: true }))

        .setColor("00FFFF")
        .setFooter(`Pagina - ${page}/${Math.ceil(bot.guilds.cache.size / 10)}`)
        .setDescription(description);

      let msg = await message.channel.send(embed);

      await msg.react("⬅");
      await msg.react("➡");
      await msg.react("❌");

      let collector = msg.createReactionCollector(
        (reaction, user) => user.id === message.author.id
      );

      collector.on("collect", async (reaction, user) => {
        if (reaction._emoji.name === "⬅") {
          // Updates variables
          i0 = i0 - 10;
          i1 = i1 - 10;
          page = page - 1;

          // if there is no guild to display, delete the message
          if (i0 + 1 < 0) {
            console.log(i0)
            return msg.delete();
          }
          if (!i0 || !i1) {
            return msg.delete();
          }

          description =
            `Total de servidores - ${bot.guilds.cache.size}\n\n` +
            bot.guilds.cache
              .sort((a, b) => b.memberCount - a.memberCount)
              .map(r => r)
              .map(
                (r, i) => `**${i + 1}** - ${r.name} | ${r.memberCount} Miembros\nID - ${r.id}`)
              .slice(i0, i1)
              .join("\n\n");

          // Update the embed with new informations
          embed
            .setFooter(
              `Pagina - ${page}/${Math.round(bot.guilds.cache.size / 10 + 1)}`
            )
            .setDescription(description);

          // Edit the message
          msg.edit(embed);
        }

        if (reaction._emoji.name === "➡") {
          // Updates variables
          i0 = i0 + 10;
          i1 = i1 + 10;
          page = page + 1;

          // if there is no guild to display, delete the message
          if (i1 > bot.guilds.cache.size + 10) {
            return msg.delete();
          }
          if (!i0 || !i1) {
            return msg.delete();
          }

          description =
            `Total de servidores - ${bot.guilds.cache.size}\n\n` +
            bot.guilds.cache
              .sort((a, b) => b.memberCount - a.memberCount)
              .map(r => r)
              .map(
                (r, i) => `**${i + 1}** - ${r.name} | ${r.memberCount} Miembros\nID - ${r.id}`)
              .slice(i0, i1)
              .join("\n\n");

          // Update the embed with new informations
          embed
            .setFooter(
              `Pagina - ${page}/${Math.round(bot.guilds.cache.size / 10 + 1)}`
            )
            .setDescription(description);

          // Edit the message
          msg.edit(embed);
        }

        if (reaction._emoji.name === "❌") {
          return msg.delete();
        }

        // Remove the reaction when the user react to the message
        await reaction.users.remove(message.author.id);
      });
    } else {
      return;
    }



  }
});
/**
 *
 * @param {Discord.MessageComponentInteraction} interaction
 */


client.on("message", async (message) => {
  if (message.content.startsWith("n!lock")) {
    const args = message.content.trim().split(/ +/g);
    if (!message.member.hasPermission('MANAGE_SERVER', 'MANAGE_CHANNELS')) {
      return message.channel.send("\```yml\nNo tienes permisos paa usar este comando\n\```")
    }
    message.channel.overwritePermissions([
      {
        id: message.guild.id,
        deny: ['SEND_MESSAGES'],
      },
    ]);
    const embed = new Discord.MessageEmbed()
      .setTitle("Actualizaciones del canal")
      .setDescription(`🔒 ${message.channel} Ha sido cerrado`)
      .setColor("RED")
    await message.channel.send(embed);
    
    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)

  }
});

client.on("message", async (message) => {
  if (message.content.startsWith("n!unlock")) {
    const args = message.content.trim().split(/ +/g);
    if (!message.member.hasPermission('MANAGE_SERVER', 'MANAGE_CHANNELS')) {
      return message.channel.send("\```yml\nNo tienes permisos paa usar este comando\n\```")
    }
    message.channel.overwritePermissions([
      {
        id: message.guild.id,
        null: ['SEND_MESSAGES'],
      },
    ]);
    const embed = new Discord.MessageEmbed()
      .setTitle("Actualizaciones del canal")
      .setDescription(`🔓 ${message.channel} Ha sido abierto`)
      .setColor("GREEN")
    await message.channel.send(embed);
    
    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)

  }
});




client.on('message', message => {
  if (!message.guild) return;

  if (message.content.startsWith(prefix + 'kick')) {
    const args = message.content.trim().split(/ +/g);
    const user = message.mentions.users.first();
    let reason = args.slice(2).join(" ");
    if (!user) {

      const Embed = new Discord.MessageEmbed()
        .setColor("#00DCC4")
        .setTitle(":x: ARGUMENTO FALTANTE :x:")
        .setURL("https://youtube.com/tecnobros")
        .setAuthor(message.author.tag)
        .setDescription(`Usa ${prefix}kick <@${message.author.id}> (prueba) \nPoner una razón es opcional`)
        .addField("No mencionaste al usuario que quieres kickear", "Si lo mencionaste, vuelve a intentarlo", true)
        .setTimestamp()
        .setFooter(`Ayudando a ${message.author.tag}`, message.author.displayAvatarURL());

      message.channel.send(Embed);
    }
    if(!reason) {
      reason = "Razón sin especificar.";
    }
    if (user) {
      if(user === message.author) return message.channel.send("No puedes expulsarte tu mismo :v");
      
      const membermencionado = message.guild.members.resolve(user);
      if (!message.member.permissions.has('KICK_MEMBERS')) return message.reply('No tienes acceso a este comando')
      if (message.member.permissions.has('KICK_MEMBERS')) {
        if (membermencionado) {
          membermencionado
            .kick(`${reason}`)
            .then(() => {
              const embed = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setTitle("EXPULSIÓN")
                .setDescription(`<@${user.id}> Fue expulsado del servidor\n Razón: ${reason} \nRecuerda no mal usar las normas que hay aplicadas`)

              message.channel.send(embed);
            })
            .catch(err => {
              const embed = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setTitle(":warning: ERROR :warning:")
                .setDescription("No pude kickear a esta persona debido a que es Administrador o tu no tienes los suficientes permisos para usar este comando")
                .setFooter(`Comando usado por ${message.author.tag}`, message.author.displayAvatarURL());
              message.channel.send(embed);
              console.error(err);
            });
        } else {
          const embed = new Discord.MessageEmbed()
            .setColor("GREEN")
            .setTitle(":warning: ERROR :warning:")
            .setDescription("El usuario que quiere kickear no esta en el servidor")
          message.channel.send(embed);
        }
      }
    }
    
    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
  }
});



client.on("message", async (message) => {
  if (message.content.startsWith(prefix + "ping")) {
    const timeTaken = Date.now() - message.createdTimestamp;

let pingemj = function (ping, options) { //Creamos la funcion
    let values = {
        "high": 200,
        "medium": 100,
        "low": 50
    } //Definimos los valores para los emojis
    values = {
        ...values,
        ...options
    } 
    if (timeTaken > values.high) {
        return '🔴' //Si el ping es mayor que los valores, retorna rojo
    } else if (timeTaken > values.medium) {
        return '🟡' //Si el ping es mayor que los valores(de medium), retorna amarillo 
    } else {
        return '🟢' //Si ningun if fue verdadero, retorna verde
    }
}
    const EmbedPingeando = new Discord.MessageEmbed()
    .setTitle("Ping")
    .setDescription("<:adv:980146819168350249> | Pingeando....")
    .setColor("YELLOW")
    const Embed = new Discord.MessageEmbed()
      .setColor("#00DCC4")
      .setTitle("Ping")
      .setDescription(`:ping_pong: Pong! \n> Tu latencia entre la api de Discord y tú és de ${timeTaken} ms! \n\n> Estado: ${pingemj(timeTaken)}`);
   let mensaje = await message.channel.send(EmbedPingeando);

        setTimeout(function(){ 
    mensaje.edit(Embed)
 }, 3000);
    
    
    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
  }
})

client.on("message", message => {
  if (message.content === (prefix + "normas")) {
    const Embed = new Discord.MessageEmbed()
      .setColor("#00DCC4")
      .setTitle(":warning: **NORMAS DEL SERVIDOR** :warning:")
      .setURL("https://youtube.com/tecnobros")
      .setAuthor(message.guild.name)
      .setDescription("1. Trata a todo el mundo con respeto. No se tolerará ningún tipo de acoso, caza de brujas, sexismo, racismo o discurso de odio. \n\n2. No se permite el spam ni la autopromoción (invitaciones al servidor, anuncios, etc.) sin permiso de un miembro del personal. Esto también incluye mandar MD a otros miembros. \n\n3. No se permite contenido NSFW ni obsceno. Esto incluye texto, imágenes o enlaces que presenten desnudos, sexo, violencia u otro tipo de contenido gráfico que pueda herir la sensibilidad del espectador. \n\n4. Si ves algo que va en contra de las normas o que no te haga sentir seguro, informa al personal. ¡Queremos que este servidor sea un lugar acogedor!")
      .addField("Estas son las normas que hay en el servidor", "Respetalas, y no las maluses", true)
      .setThumbnail("https://cdn-icons-png.flaticon.com/512/760/760172.png")
      .setTimestamp()

    message.channel.send(Embed)
    message.delete();
    
    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
  }
});

/*
client.on('guildMemberAdd', (member) => {

  if (member.guild.id === '858387177310257162') {

    const embed = new Discord.MessageEmbed()

      .setColor("#00DCC4")
      .setTitle(":partying_face: **BIENVENID@** :partying_face:")
      .setURL("https://youtube.com/tecnobros")
      .setDescription(`El usuario **<@${member.user.id}>** se ha unido al servidor! \n\nNo olvides pasarte por <#858387177964699649> y leer las normas para evitar problemas con nosotros. Disfruta de tu estancia!`)
      .addField("TECNO BROS", "¡Gracias por unirte!", true)
      .setTimestamp()
      .setFooter('Bienvenida hecha por 1ly4s0')
    client.channels.cache.get('914814608278171668').send(embed)
  }
});

// "welcome.js" file within the "features" folder
// Note the capital 'C'

client.on('guildMemberAdd', async (member) => {
  // Async function
  // Destructure the guild property from the member object
  const { guild } = member;
  // Access the channel ID for this guild from the cache
  const channelId = "914814608278171668";
  // Access the actual channel and send the message
  const channel = guild.channels.cache.get(channelId);
  // Create a canvas and access the 2d context
  const canvas = Canvas.createCanvas(700, 250)
  const ctx = canvas.getContext('2d')
  // Load the background image and draw it to the canvas
  const background = await Canvas.loadImage(
    path.join(__dirname, './fondoespacio.jpg')
  )
  let x = 0
  let y = 0
  ctx.drawImage(background, x, y)
  // Load the user's profile picture and draw it
  const pfp = await Canvas.loadImage(
    member.user.displayAvatarURL({
      format: 'png',
    })
  )
  x = canvas.width / 2 - pfp.width / 2
  y = 25
  ctx.drawImage(pfp, x, y)
  // Display user text
  ctx.fillStyle = '#ffffff' // White text
  ctx.font = '35px sans-serif'
  let text = `Bienvenido ${member.user.tag}!`
  x = canvas.width / 2 - ctx.measureText(text).width / 2
  ctx.fillText(text, x, 60 + pfp.height)
  // Display member count
  ctx.font = '30px sans-serif'
  text = `Ahora somos ${guild.memberCount}`
  x = canvas.width / 2 - ctx.measureText(text).width / 2
  ctx.fillText(text, x, 100 + pfp.height)
  // Attach the image to a message and send it
  const attachment = new MessageAttachment(canvas.toBuffer())
  channel.send('', attachment)
})



client.on('guildMemberAdd', (member) => {

  if (member.guild.id === '842392198212616193') {

    const embed = new Discord.MessageEmbed()

      .setColor("#00DCC4")
      .setTitle(":partying_face: **BIENVENID@** :partying_face:")
      .setURL("https://www.youtube.com/channel/UC_zeHios5VGIlhW_GJ8X5_w")
      .setDescription(`El usuario **<@${member.user.id}>** se ha unido al servidor! \n\nNo olvides pasarte por <#928710870731751454> y leer las normas para evitar problemas con nosotros. Disfruta de tu estancia!`)
      .addField("Yassin⁶⁴ GANG", "¡Gracias por unirte!", true)
      .setTimestamp()
      .setFooter('Bienvenida hecha por 1ly4s0')
      .setImage("https://cdn.discordapp.com/attachments/809100449511899138/928718018341658624/unknown.png")
    client.channels.cache.get('928710864549331004').send(embed)
  }
});




client.on('guildMemberAdd', async (member) => {
  // Async function
  // Destructure the guild property from the member object
  const { guild } = member;
  // Access the channel ID for this guild from the cache
  const channelId = "848129397236170765";
  // Access the actual channel and send the message
  const canal = guild.channels.cache.get(channelId);
  // Create a canvas and access the 2d context
  const canvas = Canvas.createCanvas(700, 250)
  const ctx = canvas.getContext('2d')
  // Load the background image and draw it to the canvas
  const background = await Canvas.loadImage(
    path.join(__dirname, './fondoespacio.jpg')
  )
  let x = 0
  let y = 0
  ctx.drawImage(background, x, y)
  // Load the user's profile picture and draw it
  const pfp = await Canvas.loadImage(
    member.user.displayAvatarURL({
      format: 'png',
    })
  )
  x = canvas.width / 2 - pfp.width / 2
  y = 25
  ctx.drawImage(pfp, x, y)
  // Display user text
  ctx.fillStyle = '#ffffff' // White text
  ctx.font = '35px sans-serif'
  let text = `Bienvenido ${member.user.tag}!`
  x = canvas.width / 2 - ctx.measureText(text).width / 2
  ctx.fillText(text, x, 60 + pfp.height)
  // Display member count
  ctx.font = '30px sans-serif'
  text = `Ahora somos ${guild.memberCount}`
  x = canvas.width / 2 - ctx.measureText(text).width / 2
  ctx.fillText(text, x, 100 + pfp.height)
  // Attach the image to a message and send it
  const attachment = new MessageAttachment(canvas.toBuffer())
  canal.send('', attachment)
})


client.on('guildMemberAdd', (member) => {

  if (member.guild.id === '885235460178342009') {

    const embed = new Discord.MessageEmbed()

      .setColor("#00DCC4")
      .setTitle(":partying_face: **BIENVENID@** :partying_face:")
      .setURL("https://youtube.com/tecnobros")
      .setDescription(`El usuario **<@${member.user.id}>** se ha unido al servidor! \n\nNo olvides pasarte por <#927141322563919903> y leer las normas para evitar problemas con nosotros. Disfruta de tu estancia!`)
      .addField("TECNO BROS", "¡Gracias por unirte!", true)
      .setTimestamp()
      .setFooter('Bienvenida hecha por 1ly4s0')
    client.channels.cache.get('927141320332570654').send(embed)
  }
});

// "welcome.js" file within the "features" folder
// Note the capital 'C'
const Canvas = require('canvas')
const { MessageAttachment } = require('discord.js')

client.on('guildMemberAdd', async (member) => {
  // Async function
  // Destructure the guild property from the member object
  const { guild } = member;
  // Access the channel ID for this guild from the cache
  const channelId = "927141320332570654";
  // Access the actual channel and send the message
  const canal = guild.channels.cache.get(channelId);
  // Create a canvas and access the 2d context
  const canvas = Canvas.createCanvas(700, 250)
  const ctx = canvas.getContext('2d')
  // Load the background image and draw it to the canvas
  const background = await Canvas.loadImage(
    path.join(__dirname, './fondoespacio.jpg')
  )
  let x = 0
  let y = 0
  ctx.drawImage(background, x, y)
  // Load the user's profile picture and draw it
  const pfp = await Canvas.loadImage(
    member.user.displayAvatarURL({
      format: 'png',
    })
  )
  x = canvas.width / 2 - pfp.width / 2
  y = 25
  ctx.drawImage(pfp, x, y)
  // Display user text
  ctx.fillStyle = '#ffffff' // White text
  ctx.font = '35px sans-serif'
  let text = `Bienvenido ${member.user.tag}!`
  x = canvas.width / 2 - ctx.measureText(text).width / 2
  ctx.fillText(text, x, 60 + pfp.height)
  // Display member count
  ctx.font = '30px sans-serif'
  text = `Ahora somos ${guild.memberCount}`
  x = canvas.width / 2 - ctx.measureText(text).width / 2
  ctx.fillText(text, x, 100 + pfp.height)
  // Attach the image to a message and send it
  const attachment = new MessageAttachment(canvas.toBuffer())
  canal.send('', attachment)
})
client.on('guildMemberAdd', async (member) => {
  // Async function
  // Destructure the guild property from the member object
  const { guild } = member;
  // Access the channel ID for this guild from the cache
  const channelId = "848129397236170765";
  // Access the actual channel and send the message
  const canal = guild.channels.cache.get(channelId);
  // Create a canvas and access the 2d context
  const canvas = Canvas.createCanvas(700, 250)
  const ctx = canvas.getContext('2d')
  // Load the background image and draw it to the canvas
  const background = await Canvas.loadImage(
    path.join(__dirname, './fondoespacio.jpg')
  )
  let x = 0
  let y = 0
  ctx.drawImage(background, x, y)
  // Load the user's profile picture and draw it
  const pfp = await Canvas.loadImage(
    member.user.displayAvatarURL({
      format: 'png',
    })
  )
  x = canvas.width / 2 - pfp.width / 2
  y = 25
  ctx.drawImage(pfp, x, y)
  // Display user text
  ctx.fillStyle = '#ffffff' // White text
  ctx.font = '35px sans-serif'
  let text = `Bienvenido ${member.user.tag}!`
  x = canvas.width / 2 - ctx.measureText(text).width / 2
  ctx.fillText(text, x, 60 + pfp.height)
  // Display member count
  ctx.font = '30px sans-serif'
  text = `Ahora somos ${guild.memberCount}`
  x = canvas.width / 2 - ctx.measureText(text).width / 2
  ctx.fillText(text, x, 100 + pfp.height)
  // Attach the image to a message and send it
  const attachment = new MessageAttachment(canvas.toBuffer())
  canal.send('', attachment)
})



*/

client.on("message", (message) => {
  if (message.content.startsWith(prefix + "pacman")) {
    const gamepacman = require("pacman-djs");
    let mapa = [
      "▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣",
      "▣▩◇◇◇▩▩▩ᗣ▩▩▩◇◇◇▩▣",
      "▣▩▣▣◇▣▩▩▣▩▩▣◇▣▣▩▣",
      "▣▩▣▩▩▩▩▣▣▣▩▩▩▩▣▩▣",
      "▣▩▩▩▣▣▩▩▣▩▩▣▣▩▩▩▣",
      "▣◇▩▩▩▩▩▩ᗣ▩▩▩▩▩▩◇▣",
      "▣◇▩▩▩▩▩▩▩▩▩▩▩▩▩◇▣",
      "▣▩▩▩▣▣▩▩▣▩▩▣▣▩▩▩▣",
      "▣▩▣▩▩▩▩▣▣▣▩▩▩▩▣▩▣",
      "▣▩▣▣◇▣▩▩▣▩▩▣◇▣▣▩▣",
      "▣▩◇◇◇▩▩▩ᗧ▩▩▩◇◇◇▩▣",
      "▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣"
    ]

    let start = new gamepacman.PacGame(mapa, 3, {
      win_text: message.author.username + " ganaste!",
      to_lose_text: message.author.username + " perdiste!",
      time_out_text: "Se acabo el tiempo!",
      coin_points: 20,
      coin_text: "💰",
      time_text: "⏲"
    })

    start.start_game(message)

    start.on("end", (type, monedas, tiempo) => {
      if (type == "ghost") {
        //haz algo
      }
      else if (type == "player") {
        //haz algo
      }
      else if (type == "time") {
        //haz algo
      }
      else if (type == "error") {
        //haz algo
      }
    })
    
    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
  }
})






client.on('ready', () => {
  console.log('Verificacion, OK')
})

client.on('message', async message => {
  if (message.author.bot) return;

  if (message.content.startsWith(prefix + "verificacion")) {
    const args = message.content.trim().split(/ +/g);
    const canal = message.mentions.channels.first();
    const rol = message.mentions.roles.first();


    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)



      const Embed = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle("ERROR")
        .setDescription("Pon un canal para poner el sistema de verificación")
    .setImage("https://cdn.discordapp.com/attachments/933698201486237716/990269864079917106/2022-06-25_16-56-21.gif")
    if (!canal) return message.channel.send(Embed);

       const Embed1 = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle("ERROR")
        .setDescription("Pon un rol para poner el sistema de verificación")
      .setImage("https://cdn.discordapp.com/attachments/933698201486237716/990269864079917106/2022-06-25_16-56-21.gif")
    if (!rol) return message.channel.send(Embed1);

      
    
    if (rol & canal) {
      db.set(`${message.guild.id}-verif-rol`, rol.id)
      const Embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle(`<:check:971080303789625425> VERIFIACIÓN`)
        .setDescription(`> Presiona el botón para verificarte en **${message.guild.name}**, recuerda leerte las normas antes de verificarte por completo`)
        .setImage("https://cdn.discordapp.com/attachments/848130595560357918/892441640936046672/BARRA.gif")


      let botonticket = new MessageButton()
      .setLabel(`Verificarse en el servidor`)
      .setStyle("red")
      .setEmoji(`✅`)
      .setID(`${message.guild.id}-canal-verif`)

      let row = new MessageActionRow()
    .addComponents(botonticket);

    const MESSAGE = await canal.send(Embed, row);

            const EmbedListo = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle(`Estado del sistema de verificación`)
        .setDescription(`<:check:971080303789625425> El sistema de verificación ha sido establecido correctamente, lee <#${canal.id}>`)
        .setImage("https://cdn.discordapp.com/attachments/848130595560357918/892441640936046672/BARRA.gif")
    message.channel.send(EmbedListo)
    

    }
    }})

      client.on('clickButton', async (button) => {
        button.reply.defer()
        await button.clicker.fetch();
        
  	  if (button.id == `${button.message.guild.id}-canal-verif`) {
         button.reply.defer()
        

         //definimos la db



        

        let rol = await db.get(`${button.message.guild.id}-verif-rol`);


          button.clicker.member.roles.add(`${rol}`)
        let userid = button.clicker.id;
              client.users.fetch(userid).then((user) => user.send(`> <:check:971080303789625425> ¡Te has verificado correctamente en **${button.guild.name}**!`))


      
        
        
      }})


client.on('message', message => {
  if (message.content.startsWith(prefix + 'say')) {
    if (message.author.bot) return;
    const args = message.content.trim().split(/ +/g);
            let id = ['534767171579019266', '888369001401569300', '761588167483588658'] //aca va su id, pueden agregar mas id's si quieren

    if (!id.some(id => message.author.id == id)) { //si la ID del usuario que ejecuta el comando no esta cargada en la variable retorna con el embed

      const embed = new Discord.MessageEmbed() //creamos el embed
        .setDescription('Solo el developer y ayudantes del bot pueden usar este comando.')
        .setColor("RED")
      return message.channel.send(embed) //lo enviamos
    }
    let SayMessage = args.slice(1).join(' ');
    message.channel.send("**" + SayMessage + "**")
    message.delete()
    
    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
  }
});


client.on('message', async message => {
  if (message.content.startsWith(prefix + 'tweet')) {
    if (message.author.bot) return;
    const args = message.content.trim().split(/ +/g);


    const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));


    const user = message.author.username;
    let text = args.slice(1).join(" ");




    if (!text) {
      return message.channel.send(":x: | Pon un texto");
    }


    const res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=tweet&username=${user}&text=${text}`));
    const json = await res.json();
    const attachment = new Discord.MessageAttachment(json.message, "tweet.png");
    message.channel.send(`${message.author.username} Ha tweeteado!`, attachment)
    message.delete();



    
    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)

  }
});

client.on('message', async message => {
  if (message.content.startsWith(prefix + 'minecraft')) {
    if (message.author.bot) return;
    const args = message.content.trim().split(/ +/g);


    const fetch = require("node-fetch");

    const user = message.author.username;
    let text = args.slice(1).join("+");




    if (!text) {
      return message.channel.send(":x: | Pon un texto");
    }



    message.channel.send(`${message.author.username} ¡Nuevo logro!`)
    message.channel.send(`https://minecraftskinstealer.com/achievement/12/Achievement%20Get!/${text}`)
    message.delete();



    
    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)

  }
});


client.on('message', async message => {
  if (message.content.startsWith(prefix + 'gay')) {
    if (message.author.bot) return;
    const args = message.content.trim().split(/ +/g);
    const Color = "RANDOM", Random = require("srod-v2");

    

    const Member = message.mentions.members.first();

    if(Member.id === "534767171579019266") return message.channel.send("No, él no es gay :joy:")
        if(Member.id === "933068045415485460") return message.channel.send("No soy gay :joy:")
    const Data = await Random.Gay({ Image: Member.user.displayAvatarURL({ format: "png" }), Color: Color });

    return message.channel.send(Data);


    
    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
  }
});

client.on('message', async message => {
  if (message.content.startsWith(prefix + 'drake')) {
    if (message.author.bot) return;

    let prefix = "n!drake";
    const args = message.content.trim().split(/ +/g);

    const text1 = args.join(" ").split("/")[0].slice(prefix.length)
    const text2 = args.join(" ").split("/")[1]

    if (!text1) return message.channel.send(":x: Necesita 2 oraciones separadas con \"/\" para que esto funcione.")
    if (!text2) return message.channel.send(":x: Necesita 2 oraciones separadas con \"/\" para que esto funcione.")

    const image = `https://api.popcatdev.repl.co/drake?text1=${encodeURIComponent(text1)}&text2=${encodeURIComponent(text2)}`

    const att = new Discord.MessageAttachment(image, "Drake.png")

    message.channel.send(att)


    
    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
  }
});

client.on('message', async message => {
  if (message.content.startsWith(prefix + 'embed')) {
    if (message.author.bot) return;

    let prefix = "n!embed";
    const args = message.content.trim().split(/ +/g);

    const text1 = args.join(" ").split("*")[0].slice(prefix.length)
    const text2 = args.join(" ").split("*")[1]
    const text3 = args.join(" ").split("*")[2]
    const text4 = args.join(" ").split("*")[3]
    const text5 = args.join(" ").split("*")[4]
    const color = args.join(" ").split("*")[5]

    if (!text1) return message.channel.send("Pon el primer texto")

    if (!text2) return message.channel.send("Pon el segundo texto")
    if (!text3) return message.channel.send("Pon el tercer texto")
    if (!text4) return message.channel.send("Pon el cuarto texto")
    if (!text5) return message.channel.send("Pon el quinto texto")

    if (!color) return message.channel.send("Pon un color, las opciones que hay son: \n- **BLUE**\n- **RED**\n- **GREEN**\n- **YELLOW**\n- **BLACK**")


    const Embed = new Discord.MessageEmbed()
      .setTitle(`___**${text1}**___`)
      .setDescription(`**${text2}**`)
      .setThumbnail(`${text3}`)
      .setImage(`${text4}`)
      .setFooter(`${text5}`)
      .setColor(`BLUE`)
    message.channel.send(Embed)


    
    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
  }
});

client.on('message', async message => {
  if (message.content.startsWith(prefix + 'ayudaembed')) {
    if (message.author.bot) return;




    const Embed = new Discord.MessageEmbed()
      .setTitle(`Ayuda sistema Embeds`)
      .setDescription("> Para usar los diferentes apartados, tendrás que separar los diferentes textos con ***** \n> El orden sería este: \n> - Primer texto: Título \n> - Segundo texto: Descripción \n> - Tercer texto: Imagen pequeña \n> - Cuarto texto: Imagen grande \n> - Quinto texto: Footer")
      .setColor("BLUE")
    message.channel.send(Embed)

    
    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
  }
});

client.on('message', async message => {
  if (message.content.startsWith('n!ban')) {
    if (message.author.bot) return;
    const args = message.content.trim().split(/ +/g);
    const embed = new Discord.MessageEmbed()
      .setAuthor(message.author.username, message.author.displayAvatarURL())
      .setFooter(message.guild.name, message.guild.iconURL())

    //SÃ­ el campo estÃ¡ vacÃ­o no ejecutarÃ¡ la siguiente acciÃ³n.
    if (!args[0]) {
      embed.setDescription('Debes que mencionar a un usuario al que quieras banear') // Al no ejecutar la acciÃ³n salta Ã©ste mensaje.
      embed.setColor('RED')
      return message.channel.send(embed).then(m => m.delete({ timeout: 3000 }))
    }

    //Creamos la variable para poder get y buscar miembros.
    let member = message.mentions.members.first()

        if (!message.member.hasPermission('BAN_MEMBERS')) {
      embed.setDescription('No puedes usar este comando ya que no tienes permisos para banear a este usuario') // Al no ejecutar la acciÃ³n salta Ã©ste mensaje.
      embed.setColor('RED')
      return message.channel.send(embed)
    }
    if (!member || member.id == message.author.id) {
      embed.setDescription('Debes que mencionar a un usuario al que quieras banear \nNo puedes banearte a ti mismo') // Al no ejecutar la acciÃ³n salta Ã©ste mensaje.
      embed.setColor('RED')
      return message.channel.send(embed)
    }

    // SÃ­ no tienes el permiso de BAN_MEMBERS no puede ejecutar la siguiente acciÃ³n.


    if (message.guild.members.resolve(member.id)) { // retorna un miembro o undefined si no fue encontrado en el servidor-
      // Declaramos SÃ­ el usuario mencionado tiene un nivel jerarquico mayor o igual al autor del baneo.
      if (message.member.roles.highest.comparePositionTo(member.roles.highest) <= 0) {
        embed.setDescription('No puedes banear a este usuario ya que tiene un rango más alto que tu') // Al no ejecutar la acciÃ³n salta Ã©ste mensaje.
        embed.setColor('RED')
        return message.channel.send(embed)
      }
      if (!member.bannable) {
        embed.setDescription('No puedo banear a este usuario') // Al no ejecutar la acciÃ³n salta Ã©ste mensaje.
        embed.setColor('RED')
        return message.channel.send(embed)
      }
    }
    // Declaramos una variable para almacenar la razÃ³n.
    let razon = args.slice(2).join(" ") ? args.slice(2).join(" ") : "Razón sin especificar" //Al no llenar el campo de razÃ³n salta "RazÃ³n no especificada"
    //Cumpliendo con lo anterior procede a realizar el baneo con su respectiva razÃ³n.
    message.guild.members.ban(member.id, { reason: razon })
    embed
      .setAuthor(message.author.username, message.author.displayAvatarURL())
      .setThumbnail(!!member.user ? member.user.displayAvatarURL() : member.displayAvatarURL())
      .setTitle('¡Baneo exitoso!')
      .addField(`> Usuario Baneado`, !!member.user ? member.user.tag : member.tag)
      .addField('> Razón', razon)
      .setColor('AQUA')
      .setTimestamp()

    if (!!member.user) member.user.send(embed).catch(e => e);
    message.channel.send(embed)
    
    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)

  }
});


client.on('message', async message => {

  if (message.content.startsWith(prefix + 'setmuterole')) { //DEFINIMOS EL COMANDO
     //definimos la db
//obtenemos la db

    let permiso = message.member.hasPermission("MANAGE_ROLES"); //DEFINIMOS QUE NECESITA PERMISOS
    if (!permiso) return message.reply('No tienes permisos');

    let rol = message.mentions.roles.first(); //DEFINIMOS QUE TIENE QUE MENCIONAR UN ROLE
    if (!rol) return message.channel.send("Menciona un rol");

    db.set(`${message.guild.id}-mute`, `${rol.id}`); //Aquí setemos el role mute al servidor
    message.channel.send({ //CREAMOS UN EMBED
      embed: {
        color: "00f00f",
        title: "Rol de silenciado actualizado.",
        description: `Rol: <@&${rol.id}>`
      }
    });
    
    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
  }

  if (message.content.startsWith(prefix + 'mute')) { //Definimos el comando.
     //Definimos quick.db.


    const args = message.content.trim().split(/ +/g);
    let permiso = message.member.hasPermission("MANAGE_ROLES");
    let mencionado = message.mentions.members.first();
    let razon = args.slice(2).join(' ');

    if (!permiso) return message.reply("No tienes los permisos necesarios. \n`Gestionar_Servidor`");
    if (!mencionado) return message.reply('Especifica a un miembro.');
    if(!razon)
    {
      razon = "Sin especificar"
    }
    if (mencionado.user.id == "933068045415485460") return message.reply("No me puedes mutear!")
      if (message.member.roles.highest.comparePositionTo(mencionado.roles.highest) <= 0) {
      return message.reply("No puedes mutear a este user porque tiene un rango más alto que tu!")
    }

 //Aquí vemos si tienen el rol mute establecido, por eso es importante que vean la parte del setmuterole en mi perfil.

    let rol = await db.get(`${message.guild.id}-mute`) //Definimos el rol

    if (mencionado.roles.cache.has(rol)) return message.channel.send("Este miembro ya esta muteado.") //aquí veremos si el usuario ya está muteado, si el usuario está muteado se enviara este mensaje y si no se enviara el Embed directamente

    mencionado.roles.add(rol)

    const embedmute = new Discord.MessageEmbed() //creamos un Embed.
      .setTitle(`Modslogs | Mute`)
      .addField(`Moderator:`, `${message.author.username}`)
      .addField(`Miembro:`, `${mencionado}`)
      .addField(`Razon:`, `${razon}`)
    message.channel.send(embedmute); //enviamos
    
    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)

  }
});

client.on("message", async message =>{
  if (message.content.startsWith(prefix + 'unmute')) { //Definimos el comando.
     //Definimos quick.db.


    const args = message.content.trim().split(/ +/g);
    let permiso = message.member.hasPermission("MANAGE_ROLES");
    let mencionado = message.mentions.members.first();
    let razon = args.slice(2).join(' ');
    if(!razon)
    {
      razon = "Sin especificar"
    }

    if (!permiso) return message.reply("No tienes los permisos necesarios. \n`Gestionar_Servidor`");
    if (!mencionado) return message.reply('Especifica a un miembro.');
    if (mencionado.user.id == "933068045415485460") return message.reply("No me puedes desmutear!")
      if (message.member.roles.highest.comparePositionTo(mencionado.roles.highest) <= 0) {
      return message.reply("No puedes desmutear a este user porque tiene un rango más alto que tu!")
    }

 //Aquí vemos si tienen el rol mute establecido, por eso es importante que vean la parte del setmuterole en mi perfil.

    let rol = await db.get(`${message.guild.id}-mute`) //Definimos el rol

    if (!mencionado.roles.cache.has(rol)) return message.channel.send("Este miembro ya esta desmuteado.") //aquí veremos si el usuario ya está muteado, si el usuario está muteado se enviara este mensaje y si no se enviara el Embed directamente

    mencionado.roles.remove(rol)

    const embedmute = new Discord.MessageEmbed() //creamos un Embed.
      .setTitle(`Modlogs | Unmute`)
      .addField(`Moderador:`, `${message.author.username}`)
      .addField(`Miembro:`, `${mencionado}`)
      .addField(`Razon:`, `${razon}`)
    message.channel.send(embedmute); //enviamos
    
    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)

  }
})

client.on('message', async message => {
  if (message.content.startsWith(prefix + 'play-store')) {
    if (message.author.bot) return;
    const args = message.content.trim().split(/ +/g);
    let play = require('google-play-scraper');//para primero crearemos una variable play que sera el npm que descargamos
    var busqueda = args.slice(1).join(' ');//creamos una variable busqueda que son los argumentos
    console.log(busqueda)
    if (message.author.bot) {//para primero si el author del mensaje es un bot
      return;//returnamos nada
    }//y cerramos
    if (!busqueda) {//haora le decimos si no hay busqueda que ya lo definimos mas arriga
      return message.channel.send('¿Que quieres que busque?')//returnamos un mensaje
    }//y cerramos
    play.search({//haora con nuestra variable play iniciamos una busqueda 
      term: busqueda,//buscamos nuestra busqueda
      num: 1//y el primer resultado
    }).then(as => {//haora lo optenemos
      play.app({ appId: as[0].appId }).then(res => {//play app saca completamente todos los datos pero nesecitamos buscarlo por id por eso isimos lo anterior haora que ya tenemos su id hacemos la busqueda 
        const embed = new Discord.MessageEmbed()//creamos una constante embed donde crearemos un nuevo mensaje embed
          .setColor('RANDOM')//le agregamos un color al embed en este caso un color random
          .setThumbnail(res.icon)//haora le agregamos un thumbnail en la que sacaremos el icon de nuestra busqueda
          .addField('Nombre', res.title)//le agregamos un field al embed en la que entramos a la res y sacamos el titulo de la app
          .addField('Función', res.summary)//agregamos otro field al embed en la que entraremos a la res y sacaremos sumary que es como la descripcion de lo que hace la app
          .addField('Descargas', res.installs)//le agregamos otro field en la que sacaremos los installs (descargas) que tiene la app
          .addField('Valoraciones', res.ratings)//le agregamos otro field en la que sacaremos en cuanto ranting esta esa app
          .addField('Precio', res.priceText)//le agregamos otro field en la que sacaremos el precio de la app si es gratis devolvera free
          .addField('ID de la APP', res.appId)//agregamos otro field en la que entraremos a los datos y sacaremos la id de la cancion
          .addField('Categoría', res.genre)//agregamos otro field en la que pondremos el genero de la app
          .addField('URL de la APP', res.url)//agregamos otro field en la que sacaremos el link directo a la app
          .addField('Creador', 'Nombre: ' + res.developer + '\n' + 'Correo: ' + res.developerEmail + '\n' + 'Sitio Web: ' + res.developerWebsite + '\n' + 'Dirección: ' + res.developerAddress + '\nID: ' + res.developerId)//haora agregamos otro field pero en este sacaremos todos los datos de desarrollador 
          .addField('Descripción', res.recentChanges)//agregamos otro field en la que pondremos la descripcion de la app 
          .setFooter('Info by 1ly4s0')//agregamos un frooter que es un anticopy paste xd
          .setTimestamp()//y agregamos un timestamp que sera el tiempo en el que se solicito el embed
        message.channel.send(embed)//por ultimo enviamos al canal donde se solicito el comando el embed 
        //pues eso seria todo recuerda que si quieres ver todo lo que se puede hacer usa console.log(res)
      }).catch(error => {//si da error en la busqueda porque no encontro la app
        message.channel.send('perdon no encontre ' + busqueda)//returnamos un mensaje disiendole que no encontro la app
      })//cerramos esa funcion
    })
    
    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)


  }
});


client.on('message', async message => {
  if (message.content.startsWith(prefix + 'decir')) {
    if (message.author.bot) return;
    const discordTTS = require("discord-tts-spanish"); // vamos a requerir del siguiente modulo, npm i discord-tts

      let id = ["728512788984758282"]
      
    if (id.some(id => message.author.id == id)) {

      const embed = new Discord.MessageEmbed() //creamos el embed
        .setDescription('Estás baneado de este comando, por favor, comúnicate con el creador para solucionar el problema.')
        .setColor("RED")
      return message.channel.send(embed) //lo enviamos
    }

    const voiceChannel = message.member.voice.channel; // Una const para saber si el usuario entro a un canal de voz
    const args = message.content.trim().split(/ +/g);
    const decir = args.slice(1).join(' ');// Una const para definir lor argumentos a decir / escribir

    if (!voiceChannel) return message.channel.send('**<a:No:769884924995829800> | Entra a un canal de voz y vuelve a intentarlo.**') // Si la const voiceChannel es false retorna este mensaje

    if (!decir) return message.channel.send('**<a:No:769884924995829800> | ¿Que quieres que diga?**') // Si la const decir es false retorna este mensaje

    voiceChannel.join().then(connection => {
      const stream = discordTTS.getVoiceStream(decir); // Hacemos una const para conectar con discord-tts y dentro ponemos >decir>(los argumentos que se escucharan) 
      const dispatcher = connection.play(stream);// Hacemos la conexion y lo reproducimos
      dispatcher.on("finish", () => voiceChannel.leave())// Cuando finalize el tts el bot saldra automaticamente del canal
    })
    
    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
  }
})
const emojis = ["👍", "👎", "❔", "🤔", "🙄", "❌"];
const isPlaying = new Set();
const { Aki } = require("aki-api");
const { get } = require('superagent');
client
  .on("ready", () => console.log("Ready!"))
  .on("message", async message => {
    if (message.author.bot || !message.guild) return;

    if (!message.content.startsWith(prefix + "aki")) return;

    if (isPlaying.has(message.author.id)) {
      return message.channel.send(":x: | La partida ya empezó");
    }

    isPlaying.add(message.author.id);
    const region = 'es';

    const aki = new Aki({ region }); // Full languages list at: https://github.com/jgoralcz/aki-api

    await aki.start();

    const msg = await message.channel.send(new Discord.MessageEmbed()
      .setTitle(`${message.author.username}, Pregunta ${aki.currentStep + 1}`)
      .setColor("RANDOM")
      .setDescription(`**${aki.question}**\n${aki.answers.map((an, i) => `${an} | ${emojis[i]}`).join("\n")}`));

    for (const emoji of emojis) await msg.react(emoji);

    const collector = msg.createReactionCollector((reaction, user) => emojis.includes(reaction.emoji.name) && user.id == message.author.id, {
      time: 60000 * 6
    });

    collector
      .on("end", () => isPlaying.delete(message.author.id))
      .on("collect", async ({
        emoji,
        users
      }) => {
        users.remove(message.author).catch(() => null);

        if (emoji.name == "❌") return collector.stop();

        await aki.step(emojis.indexOf(emoji.name));

        if (aki.progress >= 70 || aki.currentStep >= 78) {

          await aki.win();

          collector.stop();


 message.channel.send(new Discord.MessageEmbed()
                .setTitle("<a:pensando:953382137317429258> ¿Este es tu personaje?")
                .setDescription(`**${aki.answers[0].name}**\n${aki.answers[0].description}\nY su ranking es **#${aki.answers[0].ranking}**\n\n[si (**y**) / no (**n**)]`)
                .setImage(aki.answers[0].absolute_picture_path)
                .setColor("RANDOM"));
    
              const filter = m => /(yes|no|y|n)/i.test(m.content) && m.author.id == message.author.id;
    
              message.channel.awaitMessages(filter, {
                  max: 1,
                  time: 30000,
                  errors: ["time"]
                })
                .then(collected => {
                  const isWinner = /yes|y/i.test(collected.first().content);
                  message.channel.send(new Discord.MessageEmbed()
                    .setTitle(isWinner ? "Bien! Gané otra vez más" : "Uh, ganaste.")
                    .setColor("RANDOM")
                    .setDescription("¡Me encantó jugar contigo !"));
                }).catch(() => null);
            
            } else {
              msg.edit(new Discord.MessageEmbed()
                .setTitle(`${message.author.username}, Pregunta ${aki.currentStep + 1}`)
                .setColor("RANDOM")
                .setDescription(`**${aki.question}**\n${aki.answers.map((an, i) => `${an} | ${emojis[i]}`).join("\n")}`));
            }
          });
    
    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
  })



client.on("message", (message) => {
  if (message.content.startsWith(prefix + `tempmute`)) {
    const args = message.content.trim().split(/ +/g);
    var muterolename = db.get(`${message.guild.id}-mute`) //Put the name of the muted role

    var muteRole = message.guild.roles.cache.find(r => r.id === muterolename); //Gets data of muted role

    var muteUser = message.mentions.members.first(); //Gets role your trying to mute



    // Conditions
    if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply("<:no:973283751582908426> No tienes permisos para mutear a este usuario.");
    if (!muteUser) return message.reply("Menciona a un usuario válido");
    if (!muteRole) return message.reply("No hay ningun rol establecido, use n!setmuterole @rol");
    if (!message.guild.member(client.user.id).hasPermission("MANAGE_ROLES")) return message.reply("No tengo permisos");

    var prefixLeangth = prefix.length; //Gets lenth of prefix
    var minutes = args[2]; //Time in minutes
    var muteReason = args.slice(3).join(' '); //Gets reason if one is one
    if (!muteReason) return message.channel.send("Especifica una razón")
    if (!minutes) return message.channel.send("Pon un valor, ese valor se especificará en minutos")//Make the reason "No reason given" if field is left empty"

    // Embed
    var muteEmbed = new Discord.MessageEmbed()
    muteEmbed.setTitle("Silencio")
    muteEmbed.addField("Usuario muteado", muteUser)
    muteEmbed.addField("Razón", muteReason)
    muteEmbed.addField("Minutos", minutes)
    muteEmbed.setFooter(`Silenciado por ${message.author.tag}`)
    muteEmbed.setTimestamp();

    message.channel.send(muteEmbed)

    // You need to parse those arguments, I'll leave that to you.

    // Mute the user
    muteUser.roles.add(muteRole, `Fue muteado por ${message.author.tag} por ${minutes} minutos. Razón: ${muteReason}`);
    

    // Unmute them after x minutes
    timeout(minutes, muteUser, muteRole, message)
  }

  function timeout(minutes, muteUser, mutedRole, message) {
    setTimeout(() => {
      muteUser.roles.remove(mutedRole, `Silencio temporal expirado`);


      var muteEmbed = new Discord.MessageEmbed()
      muteEmbed.setTitle("Desmuteado")
      muteEmbed.addField("Fuiste desmuteado", muteUser)
      muteEmbed.addField("Razón", 'Se acabó el timepo')
      muteEmbed.setFooter(`Desmuteao por mí`)
      muteEmbed.setTimestamp();
      message.channel.send(muteEmbed)
    }, minutes * 60000); // time in ms
    
    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)

  }
});
client.on('message', message => { // Hacemos un nuevo evento message (si ya tienes uno ponlo ahi)
  if (message.content.startsWith(prefix + 'roles-pais')) {
    const Embed = new Discord.MessageEmbed()
      .setColor("#00DCC4")
      .setTitle("¿De dónde eres?")
      .setDescription(":flag_es: -> España \n:flag_ar: -> Argentina \n:flag_cl: -> Chile \n:flag_co: -> Colombia \n:flag_cr: -> Costa rica \n:flag_cu: -> Cuba \n:flag_sv: -> El Salvador \n:flag_gt: -> Guatemala \n:flag_hn: -> Honduras \n:flag_mx: -> México \n:flag_pa: -> Panamá \n:flag_pe: -> Perú \n:flag_pr: -> Puerto Rico \n:flag_do: -> República Dominicana \n:flag_uy: -> Uruguay \n:flag_ve: -> Venezuela")
      .setFooter("Hecho con 💚 por 1ly4s0")
    message.channel.send(Embed);
    
    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
  }
});

const { Permissions } = require("discord.js");


client.on('message', message => { // Hacemos un nuevo evento message (si ya tienes uno ponlo ahi)
  if (message.content.startsWith(prefix + 'nuke')) {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('No tienes permisos para usar este comando.')

    message.channel.clone().then(channel => {
      channel.setPosition(message.channel.position)
      const Embed = new Discord.MessageEmbed()
        .setColor("#00DCC4")
        .setTitle("☢️ CANAL NUKEADO ☢️")
        .setDescription(`Nukeado por <@${message.author.id}>`)
        .setImage("https://i.gifer.com/6Ip.gif")
      message.channel.delete()
      channel.send(Embed)

    })
    
    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
  }
});


client.on('message', message => { // Hacemos un nuevo evento message (si ya tienes uno ponlo ahi)
  if (message.content.startsWith(prefix + 'eliminarcanal')) {
    if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('No tienes permisos para usar este comando.')

    message.channel.delete()
    
    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
  }
});

client.on('message', message => { // Hacemos un nuevo evento message (si ya tienes uno ponlo ahi)
  if (message.content.startsWith('n!setwelcome')) {

    const canal = message.mentions.channels.first();

     //definimos la db
    //obtenemos la db

    let permiso = message.member.hasPermission("MANAGE_CHANNELS");


    if (!permiso) return message.reply('No tienes permisos');

    if (!canal) return message.channel.send("Menciona un canal.");

    const Embed = new Discord.MessageEmbed()
      .setColor("#00DCC4")
      .setTitle("BIENVENIDAS")
      .setDescription(`<@${message.author.id}>, El canal de bienvenidas ha sido establecido correctamente \n\n> El canal es: <#${canal.id}>`)

    db.set(`${message.guild.id}-canalinfo`, `${canal.id}`);
    message.channel.send(Embed)
    
    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)



  }
});

client.on('message', message => { // Hacemos un nuevo evento message (si ya tienes uno ponlo ahi)
  if (message.content.startsWith(prefix + 'textsetwelcome')) {

    const args = message.content.trim().split(/ +/g);

    let texto = args.slice(1).join(" ");

     //definimos la db
    //obtenemos la db

    let permiso = message.member.hasPermission("MANAGE_CHANNELS");

    if (!permiso) return message.reply('No tienes permisos');

    if (!texto) return message.channel.send("Pon un texto.");

    const Embed = new Discord.MessageEmbed()
      .setColor("#00DCC4")
      .setTitle("BIENVENIDAS")
      .setDescription(`<@${message.author.id}>, El texto de bienvenidas ha sido establecido correctamente \n\n> El texto es: \n${texto}`)

    db.set(`${message.guild.id}-textoinfo`, `${texto}`);
    message.channel.send(Embed)
    
    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)

  }
});


client.on('message', async message => { // Hacemos un nuevo evento message (si ya tienes uno ponlo ahi)
  if (message.content.startsWith(prefix + 'imgsetwelcome')) {

    const args = message.content.trim().split(/ +/g);

    let imagen = args.slice(1).join(" ");

     //definimos la db//obtenemos la db

    let permiso = message.member.hasPermission("MANAGE_CHANNELS");

    if (!permiso) return message.reply('No tienes permisos');

    if (!imagen) return message.channel.send("Pon un texto.");



    db.set(`${message.guild.id}-imageninfo`, `${imagen}`);

    let imageninfo = await db.get(`${message.guild.id}-imageninfo`);

    const Embed = new Discord.MessageEmbed()
      .setColor("#00DCC4")
      .setTitle("BIENVENIDAS")
      .setDescription(`<@${message.author.id}>,La imagen de bienvenidas ha sido establecida correctamente \n\n> La imagen es:`)
      .setImage(imageninfo)

    message.channel.send(Embed)
    
    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)

  }
});
client.on('message', async message => { // Hacemos un nuevo evento message (si ya tienes uno ponlo ahi)
  if (message.content.startsWith(prefix + 'thumbsetwelcome')) {

    const args = message.content.trim().split(/ +/g);

    let imagen = args.slice(1).join(" ");

     //definimos la db
    //obtenemos la db

    let permiso = message.member.hasPermission("MANAGE_CHANNELS");

    if (!permiso) return message.reply('No tienes permisos');

    if (!imagen) return message.channel.send("Pon un texto.");



    db.set(`${message.guild.id}-thumbinfo`, `${imagen}`);

    let imageninfo = await db.get(`${message.guild.id}-thumbinfo`);

    const Embed = new Discord.MessageEmbed()
      .setColor("#00DCC4")
      .setTitle("BIENVENIDAS")
      .setDescription(`<@${message.author.id}>,La imagen pequeña de bienvenidas ha sido establecida correctamente \n\n> La imagen es:`)
      .setThumbnail(imageninfo)

    message.channel.send(Embed)
    
    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)

  }
});



client.on('message', async message => { // Hacemos un nuevo evento message (si ya tienes uno ponlo ahi)
  if (message.content === prefix + 'welcomeinfo') {


     //definimos la db


    let permiso = message.member.hasPermission("MANAGE_CHANNELS");


    if (!permiso) return message.reply('No tienes permisos');

    let canalinfo = await db.get(`${message.guild.id}-canalinfo`);
    let textoinfo = await db.get(`${message.guild.id}-textoinfo`);
    let imageninfo = await db.get(`${message.guild.id}-imageninfo`);
    let thumbinfo = await db.get(`${message.guild.id}-thumbinfo`);

    const Embed = new Discord.MessageEmbed()
      .setColor("#00DCC4")
      .setTitle("BIENVENIDAS")
      .setDescription(`<@${message.author.id}> La información de bienvenidas es:\n\n> El canal es: <#${canalinfo}> \n\nY el texto que se ha definido es:\n> ${textoinfo} \n\n Y la imagen es:`)
      .setImage(imageninfo)
      .setThumbnail(thumbinfo)

    message.channel.send(Embed)
    
    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)



  }
});


client.on('guildMemberAdd', async (member) => {

   //definimos la db

  let canalinfo = await db.get(`${member.guild.id}-canalinfo`);
  let textoinfo = await db.get(`${member.guild.id}-textoinfo`);
  let imageninfo = await db.get(`${member.guild.id}-imageninfo`);
  let thumbinfo = await db.get(`${member.guild.id}-thumbinfo`);


  if (member.guild.id === member.guild.id) {

    const embed = new Discord.MessageEmbed()

      .setColor("#00DCC4")
      .setTitle(":partying_face: **BIENVENID@** :partying_face:")
      .setDescription(`<@${member.id}>, ${textoinfo}`)
      .setImage(imageninfo)
      .setThumbnail(thumbinfo)
      .setTimestamp()
    client.channels.cache.get(canalinfo).send(embed)
    
    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
  }
});


client.on('message', async message => { // Hacemos un nuevo evento message (si ya tienes uno ponlo ahi)
  if (message.content.startsWith(prefix + 'addemoji')) {
    if (message.author.bot) return;
    const args = message.content.trim().split(/ +/g);

    let nombre = args[1];
    let imagen = args.slice(2).join(" ");


    let permiso = message.member.hasPermission("MANAGE_EMOJIS");

    if (!permiso) return message.reply('No tienes permisos');

    if (!nombre) return message.channel.send("Pon un nombre para el emoji.");
    if (!imagen) return message.channel.send("Pon un enlace.");


    try {

    message.guild.emojis.create(`${imagen}`, `${nombre}`)

    const Embed1 = new Discord.MessageEmbed()
      .setColor("#00DCC4")
      .setTitle("Añadir Emoji")
      .setDescription(`> <:adv:980146819168350249> | Se está añadiendo el emoji, por favor, espere...`)
     let mensaje = await  message.channel.send(Embed1)
      
    const Embed = new Discord.MessageEmbed()
      .setColor("#00DCC4")
      .setTitle("Añadir Emoji")
      .setDescription(`> <@${message.author.id}>, El emoji  ha sido establecido correctamente.`)

      
      setTimeout(function() {
        mensaje.edit(Embed)
      }, 3000);


    } catch (e) {
      message.channel.send("**Error al establecerlo, pueden ser estos problemas:** \n⬩ No tengo permisos. \n⬩ El emoji es demasiado pesado \n⬩ Hay otro con otro nombre igual \n⬩ El formato no es compatible (preferiblemente usar png o jpg) \n⬩ La imagen no existe")
      }
      







    
    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)

  }
});

client.on('message', async message => { // Hacemos un nuevo evento message (si ya tienes uno ponlo ahi)
  if (message.content.startsWith(prefix + 'inhosting')) {

    const args = message.content.trim().split(/ +/g);

    let usuario = args[1];
    let contraseña = args[2];
    let mencionado = message.mentions.users.first();
    const Embed1 = new Discord.MessageEmbed()
      .setColor("#00DCC4")
      .setTitle("<:industrialhosting:939982868820664370> Industrial Hosting")
      .setDescription(`Pon un usuario.\nHazlo más o menos así: \nn!inhosting prueba123 prueba123 <@${message.author.id}>`)

    const Embed2 = new Discord.MessageEmbed()
      .setColor("#00DCC4")
      .setTitle("<:industrialhosting:939982868820664370> Industrial Hosting")
      .setDescription(`Pon una contraseña.\nHazlo más o menos así: \nn!inhosting prueba123 prueba123 <@${message.author.id}>`)

    const Embed3 = new Discord.MessageEmbed()
      .setColor("#00DCC4")
      .setTitle("<:industrialhosting:939982868820664370> Industrial Hosting")
      .setDescription(`Menciona a alguien. \nHazlo más o menos así: \nn!inhosting prueba123 prueba123 <@${message.author.id}>`)

    if (!usuario) return message.channel.send(Embed1)
    if (!contraseña) return message.channel.send(Embed2)
    if (!mencionado) return message.channel.send(Embed3)

    const Embed4 = new Discord.MessageEmbed()
      .setColor("#00DCC4")
      .setTitle("<:industrialhosting:939982868820664370> Industrial Hosting")
      .setDescription(`> Felicidades! \n> Tu servidor ha sido configurado correctamente! \n> Si tienes alguna duda/problema, recuerda que puedes responder a este mensaje o mencionar a algún CEO. \n\n> Los datos de acceso son: \n> Correo: ||${usuario}|| \n> Contraseña: ||${contraseña}|| \n> Recuerda que para iniciar sesión necesitas ir a http://51.222.52.92/auth/login \n\n> Tengas un buen día ;).`)

    message.channel.send(Embed4)
    message.channel.send(`<@${mencionado.id}>`)
    message.delete();

  }
});




client.on('message', message => { // Hacemos un nuevo evento message (si ya tienes uno ponlo ahi)
  if (message.content.startsWith('n!canalsugerencias')) {

    const canal = message.mentions.channels.first();

     //definimos la db
    //obtenemos la db

    let permiso = message.member.hasPermission("MANAGE_CHANNELS");


    if (!permiso) return message.reply('No tienes permisos');

    if (!canal) return message.channel.send("Menciona un canal.");

    const Embed = new Discord.MessageEmbed()
      .setColor("#00DCC4")
      .setTitle("Sugerencias")
      .setDescription(`<@${message.author.id}>, El canal de sugerencias ha sido establecido correctamente \n\n> El canal es: <#${canal.id}>`)

    db.set(`${message.guild.id}-sugerencias`, `${canal.id}`);
    message.channel.send(Embed)
    
    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)



  }
});


client.on('message', async message => { // Hacemos un nuevo evento message (si ya tienes uno ponlo ahi)
  if (message.content.startsWith('n!sugerir')){


     //definimos la db

    const args = message.content.trim().split(/ +/g);
    let sayMsg = args.slice(1).join(" ");
    if(!sayMsg) return message.channel.send("Pon un texto para la sugerencia")




    let canalinfo = await db.get(`${message.guild.id}-sugerencias`);

    const Embed = new Discord.MessageEmbed()
      .setColor("#00DCC4")
      .setTitle("¡Nueva sugerencia!")
      .setDescription(`> ⬩ **Sugeridor:** \n**<@${message.author.id}>**\n\n> ⬩ **Sugerencia:** \n${sayMsg}`)

      let si = new MessageButton()
      .setStyle("grey")
      .setEmoji(`971080303789625425`)
      .setID("si_sug")

      let no = new MessageButton()
      .setStyle("grey")
      .setEmoji(`973283751582908426`)
      .setID("no_sug")


      let row = new MessageActionRow()
      .addComponents(si, no);





      let enviado = await client.channels.cache.get(canalinfo).send(Embed, row)
      await db.set(`${enviado.id}-sug`, message.author.id)
    message.react("<:check:971080303789625425>")
    message.react("<:no:973283751582908426>")

          const EmbedSolicitado = new Discord.MessageEmbed()
      .setTitle("<:check:971080303789625425> ¡Sugerencia solicitada!")
      .setDescription(`<a:cargando:953354699799674940> <@${message.author.id}> En breves recibirás una respuesta.`)
      .setColor("GREEN")
      let mensaje = await message.channel.send(EmbedSolicitado);

    setTimeout(function(){ 
    mensaje.delete();
 }, 7000);
    
    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)



  }
});

      


client.on('clickButton', async (button) => {
  	if (button.id == "si_sug") {
      

      let idusuario = await db.get(`${button.message.id}-sug`)




      const EmbedAceptado = new Discord.MessageEmbed()
      .setTitle("Solicitud de sugerencia")
      .setDescription(`🥳 ¡Tu solicitud de sugerencia ha sido aceptada!`)
      .setColor("GREEN")
      
      client.users.fetch(idusuario).then((user) => user.send(EmbedAceptado))
      
    }

    if (button.id == "no_sug") {
      

      let idusuario = await db.get(`${button.message.id}-sug`)

      const EmbedRechazado = new Discord.MessageEmbed()
      .setTitle("Solicitud de sugerencia")
      .setDescription("¡Tu solicitud de sugerencia ha sido rechazada!")
      .setColor("RED")

      client.users.fetch(idusuario).then((user) => user.send(EmbedRechazado))
      
    }
})

client.on('message', async message => { // Hacemos un nuevo evento message (si ya tienes uno ponlo ahi)
  if (message.content.startsWith('n!rechazar')){


    const args = message.content.trim().split(/ +/g);

let usuario = message.mentions.users.first();
if(!usuario) return message.channel.send("Menciona a alguien.")


    
    let sayMsg = args.slice(2).join(" ");
    if(!sayMsg) return message.channel.send("Pon un texto para la sugerencia")

    message.react("✅")


    const Embed = new Discord.MessageEmbed()
      .setColor("#00DCC4")
      .setTitle("Rechazo de tu sugerencia")
      .setDescription(`> Staff: **<@${message.author.id}>**\n\n> Razón: ${sayMsg}`)
    usuario.send(Embed)
    message.channel.send("Enviado!")
    
    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)



  }
});

/*
client.on('clickButton', async (button) => {
  	if (button.id == "si_sug") {
      
      const args = button.message.content.trim().split(/ +/g);
      let idusuario = await db.get(`${button.message.id}-sug`)

      await button.clicker.fetch()

      button.channel.send("Envía una razón por la cual aceptaste la sugerencia. \n_Recuerda que tienes solo 30 segundos, y recuerda de escribir bien._")
      button.channel.awaitMessages(m => m.author.id == button.clicker.author.id,
    { max: 1, time: 30000 }).then(collected => {
        let mensaje = args.slice(0).join(" ")
        

          
        } else if(mensaje) 
            
                  const EmbedAceptado = new Discord.MessageEmbed()
      .setTitle("Solicitud de sugerencia")
      .setDescription(`🥳 ¡Tu solicitud de sugerencia ha sido aceptada! \n\nRazón: ${mensaje}`)
      .setColor("GREEN")
      
      client.users.fetch(idusuario).then((user) => user.send(EmbedAceptado))
         
    ).catch(() => {
        message.reply('No has resondido a la sugerencia durante 30 segundos. La sugerencia ha sido cancelada');
    });*/

client.on('message', async message => { // Hacemos un nuevo evento message (si ya tienes uno ponlo ahi)
  if (message.content.startsWith('n!aceptar')){


  let usuario = message.mentions.users.first();
    if(!usuario) return message.channel.send("Menciona a alguien.")

    const args = message.content.trim().split(/ +/g);
    let sayMsg = args.slice(2).join(" ");
    if(!sayMsg) return message.channel.send("Pon un texto para la sugerencia")

    message.react("✅")




    const Embed = new Discord.MessageEmbed()
      .setColor("#00DCC4")
      .setTitle("Aceptación de tu sugerencia")
      .setDescription(`> Staff: **<@${message.author.id}>**\n\n> Razón: ${sayMsg}`)

    usuario.send(Embed)
    message.channel.send("Enviado!")
    
    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)



  }
});

client.on("message", (message) => {
  if (message.content === "n!banana") {
          let usuario = message.author;
          let numeros = ["9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"]
      const mide = numeros[Math.floor(Math.random() * numeros.length)];
    const Embed = new Discord.MessageEmbed()
    .setTitle(`La banana de ${usuario.username} mide ${mide} cm`)
    .setImage("https://cdn.discordapp.com/attachments/755529601333067940/853072892702490624/banana.png")
    message.channel.send(Embed)
    
    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
  }
});


client.on("message", async (message) => {
  if (message.content.startsWith('n!antilinks')){

    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("No tienes permisos")
    
    const args = message.content.trim().split(/ +/g);

    const ErrorEmbed = new Discord.MessageEmbed()
    .setTitle("Error")
    .setDescription("Pon una opción válida: Ejemplo:")
    .setImage("https://cdn.discordapp.com/attachments/933698201486237716/973289761827610674/unknown.png")

    
    let estado = args.slice(1).join(" ");
    if(!estado) return message.channel.send(ErrorEmbed)

    if(estado == "on")
    {
    
    db.set(`${message.guild.id}`, "on")
      const Embedon = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setTitle("Antienlaces")
      .setDescription(`> <:check:971080303789625425> Se estableció correctamente el antienlaces. \n\n> **Status:** Activado <:check:971080303789625425>`)
      .setFooter("A partir de ahora, cualquier enlace lo eliminaré")
      message.channel.send(Embedon);
    }

    if(estado == "off")
    {
    
    db.set(`${message.guild.id}`, "off")
      const Embedoff = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setTitle("Antienlaces")
      .setDescription(`> <:check:971080303789625425> Se estableció correctamente el antienlaces. \n\n> **Status:** Desactivado <:no:973283751582908426>`)
      .setFooter("A partir de ahora, cualquier enlace lo ignoraré")
      message.channel.send(Embedoff);
    }
    
    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
    
  }
})

client.on('message', async message => {
    
    if(message.content.startsWith("https://")) {
    if(message.member.hasPermission('MANAGE_MESSAGES')) return;
    const sitiene = await db.get(message.guild.id);
    const Embed = new Discord.MessageEmbed()
      .setAuthor(message.author.tag)
      .setTitle("Antienlaces")
      .setDescription("Has enviado un enlace, y en el servidor está configurado que no se envien enlaces.")
      .setColor("RED")
      
      if(sitiene == "off") return;
      if(!sitiene) return;
      if(sitiene == "null") return;
      if(sitiene == null) return;
      if(sitiene == "on")
      {
        message.delete();
        message.channel.send(Embed)
      }
    }

      if(message.content.startsWith("http://")) {
    if(message.member.hasPermission('MANAGE_MESSAGES')) return;
    const sitiene = await db.get(message.guild.id);
    const Embed = new Discord.MessageEmbed()
      .setAuthor(message.author)
      .setTitle("Antienlaces")
      .setDescription("Has enviado un enlace, y en el servidor está configurado que no se envien enlaces.")
      .setColor("RED")
      
      if(sitiene == "off") return;
      if(!sitiene) return;
      if(sitiene == "null") return;
      if(sitiene == null) return;
      if(sitiene == "on")
      {
        message.delete();
        message.channel.send(Embed)
      }
    }



      if(message.content.startsWith("discord.gg")) {
    if(message.member.hasPermission('MANAGE_MESSAGES')) return;
    const sitiene = await db.get(message.guild.id);
    const Embed = new Discord.MessageEmbed()
      .setAuthor(message.author)
      .setTitle("Antienlaces")
      .setDescription("Has enviado un enlace de un servidor, y en el servidor está configurado que no se envien enlaces.")
      .setColor("RED")
      
      if(sitiene == "off") return;
      if(!sitiene) return;
      if(sitiene == "null") return;
      if(sitiene == null) return;
      if(sitiene == "on")
      {
        message.delete();
        message.channel.send(Embed)
      }
    }
  
})

client.on('message', async message => { // Hacemos un nuevo evento message (si ya tienes uno ponlo ahi)
  if (message.content.startsWith(prefix + 'imgranking')) {

    const args = message.content.trim().split(/ +/g);

    let imagen = args.slice(1).join(" ");

     //definimos la db//obtenemos la db

    let permiso = message.member.hasPermission("MANAGE_CHANNELS");

    if (!permiso) return message.reply('No tienes permisos');

    if (!imagen) return message.channel.send("Pon un texto.");



    db.set(`${message.guild.id}-imagen-rank`, `${imagen}`);

    let imageninfo = await db.get(`${message.guild.id}-imagen-rank`);

    const Embed = new Discord.MessageEmbed()
      .setColor("#00DCC4")
      .setTitle("Imagen de ranking")
      .setDescription(`<@${message.author.id}>,La imagen del fondo de ranking ha sido establecida correctamente \n\n> La imagen es:`)
      .setImage(imageninfo)

    message.channel.send(Embed)

  }
});


client.on("message", async (message, guild) => {
  
// deleting his afk if he send a msg
  
    if(!db.has(`afk-${message.author.id}`)) return; // if he has afk
      const oldReason = db.get(`afk-${message.author.id}`) // get the reason
      db.delete(`afk-${message.author.id}`) // delete it after u get it


        const Embed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setTitle("AFK")
      .setDescription(`<@${message.author.id}>, Ya no estás AFK ya que veo que volviste, ahora ya pueden mencionarte. La razón de tu AFK era: \n\n > **${oldReason}**`)
  message.channel.send(Embed)


})
client.on("message", async message => {
  const mencionado = message.mentions.members.first()
    
    if(!db.has(`afk-${mencionado.id}`)) return; // aca es


      const Embed = new Discord.MessageEmbed()
      .setColor("YELLOW")
      .setDescription(`<@${message.author.id}>, ** ${mencionado.user.username} **Está AFK, no lo molestes \n\n> Razón: : **${db.get(`afk-${mencionado.id}`)}**`)

let enviado = await message.channel.send(Embed)
        setTimeout(function() {
          enviado.delete();
          
        }, 5000)
})


client.on("message", async message =>{
  if(message.content.startsWith("n!afk")) {
    
    const args = message.content.trim().split(/ +/g);

    let razon = args.slice(1).join(" ");
    if(!razon){
      razon = "No especificado"
    } 
    
    await db.set(`afk-${message.author.id}`, razon)
        const Embed = new Discord.MessageEmbed()
      .setColor("RED")
      .setAuthor(message.author.tag)
      .setTitle("AFK")
      .setDescription(`> **Ahora estás AFK.** \n\n> **Razón del AFK es:**  _${razon}_`)
    .setThumbnail(message.author.displayAvatarURL({ dynamic: true, size: 512 }))
    .setFooter("Avisaré a los que te mencionen")
    const Embed1 = new Discord.MessageEmbed()
    .setTitle("AFK")
    .setDescription("<:adv:980146819168350249> | Se está estableciendo tu AFK, por favor, espere...")
      .setColor("YELLOW")
    .setFooter("Esto se hace para evitar colapsar al BOT")
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true, size: 512 }))
        let mensaje = await message.channel.send(Embed1)
  setTimeout(function(){ 
    mensaje.edit(Embed)
 }, 5000)

/*
let sent = await message.channel.send(Embed).then((msg) => {
        setTimeout(function() {
          sent.delete();
          })
        }, 5000)
*/  
    
    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
    
  }
})

client.on("message", async message => {
  if(message.content.startsWith("estoy afk?")) {
    
    const args = message.content.trim().split(/ +/g);

  
    let razon = await db.get(`afk-${message.author.id}`)
    if(!razon) return message.channel.send("No, no estás afk")
    const Embed = new Discord.MessageEmbed()
      .setColor("YELLOW")
      .setTitle("AFK")
      .setDescription(`<@${message.author.id}>, > En la DB (base de datos) sale que estás AFK, la razón del AFK es:\n\n> **${razon}**`)
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true, size: 512 }))
message.channel.send(Embed)
    
    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
    
  }
}) 


client.on("message", (message) => {
	if (message.author.bot) return;

	const messageArray = message.content.split(' ');
	const cmd = messageArray[0];
	const args = messageArray.slice(1);

	if (message.author.bot || message.channel.type === 'dm') return;
	const prefix = "n!";
	
	let discord = "Discord oficial: https://discord.gg/6NHZDRcQFq";
	
	const ReportEmbed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle("¡Hola!")
	.setDescription(`> ¡Hola! Soy __**NEO**__, un bot de diversión, información y moderación. \n> Si necesitas ayuda con los comandos, puedes usar el comando **n!help** para enseñarte una lista de comandos. \n\n> El servidor actual estoy es **${message.guild.name}** \n> Eso significa que el prefix que estoy usando actualmente es **n!** \n\n¡Espero serte de gran ayuda en tu servidor!`)
	.setImage("https://cdn.discordapp.com/attachments/933698201486237716/978217635500130344/standard_2.gif")

	if (message.content.match(new RegExp(`^<@!?933068045415485460>( |)$`))) return message.channel.send(ReportEmbed, "Discord oficial: https://discord.gg/6NHZDRcQFq")
    
	if (!message.content.startsWith(prefix)) return;
    
    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
  
});









client.on("ready", () => {
  console.log("Estado, listo!");
    client.user.setActivity(`Mantenimiento... || Estoy en ${client.guilds.cache.size} servers`);
//client.user.setActivity(`Se detectaron errores en NEO y permanecerá inactivo temporalmente || Reparando...`);


  });
  



 const akaneko = require("akaneko"); //Definimos 
///El npm tiene una variedad de herramientas nsfw que podras encontrarlas en la descripcion de la npm 


client.on('message', async (message) => {
	if (message.content.startsWith("n!school")){

let school = await akaneko.nsfw.school();//puedes poner diferentes "let yuri o la opcion que mas te gusto = await akaneko.nsfw.Tu eleccion"
 const embed = new Discord.MessageEmbed()///Creamos un embed
.setTitle("Puedes modificar esto a tu gusto")
.setImage(`${school}`)//este caso elegi esa opcion pero puedes modificarla " let tu elecciÃ³n = await akaneko.nsfw.yuri(); const embed = new Discord.MessageEmbed .setTitle`${tu elecciÃ³n}`".
 .setColor("RANDOM") //Puedes colocar las diferentes variables
    if (!message.channel.nsfw)
      return message.channel.send(
        "El canal no es NSFW 😂"
      );///Si el canal no es NSFW que nos retorne un mensaje
message.channel.send(embed);///Enviamos
    
    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
}
});



client.on("message", async message => {
    if(message.content.startsWith("n!añadirpremium")) {
      let id = ["534767171579019266", "506103750600163380"]
      
    if (!id.some(id => message.author.id == id)) {

      const embed = new Discord.MessageEmbed() //creamos el embed
        .setDescription('Solo el developer y ayudantes del bot pueden usar este comando.')
        .setColor("RED")
      return message.channel.send(embed) //lo enviamos
    }
      
    let usuario = message.mentions.users.first();
        
    if(!usuario) return message.channel.send('**:x: Menciona a alguien**')
      
    ;

    db.get("usuarios_premiums")

    const Embed = new Discord.MessageEmbed()
      .setColor('#4C6E70')
      .setDescription(`Nuevo usuario premium, ¡Felicidades <@${usuario.id}>!`)
  
    let premiums = await db.get("usuarios_premium");
      
//    if(premiums.has(`${usuario.id}`)) return message.channel.send("<:no:973283751582908426> El usuario ya está en la base de datos")
      
    
    await db.push("usuarios_premium", usuario.id);
    message.channel.send(Embed).then(async msg => {
            msg.react("✅")
        })
    }
    }); 

client.on("message", async message => {
    if(message.content.startsWith("n!borrarpremiums")){
      let id = ["534767171579019266", "506103750600163380"]
      
    if (!id.some(id => message.author.id == id)) {

      const embed = new Discord.MessageEmbed() //creamos el embed
        .setDescription('Solo el developer y ayudantes del bot pueden usar este comando.')
        .setColor("RED")
      return message.channel.send(embed) //lo enviamos
    }
      
      db.delete("usuarios_premium")
      db.set("usuarios_premium", ["534767171579019266", "506103750600163380"])

      message.channel.send("valores cambiados")
    }
})

client.on("message", async message => {
    if(message.content.startsWith("n!borrarranking")){
      let id = ["534767171579019266", "506103750600163380"]
      
    if (!id.some(id => message.author.id == id)) {

      const embed = new Discord.MessageEmbed() //creamos el embed
        .setDescription('Solo el developer y ayudantes del bot pueden usar este comando.')
        .setColor("RED")
      return message.channel.send(embed) //lo enviamos
    }
      
      db.delete("usuarios_premium")
      db.set("usuarios_premium", ["534767171579019266", "506103750600163380"])

      message.channel.send("valores cambiados")
    }
})
client.on("message", async message => {
    if(message.content.startsWith("n!premiums")){

    let id = ["534767171579019266", "506103750600163380"]
      
    if (!id.some(id => message.author.id == id)) {

      const embed = new Discord.MessageEmbed() //creamos el embed
        .setDescription('Solo el developer y ayudantes del bot pueden usar este comando.')
        .setColor("RED")

      return message.channel.send(embed) //lo enviamos
    }

      ;
      let premiums = await db.get('usuarios_premium').join("\n > ⬩ ");

      const embed1 = new Discord.MessageEmbed() 
      .setDescription('Nadie es premium actualmente')
      .setColor("RED")

      const embed2 = new Discord.MessageEmbed() 
      .setDescription('> La gente premium que hay actualmente son :\n\n' + "> ⬩ " +`${premiums}`)
      .setColor("EFD200")
      

      if(!premiums) return message.channel.send(embed1)
      else  message.channel.send(embed2)
    }
})

const snipes = new Discord.Collection()
const snipesunix = new Discord.Collection()

client.on('messageDelete', function(message, channel){
    if (message.author.bot) return;
  snipes.set(message.channel.id, message)
  snipesunix.set(message.channel.id, Math.round(message.createdTimestamp / 1000))
});

client.on('message', async (message) => {
	if (message.content.startsWith("n!snipe")){

    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("No tienes permisos")
    
    let snipe = snipes.get(message.channel.id)
    let unix = snipesunix.get(message.channel.id)

    const Embed = new Discord.MessageEmbed()
    .setColor("RED")
    .setTitle("ERROR")
    .setDescription(`<:no:973283751582908426> No hay mensajes eliminados recientemente.`)
    if(!snipe) return message.channel.send(Embed)

    const snipeEmbed = new Discord.MessageEmbed()
    .setAuthor(`${snipe.author.tag}`, snipe.author.displayAvatarURL({dynamic: true}))
    .setColor("BLURPLE")
    .setDescription(`> **Mensaje eliminado en <#${message.channel.id}>** \n\n> **Mensaje:** ${snipe.content} \n\n> Eliminado: <t:${unix}:R>`)
    message.channel.send(snipeEmbed)
    
}
});

client.on("message", async message => {
    if(message.content.startsWith("n!solicitarpremium")){

      
      
      const args = message.content.trim().split(/ +/g);
      
      let razon = args.slice(1).join(" ");
      if(!razon) return message.channel.send("Pon un mensaje  al creador para que acepte tu premium.")

      
      let ilyas = client.users.cache.find(user => user.id === '534767171579019266');
      let solicitud = new Discord.MessageEmbed()
      .setTitle(`Solicitud de Premium`)
      .setDescription(`**⬩ Solicitante:** \n${message.author.tag} \n\n**⬩ Razón:** \n${razon}`)
      .setColor("EFD200")

          
      let si = new MessageButton()
      .setStyle("grey")
      .setEmoji(`✅`)
      .setID("si_premium")

      let no = new MessageButton()
      .setStyle("grey")
      .setEmoji(`❌`)
      .setID("no_premium")


      let row = new MessageActionRow()
      .addComponents(si, no);

      let enviado = await ilyas.send(solicitud, row)

      await db.set(`${enviado.id}-premium`, message.author.id)

      const EmbedSolicitado = new Discord.MessageEmbed()
      .setTitle("<:check:971080303789625425> Solicitado!")
      .setDescription("En breves recibirás una respuesta.")
      .setColor("GREEN")
      const EmbedEnviando = new Discord.MessageEmbed()
      .setTitle("Solicitando...")
      .setDescription("<:adv:980146819168350249> |  Se está enviando el mensaje al creador....")
        .setFooter("Esto se hace para evitar el lag del BOT")
      .setColor("YELLOW")
      let enviado1 = await message.channel.send(EmbedEnviando);
                setTimeout(() => {
            enviado1.edit(EmbedSolicitado)
          }, 5000);
      
    }
})

client.on('clickButton', async (button) => {
  	if (button.id == "si_premium") {
      

      let idusuario = await db.get(`${button.message.id}-premium`)

      await button.clicker.fetch()
      db.push("usuarios_premium", idusuario)

      const EmbedAceptado = new Discord.MessageEmbed()
      .setTitle("Solicitud de premium")
      .setDescription("<a:tada:982320662364430366> ¡Tu solicitud de premium ha sido aceptada!")
      .setColor("GREEN")
      
      client.users.fetch(idusuario).then((user) => user.send(EmbedAceptado))
      
    }

    if (button.id == "no_premium") {
      

      let idusuario = await db.get(`${button.message.id}-premium`)

      const EmbedRechazado = new Discord.MessageEmbed()
      .setTitle("Solicitud de premium")
      .setDescription("¡Tu solicitud de premium ha sido rechazada!")
      .setColor("RED")

      client.users.fetch(idusuario).then((user) => user.send(EmbedRechazado))
      
    }
})


client.on("message", async (message) => {
  if (message.content.startsWith("n!unban")) {
    
    const EmbedPermisos = new Discord.MessageEmbed()
    .setTitle("Error")
    .setDescription("<:no:973283751582908426> No puedes usar este comando ya que no tienes permisos para **desbanear miembros**")
    .setColor("RED")


    const EmbedNEOPermisos = new Discord.MessageEmbed()
    .setTitle("Error")
    .setDescription("<:no:973283751582908426> No tengo permisos para **desbanear miembros**")
    .setColor("RED")

    const EmbedID = new Discord.MessageEmbed()
    .setTitle("Error")
    .setDescription("<:no:973283751582908426> **Pon una ID**")
    .setColor("RED")

    const EmbedError = new Discord.MessageEmbed()
    .setTitle("Error")
    .setDescription("<:no:973283751582908426> Error, puede ser que la ID sea inválida o que el usuario ya esté desbaneado.")
    .setColor("RED")

    const EmbedNoBaneado = new Discord.MessageEmbed()
    .setTitle("Error")
    .setDescription("<:no:973283751582908426> Este usuario ya está desbaneado.")
    .setColor("RED")

    
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(EmbedPermisos);
    if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send(EmbedNEOPermisos)
    
    const args = message.content.trim().split(/ +/g);

    const miembro = args[1];
    
    if(!miembro) return message.channel.send(EmbedID);
    
    

            
    
    let reason = args.slice(2).join(" ");
    
    if(!reason) reason = 'Sin razón';
    
    message.guild.members.unban(`${miembro}`, `${reason}`)
      .catch(err => {
        if(err) return message.channel.send(EmbedError)
      })
    
            const banembed = new Discord.MessageEmbed()
            .setTitle('Miembro Desbaneado')
            .addField('Usuario baneado:', miembro)
            .addField('Desbaneado por:', message.author)
            .addField('Razón', reason)
            .setFooter('Tiempo desbaneado', client.user.displayAvatarURL())
            .setColor("GREEN")
            .setTimestamp()
    
            message.channel.send(banembed);
    
    
        
    
  }
});




client.on('message', async message => { // Hacemos un nuevo evento message (si ya tienes uno ponlo ahi)
    
    if (message.content.startsWith('n!work')){

      let usuario = message.author;

      let dineroactual = await db.get(`money_${message.guild.id}_${usuario.id}`)
    
      let trabajos = ["Editor", "Cantante", "Profesor", "Vendedor ambulante", "Frutero", "Carnicero", "Leñador", "Programador", "Gestor", "Obrero", "Locutor", "Escritor", "Barbero", "Vendedor", "Frutero", "Lechero", "Policía", "Repartidor", "Vigilante", "Animador", "Cocinero", "Psicólogo", "Periodista", "Arquitecto", "Traductor", "Economista", "Paramédico", "Músico", "Taxista", "Bibliotecario"]
      const trabajogenerado = trabajos[Math.floor(Math.random() * trabajos.length)];

      let dinero = ["429", "391", "301", "493", "901", "491", "684", "233", "903", "999", "598", "732", "583", "382", "192", "250", "190", "220", "399", "832", "489", "391", "0", "124", "928", "333", "444", "555", "666", "777", "111", "222", "239", "900", "231", "238", "982", "192", "708", "761", "790", "632", "237", "823", "485", "235", "509", "792"]
      const dinerogenerado = dinero[Math.floor(Math.random() * dinero.length)];
  

      let timeout = 1 * 60000;
      let work = await db.get(`work_${message.guild.id}_${usuario.id}`);

      if (work !== null && timeout - (Date.now() - work) > 0) {
      
        let time = ms(timeout - (Date.now() - work));

        return message.channel.send(`Espera ${time}  antes de volver a trabajar`)
      } else {
        db.add(`money_${message.guild.id}_${usuario.id}`, dinerogenerado);
        db.set(`work_${message.guild.id}_${usuario.id}`, Date.now());


          
      const Embed = new Discord.MessageEmbed()
      .setColor("#00DCC4")
      .setTitle("Trabajo")
      .setDescription(`> <@${usuario.id}>, has trabajado de **${trabajogenerado}**! \n> Y gracias a ello, has ganado **${dinerogenerado}**<:neocoin:951873821932126288>`)

      message.channel.send(Embed)
              }
    
    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
  }
});

client.on('message', async message => { // Hacemos un nuevo evento message (si ya tienes uno ponlo ahi)
  
  if (message.content.startsWith('n!bal')){
    
    let User = message.mentions.users.first() || message.author;

        let bal = await db.fetch(`money_${message.guild.id}_${User.id}`);
        let bank = await db.fetch(`bank_${message.guild.id}_${User.id}`)
        if (bal === null) bal = 0;
        if (bank === null) bank = 0;


        let balanceEmbed = new Discord.MessageEmbed()
            .setTimestamp()
            .setAuthor(User.tag, User.avatarURL({
                dynamic: true
            }))
            .setColor("BLUE")
            .addField("Monedas:", `<:neocoin:951873821932126288> ${bal}`, true)
            .addField("Banco: ", `<:neocoin:951873821932126288> ${bank}`, true)
            .addField("Total:", `<:neocoin:951873821932126288> ${bank + bal}`)
        message.channel.send(balanceEmbed)
    
    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
  }
});
const Long = require('long')

client.on("message", async (message) => {
  if (message.content.startsWith("n!crime")) {

    let payment = Math.floor(Math.random() * 1001) + 250
        
    let percentGenerater = Math.floor(Math.random() * 101)

        if (percentGenerater > 35) {
            let timeout = 5 * 60000;
            let work = await db.fetch(`crime_${message.guild.id}_${message.author.id}`);

            if (work !== null && timeout - (Date.now() - work) > 0) {
                let time = ms(timeout - (Date.now() - work));

                return message.channel.send(`Espera ${time} antes de volver a cometer un delito.`)
            } else {
                db.add(`money_${message.guild.id}_${message.author.id}`, payment);
                db.set(`crime_${message.guild.id}_${message.author.id}`, Date.now());

                let workEmbed = new Discord.MessageEmbed()
                    .setAuthor(message.author.tag, message.author.avatarURL({
                        dynamic: true
                    }))
                    .setDescription("¡Has robado " + payment + '<:neocoin:951873821932126288> del banco!')
                    .setTimestamp()
                    .setColor("GREEN")
                message.channel.send(workEmbed)

            }
        } else {
            let authorsCash = db.fetch(`money_${message.guild.id}_${message.author.id}`)
            let percentAmount = Math.floor(Math.random() * 33)
            let robAmount = Math.floor(authorsCash * (percentAmount) / 100)

            let moneyEmbed = new Discord.MessageEmbed()
                .setColor("RED")
                .setAuthor(message.author.tag, message.author.avatarURL({
                    dynamic: true
                }))
                .setTimestamp()
                .setDescription(`<:no:973283751582908426> Necesitas al menos 100 monedas en tu billetera para robar un banco.`);

            if (authorCash < 100) return message.channel.send(moneyEmbed)

            db.subtract(`money_${message.guild.id}_${message.author.id}`, robAmount)
            db.set(`crime_${message.guild.id}_${message.author.id}`, Date.now())

                let embed = new Discord.MessageEmbed()
                .setTitle('¡Fallido!')
                .setColor("RED")
                .setDescription(`¡Un policía te atrapó mientras robabas el banco! Fuiste multado con ${robAmount} <:neocoin:951873821932126288>!`)
                .setFooter(message.client.user.username, message.client.user.displayAvatarURL({
                    dynamic: true
                }))
            message.channel.send(embed)
        }
    
    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
  }
});

client.on("message", async (message) => {
  if (message.content.startsWith("n!rob")) {



        let usuario = message.mentions.members.first();

                  let RobarATiMismo = new Discord.MessageEmbed()
                .setColor("RED")
                .setAuthor(message.author.tag, message.author.avatarURL({
                    dynamic: true
                }))
                .setTimestamp()
                .setDescription(`<:no:973283751582908426> No puedes robarte a ti mismo :joy:`);

        if(usuario.id === message.author.id) return message.channel.send(RobarATiMismo)

        let noUserEmbed = new Discord.MessageEmbed()
            .setAuthor(message.author.username, message.author.avatarURL({
                dynamic: true
            }))
            .setColor("RED")
            .addField('Uso:', '`n!rob @usuario`')
        if (!usuario) return message.channel.send(noUserEmbed)

        let usersCash = await db.get(`money_${message.guild.id}_${usuario.id}`)
        let authorCash = await db.get(`money_${message.guild.id}_${message.author.id}`)
        let author = await db.get(`rob_${message.guild.id}_${usuario.id}`)

        let timeout = 1 * 60000;






        
            if (author !== null && timeout - (Date.now() - author) > 0) {
              let time = ms(timeout - (Date.now() - work));
                  
              let timeEmbed = new Discord.MessageEmbed()
              .setColor("RED")
              .setAuthor(message.author.tag, message.author.avatarURL({
                  dynamic: true
                }))
              .setTimestamp()
              .setDescription(`<:no:973283751582908426> Ya has robado a alguien, ínténtalo de nuevo en ${time} `);
                  
                return message.channel.send(timeEmbed)
            }

            
                let moneyEmbed2 = new Discord.MessageEmbed()
                    .setColor("RED")
                    .setAuthor(message.author.tag, message.author.avatarURL({
                        dynamic: true
                    }))
                    .setTimestamp()
                    .setDescription(`<:no:973283751582908426> ${usuario.user.username} no tiene nada que puedas robar`);
          
            if (usersCash <= 0) return message.channel.send(moneyEmbed2)
          

            let moneyEmbed = new Discord.MessageEmbed()
                .setColor("RED")
                .setAuthor(message.author.tag, message.author.avatarURL({
                    dynamic: true
                }))
                .setTimestamp()
                .setDescription(`<:no:973283751582908426> Necesitas al menos 200 monedas en tu billetera para robarle a alguien`);

            if (authorCash < 200) return message.channel.send(moneyEmbed)

            


            let percentAmount = Math.floor(Math.random() * 43)
            let robAmount = Math.floor(usersCash * (percentAmount) / 100)
            db.subtract(`money_${message.guild.id}_${usuario.id}`, robAmount)
            db.add(`money_${message.guild.id}_${message.author.id}`, robAmount)
            db.set(`rob_${message.guild.id}_${usuario.id}`, Date.now())

            let embed = new Discord.MessageEmbed()
                .setDescription(`<:check:971080303789625425> Has robado ${robAmount}<:neocoin:951873821932126288> de ${usuario.user.tag}`)
                .setColor("GREEN")
                .setAuthor(message.author.tag, message.author.avatarURL({
                    dynamic: true
                }))
                .setTimestamp()
            message.channel.send(embed)


        
    
    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
  }
});

      client.on("message", async (message) => {
  if (message.content.startsWith("n!basesdedatos")) {
    let basesdedatos = await db.all();

    message.channel.send(basesdedatos)
    
  }
});

client.on("message", async (message) => {
  if(message.content.startsWith("n!v2userinfo")) {
    const args = message.content.trim().split(/ +/g);
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[1]) || message.member.author; // Definimos usuario, si mencionamos a alguien se obtendra su informacion, si no mencionamos a nadie se obtendra la informacion de "Nosotros"

        let status; // Hacemos un let vacio
        switch (user.presence.status) {// Hacemos un switch de la funcion Presencia
            case "online":// En el caso online..
                status = "🟢 En linea";// hacemos que el status online pase a decir lo siguiente...
                break;
            case "dnd":// En el caso dnd..
                status = "⛔ No molestar";// hacemos que el status dnd pase a decir lo siguiente...
                break;
            case "idle":// En el caso idle..
                status = "🌙 Ausente";// hacemos que el status idle pase a decir lo siguiente...
                break;
            case "offline":// En el caso offline..
                status = "⚪ Desconectado";// hacemos que el status offline pase a decir lo siguiente...
                break;
        }

        const embed = new Discord.MessageEmbed() // Hacemos un nuevo embed
            .setTitle(`Informacion del usuario ${user.user.username}`) // Titulo - Recibimos el "user" y decimos su "username"
            .setColor(`#ff8000`)// Color para hacerlo mas bonito <3
            .setThumbnail(user.user.displayAvatarURL({dynamic : true})) // Un Thumbnail de la foto de perfil del "user".
            .addFields(// Hacemos nuevas Fields
                {
                    name: "Apodo: ",// Nombre - Titulo - Caso 1
                    value: message.member.nickname ? message.member.nickname : "No tiene apodo", // Si el "user" tiene apodo se envia, si es false / no tiene Se envia diciendo que "No tiene Apodo"
                    inline: true // En linea: SI
                },
                {
                    name: "#️⃣ Tag: ",// Nombre - Titulo - Caso 1
                    value: `#${user.user.discriminator}`,// Del "user" sacamos su tag / discriminador
                    inline: true// En linea: SI
                },
                {
                    name: "🆔 ID: ",// Nombre - Titulo - Caso 1
                    value: user.user.id,// Del "user" sacamos su ID
                },
                {
                    name: "Reciente Actividad: ",// Nombre - Titulo - Caso 1
                    value: status,// Acá se obtiene el estado del "user" con los casos ya dichos y explicado anteriormente.
                    inline: true// En linea: SI
                },
                {
                    name: "Estado: ",// Nombre - Titulo - Caso 1
                    value: user.presence.activities[0] ? user.presence.activities[0].state : "Sin estado",// Si el "user" tiene actividad se envia, si no la tiene se envia "Sin Estado"
                    inline: true// En linea: SI
                },
                {
                    name: 'Avatar link: ',// Nombre - Titulo - Caso 1
                    value: `[Pinche Aquí](${user.user.displayAvatarURL()})`// Del "user" obtenemos su Avatar Link, Hacemos que dentro del Array se encuentre el Link y cuando se de Click te reenviara una pagina viendo el avatar del "user"
                },
                {
                    name: 'Dato de creacion: ',// Nombre - Titulo - Caso 1
                    value: user.user.createdAt.toLocaleDateString("es-es"),// Del "user" obtenemos su Fecha de creacion y hacemos que el dato local sea a ES-PE, Esto va en codigo segun por lenguaje - EJEMPLOS: es = español , en = english
                    inline: true// En linea: SI
                },
                {
                    name: 'Fecha de entrada al Servidor: ',// Nombre - Titulo - Caso 1
                    value: user.joinedAt.toLocaleDateString("es-pe"),// Del "user" obtenemos su Fecha de entrada al servidor en donde se envio el mensaje y hacemos que el dato local sea a ES-PE, Esto va en codigo segun por lenguaje - EJEMPLOS: es = español , en = english
                    inline: true// En linea: SI
                },
                {
                    name: 'Roles del usuario: ',// Nombre - Titulo - Caso 1
                    value: user.roles.cache.map(role => role.toString()).join(" ,"),// Del "user" obtenemos sus roles del server y lo mapeamos tambien lo separamos con una coma ","
                    inline: true// En linea: SI
                }
            )

        message.channel.send(embed)// Y enviamos el mensaje

    

  }
})


client.on("message", async (message) => {
  if (message.content.startsWith("n!dep")) {

    const args = message.content.trim().split(/ +/g);

    let User = message.mentions.users.first()



                let pobre = new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL({
                dynamic: true
            }))
            .setDescription(`Pero si estás pobre :joy:, tienes 0 monedas en la billetera`)
            .setTimestamp()
            .setColor("RED")
    let dinero = await db.get(`money_${message.guild.id}_${message.author.id}`);

    if(dinero == "0") return message.channel.send(pobre)
        if (args[1] === "all") {
            let totalCash = db.fetch(`money_${message.guild.id}_${message.author.id}`)

            db.subtract(`money_${message.guild.id}_${message.author.id}`, totalCash);
            db.add(`bank_${message.guild.id}_${message.author.id}`, totalCash);

            let totalEmbed = new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL({
                dynamic: true
            }))
            .setDescription(`<:check:971080303789625425> Has depositado ${totalCash} <:neocoin:951873821932126288> a tu banco!`)
            .setTimestamp()
            .setColor("GREEN")
        message.channel.send(totalEmbed)

        } else {
              if (!Number(args[1])) return message.reply("Tienes que poner un numero");
            let amount = parseInt(args[1])

            let totalAmountInHand = db.fetch(`money_${message.guild.id}_${message.author.id}`)

            if(amount > totalAmountInHand) return message.reply("No tienes tanto en la mano")

            db.subtract(`money_${message.guild.id}_${message.author.id}`, amount);
            db.add(`bank_${message.guild.id}_${message.author.id}`, amount);

            let amountEmbed = new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL({
                dynamic: true
            }))
            .setDescription(`<:check:971080303789625425> Has depositado ${amount} <:neocoin:951873821932126288>`)
            .setTimestamp()
            .setColor("GREEN")
        message.channel.send(amountEmbed)
        }
    
  }
});

client.on("message", async (message) => {
  if (message.content.startsWith("n!with")) {

    const args = message.content.trim().split(/ +/g);

let User = message.mentions.users.first()

        if (args[1] === "all") {
            let totalCash = db.fetch(`bank_${message.guild.id}_${message.author.id}`)
            db.add(`money_${message.guild.id}_${message.author.id}`, totalCash);
            db.subtract(`bank_${message.guild.id}_${message.author.id}`, totalCash);

            let totalEmbed = new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL({
                dynamic: true
            }))
            .setDescription(`<:check:971080303789625425> ¡Retiraste ${totalCash} <:neocoin:951873821932126288> de tu banco!`)
            .setTimestamp()
            .setColor("GREEN")
        message.channel.send(totalEmbed)

        } else if(args[1] === "0") {
          
            let Embed0 = new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL({
                dynamic: true
            }))
            .setDescription(`<:no:973283751582908426> No puedes retirar 0 monedas, no tiene sentido :joy:`)
            .setTimestamp()
            .setColor("RED")

          message.channel.send(Embed0) 
        } else {

          
            let amount = parseInt(args[1])
            
            let bankAmount = db.fetch(`bank_${message.guild.id}_${message.author.id}`)
            if(amount > bankAmount) return message.reply("No tienes nada en el banco :pensive:")

            db.add(`money_${message.guild.id}_${message.author.id}`, amount);
            db.subtract(`bank_${message.guild.id}_${message.author.id}`, amount);

            let amountEmbed = new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL({
                dynamic: true
            }))
            .setDescription(`<:check:971080303789625425> ¡Retiraste ${amount} <:neocoin:951873821932126288> de tu banco!`)
            .setTimestamp()
            .setColor("GREEN")
        message.channel.send(amountEmbed)
        }

      

    
  }
});

client.on("message", async (message) => {
  if (message.content.startsWith("n!setstatus")) {

    let id = ['534767171579019266', '888369001401569300', '761588167483588658'] 

    if (!id.some(id => message.author.id == id)) { 

      const embed = new Discord.MessageEmbed() 
        .setDescription('Solo el developer y ayudantes del bot pueden usar este comando.')
        .setColor("RED")
      return message.channel.send(embed)
    }
  
    const args = message.content.trim().split(/ +/g);

    let status = args.slice(1).join(" ")

    let razon = await db.get("status")

    await db.set("status", status)

    const Embed = new Discord.MessageEmbed()
    .setTitle("Configuración del status")
    .setDescription(`> Se estableció correctamente el status de NEO. \n\n> ⬩ **Anterior status:**\n> ${razon}\n\n> ⬩ **Nuevo status:**\n> ${status} `)
    .setColor("YELLOW")

    message.channel.send(Embed)

    
    
  }
});


client.on("message", async (message) => {

  if (message.content.startsWith(prefix + 'status')) {

    let status = await db.get("status")
    
    const avatarEmbed = new Discord.MessageEmbed()
    .setTitle("Status de NEO")
    .setDescription(`> ⬩ **Status actual de NEO:** \n> ${status}`)
    .setColor("YELLOW")

    message.channel.send(avatarEmbed)

    
    

    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
    
  }
});

const buscador_letra = require("buscador-letra"); //Importar la libreria
 
let buscador = new buscador_letra("CSYyg1BQv-FdL_Q_Qq36VQ_hoAZPpt79e3-Z1GmFAwsBJm09VnGndG8sKYif_mT0"); //Intanciar la libreria
 
client.on("message", async message => { //Crear el evento de mensaje si no lo hay
 
     if (message.content.startsWith(prefix + 'letra')) { //Crear la condición para ejecutar el comando
 
            const args = message.content.trim().split(/ +/g);

    let nombre = args.slice(1).join(" ") //Seleccionar el nombre de la canción
 
        if (!nombre) return message.reply("Introduce un nombre"); //Si no se ha introducido un nombre, notificarlo
 
        let resultados = await buscador.buscar(nombre); //Buscar la canción
 
        if (resultados.length == 0) return message.reply("No se ha encontrado nada"); //Si no hay resultados, notificarlo
 
        let letra = await buscador.letra(resultados[0]); //Obtener la letra
 
        let embed = new discord.RichEmbed() //Crear el embed
        .setColor("RANDOM") //Ponerle un color
        .setTitle(resultados[0].titulo + " de " + resultados[0].artista); //Ponerle un título
 
        if (letra.length <= 2048) embed.setDescription(letra); //Si la letra cabe en la descripción, ponerla
        else { //Si no cabe en la descripción...
            let chunks = letra.match(/[\s\S]{1,1023}/g); //Dividirla en trozos
 
            for (let chunk of chunks) embed.addField("\u200b", chunk, false); //Agregar la canción en diferentes campos
        }
        if (embed.length > 6000) return message.reply("La letra es demasiado larga"); //Si el embed supera el tamaño máximo, notificarlo
       
        return message.reply(embed); //Enviar el embed
    }
})
const DIG = require("discord-image-generation");
client.on("message", async (message) => {

  if (message.content.startsWith(prefix + 'eliminar')) {

    let usuario = message.mentions.users.first() || message.author;

    let avatar = usuario.displayAvatarURL({ dynamic: false, format: 'png' });
        // Make the image
        let img = await new DIG.Delete().getImage(avatar)
        // Add the image as an attachement
        let attach = new Discord.MessageAttachment(img, "delete.png");;
        message.channel.send(attach)


         
    

    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
    
  }
});

client.on("message", async (message) => {

  if (message.content.startsWith(prefix + 'muerto')) {

    let usuario = message.mentions.users.first() || message.author;

    let avatar = usuario.displayAvatarURL({ dynamic: false, format: 'png' });

    const Embed = new Discord.MessageEmbed()
    .setTitle("Generando imagen")
    .setDescription("<:adv:980146819168350249> Generando, por favor, espere....")

    let mensaje = await message.channel.send(Embed);
    
        let img = await new DIG.Rip().getImage(avatar)
        // Add the image as an attachement
        let attach = new Discord.MessageAttachment(img, "delete.png");;
        message.channel.send(attach)

    let embedgenerado = new Discord.MessageEmbed()
    .setDescription("<:check:971080303789625425> Generado!")
    mensaje.edit(embedgenerado)
    


         
    

    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
    
  }
});

  client.on("message", async (message) => {

  if (message.content.startsWith(prefix + 'stonks')) {

    let usuario = message.mentions.users.first() || message.author;

    let avatar = usuario.displayAvatarURL({ dynamic: false, format: 'png' });

    const Embed = new Discord.MessageEmbed()
    .setTitle("Generando imagen")
    .setDescription("<:adv:980146819168350249> Generando, por favor, espere....")

    let mensaje = await message.channel.send(Embed);
    
        let img = await new DIG.Stonk().getImage(avatar)
        // Add the image as an attachement
        let attach = new Discord.MessageAttachment(img, "delete.png");;
        message.channel.send(attach)

    let embedgenerado = new Discord.MessageEmbed()
    .setDescription("<:check:971080303789625425> Generado!")
    mensaje.edit(embedgenerado)
    


         
    

    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
    
  }
});

  client.on("message", async (message) => {

  if (message.content.startsWith(prefix + 'wanted')) {

    let usuario = message.mentions.users.first() || message.author;

    let avatar = usuario.displayAvatarURL({ dynamic: false, format: 'png' });

    const Embed = new Discord.MessageEmbed()
    .setTitle("Generando imagen")
    .setDescription("<:adv:980146819168350249> Generando, por favor, espere....")

    let mensaje = await message.channel.send(Embed);
    
        let img = await new DIG.Wanted().getImage(avatar, "$")
        // Add the image as an attachement
        let attach = new Discord.MessageAttachment(img, "delete.png");;
        message.channel.send(attach)

    let embedgenerado = new Discord.MessageEmbed()
    .setDescription("<:check:971080303789625425> Generado!")
    mensaje.edit(embedgenerado)
    


         
    

    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
    
  }
});

client.on("message", async (message) => {

  if (message.content.startsWith(prefix + 'pintura')) {

    let usuario = message.mentions.users.first() || message.author;

    let avatar = usuario.displayAvatarURL({ dynamic: false, format: 'png' });

    const Embed = new Discord.MessageEmbed()
    .setTitle("Generando imagen")
    .setDescription("<:adv:980146819168350249> Generando, por favor, espere....")

    let mensaje = await message.channel.send(Embed);
    
        let img = await new DIG.Bobross().getImage(avatar)
        // Add the image as an attachement
        let attach = new Discord.MessageAttachment(img, "delete.png");;
        message.channel.send(attach)

    let embedgenerado = new Discord.MessageEmbed()
    .setDescription("<:check:971080303789625425> Generado!")
    mensaje.edit(embedgenerado)
    


         
    

    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
    
  }
});

client.on("message", async (message) => {

  if (message.content.startsWith(prefix + 'anuncio')) {

    let usuario = message.mentions.users.first() || message.author;

    let avatar = usuario.displayAvatarURL({ dynamic: false, format: 'png' });

    const Embed = new Discord.MessageEmbed()
    .setTitle("Generando imagen")
    .setDescription("<:adv:980146819168350249> Generando, por favor, espere....")

    let mensaje = await message.channel.send(Embed);
    
        let img = await new DIG.Ad().getImage(avatar)
        // Add the image as an attachement
        let attach = new Discord.MessageAttachment(img, "delete.png");;
        message.channel.send(attach)

    let embedgenerado = new Discord.MessageEmbed()
    .setDescription("<:check:971080303789625425> Generado!")
    mensaje.edit(embedgenerado)
    


         
    

    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
    
  }
});

client.on("message", async (message) => {

  if (message.content.startsWith(prefix + 'blur')) {

    let usuario = message.mentions.users.first() || message.author;

    let avatar = usuario.displayAvatarURL({ dynamic: false, format: 'png' });

    const Embed = new Discord.MessageEmbed()
    .setTitle("Generando imagen")
    .setDescription("<:adv:980146819168350249> Generando, por favor, espere....")

    let mensaje = await message.channel.send(Embed);
    
        let img = await new DIG.Blur().getImage(avatar)
        // Add the image as an attachement
        let attach = new Discord.MessageAttachment(img, "delete.png");;
        message.channel.send(attach)

    let embedgenerado = new Discord.MessageEmbed()
    .setDescription("<:check:971080303789625425> Generado!")
    mensaje.edit(embedgenerado)
    


         
    

    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
    
  }
});




client.on("message", async (message) => {
  if (message.content.startsWith("n!futbol")) {
    const positions = {
			left: '_ _                   🥅🥅🥅\n_ _                   🕴️\n      \n_ _                         ⚽',
			middle: '_ _                   🥅🥅🥅\n_ _                        🕴️\n      \n_ _                         ⚽',
			right: '_ _                   🥅🥅🥅\n_ _                              🕴️\n      \n_ _                         ⚽',
		};
		let randomized = Math.floor(Math.random() * Object.keys(positions).length);
		let gameEnded = false;
		let randomPos = positions[Object.keys(positions)[randomized]];

		const componentsArray = [
			{
				type: 1,
				components: [
					{
						type: 2,
						style: 'blurple',
						custom_id: 'left',
						label: '↖️',
					},
					{
						type: 2,
						style: 'blurple',
						custom_id: 'middle',
						label: '⏫',
					},
					{
						type: 2,
						style: 'blurple',
						custom_id: 'right',
						label: '↗️',
					},
				],
			},
		];

		const msg = await message.channel.send({
			content: randomPos,
			components: componentsArray,
		});
		function update() {
			randomized = Math.floor(Math.random() * Object.keys(positions).length);
			randomPos = positions[Object.keys(positions)[randomized]];

			msg.edit({
				content: randomPos,
				components: componentsArray,
			});
		}
		setInterval(() => {
			if(gameEnded == false) return update();
		}, 1000);


    
    
    const filter = (button) => button.clicker.user.id === message.author.id;

    const collector = msg.createButtonCollector(filter, { max: 1,  time: 10000 });

    collector.on('collect', async (b) => {
    if(b.id !== Object.keys(positions)[randomized]) {
			gameEnded = true;
			return message.channel.send(`<@${message.author.id}> <a:trofeo:952144000368914493> Has Ganado!`);
		}
		else {
			gameEnded = true;
			return message.channel.send(`<@${message.author.id}> 😔 Perdiste... ¿Otra?`);
		}
      })
    
    
      collector.on("end", async btn => {
        const Embed = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription("Se acabó el partido, ¿quieres jugar una de nuevo?")
        msg.delete()
        
});



  }
});

      const { DiscordMenus, ButtonBuilder, MenuBuilder } = require('discord-menus');


const MenusManager = new DiscordMenus(client);

const myCoolMenu = new MenuBuilder()
    .addLabel('Moderación', { description: 'Comandos de moderación', value: 'value-1' , emoji: { name: '🔨'}})
    .addLabel('Value 2', { description: 'This is the value 2 description', value: 'value-2' })
    .addLabel('Value 3', { description: 'This is the value 3 description (with an emoji)', value: 'value-3', emoji: { name: '🌌'}})
    .setMaxValues(3)
    .setMinValues(1)
    .setCustomID('test')
    .setPlaceHolder('Selecciona una opción');

client.on('message', async (message) => {
    if (message.content === 'n!test') {
        await MenusManager.sendMenu(message, new MessageEmbed().setDescription('Test de comandos'), { menu: myCoolMenu })
    }
});

MenusManager.on('MENU_CLICKED', (menu) => {

  const embed1 = new Discord.MessageEmbed()
      .setAuthor(message.author.username, message.author.avatarURL())
      .setTitle("🔨 Moderación")
      .setDescription('Neo cuenta con muchos comandos de moderación, entre ellos ban, kick, clear o mute.\nLos comandos que tiene són:\n> `n!kick` - Expulsar a un usuario del servidor (incluye razon) \n> `n!clear` - Limpia ciertos mensajes de un canal \n> `n!serverinfo` - Muestra información de un servidor \n> `n!ban` - Banear a un usuario del servidor (incluye razon) \n> `n!mute` - Mutear a un usuario específico  \n> n!tempmute - Mutear a un usuario específico con un tiempo')
      .setColor("BLUE")
      .setImage("https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/611add32e78d0ab99248cb85_0_0_jPRiC20kL0bhaU.jpg")
    menu.reply("asd")
    console.log(menu.values);
  
});



client.on('message', async message => {
    if(message.content.startsWith("n!añadirimagen")) {
          if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No tienes permisos para usar este comando");

    const args = message.content.trim().split(/ +/g);

    let nombre = args[1]
    let imagen = args[2]
    if(!imagen) return message.channel.send("Pon el link de una imagen.")
          if(!nombre) return message.channel.send("Pon el nombre de una imagen.")

    

    await db.set(`${message.guild.id}-${nombre}`, imagen)

    const Embed = new Discord.MessageEmbed()
    .setTitle(`${nombre}`)
    .setDescription(`La imagen **${nombre}** que me has solicitado de guardar ha sido guardada correctamente. \n\nLa imagen es:`)
    .setImage(imagen)
    .setColor("GREEN")

    message.channel.send(Embed)
}
})

client.on('message', async message => {
    if(message.content.startsWith("n!imagen")) {
        const args = message.content.trim().split(/ +/g);

    let nombre = args[1]
    if(!nombre) return message.channel.send("Pon el nombre de la imagen.")

    if(!db.includes(`${message.guild.id}-${nombre}`)) return message.channel.send("El nombre de la Imagen no ha sido encontrado en la base de datos.")

    

    let imagenenviada = await db.get(`${message.guild.id}-${nombre}`)

    const Embed = new Discord.MessageEmbed()
    .setTitle(`${nombre}`)
    .setDescription(`Aquí tienes la imagen **${nombre}** que me has solicitado.`)
    .setImage(imagenenviada)
    .setColor("GREEN")

    message.channel.send(Embed)
}
})

client.on("message", message => {
  if(message.content.startsWith("n!test-setup")) {
    message.channel.send("Hola! Bienvenido al setup del sistema de tickets, ¿qué canal quieres que se asigne? \nTienes 5 segundos")

    var ha_acabado = false;
    var ha_acabado_rol = false;


    const filter = m => (m.author.id == message.author.id && m.mentions.channels);
    const channel = message.channel;
    const collector = channel.createMessageCollector(filter, { time: 5000 });
    console.log("collector started");

    collector.on('collect', m => {
    let canal = m.mentions.channels.first()
    if(!canal) 
    {
        message.channel.send("<:no:973283751582908426> No has mencionado un canal válido. Vuelve a usar el comando y menciona un canal válido..")
    }
    
    if(canal)
    {
        message.channel.send(`<:check:971080303789625425> Bien, el canal establecido es: ${m.content}. Configurado correctamente!`)
        ha_acabado = true;

        message.channel.send("Cual es el rol que quieres que se mencione el el ticket, el mismo será el que porá ver el ticket.")
        const filter1 = m => (m.author.id == message.author.id && m.mentions.roles);
        const channel1 = message.channel;
        const collector1 = channel1.createMessageCollector(filter1, { time: 5000 });
        console.log("collector started");


        collector1.on('collect', m => {
            let rol = m.mentions.roles.first()
            if(!rol) 
            {
                message.channel.send("<:no:973283751582908426> No has mencionado un rol válido. Vuelve a usar el comando y menciona un rol válido..")
            }
            if(rol)
            {
                message.channel.send(`<:check:971080303789625425> Bien, el rol establecido es: ${m.content}. Configurado correctamente!`)
                ha_acabado_rol = true;
            }
        })
    }
        

        collector1.on('end', collected => {
        if(ha_acabado_rol == false) return message.channel.send("No has configurado el rol a tiempo, vuelve a usar el comando.")
        if(ha_acabado_rol = true) return;
        
      })
      })

    
    
    collector.on('end', collected => {
    if(ha_acabado == false) return message.channel.send("No has configurado el canal a tiempo, vuelve a usar el comando.")
    if(ha_acabado = true) return;

    });
  }
})

client.on('message', message => {
	// ...
  if(message.content.startsWith("n!test-stats")) {
		const promises = [
			client.shard.fetchClientValues('guilds.cache.size'),
			client.shard.broadcastEval('this.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)'),
		];

		return Promise.all(promises)
			.then(results => {
				const totalGuilds = results[0].reduce((acc, guildCount) => acc + guildCount, 0);
				const totalMembers = results[1].reduce((acc, memberCount) => acc + memberCount, 0);
				return message.channel.send(`Server count: ${totalGuilds}\nMember count: ${totalMembers}`);
			})
			.catch(console.error);
	}
});

const path = require("path");

client.on('message', async message => {
	// ...
  if(message.content.startsWith("n!test-lb")) {
const Canvas = require('canvas');
 const canvas = Canvas.createCanvas(1634, 980)
    const ctx = canvas.getContext('2d')
    // Load the background image and draw it to the canvas
    const background = await Canvas.loadImage(
      path.join(__dirname, './fondo.jpg')
    )
    let x = 0
    let y = 0
    ctx.drawImage(background, x, y)

        const pfp = await Canvas.loadImage(
      member.user.displayAvatarURL({
        format: 'png',
      })
    )
    x = canvas.width / 2 - pfp.width / 2
    y = 25
    ctx.drawImage(pfp, x, y)

      ctx.fillStyle = '#ffffff' // White text
    ctx.font = '35px sans-serif'
    let text = `Un texto random`
    x = canvas.width / 2 - ctx.measureText(text).width / 2
    ctx.fillText(text, x, 60 + pfp.height)
    // Attach the image to a message and send it
    const attachment = new MessageAttachment(canvas.toBuffer())
    message.channel.send('xd', attachment)
    
	}
});


client.on('message', message => { // Hacemos un nuevo evento message (si ya tienes uno ponlo ahi)
  if (message.content.startsWith('n!canalsugerencias')) {

    const canal = message.mentions.channels.first();

     //definimos la db
    //obtenemos la db

    let permiso = message.member.hasPermission("MANAGE_CHANNELS");


    if (!permiso) return message.reply('No tienes permisos');

    if (!canal) return message.channel.send("Menciona un canal.");

    const Embed = new Discord.MessageEmbed()
      .setColor("#00DCC4")
      .setTitle("Sugerencias")
      .setDescription(`<@${message.author.id}>, El canal de sugerencias ha sido establecido correctamente \n\n> El canal es: <#${canal.id}>`)

    db.set(`${message.guild.id}-sugerencias`, `${canal.id}`);
    message.channel.send(Embed)
    
    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)



  }
});


client.on('message', async message => { // Hacemos un nuevo evento message (si ya tienes uno ponlo ahi)
  if (message.content.startsWith('n!autorol')){


     //definimos la db

    const args = message.content.trim().split(/ +/g);
    let ide = args[2]
    let sayMsg = args[1]
    let rol = message.mentions.roles.first();
    

    if(!sayMsg) return message.channel.send("Pon un emoji")




    let canalinfo = await db.get(`${message.guild.id}-autorol`);

    const Embed = new Discord.MessageEmbed()
      .setColor("#00DCC4")
      .setTitle("Autoroles")
      .setDescription(`> ⬩ **Sugeridor:** \n**<@${message.author.id}>**\n\n> ⬩ **Sugerencia:** \n${sayMsg}`)

      let si = new MessageButton()
      .setStyle("grey")
      .setEmoji(`971080303789625425`)
      .setID("si_sug")

      let no = new MessageButton()
      .setStyle("grey")
      .setEmoji(`973283751582908426`)
      .setID("no_sug")


      let row = new MessageActionRow()
      .addComponents(si, no);





      let enviado = await client.channels.cache.get(canalinfo).send(Embed, row)
      await db.set(`${enviado.id}-sug`, message.author.id)
    message.react("<:check:971080303789625425>")
    message.react("<:no:973283751582908426>")

          const EmbedSolicitado = new Discord.MessageEmbed()
      .setTitle("<:check:971080303789625425> ¡Sugerencia solicitada!")
      .setDescription(`<a:cargando:953354699799674940> <@${message.author.id}> En breves recibirás una respuesta.`)
      .setColor("GREEN")
      let mensaje = await message.channel.send(EmbedSolicitado);

    setTimeout(function(){ 
    mensaje.delete();
 }, 7000);
    
    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)



  }
});

/* 
client.on('message', async  message => { // Hacemos un nuevo evento message (si ya tienes uno ponlo ahi)
  if (message.content.startsWith('n!instagram')) {
    const args = message.content.trim().split(/ +/g);
    const fetch = require("node-fetch");
        let name = args.slice(1).join(" ");

        if (!name) {
            return message.channel.send("> Ingrese el nombre de usuario")// Si el usuario no coloca el nombre de instagram enviará este mensaje
                
        }

        const url = `https://instagram.com/${name}/?__a=1`;
        
        let res; 

        try {
            res = await fetch(url).then(url => url.json());
        } catch (e) {
            return message.channel.send("> No pude encontrar esa cuenta")// Si la cuenta de instagram no la encuentra enviará este mensaje
                
        }

        const account = res.graphql.user;//Definimos account

        const embed = new Discord.MessageEmbed()// Creamos el richEmbed
            .setColor(0xf7a7ff)// Color del embed
            .setTitle(account.full_name)
            .setURL(`https://instagram.com/${name}`)
            .setThumbnail(account.profile_pic_url_hd)
            .addField("Información", ` **Username:** ${account.username}
             **Nombre completo:** ${account.full_name}
             **Biografía:** ${account.biography.length == 0 ? "none" : account.biography}
             **Posts:** ${account.edge_owner_to_timeline_media.count}
             **Seguidores:** ${account.edge_followed_by.count}
             **Siguiendo:** ${account.edge_follow.count}
             **Cuenta privada:** ${account.is_private ? "Si 🔐" : "No 🔓"}`);

        message.channel.send(embed);// Envia el embed al canal
  }
});
*/

// que hace todavia esto aqui xD? (Pd: Soy SrEvelio)
client.on('message', async  message => { // Hacemos un nuevo evento message (si ya tienes uno ponlo ahi)
  if (message.content.startsWith('n!evelio')) {
    const args = message.content.trim().split(/ +/g);
        let name = args.slice(1).join(" ");


        message.channel.send(name);// Envia el embed al canal
  }
});

client.on("message", async  (message) => {
  if (message.content.startsWith("n!test-welcome")) {
    const Canvas = require("discord-canvas-spanish-1ly4s0")
    const image = await new Canvas.Goodbye()
  .setUsername("KingAndrewYT")
  .setDiscriminator("0001")
  .setMemberCount("140")
  .setGuildName("Server DEV")
  .setAvatar("https://i.ibb.co/j4rsNvy/nopp.png")
  .setColor("border", "#8015EA")
  .setColor("username-box", "#8015EA")
  .setColor("discriminator-box", "#8015EA")
  .setColor("message-box", "#8015EA")
  .setColor("title", "#8015EA")
  .setColor("avatar", "#8015EA")
  .setBackground("https://i.ibb.co/JF8CTJJ/kaytbotperfil.jpg")
  .toAttachment();

const attachment = new Discord.MessageAttachment(image.toBuffer(), "goodbye-image.png");

message.channel.send(attachment);
    
    let comandos_usados =  db.get("comandos_usados")
    let respuesta = math.sum(comandos_usados, 1)
    db.set("comandos_usados", respuesta)
  }
});

client.on('guildMemberAdd', (member) => {

  if (member.guild.id === '885235460178342009') {

    let ids = ["534767171579019266", "506103750600163380", "865267273429811240", "852182940033351680", "961244109748703293", "961045090552410112", "759071855003959356"]

    const embed = new Discord.MessageEmbed()

      .setColor("#00DCC4")
      .setTitle("Escucha, se ha unido alguien a tecnobros")
      .setURL("https://youtube.com/tecnobros")
      .setDescription("Dale la bienvenida con esto: \n `<@" + member.id + ">` Binvenid@!")



    for (let i = 0; i < ids.length; i++) {
        client.users.fetch(ids[i]).then(user => {
            user.send(embed);
        })
};
  }
});

const Nuggies = require('nuggies');
Nuggies.handleInteractions(client)
client.on("message", async  (message) => {
  if (message.content.startsWith("n!test-autoroles")) {

    
    const args = message.content.trim().split(/ +/g);



    
		const roleide = args[1];
    const color1 = args[2];
    const label1 = args[3];
    
		const rolexd = message.guild.roles.cache.get(roleide);
		if (!rolexd) return message.channel.send('ID de rol inválida');

    const brmanager = new Nuggies.buttonroles().addrole({
      
	  color: color1,
	  label: label1,
	  role: rolexd,
    });

    const Embed = new Discord.MessageEmbed()
		    .setTitle('Autoroles')
				.setDescription('Haga clic en los botones para obtener el rol específico.')




    Nuggies.buttonroles.create({
	    message: message,
	    role: brmanager,
      content: Embed,
	    channelID: message.channel.id,
    });

  }
});

bot.login(process.env.token);
client.login(process.env.token);