import {createRouter, createWebHistory} from "vue-router"
import Home from "../views/Home.vue"
import About from "../views/About.vue"
import Music from "../views/Music.vue";
import Contact from "../views/Contact.vue";
import Video from "../views/Video.vue";
import Impressum from "../views/Impressum.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/about",
            name: "about",
            component: About
        },
        {
            path:"/music",
            name:"music",
            component: Music
        },
        {
            path:"/contact",
            name:"contact",
            component: Contact
        },
        {
            path:"/video",
            name:"video",
            component: Video
        },
        {
            path:"/impressum",
            name:"impressum",
            component: Impressum
        }
    ]
})

export default router