import { Navigate, useLocation } from 'react-router-dom';

import useUserStore from '../stores/user';

function ReturnAuthenticatedToHome({ children }: Readonly<{ children: React.ReactNode }>) {
  const location = useLocation();
  const user = useUserStore((state) => state.user);

  return (
    <>
      {user && <Navigate to={location.state?.path ?? '/'} />}
      {!user && <> {children}</>}
    </>
  );
}

export { ReturnAuthenticatedToHome };
