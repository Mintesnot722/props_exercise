const props_ex = (props) => {
  return (
    <div className="card">
      <div className="img-container">
        <img src={props.img} alt="" className="img" />
      </div>

      <div className="intro">
        <h2 className="name">{props.name}</h2>
        <h3 className="job">{props.job}</h3>
      </div>
      <div className="help_btns">
        <button>
          <a href={props.aboutme} className="about">
            About me
          </a>
        </button>
        <button>
          <a href={props.contact} className="contact">
            Contact
          </a>
        </button>
      </div>
    </div>
  );
};

export default props_ex;
