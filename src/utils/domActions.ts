import { isRef, type Ref } from "vue"

interface IPropertyParams {
	name: string // 属性名称
	val: string	// 属性值
}

/**
 * 设置自定义属性
 * @param dom domy元素对象或者ref对象
 * @param propertyParams 需要设置的参数对象
 */
export function setCustomizeProperty(dom: HTMLElement | Ref<HTMLElement | undefined>, propertyParams: IPropertyParams | IPropertyParams[]): void {
	let newDom: HTMLElement;
	if (isRef<HTMLElement>(dom)) {
		newDom = dom.value
	} else {
		newDom = dom as HTMLElement
	}
	if (Array.isArray(propertyParams)) {
		propertyParams.forEach(item => {
			newDom.style.setProperty(item.name, item.val)
		})
	} else {
		newDom.style.setProperty(propertyParams.name, propertyParams.val)
	}
}