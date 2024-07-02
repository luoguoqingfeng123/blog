import { isRef, type Ref } from "vue"

interface IPropertyParams {
    name: string
    val: string
}
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