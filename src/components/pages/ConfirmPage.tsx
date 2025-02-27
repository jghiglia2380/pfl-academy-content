import { useSearchParams } from 'react-router-dom';

export function ConfirmPage() {
  const [searchParams] = useSearchParams();
  const hashParams = new URLSearchParams(window.location.hash.substring(1));
  const errorDescription = hashParams.get('error_description');
  const emailSent = searchParams.get('emailSent');

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      {emailSent ? (
        <p className="text-yellow-600">
          An email has been sent to your inbox with a link to confirm your account.
        </p>
      ) : errorDescription ? (
        <p className='text-red-600'>
          An error occurred while confirming your account. <br />{errorDescription}
        </p>
      ) : (
        <p className='text-green-600'>
          Your account has been confirmed.
        </p>
      )}
    </div>
  );
}
