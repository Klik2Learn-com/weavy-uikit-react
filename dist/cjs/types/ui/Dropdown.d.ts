import React from "react";
type DropdownProps = {
    directionX?: "left" | "right";
    directionY?: "up" | "down";
    icon?: string;
    children: React.ReactNode;
    className?: string;
    title?: string;
    buttonContent?: React.ReactNode;
    disabled?: boolean;
    noWrapper?: boolean;
    props?: React.HTMLAttributes<HTMLSpanElement>;
};
type ItemProps = {
    children: React.ReactNode;
    className?: string;
    onClick?: (e: any) => void;
    active?: boolean;
    props?: React.HTMLAttributes<HTMLDivElement>;
};
type AnchorProps = {
    children: React.ReactNode;
    className?: string;
    link?: string;
    active?: boolean;
    download?: boolean;
    props?: React.HTMLAttributes<HTMLAnchorElement>;
};
declare const UIDropdown: {
    UI: ({ directionX, directionY, icon, children, className, title, buttonContent, disabled, noWrapper, ...props }: DropdownProps) => React.JSX.Element;
    Item: ({ children, className, onClick, active, ...props }: ItemProps) => React.JSX.Element;
    Anchor: ({ children, className, link, active, download, ...props }: AnchorProps) => React.JSX.Element;
    Divider: () => React.JSX.Element;
};
export default UIDropdown;
