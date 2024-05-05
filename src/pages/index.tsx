import { WelcomeSection } from '@/components/organisms/WelcomeSection/WelcomeSection';
import { PageLayout } from '@/layouts/PageLayout/PageLayout';

import { dataWelcopeMainPage } from '@/const/dataCademy';
import { AdvantagesSection } from '@/components/organisms/AdvantagesSection/AdvantagesSection';



const Index = () => {
    return (
        <PageLayout title='index'>
            <WelcomeSection {...dataWelcopeMainPage} />
            <AdvantagesSection />
        </PageLayout>
    )
};

export default Index;
