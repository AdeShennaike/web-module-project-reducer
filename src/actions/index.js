export const ADD_ONE = "ADD_ONE";
export const CLEAR_DISPLAY = 'CLEAR_DISPLAY'
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const APPLY_MEMORY = 'APPLY_MEMORY';
export const SAVE_MEMORY = 'SAVE_MEMORY';
export const CLEAR_MEMORY = 'CLEAR_MEMORY';

export const addOne = (number) => {
    return({type:ADD_ONE});
};

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
};

export const changeOperation = (operation) => {
    return({type:CHANGE_OPERATION, payload:operation});
};

export const clearTotal = () => {
    return({type:CLEAR_DISPLAY});
};

export const applyMem = (memory) => {
    return({type:APPLY_MEMORY, payload:memory});        
};

export const saveMem = (total) => {
    return({type:SAVE_MEMORY, payload:total});
};

export const clearMem = () => {
    return({type:CLEAR_MEMORY});
};
