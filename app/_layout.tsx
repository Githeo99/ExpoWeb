import { Slot, Link, usePathname } from 'expo-router';
import { View, Text, Pressable } from 'react-native';

export default function Layout() {
  const pathname = usePathname();

  const Tab = ({ href, label }: { href: string; label: string }) => {
    const isActive = pathname === href;

    return (
      <Link href={href} asChild>
        <Pressable>
          <Text
            style={{
              paddingVertical: 8,
              paddingHorizontal: 16,
              borderBottomWidth: isActive ? 2 : 0,
              fontWeight: isActive ? '600' : '400',
            }}
          >
            {label}
          </Text>
        </Pressable>
      </Link>
    );
  };

  return (
    <>
      {/* Nav only */}
      <View
        style={{
          justifyContent: 'center',
          flexDirection: 'row',
          gap: 16,
          padding: 12,
          borderBottomWidth: 4,
        }}
      >
        <Tab href="/" label="Home" />
        <Tab href="/about" label="About" />
        <Tab href="/contact" label="Contact" />
      </View>

      {/* Page renders itself */}
      <Slot />
    </>
  );
}