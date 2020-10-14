import vue from "vue";
import Router from "vue-router"

vue.use(Router);

const router = new Router ({
    mode: "history",
    routes: [{
        path: "",
        component: () => import("./components/Main.vue"),
        children: [{
            path: "dashboard",
            name: "dashboard",
            component: () => import("./components/view/Dashboard.vue"),
        }]
    }]
})

export default router;