export const goBack = (history) => {
    history.goBack();
};
  
export const goToAppFormPage = (history) => {
    history.push("/application-form/");
};

export const goToLoginPage = (history) => {
    history.push("/login");
};

export const goToCreateTripPage = (history) => {
    history.push("/trips/create");
};

export const goToListTripPage = (history) => {
    history.push("/trips/list");
};
  
export const goToDetailTripPage = (history, id) => {
    history.push(`/trips/details/${id}`);
};

export const goToListTripAdmPage = (history) => {
    history.push("/trips/list/admin")
}

export const goToCandidatesTripPage = (history) => {
    history.push(`/trips/candidates/admin/`)
}
  
export const goToHome = (history) => {
    history.push("/");
};
  