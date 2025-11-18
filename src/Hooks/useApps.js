import axios from "axios";
import { useEffect, useState } from "react";

const useApps = () => {
    const [apps, setApps] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        axios('../appData.json')
            .then(data => {
                setApps(data.data);
                setError(null);
            })
            .catch(err => {
                setError(err);
                setApps([]);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return { apps, loading, error };
};

export default useApps;