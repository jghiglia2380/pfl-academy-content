import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import useOutsideClick from '../hooks/useOutsideClick';
import supabase from '../utils/supabase';
import useUserStore from '../stores/user';

export function AvatarImage({ name }: Readonly<{ name: string }>) {
  const navigate = useNavigate();
  const setUser = useUserStore((state) => state.setUser);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Use the hook to close dropdown on outside click
  useOutsideClick(dropdownRef, () => setIsDropdownOpen(false));

  // Function to extract initials
  const getInitials = (name: string) => {
    if (!name) return '';
    const nameParts = name.split(' ');
    const initials = nameParts
      .map((part) => part.charAt(0).toUpperCase())
      .slice(0, 2)
      .join('');
    return initials;
  };

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // Logout function
  async function logout() {
    const { error } = await supabase.auth.signOut();
    if (error) console.log('Error logging out:', error.message);

    setUser(undefined);
    navigate('/login');
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className="w-10 h-10 border rounded-full uppercase flex items-center justify-center font-bold text-xl text-white bg-blue-500 cursor-pointer"
        onClick={toggleDropdown}
      >
        {getInitials(name)}
      </div>

      {/* Dropdown */}
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-10">
          <button
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
