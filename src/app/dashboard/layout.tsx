import React from 'react';

import {ReactNode} from "react";

const Layout = ({
                    children,
                }: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default Layout;
