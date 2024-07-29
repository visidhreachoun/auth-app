import { Screens } from "@/constants/Screens";
import { router } from "expo-router";

export type Navigation = {
  pathname: string;
  params?: any;
};

const navigate = (navigation: Navigation) => {
  router.navigate(navigation);
};

const push = (navigation: Navigation) => {
  router.push(navigation);
};

const reset = (navigation: Navigation) => {
  if (router.canGoBack()) {
    router.dismissAll();
  }
  router.replace(navigation);
};

const replace = (navigation: Navigation) => {
  router.replace(navigation);
};

const back = () => {
  if (router.canGoBack()) {
    router.back();
  } else {
    replace({ pathname: Screens.Auth.index });
  }
};

export const NavigationHelper = {
  navigate,
  push,
  reset,
  back,
  replace,
};
