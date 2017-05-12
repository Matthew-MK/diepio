//Configurations File
module.exports = {
    server: { //Server Configurations
        port: 3000, //Server Port
        maximumPlayers: 100 //Maximum players
    },
    world: { //World Configurations
        width: 6000, //World Width
        height: 6000 //World Height
    },
    entities: { //Entity Configurations
        minimumSquares: 75, //Minimum amount of Squares
        minimumTriangles: 50, //Minimum amount of Triangles
        minimumPentagons: 10, //Minimum amount of Pentagons
        maximumSquares: 175, //Maximum amount of Squares
        maximumTriangles: 125, //Maximum amount of Triangles
        maximumPentagons: 75 //Maximum amount of Pentagons
    },
    client: { //Client Configurations
        maximumNameCharacters: 15, //Maximum characters in a user's name
        serverName: "" //Your server's name, displayed in the client
    },
    chat: { //Chat Configurations
        maximumMessageLength: 100, //Maximum characters in a chat message
        chatIntervalTime: 0, //Interval between chat messages (set to 0 for none)
        chatBlockedWords: "" //Blocked words in the chat.
    }
};
