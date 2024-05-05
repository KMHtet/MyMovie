import { BasePopupModal } from "@components"
import { AxiosResponse } from "axios"

export const checkResponseStatus = (response: AxiosResponse) => {
    if (response?.status === 400) {
        BasePopupModal.show({
            title: 'Information',
            children: 'Something was wrong',
            subButtonTitle: 'Ok'
        })
    } 
    else if (response?.status === 403) {
        BasePopupModal.show({
            title: 'Information',
            children: 'Refuses to authorize',
            subButtonTitle: 'Ok'
        })
    }
    else if (response?.status === 500) {
        BasePopupModal.show({
            title: 'Information',
            children: 'Internal Server Error',
            subButtonTitle: 'Ok'
        })
    } 
    else if (response?.status === 501) {
        BasePopupModal.show({
            title: 'Information',
            children: 'Not Implemented',
            subButtonTitle: 'Ok'
        })
    } 
    else if (response?.status === 503) {
        BasePopupModal.show({
            title: 'Information',
            children: 'Service Unavailable',
            subButtonTitle: 'Ok'
        })
    }
    else if (response?.problem === 'NETWORK_ERROR') {
        BasePopupModal.show({
            title: 'Information',
            children: 'Cannot connect to the internet.',
            subButtonTitle: 'Ok'
        })
    }
    else {
        BasePopupModal.show({
            title: 'Information',
            children: 'Something was wrong',
            subButtonTitle: 'Ok'
        })
    }
}