import React from "react";
import { Home, About, Events, Projects, SubPage } from "../pages";
import { Routes, Route } from "react-router-dom";

function Pages({ data }) {
    return (
        <Routes>
            <Route path="/" element={<Home data={data.main_page} />} />
            <Route path="/sobre" element={<About data={data.about_page} />} />
            <Route
                path="/eventos"
                element={<Events data={data.events_page} />}
            />
            <Route path="/projetos">
                <Route index element={<Projects data={data.projects_page} />} />
                <Route
                    path=":id"
                    element={<SubPage parentData={data.projects_page} />}
                />
            </Route>
        </Routes>
    );
}

export default Pages;
