import React from 'react';
import { AppFeatures } from '../types/types';
type Props = {
    appId: number;
    features: string[];
    appFeatures: AppFeatures | undefined;
};
declare const PostList: ({ appId, features, appFeatures }: Props) => React.JSX.Element;
export default PostList;
