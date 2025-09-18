export default function IconButtonFeatureCard(props) {
  const { icon, title, paragraph, className, children, colorMode } = props;

  // Definir classes de cor com base no modo
  const bgClasses = {
    dark: "bg-white",
    light: "bg-white",
    default: "bg-primary",
  };
  const textClasses = {
    dark: "text-black",
    light: "text-black",
    default: "text-black",
  };

  const bgClass = bgClasses[colorMode] || bgClasses.default;
  const textClass = textClasses[colorMode] || textClasses.default;

  return (
    <div
      className={`w-[250px] phone2:w-[300px] phone3:w-[350px] h-[180px] tablet1:h-[200px] desktop1:h-[210px] tablet1:max-w-[255px] desktop1:max-w-[180px] p-0 flex flex-col items-center justify-between ${className}`}
    >
      <div
        className={`h-[64px] w-[64px] rounded-md flex justify-center items-center ${bgClass}`}
      >
        {icon}
      </div>
      <h1
        className={` font-bold font-mainFont text-paragraph5 text-center h-auto desktop1:h-[50px] flex items-center ${textClass}`}
      >
        {title}
      </h1>

      <p
        className={`text-center opacity-70 font-mainFont w-[90%] desktop1:h-[70px] ${textClass}`}
      >
        {paragraph}
      </p>
      {children}
    </div>
  );
}
