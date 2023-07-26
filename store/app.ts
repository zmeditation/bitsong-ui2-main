import { defineStore } from "pinia";
import { useNetworkStore } from "./network";
import { useDisplay } from "vuetify/lib/framework.mjs";
import nav from "@/data/nav.json";

export const useAppStore = defineStore("app", {
  state: () => ({
    drawer: false,
    items: Array.from(nav),
    pages: getPages(nav as NavItem[]),
  }),
  actions: {
    openDrawer() {
      this.drawer = true;
    },
    closeDrawer() {
      this.drawer = false;
    },
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
  },
  getters: {
    theme: () => {
      const { currentNetwork } = useNetworkStore();
      return currentNetwork.isTestnet ? "testnetDark" : "mainnetDark";
    },
  },
});

type NavItem = {
  title?: string;
  icon?: string;
  to?: string;
  items?: NavItem[];
};

function getPage(item: NavItem, parent = ""): string[] {
  const title = `${parent}${parent ? "/" : ""}${item?.title ?? item}`;

  return item?.items?.length ? getPages(item.items, title) : [title];
}

function getPages(items: NavItem[] = [], parent = ""): string[] {
  let array: any = [];

  for (const item of items) {
    array = [...array, ...getPage(item, parent)];
  }

  return array;
}
