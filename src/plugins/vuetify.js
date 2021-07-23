import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

const theme = {
    primary: colors.deepOrange, // #E53935
    secondary: colors.red.lighten4, // #FFCDD2
    accent: colors.indigo.base, // #3F51B5
}

export default new Vuetify({
    theme: {
        // themes: {
        //     light: theme,
        //     dark: theme
        // }
    }
});