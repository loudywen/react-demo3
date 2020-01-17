import {STEPPER_TYPES} from "./stepper.types";

export const goNext = () => ({
    type: STEPPER_TYPES.NEXT
});

export const goBack = () => ({
    type: STEPPER_TYPES.PREVIOUS
});
