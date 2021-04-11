# Minecraft Bot Template
A Minecraft Bot Template coded in Javascript with the mineflayer npm package allows you to get a Minecraft Bot up and running in minutes and makes it easy to add commands and events to your Minecraft Bot.

## File Structure
```
├── commands
│   ├── administrator
│   │   └── administrator.js
│   └── general
│       └── test.js
├── events
│   ├── client
│   │   ├── commands.js
│   │   ├── error.js
│   │   ├── kicked.js
│   │   ├── login.js
│   │   └── reconnect.js
│   └── server
│       ├── player
│       │    ├── joined.js
│       │    └── left.js
│       └── chat.js
├── utilities
│   └── configuration.json
├── handlers.js
├── index.js
├── package-lock.json
└── package.json
```

## Configuration
### Description
The configuration allows you to easily change the important information about your bot without editing your code allowing easy editing for your Minecraft Bot.

### Options
#### Bot Account
| Key | Type | Description |
| ------------- | ------------- | ------------- |
| email | string | The Minecraft Account email that the bot will log into on Minecraft |
| password | string | The Minecraft Account password that the bot will log into on Minecraft |

#### Bot Server
| Key | Type | Description |
| ------------- | ------------- | ------------- |
| ip | string | The ip of the server that the Minecraft Account will connect to |
| port | integer | The port of the server that the Minecraft Account will connect to |

#### Bot Minecraft
| Key | Type | Description |
| ------------- | ------------- | ------------- |
| version | string | The version of Minecraft the server is running on |
| authenticator | string | The authenticator that the account uses when logging into Minecraft |

#### Reconnect
| Key | Type | Description |
| ------------- | ------------- | ------------- |
| enabled | boolean | The option allows you to enable and disable reconnection |
| timeout | integer | The number of milliseconds the bot waits until it tries to reconnect to the server |

#### Command
| Key | Type | Description |
| ------------- | ------------- | ------------- |
| prefix | string | The prefix the bot listens to for the commands |

#### Command Permissions
| Key | Type | Description |
| ------------- | ------------- | ------------- |
| administrators | array | The player's usernames that are considered as an administrator allowing them to run administrator commands |

### Default
```
{
    "bot": {
        "account": {
            "email": "",
            "password": ""
        },
        "server": {
            "ip": "",
            "port": 25565
        },
        "minecraft": {
            "version": "1.16.5",
            "authenticator": "mojang"
        }
    },

    "reconnect": {
        "enabled": true,
        "timeout": 30000
    },

    "command": {
        "prefix": "!",
        "permissions": {
            "administrators": [
                "username"
            ]
        }
    }
}
```

## Licence
[ISC License]()