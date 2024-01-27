import Icons from "@assets/icons";
import viteIcon from "/vite.svg";
import ThemeToggle from "@components/shared/theme";
import Button from "@components/shared/button";

const HomePage = () => {
  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <div className="w-fit flex flex-row justify-start items-center [&>svg]:w-12 [&>svg]:h-12 [&>svg]:mx-5 h-fit text-5xl">
          <img src={viteIcon} className="w-12 h-12 mx-5" />
          +
          <Icons.ReactIcon />
          +
          <Icons.TypescriptIcon />
          +
          <Icons.TailwindIcon />
          +
          <Icons.ReduxIcon />
        </div>
        <h3 className="mt-10 text-4xl">
          An Essential, All-in-One React template ✨{" "}
        </h3>
        <div className="w-fit flex flex-row mt-10 justify-start items-center h-fit">
          <a
            href="https://github.com/ammaaraslam/react-template"
            target="_blank"
          >
            <Button variant="primary" className="mr-6">
              Star Template ⭐
            </Button>
          </a>
          <a href="https://github.com/ammaaraslam/react-template/blob/master/README.md">
            <Button variant="outlined">Documentation</Button>
          </a>
        </div>
        <ThemeToggle />
      </div>
    </>
  );
};

export default HomePage;
