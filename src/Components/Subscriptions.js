function Subscriptions(props) {
    const day = props.date.toLocaleString('default', { day: '2-digit' });
    const month = props.date.toLocaleString('default', { month: 'short' });
    const year = props.date.getFullYear();
  
    const deleteHandler = () => {
      props.onDelete(props.id);
    };
  
    return (
      <div className="w-full sticky top-[125px] shadow-md">
        <div className="w-full bg-gray-800 text-white flex justify-between items-center py-2 md:px-4 px-1 rounded-md">
          <div className="flex items-center gap-4">
            <div className="bg-black border-2 px-4 rounded-lg text-center">
              <h3 className="font-semibold md:text-lg text-sm">{day}</h3>
              <h3 className="font-semibold md:text-lg text-sm">{month}</h3>
              <h3 className="font-semibold md:text-lg text-sm">{year}</h3>
            </div>
            <h3 className="text-gray-100">{props.title}</h3>
          </div>
          <div className="flex items-center gap-2">
            <h3 className="bg-indigo-500 hover:bg-indigo-600 md:px-4 px-2 py-1 rounded-xl">
              {props.amount}$
            </h3>
            <button
              onClick={deleteHandler}
              className="px-2 py-1 bg-red-500 active:bg-red-600 text-white rounded-lg"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Subscriptions;
  