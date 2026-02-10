import React, { createContext, useContext, useEffect, useState } from 'react';

type ConsentType = 'all' | 'essential' | 'custom' | null;

interface CookieContextType {
    consent: ConsentType;
    showBanner: boolean;
    acceptAll: () => void;
    rejectNonEssential: () => void;
    savePreferences: (type: ConsentType) => void;
}

const CookieContext = createContext<CookieContextType | undefined>(undefined);

export const CookieProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [consent, setConsent] = useState<ConsentType>(null);
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        const savedConsent = localStorage.getItem('COOKIE_CONSENT') as ConsentType;
        if (savedConsent) {
            setConsent(savedConsent);
            applyConsent(savedConsent);
        } else {
            const timer = setTimeout(() => {
                setShowBanner(true);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, []);

    const applyConsent = (type: ConsentType) => {
        if (type === 'all') {
            console.log('Scripts de terceiros ativados (Analytics, Ads, etc).');
            // Aqui você injetaria os scripts reais
        } else {
            console.log('Apenas scripts essenciais ativados.');
        }
    };

    const acceptAll = () => {
        const type = 'all';
        setConsent(type);
        localStorage.setItem('COOKIE_CONSENT', type);
        applyConsent(type);
        setShowBanner(false);
    };

    const rejectNonEssential = () => {
        const type = 'essential';
        setConsent(type);
        localStorage.setItem('COOKIE_CONSENT', type);
        applyConsent(type);
        setShowBanner(false);
    };

    const savePreferences = (type: ConsentType) => {
        setConsent(type);
        localStorage.setItem('COOKIE_CONSENT', type || 'essential');
        applyConsent(type);
        setShowBanner(false);
    };

    return (
        <CookieContext.Provider value={{ consent, showBanner, acceptAll, rejectNonEssential, savePreferences }}>
            {children}
        </CookieContext.Provider>
    );
};

export const useCookie = () => {
    const context = useContext(CookieContext);
    if (context === undefined) {
        throw new Error('useCookie must be used within a CookieProvider');
    }
    return context;
};
