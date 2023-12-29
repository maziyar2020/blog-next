import {
    BIO_EXPAND,
    EXPANDS_CLOSE,
    NAVPHONE_EXPAND,
    SIDEBAR_EXPAND,
    OVERLAY

} from './pageTypes'


export const navbarStatusChange = (payload) => {
    return {
        type: NAVPHONE_EXPAND,
        payload
    }
}

export const bioExpandHandler = (payload) => {
    return {
        type: BIO_EXPAND,
        payload
    }
}

export const sidebarExpandHandler = (payload) => {
    return {
        type: SIDEBAR_EXPAND,
        payload
    }
}

export const closeExpandsHandler = (payload) => {
    return {
        type: EXPANDS_CLOSE,
        payload
    }
}

export const overlay = (payload) => {
    return {
        type: OVERLAY,
        payload
    }
}
