import type { IPageParams, IPageResponse } from "@/types/common";
import request from "@/utils/request";

export interface INews {
    id: number
}
export const getNewsList = (params?: IPageParams) => request.get<IPageResponse<INews>>('/api/news/list', { params })
