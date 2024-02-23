import { createActionGroup, props } from "@ngrx/store";
import { SumRequest } from "../types/sumRequest.interface";

export const sumActions = createActionGroup({
    source: 'sum',
    events: {
         Sum: props<{request : any}>(),
         "Summarized successfully" : props<{request: any}>(),
    }
})