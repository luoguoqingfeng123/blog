interface IPageProps {
	total: number // 数据总条数
	showNumer?: number // 展示的选择按钮数量
	pageSize?: number	// 每页展示条数
	currentPage: number	// 当前页码
}

export type { IPageProps }