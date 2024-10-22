


const Card = ({project}) => {
    console.log(project);
    

 
  return (
    <div className="shadow-custom hover:shadow-customHover m-5 mb-5 flex w-96 flex-col items-center space-y-5 rounded-2xl border-2 border-black bg-white p-5 transition-all hover:-translate-y-0.5 dark:bg-[#1a1a1a]">
      
          <img
            className="h-64 w-96 border-8 border-gray-50 object-cover transition-all dark:border-[#0d0d0d]"
            src={project.imgUrl}
            alt=""
          />
        
      <div className="content">
        <h2 className="title mb-2 text-center text-2xl font-bold">{project.title}</h2>
        <p className="description text-center text-base">{project.description}</p>
      </div>
    </div>
  );
};

export default Card;
