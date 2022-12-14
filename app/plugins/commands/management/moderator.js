export const info = {
    name: "BotManager",
    about: "Basic bot management commands",
    credits: "Xavia",
    dependencies: ['path']
}

export const langData = {
    "en_US": {
        "maintenance.on": "Maintenance mode is now on",
        "maintenance.off": "Maintenance mode is now off",
        "maintenance.alreadyOn": "Maintenance mode is already on",
        "maintenance.alreadyOff": "Maintenance mode is already off",
        "monitor.add.error.invalidTID": "Invalid TID",
        "monitor.add.error.alreadyMonitor": "This TID is already a monitor server",
        "monitor.add.test": "Testing server...",
        "monitor.add.error.invalidServer": "This TID is not a valid server",
        "monitor.add.success": "This thread is now a monitor server",
        "monitor.del.error.invalidTID": "Invalid TID",
        "monitor.del.error.notMonitor": "This TID is not a monitor server",
        "monitor.del.success": "This TID is no longer a monitor server",
        "monitor.error.invalidQuery": "Invalid Query, use `add` or `del`",
        "restart": "Restarting...",
        "pending.error.emptyList": "Can\'t get Threads List...",
        "pending.reply.approved": "Your group has been approved!\n\n{NAME} connected.\nUse {PREFIX}help to see all commands.",
        "pending.reply.rejected": "Your group has been rejected!",
        "pending.reply.error.invalidQuery": "Invalid query, please use approve/reject",
        "pending.reply.approve.success": "Approved {SUCCESS} group(s):\n{SUCCESS_LIST}",
        "pending.reply.reject.success": "Rejected {SUCCESS} group(s):\n{SUCCESS_LIST}",
        "pending.reply.approve.failed": "Failed to approve {FAILED} group(s):\n{FAILED_LIST}",
        "pending.reply.reject.failed": "Failed to reject {FAILED} group(s):\n{FAILED_LIST}",
        "stats.body": `
            CPU: {cpuModel}
            Memory (RAM): {totalMemoryUsed} / {totalMemory} ({processMemoryUsed} used)
            Uptime: {uptimePretty}
            Serving: {serving} Group(s)
            Served: {served} Group(s)
            TotalMonitors: {totalMonitors} Server(s)
            ModeratorMonitors: {moderatorMonitors} Server(s)
        `,
        "any.error": "Something went wrong, try again later...",
        "maintenance.description": "Set Bot Maintenance Mode",
        "monitor.description": "Add/Remove Monitor Server",
        "restart.description": "Restart Bot",
        "pending.description": "Approve/Reject Pending Groups",
        "stats.description": "Get Bot Stats",
        "plugins.description": "Manage Plugins",
        "plugins.reload.success": "Plugins reloaded successfully, see console for details",
        "exec.description": "Execute a command"
    },
    "vi_VN": {
        "maintenance.on": "???? b???t ch??? ????? b???o tr??",
        "maintenance.off": "???? t???t ch??? ????? b???o tr??",
        "maintenance.alreadyOn": "Ch??? ????? b???o tr?? ???? ???????c b???t t??? tr?????c",
        "maintenance.alreadyOff": "Ch??? ????? b???o tr?? ???? ???????c t???t t??? tr?????c",
        "monitor.add.error.invalidTID": "TID kh??ng h???p l???",
        "monitor.add.error.alreadyMonitor": "TID n??y ???? l?? m??y ch??? qu???n l??",
        "monitor.add.test": "??ang ki???m tra m??y ch???...",
        "monitor.add.error.invalidServer": "TID n??y kh??ng ph???i l?? m??y ch??? h???p l???",
        "monitor.add.success": "M??y ch??? n??y ???? tr??? th??nh m??y ch??? qu???n l??",
        "monitor.del.error.invalidTID": "TID kh??ng h???p l???",
        "monitor.del.error.notMonitor": "TID n??y kh??ng ph???i l?? m??y ch??? qu???n l??",
        "monitor.del.success": "M??y ch??? n??y kh??ng c??n l?? m??y ch??? qu???n l??",
        "monitor.error.invalidQuery": "L???a ch???n kh??ng h???p l???, h??y s??? d???ng `add` ho???c `del`",
        "restart": "??ang kh???i ?????ng l???i...",
        "pending.error.emptyList": "Kh??ng th??? l???y danh s??ch c??c nh??m ch???...",
        "pending.reply.approved": "Nh??m c???a b???n ???? ???????c ph?? duy???t!\n\n{NAME} ???? k???t n???i.\nS??? d???ng {PREFIX}help ????? xem danh s??ch l???nh.",
        "pending.reply.rejected": "Nh??m c???a b???n ???? b??? t??? ch???i!",
        "pending.reply.error.invalidQuery": "L???a ch???n kh??ng h???p l???, d??ng: approve/reject",
        "pending.reply.approve.success": "???? ph?? duy???t {SUCCESS} nh??m:\n{SUCCESS_LIST}",
        "pending.reply.reject.success": "???? t??? ch???i {SUCCESS} nh??m:\n{SUCCESS_LIST}",
        "pending.reply.approve.failed": "Kh??ng th??? ph?? duy???t {FAILED} nh??m:\n{FAILED_LIST}",
        "pending.reply.reject.failed": "Kh??ng th??? t??? ch???i {FAILED} nh??m:\n{FAILED_LIST}",
        "stats.body": `
            CPU: {cpuModel}
            B??? nh??? (RAM): {totalMemoryUsed} / {totalMemory} ({processMemoryUsed} ???? s??? d???ng)
            Th???i gian ho???t ?????ng: {uptimePretty}
            ??ang ph???c v???: {serving} nh??m
            ???? ph???c v???: {served} nh??m
            T???ng s??? m??y ch??? qu???n l??: {totalMonitors} m??y ch???
            M??y ch??? qu???n l?? c???a ng?????i qu???n l??: {moderatorMonitors} m??y ch???
        `,
        "any.error": "C?? l???i x???y ra, h??y th??? l???i sau...",
        "maintenance.description": "B???t, t???t ch??? ????? b???o tr??",
        "monitor.description": "Th??m, x??a m??y ch??? qu???n l??",
        "restart.description": "Kh???i ?????ng l???i bot",
        "pending.description": "Xem danh s??ch nh??m ch??? ph?? duy???t",
        "stats.description": "Xem th???ng k?? bot",
        "plugins.description": "Qu???n l?? plugins",
        "plugins.reload.success": "Plugins ???? ???????c t???i l???i th??nh c??ng, h??y xem console ????? bi???t th??m chi ti???t",
        "exec.description": "Th???c thi l???nh"
    }
}

