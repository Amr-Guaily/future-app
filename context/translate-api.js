import { useRouter } from "next/router";
import { createContext, useContext, useMemo, useEffect } from "react";

import en from "../locales/en";
import ar from "../locales/ar";

const TranslateContext = createContext(en);

export const TranslateProvidor = ({ children }) => {
    const { locale } = useRouter();

    const t = useMemo(() => locale === 'en' ? en : ar, [locale]);

    useEffect(() => {
        document.documentElement.dir = t.direction;
    }, [t.direction]);

    return <TranslateContext.Provider value={t}>{children}</TranslateContext.Provider>;
};

export const useTranslate = () => useContext(TranslateContext);