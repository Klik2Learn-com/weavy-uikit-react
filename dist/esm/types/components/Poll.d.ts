import React from 'react';
import { PollOptionType } from '../types/types';
type Props = {
    appId: number;
    parentId: number;
    parentType: string;
    options: PollOptionType[];
};
declare const Poll: ({ appId, parentId, parentType, options }: Props) => React.JSX.Element;
export default Poll;
