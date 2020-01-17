import {STEPPER_TYPES} from "./stepper.types";

const init = {
    activeStep: 0
};

export const stepperReducer = (state = init, action) => {
    switch (action.type) {
        case STEPPER_TYPES.NEXT:
            return {
                ...state,
                activeStep: state.activeStep + 1
            };

        case STEPPER_TYPES.PREVIOUS:
            return {
                ...state,
                activeStep: state.activeStep === 0 ? 0 : state.activeStep - 1
            };
        default:
            return state;
    }
};
