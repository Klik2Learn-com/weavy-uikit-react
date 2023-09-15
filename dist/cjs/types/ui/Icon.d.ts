import React, { ReactNode } from "react";
type Props = {
    name: string;
    color?: string;
    size?: number;
    title?: string;
    className?: string;
};
type IconActiveStackProps = {
    className?: string;
    children: ReactNode;
};
declare const UIIcon: {
    UI: ({ name, color, size, className, title, ...props }: Props) => React.JSX.Element;
    ActiveStack: ({ className, children }: IconActiveStackProps) => React.JSX.Element;
};
export default UIIcon;
