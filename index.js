// Discord.js bot
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

client.on('ready', () => {
    client.user.setActivity('with my balls', {type: 'STREAMING',url: 'https://www.twitch.tv/xdinem'});
});

client.on('message', msg => {
    if(!msg.guild) return;
    if (msg.content.startsWith(process.env.PREFIX))
    {
        const command = msg.content.split(' ')[0].substr(process.env.PREFIX.length);
        const args = msg.content.split(' ').slice(1).join(' ');
        if (command === 'guide') return msg.channel.send('@MR_Gutsy#3758');
        else if (command === 'invite') return msg.channel.send(process.env.INVITE);
    } else {
        const ms = msg.content.toLowerCase();
        if (ms.includes('זדיין'))
        {
            const member = msg.guild.member(msg.author);
            if(member)
                member.kick('מת').then(() => { msg.channel.send(`כרגע מת ${msg.author.tag}`); }).catch(err => { msg.channel.send('לצערי אני כבוט ציוני אינני יכול לסלק ילד מת זה'); console.error(err); });
        }
        else if (ms === '/join') {
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
        else if ((ms.includes('nig') || ms.includes('Ниг') || ms.includes('ניג') || ms.includes('chicken')
            || ms.includes('nugget') || ms.includes('biscuit') || ms.includes('ציקן') || ms.includes('נאגט')
            || ms.includes('ביסקוויט')|| ms.includes('נייגר')|| ms.includes('נגר')|| ms.includes('ni gg'))
            && msg.channel.id !== '703603549191405638' && !msg.member.roles.some(r=>["Vedeloper"].includes(r.name))) {
            msg.delete();
        }
    }
});

client.login(process.env.TOKEN);
