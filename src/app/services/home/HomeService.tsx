import ServicesHelperUtils from '../../../config/core/ServicesHelperUtils';

const servicesHelper = ServicesHelperUtils.getInstance();

export default class HomeService {
  static instance: any = null;

  static createInstance() {
    var object = new HomeService();
    return object;
  }

  static getInstance() {
    if (!HomeService.instance) {
      HomeService.instance = HomeService.createInstance();
    }
    return HomeService.instance;
  }
}
