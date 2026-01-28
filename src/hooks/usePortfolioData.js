import { getAboutMe, getUpdates, getProjects, getContacts } from '../services/supabase';
import { useFetchData } from './useFetchData';

export function usePortfolioData() {
    const about = useFetchData(getAboutMe);
    const updates = useFetchData(getUpdates);
    const contacts = useFetchData(getContacts);
    const projects = useFetchData(getProjects);

    const loading = about.loading || updates.loading || contacts.loading || projects.loading;
    const error = about.error || updates.error || contacts.error || projects.error;

    return {
        about: about.data,
        updates: updates.data,
        contacts: contacts.data,
        projects: projects.data,
        loading,
        error
    };
}