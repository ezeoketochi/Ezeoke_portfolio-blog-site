import AboutRow from "../mini_comps/About_row";
import PageTitle from "./PageTitle";

export default function About() {
  return (
    <>
      <PageTitle pageTitle={"About The Dev"} />

      <AboutRow title={"Full Name"} detail={"Ezeoke Tochukwu"} />
      <AboutRow title={"Current Role"} detail={"Frontend Developer"} />
      <AboutRow title={"Email Address"} detail={"tochioluebube@gmail.com"} />
      <AboutRow
        title={"About"}
        detail={
          "I am a passionate and detail-oriented front-end developer with a strong foundation in HTML, CSS, and JavaScript, and proficiency in modern frameworks like React and Flutter. My expertise lies in creating visually appealing, responsive, and user-centric web and mobile applications. I am constantly evolving my skills to stay current with the latest industry trends and technologies, ensuring that my work not only meets but exceeds user expectations.With hands-on experience in crafting seamless user interfaces and optimizing performance, I am dedicated to delivering high-quality code and collaborating effectively within cross-functional teams. My problem-solving abilities, coupled with my commitment to continuous learning, drive me to tackle complex challenges and contribute to the success of every project I undertake."
        }
      />
      <AboutRow isFile={true} title={"Resume"}/>
    </>
  );
}
