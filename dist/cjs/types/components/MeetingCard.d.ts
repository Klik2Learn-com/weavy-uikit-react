import React from "react";
import { MeetingType } from "../types/types";
type Props = {
    meeting: MeetingType;
};
declare const MeetingCard: ({ meeting }: Props) => React.JSX.Element;
export default MeetingCard;
