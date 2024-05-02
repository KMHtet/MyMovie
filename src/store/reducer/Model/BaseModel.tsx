export interface BaseState {
  content: any;
  loading: any;
}

export interface RequestModel<T> {
  infoRequest: T;
  classify?: string;
  isShowLoadingRoot?: boolean;
  callBack?: (data?: any) => void;
  callBackError?: () => void;
}

export interface GetUnreadModel {
  params?: any;
  page?: number;
  size?: number;
}

export interface IAccountInfo {
  address?: string,
  createdBy?: string,
  dateOfBirth?: string,
  department?: string,
  district?: string,
  email?: string,
  gender?: string,
  id?: string,
  meters?: any,
  issueDate?: string,
  issuePlace?: string,
  personalIdNo?: string,
  phoneNumber?: string,
  position?: string,
  province?: string,
  remark?: string,
  roles?: string,
  username?: string,
  avatarId?: string,
  fullName?: string,
}