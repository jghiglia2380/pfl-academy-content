import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Settings } from 'lucide-react';
import { AccessibilityControls } from './AccessibilityControls';
import { AvatarImage } from './AvatarImage';
import useUserStore from '../stores/user';
import useOutsideClick from '../hooks/useOutsideClick';

export function Navbar() {
  const [showAccessibility, setShowAccessibility] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const user = useUserStore((state) => state.user);

  // Use the hook to close dropdown on outside click
  useOutsideClick(dropdownRef, () => setShowAccessibility(false));
  return (
    <nav className="bg-indigo-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link 
            to="/"
            className="flex items-center cursor-pointer"
          >
            <BookOpen className="h-8 w-8 text-white" />
            <span className="ml-3 text-white text-lg font-medium">
              PFL Academy
            </span>
          </Link>
          <div className='mr-auto ml-5'>
            <Link
              to="/standards"
              className="text-white hover:text-indigo-100"
              >
              Standards
            </Link>
          </div>
          <div className='ml-auto mr-5'>
            {!user && (
              <Link
                to="/register"
                className="text-white hover:text-indigo-100 mr-5"
                >
                Register
              </Link>
            )}
            {!user && (
              <Link
                to="/login"
                className="text-white hover:text-indigo-100"
                >
                Login
              </Link>
            )}
          </div>
          
          <div className="flex items-center space-x-4">
            
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setShowAccessibility(!showAccessibility)}
                className="p-2 rounded-md text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Accessibility settings"
              >
                <Settings className="h-6 w-6" />
              </button>

              {showAccessibility && (
                <div className="absolute right-0 mt-2 w-72 z-50">
                  <AccessibilityControls />
                </div>
              )}
            </div>
              <div>
                {user?.user_metadata.full_name ? (
                  <AvatarImage name={user.user_metadata.full_name} />
                ) : null}
              </div>
          </div>
        </div>
      </div>
    </nav>
  );
}