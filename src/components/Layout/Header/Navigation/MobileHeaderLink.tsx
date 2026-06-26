"use client"
import { useState } from 'react';
import Link from 'next/link';
import { HeaderItem } from '../../../../types/menu';
import { usePathname } from 'next/navigation';

const MobileHeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const path = usePathname();

  const isActive =
    path === item.href || path.startsWith(`/${item.label.toLowerCase()}`)

  return (
    <div className="relative w-full mb-1">
      <Link
        href={item.href}
        onClick={item.submenu ? (e) => { e.preventDefault(); setSubmenuOpen(!submenuOpen) } : undefined}
        className={`
          flex items-center justify-between w-full py-2.5 px-3 rounded-lg text-sm font-medium
          transition-colors duration-200 focus:outline-none
          ${isActive
            ? 'bg-primary text-white'
            : 'text-secondary dark:text-lightPrimary hover:bg-LightSoftBlue dark:hover:bg-darklight hover:text-darkprimary dark:hover:text-white'
          }
        `}>
        <span className="flex items-center gap-2">
          {/* point indicateur */}
          <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${isActive ? 'bg-white' : 'bg-primary'}`} />
          {item.label}
        </span>
        {item.submenu && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.2em"
            height="1.2em"
            viewBox="0 0 24 24"
            className={`transition-transform duration-300 ${submenuOpen ? 'rotate-180' : ''}`}>
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="m7 10l5 5l5-5"
            />
          </svg>
        )}
      </Link>

      {/* Submenu */}
      {submenuOpen && item.submenu && (
        <div className="ml-4 mt-1 border-l-2 border-BorderLine dark:border-dark_border pl-3 flex flex-col gap-0.5">
          {item.submenu.map((subItem, index) => {
            const isSubActive = path === subItem.href
            return (
              <Link
                key={index}
                href={subItem.href}
                className={`
                  flex items-center gap-2 py-2 px-3 rounded-lg text-sm transition-colors duration-200
                  ${isSubActive
                    ? 'bg-primary text-white font-medium'
                    : 'text-secondary dark:text-lightPrimary hover:bg-LightSoftBlue dark:hover:bg-darklight hover:text-darkprimary dark:hover:text-white'
                  }
                `}>
                <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${isSubActive ? 'bg-white' : 'bg-primary'}`} />
                {subItem.label}
              </Link>
            )
          })}
        </div>
      )}
    </div>
  );
};

export default MobileHeaderLink;