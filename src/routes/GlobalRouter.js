import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from '../views/NotFound';
import Registrousuario from '../views/Registrousuario';
import Landing from '../views/Landing';
import {Movies} from '../views/Movie';

function GlobalRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="*" element={<Layout><NotFound /></Layout>} />
                <Route path="/registrarusuario" element={<Layout><Registrousuario /></Layout>} />
                <Route path="/peliculas" element={<Layout><Movies /></Layout>} />
            </Routes>
        </BrowserRouter>
    );
}

const Layout = ({children}) => (
    <>
        {children}
    </>
);

export default GlobalRouter;
