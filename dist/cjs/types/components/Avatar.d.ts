import React from "react";
type Props = {
    id?: number;
    name: string;
    src: string;
    presence?: string;
    size?: number;
    className?: string;
};
declare const Avatar: ({ id, src, name, presence, size, className }: Props) => React.JSX.Element;
export default Avatar;
