import React, { useEffect } from 'react';

import supabase from '../utils/supabase';
import useUserStore from '../stores/user';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const setUser = useUserStore((state) => state.setUser);
  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'PASSWORD_RECOVERY') {
        return;
      }

      if (event === 'SIGNED_IN') {
        setUser(session?.user);
      }
    });

    return () => {
      data.subscription.unsubscribe();
    }
  }, []);

  return children;
}