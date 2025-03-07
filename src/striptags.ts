import { StateMachineOptions, State, StateTransitionFunction, InPlaintextState } from "./states";

export { StateMachineOptions } from "./states";

export const DefaultStateMachineOptions: StateMachineOptions = {
    tagReplacementText: "",
    encodePlaintextTagDelimiters: true,
};

export class StateMachine {
    private state: State;

    private transitionFunction: StateTransitionFunction;

    constructor(partialOptions: Partial<StateMachineOptions> = {}) {
        this.state = new InPlaintextState({
            ...DefaultStateMachineOptions,
            ...partialOptions,
        });

        this.transitionFunction = ((next: State): void => {
            this.state = next;
        }).bind(this);
    }

    public consume(text: string): string {
        let outputBuffer = "";

        for (const character of text) {
            outputBuffer += this.state.consume(character, this.transitionFunction);
        }

        return outputBuffer;
    }
}

export function striptags(text: string | null | undefined, options: Partial<StateMachineOptions> = {}): string {
    if (typeof text !== 'string') {
        return "";
    }
    return new StateMachine(options).consume(text?.toString());
}

export default striptags;
