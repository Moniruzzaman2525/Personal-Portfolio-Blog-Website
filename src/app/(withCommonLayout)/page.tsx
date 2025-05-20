import Profile from "@/components/Profile";
import ProjectsPage from "./projects/page";
import ContactPage from "./contact/page";
import MySkill from "@/components/MySkill";

export default function Home() {
  return (
    <div>
      <Profile />
      <MySkill />
      <ProjectsPage />
      <ContactPage />
    </div>
  );
}
