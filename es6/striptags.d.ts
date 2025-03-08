import { StateMachineOptions } from "./states";
export { StateMachineOptions } from "./states";
export declare const DefaultStateMachineOptions: StateMachineOptions;
export declare class StateMachine {
    private state;
    private transitionFunction;
    constructor(partialOptions?: Partial<StateMachineOptions>);
    consume(text: string): string;
}
export declare function striptags(text: string | null | undefined, options?: Partial<StateMachineOptions>): string;
export default striptags;
