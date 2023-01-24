import { CalenderIcon, CheckboxIcon, HomeIcon, MailIcon, MessageIcon, UserIcon } from "../icons/icons";

export const menuList = [
    {name: "dashboard", title: "Dashboard", icon: <HomeIcon />, url: ""},
    {name: "emails", title: "Emails", icon: <MailIcon />, url: "emails"},
    // {name: "chat", title: "Chat", icon: <MessageIcon />, url: "chat"},
    {name: "todo", title: "Todo", icon: <CheckboxIcon />, url: "todo"},
    {name: "event", title: "Events", icon: <CalenderIcon />, url: "event"},
    {name: "users", title: "Users", icon: <UserIcon />, url: "users"},
]