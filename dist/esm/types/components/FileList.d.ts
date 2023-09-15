import React from 'react';
import { AppFeatures, FileOrder, FileType, FileView } from '../types/types';
type Props = {
    appId: number;
    view?: FileView;
    order?: FileOrder;
    trashed?: boolean;
    features: string[];
    appFeatures: AppFeatures | undefined;
    onSorting?: (order: FileOrder) => void;
    onHandleError?: (file: FileType) => void;
};
declare const FileList: ({ appId, view, order, trashed, features, appFeatures, onSorting, onHandleError }: Props) => React.JSX.Element;
export default FileList;
