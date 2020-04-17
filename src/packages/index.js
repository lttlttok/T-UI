import Button from "./Button.vue"
import ButtonGroup from "./ButtonGroup.vue"
import Icon from "./Icon.vue"

const install = (Vue)=>{
    //  Vue.component(Button.name,Button)
    //  Vue.component(Icon.name,Icon )
    //  Vue.component(ButtonGroup.name,ButtonGroup)
    const requireComponent = require.context(".",true,/\.vue/)
    requireComponent.keys().forEach(filename => {
        const config = requireComponent(filename)
        // console.log(config);
        Vue.component(config.default.name,config.default)
        
    });
}
if(typeof window.vue !== "undefined"){
    install(Vue)
}
export default {
    install
}