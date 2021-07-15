export const SET_SETTING = 'SET_SETTING';
export const CANCEL_SETTING = 'CANCEL_SETTING';

export function setSetting() {
	return {
        type: SET_SETTING
    }
}

export function cancelSetting() {
	return {
        type: CANCEL_SETTING
    }
}