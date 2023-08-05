const actions = {
  PROJECTS_READ_BEGIN: 'PROJECTS_READ_BEGIN',
  PROJECTS_READ_SUCCESS: 'PROJECTS_READ_SUCCESS',
  PROJECTS_READ_ERR: 'PROJECTS_READ_ERR',

  PROJECTS_INVEST_BEGIN: 'PROJECTS_INVEST_BEGIN',
  PROJECTS_INVEST_SUCCESS: 'PROJECTS_INVEST_SUCCESS',
  PROJECTS_INVEST_ERR: 'PROJECTS_INVEST_ERR',



  projectsReadBegin: () => {
    return {
      type: actions.PROJECTS_READ_BEGIN,
    };
  },

  projectsReadSuccess: (data) => {
    return {
      type: actions.PROJECTS_READ_SUCCESS,
      data,
    };
  },

  projectsReadErr: (err) => {
    return {
      type: actions.PROJECTS_READ_ERR,
      err,
    };
  },

  projectsInvestBegin: () => {
    return {
      type: actions.PROJECTS_INVEST_BEGIN,
    };
  },

  projectsInvestSuccess: (data) => {
    return {
      type: actions.PROJECTS_INVEST_SUCCESS,
    };
  },

  projectsInvestErr: (err) => {
    return {
      type: actions.PROJECTS_INVEST_ERR,
      err,
    };
  },
};

export default actions;
