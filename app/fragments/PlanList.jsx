/* eslint-disable react/prop-types */




const PlanList = (props) => {
  return (
    <div className=" space-y-4 inter ">
       <li className=" flex items-center gap-5">
        <span className="block w-3 h-3 bg-zinc-600 rounded-full"></span>
        <p className=" text-xs plus text-neutral-900">{props.option}</p>
       </li>
    </div>
  );
}

export default PlanList;
