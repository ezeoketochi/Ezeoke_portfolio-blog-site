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
      <div className="h-[300px] mb-20 ">
        <img
          className="object-cover mx-auto"
          src="resume/Ezeoke_Tochukwu_CV.png"
        />
        <AboutRow isFile={true} title={"Resume"} />
        <div className="my-10"></div>

        <div className="h-[50px] w-100%">
          <h1 className="uppercase font-bold text-xl text-center">
            Few Other Projects I'M proud of
          </h1>
        </div>

        <AboutRow
          title={"Hegmof Logistics"}
          link={"https://www.hegmoflogistics.com/"}
          siteName={"Hegmof Logistics"}
          detail={
            "I Contributed to the development of the Hegmof Logistics website, focusing on creating an intuitive and responsive user interface that enhances the user experience.Ensured cross-browser compatibility and optimized site performance to improve load times and user engagement."
          }
        />
        <AboutRow
          title={"iKook Mobile App"}
          link={"https://play.google.com/store/apps/details?id=com.ikook.ikook"}
          siteName={"ikook"}
          detail={
            "I actively participated in the development of the user interface for the Ikook application, focusing on creating intuitive, responsive, and visually appealing components. This involved translating design wireframes into high-quality code, optimizing performance for a seamless user experience, and ensuring cross-platform compatibility. I collaborated closely with the design and Senior developer to implement interactive features and improve UI consistency, adhering to best practices in modern front-end development."
          }
        />
        <AboutRow
          title={"Anon Mobile App(React Native)"}
          link={
            "https://expo.dev//accounts/tezo/projects/chatfire/builds/7260ca42-e856-4bc8-b938-5c6c56a23227"
          }
          siteName={"Anon Chat"}
          detail={
            "I developed an anonymous messaging application using React-Native and Firebase, enabling users to communicate securely without revealing their identities.Integrated Firebase for real-time data storage and messaging features."
          }
        />
          {/* <AboutRow
          title={"CYON Quiz App"}
          link={"https://play.google.com/store/apps/details?id=com.ikook.ikook"}
          siteName={"ikook"}
          detail= "I built "
        /> */}
      </div>
    </>
  );
}
