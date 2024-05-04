import { WelcomeSection } from '@/components/organisms/WelcomeSection/WelcomeSection';
import { PageLayout } from '@/layouts/PageLayout/PageLayout';

import { dataWelcopeMainPage } from '@/const/dataCademy';



const Index = () => {
    return (
        <PageLayout title='index'>
            <WelcomeSection {...dataWelcopeMainPage} />
        </PageLayout>
    )
};

export default Index;
