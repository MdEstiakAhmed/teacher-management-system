import { CalenderIcon, CheckboxIcon, HomeIcon, MailIcon, MessageIcon, UserIcon } from "../icons/icons";

export const menuList = [
    {name: "dashboard", title: "Dashboard", icon: <HomeIcon />, url: "/"},
    {name: "email", title: "Email", icon: <MailIcon />, url: "/email"},
    {name: "chat", title: "Chat", icon: <MessageIcon />, url: "/chat"},
    {name: "todo", title: "Todo", icon: <CheckboxIcon />, url: "/todo"},
    {name: "event", title: "Event", icon: <CalenderIcon />, url: "/event"},
    {name: "users", title: "users", icon: <UserIcon />, url: "/user"},
]