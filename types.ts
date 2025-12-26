export interface ServiceItem {
  id: number;
  listTitle: string;
  detailContent: string;
  phoneNumber: string;
  imageUrl: string;
  tag: string; // e.g. "企业业务", "个人业务"
  isHot?: boolean; // Show a "Hot" badge
}

export type ViewState = 'HOME' | 'DETAIL';