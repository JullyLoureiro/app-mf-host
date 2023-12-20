import React, { lazy } from 'react';
// import Example from "app2/App";
// const Button = React.lazy(() => import('RemoteApp/Button')); 
import { CssVarsProvider, defaultTheme, CssBaseline } from '@arquivei/atenas';
const ApplicationLayout = lazy(() => import('remote:@arquivei/application-layout-web/ApplicationLayout'));

export default function App() {
    return(
        <div>
            <CssVarsProvider theme={defaultTheme}>
                <CssBaseline />
                <ApplicationLayout
                    bffUrl={'http://localhost:5001/bff-application-layout/graphql'}
                    titlePage={'teste'}
                >
                <h1>Aplicação Host</h1>
                </ApplicationLayout>
            </CssVarsProvider>
        </div>
    )
}