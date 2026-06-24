const props_ex = (props) => {
  return (
    <div className=" bg-zinc-800 w-150 h-100 my-5 text-zinc-50 hover:scale-105 transition-all duration-300">
      <div className="flex justify-center">
        <img
          src={props.img}
          alt=""
          className=" w-50 h-50 rounded-full object-cover border-4 border-white shadow-lg"
        />
      </div>

      <div className=" flex flex-col justify-center items-center">
        <h2 className="name">{props.name}</h2>
        <h3 className="job">{props.job}</h3>
      </div>
      <div className="flex justify-center gap-5 text-zinc-50">
        <button className="btn">
          <a href={props.aboutme} className="">
            About me
          </a>
        </button>
        <button className="btn">
          <a href={props.contact} className=" ">
            Contact
          </a>
        </button>
      </div>
    </div>
  );
};

export default props_ex;
