import { FlatList, FlatListProps, ListRenderItemInfo } from "react-native";

// UTILS
import { cn } from "@/utils";

interface Props<T> extends Omit<FlatListProps<T>, "renderItem" | "keyExtractor"> {
  keyExtractor?: FlatListProps<T>["keyExtractor"];
  renderItem: (info: ListRenderItemInfo<T> & { isLast: boolean }) => React.ReactElement | null;
}

const defaultKeyExtractor: FlatListProps<any>["keyExtractor"] = (item, index): string => {
  if (item && "id" in item && item.id !== null) return `${item.id}-${index}`;

  return index.toString();
};

export default function HorizontalList<T>({
  data,
  renderItem,
  keyExtractor = defaultKeyExtractor,
  className,
  ...restProps
}: Props<T>) {
  const renderFlatItem = (info: ListRenderItemInfo<T>) => {
    const { index } = info;
    const isLast = index === data!.length - 1;

    return renderItem?.({ ...info, isLast });
  };

  return (
    <FlatList
      horizontal
      data={data}
      keyExtractor={keyExtractor}
      className={cn(className)}
      showsHorizontalScrollIndicator={false}
      renderItem={renderFlatItem}
      {...restProps}
    />
  );
}