async function onReply({ api, message, getLang, controllers, eventData }) {
    const { args, senderID, reply } = message;
    const { Threads } = controllers;

    if (senderID != eventData.author) return;
    if (args.length == 0) return;
    try {
        const { list } = eventData;
        const query = args[0]?.toLowerCase();
        const chosenGroup = args?.slice(1) || [];
        if (chosenGroup.length == 0) {
            reply(getLang('pending.reply.error.invalidQuery'));
            return;
        }

        let succeed = [],
            failed = [],
            msg = null,
            promiseJobs = [];

        if (query == 'approve') {
            for (const i of chosenGroup) {
                if (isNaN(i)) continue;
                if (i - 1 > list.length) continue;
                const group = list[i - 1];
                const getThread = await Threads.checkThread(group.threadID) || {};
                const Prefix = getThread.data.prefix || client.config.PREFIX;
                promiseJobs.push(new Promise(async resolve => {
                    api.sendMessage(
                        getLang('pending.reply.approved', {
                            NAME: client.config.NAME,
                            PREFIX: Prefix
                        }),
                        group.threadID,
                        (err) => {
                            if (err) {
                                console.error(err);
                                failed.push(group.threadID);
                            } else succeed.push(group.threadID);
                            resolve();
                        }
                    );
                }));
            }
        } else if (query == 'reject') {
            for (const i of chosenGroup) {
                if (isNaN(i)) continue;
                if (i - 1 > list.length) continue;
                const group = list[i - 1];
                promiseJobs.push(new Promise(async resolve => {
                    api.sendMessage(
                        getLang('pending.reply.rejected'),
                        group.threadID,
                        (err) => {
                            if (err) {
                                failed.push(group.threadID);
                            } else api.removeUserFromGroup(
                                group.threadID,
                                botID,
                                (err) => {
                                    if (err) {
                                        console.error(err);
                                        failed.push(group.threadID);
                                    } else succeed.push(group.threadID);
                                    resolve();
                                });
                        }
                    );
                }));
            }
        } else {
            reply(getLang('pending.reply.error.invalidQuery'));
            return;
        }

        Promise.all(promiseJobs).then(() => {
            msg = getLang(`pending.reply.${query}.success`, {
                SUCCEED: succeed.length,
                SUCCEED_LIST: succeed.join('\n'),
            });
            if (failed.length > 0) msg += `\n${getLang(`pending.reply.${query}.failed`, {
                FAILED: failed.length,
                FAILED_LIST: failed.join('\n')
            })}`;

            api.unsendMessage(eventData.messageID);
            reply(msg);
        });
    } catch (err) {
        console.error(err);
        reply(getLang('any.error'));
    }
}


