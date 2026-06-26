'use client'
import { useState } from 'react'
import { accordionData } from '../../../app/api/data'
import Link from 'next/link'

const FaqQuestion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <>
      <section className='dark:bg-darkmode py-24 relative overflow-hidden'>

        {/* Décor fond — cercles flous neutres, pas de bleu */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-gray/10 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-gray/10 blur-3xl" />
        </div>

        <div className='relative z-10 container'>

          {/* En-tête section */}
          <div className='flex flex-col items-center gap-4 mb-16'>
            <div className="inline-flex items-center gap-2 bg-LightSoftBlue dark:bg-darklight border border-BorderLine dark:border-dark_border text-darkprimary dark:text-lightPrimary text-sm font-medium px-4 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              FAQ
            </div>
            <h2 className='text-secondary dark:text-white text-center max-w-lg leading-tight'>
              Questions fréquemment posées
            </h2>
            <p className='text-SlateBlue dark:text-darktext text-center max-w-md text-base'>
              Tout ce que vous devez savoir avant de démarrer votre projet avec ICHTECH.
            </p>
          </div>

          {/* Accordion */}
          <div className='lg:w-770 w-full mx-auto'>
            <div className='flex flex-col gap-3'>
              {accordionData.map((item, index) => {
                const isActive = activeIndex === index
                return (
                  <div
                    key={index}
                    className={`
                      rounded-2xl border transition-all duration-300
                      ${isActive
                        ? 'border-BorderLine dark:border-dark_border shadow-light-shadwo dark:shadow-darkmd bg-white dark:bg-darklight'
                        : 'border-BorderLine/60 dark:border-dark_border/60 bg-white dark:bg-darklight hover:border-BorderLine dark:hover:border-dark_border hover:shadow-light-shadwo dark:hover:shadow-darkmd'
                      }
                    `}>

                    {/* Bouton */}
                    <button
                      className='flex justify-between items-center w-full text-left px-7 py-5 focus:outline-none group'
                      onClick={() => toggleAccordion(index)}>
                      <div className='flex items-center gap-4 pr-4'>
                        {/* Numéro */}
                        <span className={`
                          text-xs font-bold tabular-nums w-7 h-7 flex items-center justify-center rounded-lg flex-shrink-0 transition-colors duration-300
                          ${isActive
                            ? 'bg-primary text-white'
                            : 'bg-LightSoftBlue dark:bg-darkmode text-darkprimary dark:text-lightPrimary'
                          }
                        `}>
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className={`text-base font-semibold transition-colors duration-300 ${isActive ? 'text-primary dark:text-lightPrimary' : 'text-secondary dark:text-white'}`}>
                          {item.title}
                        </span>
                      </div>

                      {/* Icône +/- */}
                      <span className={`
                        w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full border transition-all duration-300
                        ${isActive
                          ? 'bg-primary border-primary text-white rotate-180'
                          : 'border-BorderLine dark:border-dark_border text-SlateBlue dark:text-darktext group-hover:border-primary group-hover:text-primary dark:group-hover:text-lightPrimary'
                        }
                      `}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="m6 9 6 6 6-6"/>
                        </svg>
                      </span>
                    </button>

                    {/* Contenu */}
                    <div className={`overflow-hidden transition-all duration-300 ${isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className='px-7 pb-6'>
                        {/* séparateur */}
                        <div className='h-px bg-BorderLine dark:bg-dark_border mb-5' />
                        <p className='text-SlateBlue dark:text-darktext text-base leading-relaxed'>
                          {item.content}
                        </p>
                      </div>
                    </div>

                  </div>
                )
              })}
            </div>

            {/* Pied — contact support */}
            <div className='mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 px-7 py-5 rounded-2xl border border-BorderLine dark:border-dark_border bg-white dark:bg-darklight'>
              <div>
                <p className='text-secondary dark:text-white font-semibold text-base'>
                  Vous n'avez pas trouvé votre réponse ?
                </p>
                <p className='text-SlateBlue dark:text-darktext text-sm mt-0.5'>
                  Notre équipe répond sous 24h.
                </p>
              </div>
              <Link
                href='/contact'
                className='flex-shrink-0 flex items-center gap-2 bg-primary text-white text-sm font-medium px-6 py-2.5 rounded-xl hover:bg-darkprimary transition-colors duration-300'>
                Contacter le support
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default FaqQuestion