import { MahasiswaProvider } from "@/context/MahasiswaContext";
import { TopTabs } from "expo-router/js-top-tabs";

export default function MahasiswaTopTabsLayout() {
  return (
    <MahasiswaProvider>
      <TopTabs
        screenOptions={{
          tabBarActiveTintColor: "#072deb",
          tabBarInactiveTintColor: "#64748b",
          tabBarIndicatorStyle: {
            backgroundColor: "#072deb",
            height: 3,
          },
          tabBarLabelStyle: {
            fontSize: 13,
            fontWeight: "bold",
            textTransform: "none",
          },
          tabBarStyle: {
            backgroundColor: "#ffffff",
            elevation: 2,
            shadowOpacity: 0.08,
          },
        }}
      >
        <TopTabs.Screen name="index" options={{ title: "Data" }} />
        <TopTabs.Screen name="input" options={{ title: "Input" }} />
        <TopTabs.Screen name="report" options={{ title: "Report" }} />
      </TopTabs>
    </MahasiswaProvider>
  );
}
