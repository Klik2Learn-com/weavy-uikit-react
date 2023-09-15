import React from "react";
import { MemberType } from "../types/types";
type Props = {
    id: number;
    parentId: number | null;
    seenBy: MemberType[];
    createdAt: string;
};
declare const SeenBy: ({ seenBy }: Props) => React.JSX.Element;
export default SeenBy;
