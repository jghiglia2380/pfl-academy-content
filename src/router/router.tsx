import { createBrowserRouter, ScrollRestoration, Navigate } from 'react-router-dom';
import { DefaultLayout } from '../components/layouts/DefaultLayout';
import { HomePage } from '../components/pages/HomePage';
import { ChapterPage } from '../components/pages/ChapterPage';
import { StandardsPage } from '../components/pages/StandardsPage';
import { ConfirmPage } from '../components/pages/ConfirmPage';

export const router = createBrowserRouter([
  {
    element: (
      <>
        <DefaultLayout />
        <ScrollRestoration />
      </>
    ),
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/register',
        lazy: () => import('../components/pages/RegisterPage'),
      },
      {
        path: '/login',
        lazy: () => import('../components/pages/LoginPage'),
      },
      {
        path: '/forgot-password',
        lazy: () => import('../components/pages/ForgotPasswordPage'),
      },
      {
        path: '/reset-password',
        lazy: () => import('../components/pages/ResetPasswordPage'),
      },
      {
        path: '/confirm',
        element: <ConfirmPage />
      },
      {
        path: 'standards',
        element: <StandardsPage />,
      },
      {
        path: 'standards/:standardId',
        element: <StandardsPage />,
      },
      {
        path: '/standards/:standardId/chapters/:chapterId',
        element: <ChapterPage />
      },
      {
        path: '/*',
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);