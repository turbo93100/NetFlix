const Sections = (props) => {
  console.log(props);
  return (
    <>
      {props.data.map((elem, id) => {
        return (
          <>
            <div key={id}>
              <h2>{elem.category}</h2>
              <div className="carroussel">
                {elem.images.map((elem2, id2) => {
                  return (
                    <>
                      <div key={id2}>
                        <img src={elem2} alt="" />
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Sections;
