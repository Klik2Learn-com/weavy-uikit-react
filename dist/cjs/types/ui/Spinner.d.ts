import React from 'react';
type SpinnerProps = {
    size?: number;
    spin?: boolean;
    overlay?: boolean;
    progress?: number;
};
declare const UISpinner: {
    UI: ({ spin, size, overlay, progress }: SpinnerProps) => React.JSX.Element;
};
export default UISpinner;
