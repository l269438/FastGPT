import type { KbItemType } from '@/types/plugin';

export const defaultKbDetail: KbItemType = {
  _id: '',
  userId: '',
  updateTime: new Date(),
  avatar: '/icon/logo.svg',
  name: '',
  tags: '',
  totalData: 0,
  model: 'text-embedding-ada-002'
};
