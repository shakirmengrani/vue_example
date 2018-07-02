import toUpper from '../filters/ToUpper';
import toChangeColor from '../directives/ToChnageBackgroundColor';

export default {
    data(){
        return {
            title: "asd"
        }
    },
    computed: {},
    directives: {
        toChangeColor: toChangeColor
    },
    filters: {
        toUpper: toUpper
    }
}