import { demoTypes } from "../types/demo-type";

export const demoAvtions={

}

function action1( demo) {
    return {
        type: demoTypes.DEMO,
        demo: demo
    }
}