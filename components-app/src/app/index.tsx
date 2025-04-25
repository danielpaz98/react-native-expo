import { Text } from "react-native";
// PLUGINS
import { Link, type Href } from "expo-router";
// COMPONENTS
import { ThemedView } from "@/components/shared";
import { Menu } from "@/components";
// CONSTANTS
import { animationMenuRoutes, uiMenuRoutes, menuRoutes } from "@/constants/Routes";

export default function App() {
  return (
    <ThemedView className="m-2.5">
      <Menu>
        {animationMenuRoutes.map(({ icon, name, title }, index) => (
          <Link asChild key={name} href={name.split("/")[0] as Href}>
            <Menu.Item icon={icon} isFirst={index === 0} isLast={index === animationMenuRoutes.length - 1}>
              {title}
            </Menu.Item>
          </Link>
        ))}
      </Menu>

      <Menu className="mt-3">
        {uiMenuRoutes.map(({ icon, name, title }, index) => (
          <Link asChild key={name} href={name.split("/")[0] as Href}>
            <Menu.Item icon={icon} isFirst={index === 0} isLast={index === uiMenuRoutes.length - 1}>
              {title}
            </Menu.Item>
          </Link>
        ))}
      </Menu>

      <Menu className="mt-3">
        {menuRoutes.map(({ icon, name, title }, index) => (
          <Link asChild key={name} href={name.split("/")[0] as Href}>
            <Menu.Item icon={icon} isFirst={index === 0} isLast={index === menuRoutes.length - 1}>
              {title}
            </Menu.Item>
          </Link>
        ))}
      </Menu>
    </ThemedView>
  );
}
