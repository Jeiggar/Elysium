import publicKey from './public.pem?raw';

export const window = {
    width: 900,
    height: 600,
    frame: false,
    resizable: false,
    maximizable: false,
    fullscreenable: false,
    title: 'Elysium Launcher',
};

export const api = {
    ws: 'ws://launcher.elysiummc.ru/ws',
    web: 'http://launcher.elysiummc.ru',
    publicKey,
};

export const appPath = '.elysium-launcher';

export const discordRPC = {
    appId: '1254462473835380776',
    default: {
        firstLineText: 'Присоединяйся к нам!',
        secondLineText: '',
        buttons: [
            {
                label: 'Discord',
                url: 'https://discord.gg/X3gqPTY4dQ',
            },
        ],
        largeImageKey: 'icon',
        smallImageKey: '',
        largeImageText: 'Elysium Launcher',
        smallImageText: '',
    },
    profile: {
        firstLineText: 'Загружаю игровой клиент {server}',
        secondLineText: '',
        buttons: [
            {
                label: 'Discord',
                url: 'https://discord.gg/X3gqPTY4dQ',
            },
        ],
        largeImageKey: 'icon',
        smallImageKey: '',
        largeImageText: 'Elysium Launcher',
        smallImageText: '',
    },
    game: {
        firstLineText: 'Играю на сервере',
        secondLineText: 'Играю под ником {nickname}',
        buttons: [
            {
                label: 'Discord',
                url: 'https://discord.gg/X3gqPTY4dQ',
            },
        ],
        largeImageKey: 'icon',
        smallImageKey: '',
        largeImageText: 'Elysium Launcher',
        smallImageText: '',
    }
};
