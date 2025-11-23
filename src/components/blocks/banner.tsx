import { useState } from 'react';
import { X } from 'lucide-react';

const Banner = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        console.log('Click en cerrar'); // Para ver si se ejecuta
        setIsVisible(false);
    };

    console.log('isVisible:', isVisible); // Para ver el estado

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 end-0 z-50 sm:max-w-sm w-full mx-auto p-6">
            <div className="p-4 bg-white border border-gray-200 rounded-xl shadow-2xl dark:bg-gray-900 dark:border-gray-800">
                <div className="flex gap-x-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="shrink-0 w-8 h-8 flex-shrink-0"
                        style={{ pointerEvents: 'none' }}
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                        <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                    </svg>

                    <div className="grow">
                        <p className="text-sm text-gray-800 dark:text-neutral-200">
                            Contacta con nuestro agente comercial{' '}
                            <a
                                className="inline-flex items-center gap-x-1.5 text-sky-300 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-sky-300"
                                href="#"
                            >
                                vía WhatsApp
                            </a>.
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={handleClose}
                        className="p-2 inline-flex items-center justify-center flex-shrink-0 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 cursor-pointer"
                        aria-label="Cerrar"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div >
    );
};

export default Banner;