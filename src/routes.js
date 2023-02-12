import React from "react";
import { Routes, Route } from "react-router-dom";

import { Login } from "components/pages/Login";
import { Home } from "components/pages/Home";


export const RoutesApp = () => {

    return (
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Home />} />
            </Routes>
    )
}