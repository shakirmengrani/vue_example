export default {
    bind(el, binding, vnode){
        el.style.color = "#" + Math.random().toString().slice(2,8);
    }
}