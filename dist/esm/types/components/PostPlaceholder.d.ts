import React from 'react';
import { MemberType } from '../types/types';
type Props = {
    text: string;
    created_at: string;
    created_by: MemberType;
};
declare const PostPlaceHolder: ({ ...props }: Props) => React.JSX.Element;
export default PostPlaceHolder;
