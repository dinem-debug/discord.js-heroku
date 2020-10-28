// Discord.js bot
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

client.on('ready', () => {
    //client.user.setActivity('imagine being a living sack of shit');
    client.user.setPresence({
        status: "dnd",  //You can show online, idle....
        game: {
            name: "disabled features until skritt will fucking calm down and stop threatening dinem",  //The message shown
            type: "PLAYING" //PLAYING: WATCHING: LISTENING: STREAMING:
        }
    });
});

/*var emojiname = ["valorant", "rl","r6","minecraft","gtav","fallguys","amongus"],
    rolename = ["Valorant", "Rocket League","Rainbow Six Siege","Minecraft","GTA V","Fall Guys","Among Us"];

client.on("messageReactionAdd", (e, n) => {
    if (n && !n.bot && e.message.channel.guild)
        for (let o in emojiname)
            if (e.emoji.name == emojiname[o]) {
                let i = e.message.guild.roles.find(e => e.name == rolename[o]);
                e.message.guild.member(n).addRole(i).catch(console.error)
            }
});*/

/*client.on('messageReactionAdd', async (e, n) => {
    // When we receive a reaction we check if the reaction is partial or not
    if (reaction.partial) {
        // If the message this reaction belongs to was removed the fetching might result in an API error, which we need to handle
        try {
            await reaction.fetch();
        } catch (error) {
            console.error('Something went wrong when fetching the message: ', error);
            // Return as `reaction.message.author` may be undefined/null
            return;
        }
    }
    if (n && !n.bot && e.message.channel.guild)
        for (let o in emojiname)
            if (e.emoji.name == emojiname[o]) {
                let i = e.message.guild.roles.find(e => e.name == rolename[o]);
                e.message.guild.member(n).addRole(i).catch(console.error)
            }
});*/

/*client.on("messageUpdate", (o, n) => {
    if (n.content.startsWith("!reaction") && n.member.roles.some(r=>["Vedeloper"].includes(r.name))) {
        if (!n.channel.guild) return;
        for (let o in emojiname) {
            var n = [msg.guild.emojis.find(e => e.name == emojiname[o])];
            for (let o in n) msg.react(n[o])
        }
    }
});*/

/*client.on("messageReactionRemove", (e, n) => {
    if (n && !n.bot && e.message.channel.guild)
        for (let o in emojiname)
            if (e.emoji.name == emojiname[o]) {
                let i = e.message.guild.roles.find(e => e.name == rolename[o]);
                e.message.guild.member(n).removeRole(i).catch(console.error)
            }
});*/

/*client.on('messageReactionRemove', async (e, n) => {
    // When we receive a reaction we check if the reaction is partial or not
    if (reaction.partial) {
        // If the message this reaction belongs to was removed the fetching might result in an API error, which we need to handle
        try {
            await reaction.fetch();
        } catch (error) {
            console.error('Something went wrong when fetching the message: ', error);
            // Return as `reaction.message.author` may be undefined/null
            return;
        }
    }
    if (n && !n.bot && e.message.channel.guild)
        for (let o in emojiname)
            if (e.emoji.name == emojiname[o]) {
                let i = e.message.guild.roles.find(e => e.name == rolename[o]);
                e.message.guild.member(n).removeRole(i).catch(console.error)
            }
});*/

