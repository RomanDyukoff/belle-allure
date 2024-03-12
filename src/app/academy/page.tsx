import { AcademyWrapper } from '@/components/organisms/AcademyWrapper/AcademyWrapper';
import { PrevievSection } from '@/components/organisms/PrevievSection/PrevievSection';
import { ProfSection } from '@/components/organisms/ProfSection/ProfSection';
import { SurfacingSection } from '@/components/organisms/SurfacingSection/SurfacingSection';

export default function Academy() {
    return (
        <>
            <PrevievSection />
            <SurfacingSection />
            <ProfSection />
            <AcademyWrapper />
        </>
    );
}
