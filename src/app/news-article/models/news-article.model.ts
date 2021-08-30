import { IUser } from '../../user/models/user.model';

export interface INewsArticle {
  id: number;
  title: string;
  body: any;
  createdById: number;
  createdBy: IUser;
  createdAt: Date | string;
}
