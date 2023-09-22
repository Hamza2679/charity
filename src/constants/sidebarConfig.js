export const sidebarConfig = {
  bankAdmin: [
    {
      id: 29,
      label: "Users",
      path: "/bankAdmin/users",
      items: [
        {
          label: "Add User",
          path: "/bankAdmin/createUser",
          icon: <i className="user icon"></i>,
        },
        {
          label: "All Users",
          path: "/bankAdmin/ ",
          icon: <i className="users icon"></i>,
        },
      ],
      icon: <i className="users icon"></i>,
    },
    {
      id: 5,
      label: "Settings",
      path: "/bankAdmin/settings",
      icon: <i className="setting icon"></i>,
    },
  ],
};
