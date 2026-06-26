"use client"
import { useState } from 'react';
import Link from 'next/link';
import { HeaderItem } from '../../../../types/menu';
import { usePathname } from 'next/navigation';

const HeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const path = usePathname()

  const handleMouseEnter = () => {
    if (item.submenu) setSubmenuOpen(true);
  };

  const handleMouseLeave = () => {
    setSubmenuOpen(false);
  };

  const isActive =
    path === item.href || path.startsWith(`/${item.label.toLowerCase()}`)

  return (
    <div
      className={`relative ${item.label === 'Faqs' ? 'xl:block lg:hidden block' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={item.href}
        className={`
          py-3 text-base flex items-center gap-0.5 font-normal transition-colors duration-300
          ${isActive
            ? 'text-LightApricot'
            : 'text-white hover:text-LightApricot'
          }
        `}>
        {item.label}
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
      {submenuOpen && (
        <div className="absolute top-full left-0 mt-1 w-56 z-50
          bg-white dark:bg-darkmode
          border border-BorderLine dark:border-dark_border
          shadow-light_shadwo dark:shadow-darkmd
          rounded-xl overflow-hidden
          animate-in fade-in slide-in-from-top-2 duration-200">

          {/* trait coloré en haut */}
          <div className="h-0.5 w-full bg-primary" />

          {item.submenu?.map((subItem, index) => {
            const isSubActive = path === subItem.href
            return (
              <Link
                key={index}
                href={subItem.href}
                className={`
                  flex items-center gap-2 px-4 py-2.5 text-sm transition-colors duration-200
                  ${isSubActive
                    ? 'bg-primary text-white font-medium'
                    : 'text-secondary dark:text-lightPrimary hover:bg-LightSoftBlue dark:hover:bg-darklight hover:text-darkprimary dark:hover:text-white'
                  }
                `}>
                {/* point indicateur */}
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

export default HeaderLink;