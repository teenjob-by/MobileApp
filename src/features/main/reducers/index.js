export const fetchJobs = (state = { isFetchingJobs: false, isRefreshingJobs: false }, action) => {
  switch (action.type) {
    case 'FETCH_JOB_SUCCESS':
      const { data } = action.payload;
      return {
        data,
        isFetchingJobs: false,
        isRefreshingJobs: false,
      };
    case 'REFRESH_JOBS_REQUEST':
      return {
        ...state,
        isFetchingJobs: true,
        isRefreshingJobs: true,
      };
    default:
      return state;
  }
};
