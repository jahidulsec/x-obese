"use client";

import * as React from "react";

import { NavMain } from "@/components/shared/sidebar/nav-main";
import { NavUser } from "@/components/shared/sidebar/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Settings2Icon, Home, Route, NotepadText, Frame } from "lucide-react";
import { Logo } from "../logo/logo";
import { AuthUser } from "@/types/auth-user";

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: <Home />,
    },
    {
      title: "Marathon",
      url: "/dashboard/marathon",
      icon: <Route />,
    },
    {
      title: "Blogs",
      url: "/dashboard/blog",
      icon: <NotepadText />,
    },
    {
      title: "Banners",
      url: "/dashboard/banner",
      icon: <Frame />,
    },
    {
      title: "Settings",
      url: "#",
      icon: <Settings2Icon />,
    },
  ],
};
export function AppSidebar({
  user,
  ...props
}: React.ComponentProps<typeof Sidebar> & { user: AuthUser }) {
  return (
    <Sidebar
      className="top-(--header-height) h-[calc(100svh-var(--header-height))]!"
      {...props}
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" render={<a href="#" />}>
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-muted">
                <Logo size={16} />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">X Obese</span>
                <span className="truncate text-xs">Radiant</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={{ name: user.name, email: user.role, avatar: "" }} />
      </SidebarFooter>
    </Sidebar>
  );
}
