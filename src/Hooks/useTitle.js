import { useEffect } from 'react';

const useTitle = (fastTitle, lastTitle) => {
    useEffect(() => {
        document.title = `${fastTitle} Facebook  ${lastTitle}`
    }, [fastTitle, lastTitle])
};

export default useTitle;