function setMaintenance() {
    const config = {
        name: "maintenance",
        aliases: ["maint"],
        version: "1.0.0",
        description: getLang("maintenance.description", null, info.name),
        usage: "[on/off]",
        permissions: [2],
        cooldown: 5
    }

    const onCall = ({ message, args, getLang, db }) => {
        const { reply } = message;
        const input = args[0]?.toLowerCase();
        const query = input == 'on' ? true : input == 'off' ? false : null;

        if (query == null) {
            if (client.maintenance == true) {
                changeMaintenance(false);
            } else {
                changeMaintenance(true);
            }
        } else {
            if (query == true) {
                if (client.maintenance == true) {
                    reply(getLang('maintenance.alreadyOn'));
                } else {
                    changeMaintenance(true);
                }
            } else {
                if (client.maintenance == false) {
                    reply(getLang('maintenance.alreadyOff'));
                } else {
                    changeMaintenance(false);
                }
            }
        }


        async function changeMaintenance(query) {
            try {
                let getSettings = await db.get('Moderator');
                getSettings.maintenance = query;
                await db.set('Moderator', getSettings);
                client.maintenance = query;

                if (query == true) {
                    reply(getLang('maintenance.on'));
                } else {
                    reply(getLang('maintenance.off'));
                }
            } catch (e) {
                console.error(e);
                reply(getLang('any.error'));
            }

            return;
        }

        return;
    }

    return { config, onCall };
}

function monitor() {
    const config = {
        name: "monitor",
        aliases: ["mntr"],
        version: "1.0.0",
        description: getLang("monitor.description", null, info.name),
        usage: "[add/del] [TID]",
        permissions: [2],
        cooldown: 10
    }

    const onCall = async ({ api, message, args, getLang, db }) => {
        const { threadID, messageID, reply } = message;
        const query = args[0]?.toLowerCase();
        if (query == 'add') {
            const tid = args[1] || threadID;
            if (isNaN(parseInt(tid))) {
                reply(getLang('monitor.add.error.invalidTID'));
            } else {
                if (client.data.monitorServers.includes(tid)) {
                    reply(getLang('monitor.add.error.alreadyMonitor'));
                } else {
                    api.sendMessage(getLang('monitor.add.test'), tid, async (err) => {
                        if (err) {
                            reply(getLang('monitor.add.error.invalidServer'));
                        } else {
                            try {
                                const getSettings = await db.get('Moderator');
                                let monitorServersSetting = getSettings.monitorServers || [];
                                if (!monitorServersSetting.includes(tid)) {
                                    monitorServersSetting.push(tid);
                                }
                                getSettings.monitorServers = monitorServersSetting;
                                await db.set('Moderator', getSettings);
                                client.data.monitorServers.push(tid);

                                api.sendMessage(getLang('monitor.add.success'), tid, messageID);
                            } catch (e) {
                                console.error(e);
                                reply(getLang('any.error'));
                            }
                        }
                    });
                }
            }
        } else if (query == 'del') {
            const tid = args[1] || threadID;
            if (isNaN(parseInt(tid))) {
                reply(getLang('monitor.del.error.invalidTID'));
            } else {
                if (!client.data.monitorServers.includes(tid)) {
                    reply(getLang('monitor.del.error.notMonitor'));
                } else {
                    try {
                        const getSettings = await db.get('Moderator');
                        let monitorServersSetting = await db.get('Moderator')['monitorServers'] || [];
                        if (monitorServersSetting.includes(tid)) {
                            monitorServersSetting.splice(monitorServersSetting.indexOf(tid), 1);
                        }
                        getSettings['monitorServers'] = monitorServersSetting;
                        await db.set('Moderator', getSettings);
                        client.data.monitorServers.splice(client.data.monitorServers.indexOf(tid), 1);

                        api.sendMessage(getLang('monitor.del.success'), tid, messageID);
                    } catch (e) {
                        console.error(e);
                        reply(getLang('any.error'));
                    }
                }
            }
        } else {
            reply(getLang('monitor.error.invalidQuery'));
        }

        return;
    }

    return { config, onCall };
}

