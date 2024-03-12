import { dataColorist, dataCourse, dataHaircut } from '@/const/dataCademy';

import { CourseSection } from '../CourseSection/CourseSection';

export const AcademyWrapper = (): JSX.Element => {
    return (
        <section className='scademy'>
            <CourseSection title='СOLORISTICS' dataCards={dataColorist} />
            <CourseSection title='HAIRCUTS' dataCards={dataHaircut} />
            <CourseSection title='Belle Allure' subtitle='ONLINE КУРСЫ' dataCards={dataCourse} />
        </section>
    );
};
