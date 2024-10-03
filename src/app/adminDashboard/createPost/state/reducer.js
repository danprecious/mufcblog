export const reducer = (state, action) => {
  switch (action.type) {
    case "SAVE_SECTION":
      return {
        ...state,
        sections: [...state.sections, action.payload],
      };
      break;
    case "OPEN_NEW_SECTION":
      return {
        ...state,
        newSection: true,
      };
      break;
    case "CLOSE_NEW_SECTION":
      return {
        ...state,
        newSection: false,
      };
      break;
    case "EDIT_SECTION":
      return {
        ...state,
        editSection: true,
        editData: action.payload,
      };
      break;
    case "POSTTITLE":
      return {
        ...state,
        postTitle: action.payload,
      };
      break;
    case "INTRO":
      return {
        ...state,
        intro: action.payload,
      };

    default:
      console.error("no case found");
      break;
  }
};
