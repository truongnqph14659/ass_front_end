export async function rerender(elementId:string, content:any) {
    if (elementId) {
        document.getElementById(elementId)!.innerHTML = await content.render();
    }
    if (content.afterRender) content.afterRender();
}