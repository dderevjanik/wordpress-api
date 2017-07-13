import { generateToken } from 'wordpress-jwt-auth'; // DEV
import { connect } from './../lib/Index';

const connectToWpApi = async (host: string, userName: string, password: string) => {
    const { token } = await generateToken(host, userName, password);
    const authorization = `Bearer ${token}`;
    const wpaApi = await connect(host, {
        beforeRequest: (r) => ({
            ...r, headers: { ...r.headers, Authorization: authorization },
        }),
    });
    return wpaApi;
};

export { connectToWpApi };
