export const filterReducer = (state, action) => {
  switch (action.type) {
    case "CATEGORY_FILTER":
      return {
        ...state,
        categoryFilter: state.categoryFilter.includes(action.payload)
          ? [...state.categoryFilter.filter((item) => item !== action.payload)]
          : [...state.categoryFilter, action.payload],
      };
    default:
      return null;
  }
};
