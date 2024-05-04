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

  async movieList() {
    let headers = {
      'Content-Type': 'application/json',
    };

    let url = `https://search.imdbot.workers.dev/?q=Niram`;

    return await servicesHelper.initRequest('get', headers, url, null);
  }
}
