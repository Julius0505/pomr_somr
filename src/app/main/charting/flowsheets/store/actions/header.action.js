export const SET_BREADCRUMBS = 'SET BREADCRUMBS';
export const SET_SUB_FLAG = 'SET SUB FLAG';
export const REMOVE_SUB_FLAG = 'REMOVE SUB FLAG';

export function setBreadCrumbs(breadcrumbs) {
	return {
        type: SET_BREADCRUMBS,
        payload: breadcrumbs
    }
}

export const setSubFlag = () => {
    return {
        type: SET_SUB_FLAG
    }
}

export const removeSubFlag = () => {
    return {
        type: REMOVE_SUB_FLAG
    }
}