
export default function reducer(pusher = {}, action){
    switch (action.type) {

        case 'PUSHER_CONNECT':
        case 'PUSHER_CONNECTING':
            return Object.assign({}, pusher, { connected: false, connecting: true });

        case 'PUSHER_CONNECTED':
            return Object.assign({}, pusher, { 
                connected: true, 
                connecting: false, 
                connectionid: action.connection.connectionid, 
                username: action.connection.username
            });

        case 'PUSHER_DISCONNECTED':
            return Object.assign({}, pusher, { connected: false, connecting: false });

        case 'PUSHER_SET_PORT':
            return Object.assign({}, pusher, { port: action.port });

        case 'PUSHER_USERNAME':
            return Object.assign({}, pusher, { username: action.data.username });

        case 'CONNECTIONS':
            return Object.assign({}, pusher, { connections: action.data.connections });

        case 'CONNECTION_UPDATED':
            function byID(connection){
                return connection.connectionid == action.data.connection.connectionid;
            }
            var connection = pusher.connections.find(byID);
            var index = pusher.connections.indexOf(connection);
            var connections = Object.assign([], pusher.connections);
            connections[index] = action.data.connection;

            return Object.assign({}, pusher, { connections: connections });

        case 'VERSION':
            return Object.assign({}, pusher, { 
                version: action.data.version,
                upgrading: false
            });

        case 'START_UPGRADE':
            return Object.assign({}, pusher, { upgrading: true });

        default:
            return pusher
    }
}



