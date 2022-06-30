client.on('message', message => {
    if (!message.guild) return;
  
    if (message.content.startsWith('!kick')) {
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.members.resolve(user);
        if (member) {
          member
            .kick('Razón opcional que se mostrará en los registros de auditoría.')
            .then(() => {
              message.channel.send(`@${user.tag} Kickeado con éxito `);
            })
            .catch(err => {
              message.channel.send('Tú no tienes acceso al !kick');
              console.error(err);
            });
        } else {
          message.channel.send("¡Ese usuario no está en este gremio!");
        }
      } else {
        message.channel.send("No mencionaste al usuario que quieres kickear");
      }
    }
  });
  
  client.on('message', message => {
    if (!message.guild) return;
  
    if (message.content.startsWith('!ban')) {
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.members.resolve(user);
        if (member) {
          member
            .ban({
              reason: 'They were bad!',
            })
            .then(() => {
              message.reply(`@${user.tag} Baneado con éxito `);
            })
            .catch(err => {
              message.reply('Tú no tienes acceso al !ban');
              console.error(err);
            });
        } else {
          message.reply("¡Ese usuario no está en este gremio!");
        }
      } else {
        message.reply("No mencionaste al usuario que quieres banear");
      }
    }
  });