function restart() {
    const config = {
        name: "restart",
        aliases: ["rs", "reboot"],
        version: "1.0.0",
        description: getLang("restart.description", null, info.name),
        usage: "",
        permissions: [2],
        cooldown: 5
    }

    const onCall = ({ message, getLang }) => {
        message.send(getLang('restart'))
            .then(() => process.exit(1))
            .catch(e => {
                console.error(e);
                message.send(getLang('any.error'));
            });
    }

    return { config, onCall };
}

function pending() {
    const config = {
        name: "pending",
        aliases: ["pnd"],
        version: "1.0.0",
        description: getLang("pending.description", null, info.name),
        usage: "",
        permissions: [2],
        cooldown: 30
    }

    const onCall = async ({ api, message, getLang }) => {
        const { reply, send } = message;
        let msg = "";

        try {
            const SPAM = await api.getThreadList(100, null, ["OTHER"]) || [];
            const PENDING = await api.getThreadList(100, null, ["PENDING"]) || [];

            const list = [...SPAM, ...PENDING].filter(group => group.isSubscribed && group.isGroup);
            msg += list.map((group, index) => `${index + 1}. ${group.name} (${group.threadID}`).join('\n');
            send(msg)
                .then(data => {
                    data.addReplyEvent({ list });
                })
                .catch(e => {
                    console.error(e);
                    send(getLang('any.error'));
                })

        } catch (e) {
            reply(getLang('pending.error.emptyList'));
        }

        return;
    }

    return { config, onCall };
}

function stats() {
    const config = {
        name: "stats",
        aliases: ["st"],
        version: "1.0.0",
        description: getLang("stats.description", null, info.name),
        usage: "",
        permissions: [2],
        cooldown: 5
    }

    const onCall = async ({ message, getLang, controllers }) => {
        try {
            const { cpu, memTotal, totalMemUsed, processMemUsed, uptime } = client.modules.getStats();

            const servedThreads = await controllers.Threads.getAll() || [];
            const servingThreads = servedThreads.filter(thread => thread.info.isSubscribed == true) || [];

            let msg = getLang('stats.body', {
                cpuModel: cpu,
                totalMemoryUsed: totalMemUsed,
                totalMemory: memTotal,
                processMemoryUsed: processMemUsed,
                uptimePretty: uptime,
                serving: servingThreads.length,
                served: servedThreads.length,
                totalMonitors: Object.keys(client.data.monitorServerPerThread).length + client.data.monitorServers.length,
                moderatorMonitors: client.data.monitorServers.length
            }).replace(/^ +/gm, '');

            message.reply(msg);
        } catch (e) {
            console.error(e);
            message.reply(getLang('any.error'));
        }

        return;
    }

    return { config, onCall };
}

function plugins() {
    const config = {
        name: "plugins",
        aliases: ["plg"],
        version: "1.0.0",
        description: getLang("plugins.description", null, info.name),
        usage: "",
        permissions: [2],
        cooldown: 5
    }

    const onCall = async ({ message, args, getLang }) => {
        if (args == 'reload') {
            try {
                pluginLangData = new Object();
                client.plugins = new Map();
                client.registeredMaps.commandsExecutable = new Map();
                client.registeredMaps.commandsAliases = new Map();
                client.registeredMaps.commandsInfo = new Map();

                const pluginsPath = libs['path'].join(client.mainPath, '/plugins/commands/');
                const defaultEventsPath = libs['path'].join(client.mainPath, '/plugins/events/');
                await client.modules.loader(pluginsPath, defaultEventsPath);
                message.reply(getLang('plugins.reload.success'));
            } catch (e) {
                console.error(e);
                message.reply(getLang('any.error'));
            }
        } else {
            message.reply(`Plugins Count: ${client.plugins.size}\nPlugins List:\n${Array.from(client.plugins.keys()).join(', ')}`);
        }

        return;
    }

    return { config, onCall };
}

function exec() {
    const config = {
        name: "exec",
        aliases: ["run", "execute", "exc"],
        version: "1.0.0",
        description: getLang("exec.description", null, info.name),
        usage: "[scripts]",
        permissions: [2],
        cooldown: 5
    }

    const onCall = async ({ api, message, args, getLang, db, controllers, userPermissions, prefix }) => {
        try {
            await eval(args.join(" ") || '');
            message.reply("OK!");
        } catch (e) {
            console.error(e);
            message.reply("Error!");
        }
        return;
    }

    return { config, onCall };
}

export const scripts = {
    commands: {
        setMaintenance,
        monitor,
        restart,
        pending,
        stats,
        plugins,
        exec
    },
    onReply
}
