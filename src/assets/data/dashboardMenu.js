import { CalenderIcon, CheckboxIcon, HomeIcon, MailIcon, MessageIcon, UserIcon } from "../icons/icons";

export const menuList = [
    {name: "dashboard", title: "Dashboard", icon: <HomeIcon />, url: "/"},
    {name: "email", title: "Email", icon: <MailIcon />, url: "/emails"},
    {name: "chat", title: "Chat", icon: <MessageIcon />, url: "/chats"},
    {name: "todo", title: "Todo", icon: <CheckboxIcon />, url: "/todo"},
    {name: "event", title: "Event", icon: <CalenderIcon />, url: "/events"},
    {name: "users", title: "users", icon: <UserIcon />, url: "/users"},
]