import React from 'react';
import { QueryKey } from 'react-query';
import { FileType } from '../types/types';
type Props = {
    filesKey: QueryKey;
    file: FileType;
    onVersionSelect?: (currentVersionFile: FileType) => void;
};
declare const FileVersions: ({ filesKey, file, onVersionSelect }: Props) => React.JSX.Element;
export default FileVersions;
