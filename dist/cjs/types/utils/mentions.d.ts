import { Decoration, ViewPlugin, ViewUpdate } from "@codemirror/view";
import { RangeSet } from "@codemirror/state";
export declare const mentions: ViewPlugin<{
    mentions: RangeSet<Decoration>;
    update(update: ViewUpdate): void;
}>;
