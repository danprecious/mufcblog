"use client";
import { useContext } from "react";
import { CreatePostContext } from "../../state/createPostContext";

export const SectionsDisplay = () => {
  const { state, dispatch } = useContext(CreatePostContext);
//   const { sections } = state;

  return (
    <div className="py-2 my-5 overflow-x-scroll flex">
      {state.sections.length !== 0 ? (
        <div className="flex">
          {state.sections.map((section, index) => {
            console.log(section);
            return (
              <button
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  dispatch({ type: "EDIT_SECTION", payload: section });
                }}
                className="btn mx-3 min-w-[20em] text-center"
              >
                {section.sectionHeading}
              </button>
            );
          })}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
