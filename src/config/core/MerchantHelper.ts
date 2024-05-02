import { useNetInfo } from '@react-native-community/netinfo';
import CoreService from './MerchantRequestCenter';

const core = CoreService.getInstance();

const Network = useNetInfo();

var headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
}

export async function doRequestApi(url: string, key: string, params: any, method: string, enable_access_token: boolean) {

    if(!Network?.isConnected){
        return new Promise((resolve, reject) => {
            resolve(null);
        });
    }

    var isRegister = await core.register(key);

    if (!isRegister) {
        return new Promise((resolve, reject) => {
            resolve("Disable Access");
        });
    } else {
        return await core.doRequest(method, headers, url, params, key, enable_access_token);
    }
}
