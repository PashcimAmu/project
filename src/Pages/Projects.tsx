import Card from "@/components/Card";
import { data } from "@/data/data";




const Projects = () => {
    const mydata= data
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1200px] mx-auto">
       {mydata.map((item: any)=><Card key={item._id} project={item}/>)
      }
    </div>
  );
};

export default Projects;
