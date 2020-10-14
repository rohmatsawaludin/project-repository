import vue from "vue";
import Router from "vue-router"

vue.use(Router);

const router = new Router ({
    mode: "history",
    routes: [{
        path: "",
        component: () => import("./components/Main.vue"),
        children: [{
            path: "/data-result",
            name: "result",
            component: () => import("./components/view/Result.vue")
        }]
    }]
})

export default router;