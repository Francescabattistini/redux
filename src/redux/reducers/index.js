const initialState = {
  query: {
    content: "",
  },
  jobs: {
    content: [],
  },
  companyJobs: {
    content: [],
  },
  favorites: {
    content: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "QUERY":
      return {
        ...state,
        query: {
          ...state.query,
          content: action.payload,
        },
      };
    case "JOBS":
      return {
        ...state,
        jobs: {
          ...state.jobs,
          content: action.payload,
        },
      };
    case "COMPANY_JOBS":
      return {
        ...state,
        companyJobs: {
          ...state.companyJobs,
          content: action.payload,
        },
      };
    case "ADD_TO_FAVORITES":
      return {
        ...state,
        favorites: {
          ...state.favorites,
          content: [...state.favorites.content, action.payload],
        },
      };
    case "REMOVE_FROM_FAVORITES":
      return {
        ...state,
        favorites: {
          ...state.favorites,
          content: state.favorites.content.filter(favorites => favorites._id !== action.payload),
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
