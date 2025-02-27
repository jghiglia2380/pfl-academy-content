import React from 'react';
import { useNavigate } from 'react-router-dom';

import useUserStore from '../stores/user';

export function AuthRedirectProvider({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const user = useUserStore((state) => state.user);

  if (user) {
    return navigate('/');
  }

  return children;
}