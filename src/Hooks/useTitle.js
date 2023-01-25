import { useEffect } from 'react';

const useTitle = (title) => {
    useEffect(() => {
        document.title = `Facebook - ${title}`
    }, [title])
};

export default useTitle;