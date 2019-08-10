import * as React from 'react';
import {TProps} from "./mainLayout.types";

const MainLayout = ({ children }: TProps) => (
    <React.Fragment>
        <main className='page-content'>
            {children}
        </main>
    </React.Fragment>
);

export default MainLayout;
