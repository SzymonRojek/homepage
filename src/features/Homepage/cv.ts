import { profile } from "./profile";

// Link to the CV in public/, or null while no CV is set.
export const getCvUrl = () =>
  profile.cvFile ? `${import.meta.env.BASE_URL}${profile.cvFile}` : null;
