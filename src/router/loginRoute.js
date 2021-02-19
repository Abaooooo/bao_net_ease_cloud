const loginRoute = [
  {
    path: "/login",
    name: "Login",
    component: () => import(/* webpackChunkName: login */ "@/components/login"),
  },
  {
    path: "/loginPhone",
    name: "LoginPhone",
    component: () =>
      import(
        /* webpackChunkName: loginPhone */ "@/components/login/loginPhone"
      ),
    redirect: "/loginPhone/phone",
    children: [
      {
        path: "/loginPhone/phone",
        name: "LoginPhone",
        component: () =>
          import(/* webpackChunkName: phone */ "@/components/login/phone"),
      },
      {
        path: "/loginPhone/code",
        name: "LoginCode",
        component: () =>
          import(/* webpackChunkName: loginCode */ "@/components/login/code"),
      },
    ],
  },
];

export default loginRoute;
