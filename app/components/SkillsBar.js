import ProgressBar from "@ramonak/react-progress-bar";

const SkillsBar = (props) => {
  return (
    <div className="w-full">
      <p className="mb-5 text-sm xl:text-lg ">{props.lang}</p>
      <ProgressBar
        completed={props.count}
        bgColor="#191d2b"
        baseBgColor="#dbe1e8"
        transitionDuration="2s"
        animateOnRender={true}
        maxCompleted={100}
      />
    </div>
  );
};

export default SkillsBar;
