import { useContext } from "react";
import { CreatePostContext } from "../../state/createPostContext";
import { FaTimes } from "react-icons/fa";
import { BiPlus } from "react-icons/bi";

export const CloseButton = () => {
  const { state, dispatch } = useContext(CreatePostContext);

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        dispatch({ type: "CLOSE_NEW_SECTION", payload: false });
      }}
      className="absolute top-0 right-0 bg-textcolor rounded-full w-[25px] h-[25px] flex justify-center items-center"
    >
      <FaTimes className="text-bgShade" />
    </button>
  );
};

export const AddSectionButton = () => {
  const { state, dispatch } = useContext(CreatePostContext);


  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        
        dispatch({ type: "OPEN_NEW_SECTION", payload: true });
        console.log(state.newSection)
      }}
      className="btn"
    >
      <p className="px-1">Create new section</p>
      <BiPlus />
    </button>
  );
};


