import React, { Suspense, lazy } from 'react';
import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import CircleLoader from '../components/core/CircleLoader';

const SignInPage = lazy(() => import('../pages/SignIn'));
const SignUpPage = lazy(() => import('../pages/SignUp'));
const NotFoundPage = lazy(() => import('../pages/NotFound'));
const MainPage = lazy(() => import('../pages/Main'));

const Routing: React.FC = () => {
    return (
        <Suspense fallback={<CircleLoader />}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/sign-in" element={<SignInPage />} />
                    <Route path="/sign-up" element={<SignUpPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </BrowserRouter>
        </Suspense>
    );
};

export default Routing;