/*client.on('message', msg => {/*
    if(!msg.guild) return;
    if (msg.content.startsWith("!reaction") && msg.member.roles.some(r=>["Vedeloper"].includes(r.name))) {
        if (!msg.channel.guild) return;
        for (let o in emojiname) {
            var n = [msg.guild.emojis.find(e => e.name == emojiname[o])];
            for (let o in n) msg.react(n[o])
        }
    }
    else if (msg.content.startsWith(process.env.PREFIX))
    {
        const command = msg.content.split(' ')[0].substr(process.env.PREFIX.length);
        const args = msg.content.split(' ').slice(1).join(' ');
        if (command === 'guide') return msg.channel.send('@MR_Gutsy#3758');
        else if (command === 'invite') return msg.channel.send(process.env.INVITE);
    } else {
        const ms = msg.content.toLowerCase();
        //console.log(Buffer.from(ms, 'utf8').toString('hex').replace(/e2808f/g, '').replace(/e2808e/g, ''));
       /* if (Buffer.from(ms, 'utf8').toString('hex').replace(/e2808f/g, '').replace(/e2808e/g, '').includes('d796d793d799d799d79f'))
        {
            const member = msg.guild.member(msg.author);
            if(member)
                member.kick('מת').then(() => { msg.channel.send(`כרגע מת ${msg.author.tag}`); }).catch(err => { msg.channel.send('לצערי אני כבוט ציוני אינני יכול לסלק ילד מת זה'); console.error(err); });
        }
        else*//* if (ms === '/join') {
            // Only try to join the sender's voice channel if they are in one themselves
            if (msg.member.voiceChannel) {
                msg.member.voiceChannel.join()
                    .then(connection => { // Conn// ection is an instance of VoiceConnection
                        msg.reply('I have successfully connected to the channel!');
                        const stream = fs.createReadStream('./Oof.mp3');
                        const voice = connection.playStream(stream);
                        voice.on("end", () => {
                            connection.channel.leave();
                        })
                    })
                    .catch(console.log);
            } else msg.reply('You need to join a voice channel first!');
        }
         else if (ms === '/bababooey') {
            // Only try to join the sender's voice channel if they are in one themselves
            if (msg.member.voiceChannel) {
                msg.member.voiceChannel.join()
                    .then(connection => { // Conn// ection is an instance of VoiceConnection
                        const stream = fs.createReadStream('./Babaooey.mp3');
                        const voice = connection.playStream(stream);
                        voice.on("end", () => {
                            connection.channel.leave();
                        })
                    })
                    .catch(console.log);
            } else msg.reply('You need to join a voice channel first!');
        }
         else if (ms === '/sus') {
            // Only try to join the sender's voice channel if they are in one themselves
            if (msg.member.voiceChannel) {
                msg.member.voiceChannel.join()
                    .then(connection => { // Conn// ection is an instance of VoiceConnection
                        const stream = fs.createReadStream('./choochiman.mp3');
                        const voice = connection.playStream(stream);
                        voice.on("end", () => {
                            connection.channel.leave();
                        })
                    })
                    .catch(console.log);
            } else msg.reply('You need to join a voice channel first!');
        }
        else if (ms === '/pp') {
            // Only try to join the sender's voice channel if they are in one themselves
            if (msg.member.voiceChannel) {
                msg.member.voiceChannel.join()
                    .then(connection => { // Conn// ection is an instance of VoiceConnection
                        const stream = fs.createReadStream('./Pp.mp3');
                        const voice = connection.playStream(stream);
                        voice.on("end", () => {
                            connection.channel.leave();
                        })
                    })
                    .catch(console.log);
            } else msg.reply('You need to join a voice channel first!');
        }
         else if (ms === '/ws') {
            // Only try to join the sender's voice channel if they are in one themselves
            if (msg.member.voiceChannel) {
                msg.member.voiceChannel.join()
                    .then(connection => { // Conn// ection is an instance of VoiceConnection
                        const stream = fs.createReadStream('./Areyawinningson.mp3');
                        const voice = connection.playStream(stream);
                        voice.on("end", () => {
                            connection.channel.leave();
                        })
                    })
                    .catch(console.log);
            } else msg.reply('You need to join a voice channel first!');
        }
         else if (ms === '/giveup') {
            // Only try to join the sender's voice channel if they are in one themselves
            if (msg.member.voiceChannel) {
                msg.member.voiceChannel.join()
                    .then(connection => { // Conn// ection is an instance of VoiceConnection
                        const stream = fs.createReadStream('./RickRollMusic.mp3');
                        const voice = connection.playStream(stream);
                        voice.on("end", () => {
                            connection.channel.leave();
                        })
                    })
                    .catch(console.log);
            } else msg.reply('You need to join a voice channel first!');
        }
        else if (ms === '/bruh') {
            // Only try to join the sender's voice channel if they are in one themselves
            if (msg.member.voiceChannel) {
                msg.member.voiceChannel.join()
                    .then(connection => { // Conn// ection is an instance of VoiceConnection
                        const stream = fs.createReadStream('./Bruh.mp3');
                        const voice = connection.playStream(stream);
                        voice.on("end", () => {
                            connection.channel.leave();
                        })
                    })
                    .catch(console.log);
            } else msg.reply('You need to join a voice channel first!');
        }
        else if (ms === '/lol') {
            // Only try to join the sender's voice channel if they are in one themselves
            if (msg.member.voiceChannel) {
                msg.member.voiceChannel.join()
                    .then(connection => { // Conn// ection is an instance of VoiceConnection
                        const stream = fs.createReadStream('./lol.mp3');
                        const voice = connection.playStream(stream);
                        voice.on("end", () => {
                            connection.channel.leave();
                        })
                    })
                    .catch(console.log);
            } else msg.reply('You need to join a voice channel first!');
        }
        else if (ms === '/xue') {
            // Only try to join the sender's voice channel if they are in one themselves
            if (msg.member.voiceChannel) {
                msg.member.voiceChannel.join()
                    .then(connection => { // Conn// ection is an instance of VoiceConnection
                        const stream = fs.createReadStream('./xue.mp3');
                        const voice = connection.playStream(stream);
                        voice.on("end", () => {
                            connection.channel.leave();
                        })
                    })
                    .catch(console.log);
            } else msg.reply('You need to join a voice channel first!');
        }
        else if (ms === '/leave') {
            const member = msg.guild.member(client.user);
            member.setVoiceChannel(null)
                .then(connection => {
                    msg.reply('I have successfully left the channel!');
                })
                .catch(console.log);
        }
        else if (ms.startsWith('/cum')) {
            const user = msg.mentions.users.first();
            if(user)
            {
                if(msg.member.roles.some(r=>["Admins"].includes(r.name)))
                {
                    const mm = msg.guild.member(user);
                    mm.setNickname('Cum');
                    msg.reply('Cum applied on <@'+mm.user.id+'>');
                } else msg.reply('No permissions');

            } else {
                msg.member.setNickname('Cum');
                msg.reply('Cum applied');
            }
        }
        else if (ms.startsWith('/kill')) {
            const user = msg.mentions.users.first();
            if(user)
            {
                const mm = msg.guild.member(user);
                if(msg.member.roles.some(r=>["kill"].includes(r.name)) && mm.voiceChannel)
                {
                    var channel=mm.voiceChannel;
                    var voiceChannel = client.channels.get('722428400429563904');
                    mm.setVoiceChannel(voiceChannel);
                    msg.reply('<@'+mm.user.id+'> fucking dead now');
                    voiceChannel.join()
                        .then(connection => { // Conn// ection is an instance of VoiceConnection
                            const stream = fs.createReadStream('./Kill.mp4');
                            const voice = connection.playStream(stream);
                            voice.on("end", () => {
                                connection.channel.leave();
                                mm.setVoiceChannel(channel);
                            })
                        })
                        .catch(console.log);
                } else msg.reply('No permissions');
            } else {
                msg.reply('No user selected');
            }
        }
        else if (ms.startsWith('/give-n-word-pass')) {
            const user = msg.mentions.users.first();
            if(user)
            {
                if(msg.member.roles.some(r=>["Vedeloper"].includes(r.name)) )
                {
                    const mm = msg.guild.member(user);
                    msg.reply('<@'+mm.user.id+'> now has the N-Word pass');
                } else msg.reply('No permissions');

            } else {
                msg.reply('No user selected');
            }
        }
        else if (ms.startsWith('/uncum')) {
            const user = msg.mentions.users.first();
            if(user)
            {
                if(msg.member.roles.some(r=>["Admins"].includes(r.name)) )
                {
                    const mm = msg.guild.member(user);
                    mm.setNickname(mm.user.username);
                    msg.reply('Uncum applied on <@'+mm.user.id+'>');
                } else msg.reply('No permissions');

            } else {
                msg.member.setNickname(msg.member.user.username);
                msg.reply('Uncum applied');
            }
        }
        else if(msg.channel.id == '715191707263565864' && ms.includes('lofi'))
        {
            msg.guild.members.cache.get('235088799074484224').setVoiceChannel(null);
        }
        else if ((ms.includes('nig') || ms.includes('Ниг') || ms.includes('ניג') || ms.includes('chicken')
            || ms.includes('nugget') || ms.includes('biscuit') || ms.includes('ציקן') || ms.includes('נאגט')
            || ms.includes('ביסקוויט')|| ms.includes('נייגר')|| ms.includes('נגר')|| ms.includes('lo fi')|| ms.includes('אמאשך')|| ms.includes('אמא שך')|| ms.includes('אבא שך')|| ms.includes('אבא שלך')|| ms.includes('אמא שלך')|| ms.includes('lo fi')|| ms.includes('אבאשך')|| ms.includes('toxic')|| ms.includes('טוקסיק')|| ms.includes('ni gg')|| ms.includes('nagar')|| ms.includes('naygar')|| ms.includes('naagar'))
            && msg.channel.id !== '703603549191405638' && !msg.member.roles.some(r=>["Vedeloper"].includes(r.name))) {
            msg.delete();
        }
    }
});*/

client.login(process.env.TOKEN);
