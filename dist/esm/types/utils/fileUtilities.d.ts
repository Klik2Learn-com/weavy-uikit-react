import { FileKindType, PreviewFormatType, ProviderType } from "../types/types";
export declare const fileSizeAsString: (size: number, significantDigits?: number) => string;
export declare function getExtension(name: string): string;
export declare function isAudio(ext: string): boolean;
export declare function isImage(ext: string): boolean;
export declare function isWebImage(path: string): boolean;
export declare function isBitmap(path: string): boolean;
export declare function isMetaFile(path: string): boolean;
export declare function isVideo(ext: string): boolean;
export declare function isMarkdown(ext: string): boolean;
export declare function isMarkup(ext: string): boolean;
export declare function isCode(ext: string): boolean;
export declare function isText(ext: string): boolean;
export declare function isOfficeDocument(path: string): boolean;
export declare function getIcon(name: string, mediaType?: string): {
    icon: string;
    color?: string;
};
/**
 * Returns preview formats that can be rendered directly in the browser
 *
 * @param {string} name - Name of the file
 * @returns PreviewFormatType
 */
export declare function getWebPreviewFormat(name: string): PreviewFormatType;
export declare function getProvider(provider: string | undefined): ProviderType | "";
export declare function getKind(name: string): FileKindType;
