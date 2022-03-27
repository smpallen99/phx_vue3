export default [
	{
		path: "/",
		component: () => import('../components/HelloWorld.vue'),
		props: { msg: "Hello Vue 3 + esBuild" },
	},
	{ path: "/about", component: () => import('../components/About.vue')},
]