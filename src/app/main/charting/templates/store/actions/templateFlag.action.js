export const SET_TEMPLATE_FLAG = 'SET TEMPLATE FLAG';


export function setTemplateFlag(flag) {
	return {
        type: SET_TEMPLATE_FLAG,
        payload: flag
    }
}