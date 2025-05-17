import Home7Main from "@/components/layout/main/Home7Main";
import IndexMain from "@/components/layout/main/IndexMain";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export default function Home() {
  return (
    <PageWrapper headerStyle={3} headerBg={"black"} >
      <ThemeController />
      <Home7Main />
    </PageWrapper>
  );
}
