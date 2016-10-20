
export default function reducer(mopidy = {}, action){
    switch (action.type) {

        case 'MOPIDY_CONNECTED':
            return Object.assign({}, mopidy, { connected: true, connecting: false });

        case 'MOPIDY_DISCONNECTED':
            return Object.assign({}, mopidy, { connected: false, connecting: false });

        case 'MOPIDY_SET_CONFIG':
            return Object.assign({}, mopidy, {
                host: action.host, 
                port: action.port
            });

        case 'MOPIDY_CHANGE_TRACK':
            return Object.assign({}, mopidy, {
            	tlid: action.tlid	
            });

        /**
         * Websocket-initiated actions
         **/
        case 'MOPIDY_STATE':
            return Object.assign({}, mopidy, {
                state: action.data 
            });

        case 'MOPIDY_CONSUME':
            return Object.assign({}, mopidy, {
                consume: action.data 
            });

        case 'MOPIDY_RANDOM':
            return Object.assign({}, mopidy, {
                random: action.data 
            });

        case 'MOPIDY_REPEAT':
            return Object.assign({}, mopidy, {
                repeat: action.data 
            });

        case 'MOPIDY_TLTRACKS':
            return Object.assign({}, mopidy, {
                tracks: action.data 
            });

        case 'MOPIDY_CURRENTTLTRACK':
            return Object.assign({}, mopidy, {
                trackInFocus: action.data   
            });

        case 'MOPIDY_VOLUME':
            return Object.assign({}, mopidy, {
                volume: action.data   
            });

        default:
            return mopidy
    }
}


