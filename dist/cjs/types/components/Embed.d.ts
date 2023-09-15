import React from 'react';
import { EmbedType } from '../types/types';
type Props = {
    embed: EmbedType;
    onRemove?: Function;
    onSwap?: Function | null;
};
declare const Embed: ({ embed, onRemove, onSwap }: Props) => React.JSX.Element;
export default Embed;
