import Profile from "@/components/Profile";
import ProjectsPage from "./projects/page";
import ContactPage from "./contact/page";
import MySkill from "@/components/MySkill";
import ExperiencePage from "@/components/ExperiencePage";

export default function Home() {
  return (
    <div>
      <Profile />
      <MySkill />
      <ExperiencePage />
      <ProjectsPage />
      <ContactPage />
    </div>
  );
}
