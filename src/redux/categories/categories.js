const CHECKSTATUS = 'CHECKSTATUS';

// reducer

const checkStatusReducer = (state = [], action) => {
  switch (action.type) {
    case CHECKSTATUS: {
      return {
        type: 'Under construction',
      };
    }
    default: {
      return state;
    }
  }
};

// actions

export const checkStatus = () => CHECKSTATUS;

export default checkStatusReducer;
