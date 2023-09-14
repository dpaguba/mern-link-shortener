import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { CreatePage } from './pages/CreatePage'
import { DetailPage } from './pages/DetailPage'
import { LinksPage } from './pages/LinksPage'
import { AuthPage } from './pages/AuthPage'


export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Routes>
                <Route path='/links' exact element={
                    <LinksPage></LinksPage> || <Navigate to='/create'></Navigate>
                }>
                </Route>

                <Route path='/create' exact element={
                    <CreatePage></CreatePage> || <Navigate to='/create'></Navigate>
                }>
                </Route>

                <Route path='/detail/:id' element={
                    <DetailPage></DetailPage> || <Navigate to='/create'></Navigate>
                }>
                </Route>
            </Routes>
        )
    }

    return (
        <Routes>
            <Route path='/' exact element={<AuthPage></AuthPage> || <Navigate to='/'></Navigate>} />

        </Routes>
    )
}