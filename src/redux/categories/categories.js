const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

// reducer

const checkStatusReducer = (state = '', action) => {
  switch (action.type) {
    case CHECK_STATUS: {
      
      return 'Under construction'

    }
    default: {
      return state;
    }
  }
};

// actions

export const checkStatus = () => ({
  type: CHECK_STATUS,
});

export default checkStatusReducer;


