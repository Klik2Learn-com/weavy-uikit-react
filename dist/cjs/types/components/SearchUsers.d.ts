import React from "react";
import { MemberType } from "../types/types";
type SearchUsersProps = {
    existingMembers?: MemberType[];
    handleSubmit: any;
    buttonTitle: string;
};
declare const SearchUsers: ({ existingMembers, handleSubmit, buttonTitle }: SearchUsersProps) => React.JSX.Element;
export default SearchUsers;
