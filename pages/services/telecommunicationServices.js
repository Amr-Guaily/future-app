import Image from "next/image";
import { Clock, Calender, International } from "../../components/SVGs";

const TelecommunicationServices = () => {
    return (
        <>
            <div className="w-full h-[200px] md:h-[340px] relative">
                <Image fill src="/assets/telecommunication-Services/banner.jpg" alt="telecommunication-services" />
                <div className="absolute w-full h-full bg-black/20 flex items-center justify-center md:justify-start">
                    <h1 className="text-white text-4xl lg:text-6xl font-medium px-5 lg:px-16">خدمات الاتصالات</h1>
                </div>
            </div>

            <div className="s-block">
                <p className="text-primary tracking-wide !leading-[2.2rem] text-lg lg:text-xl font-medium">
                    تعمل مؤسسة بروق المستقبل بشبكات اتصالات متعددة التخصصات لضمان التفاني الكامل و الاستفادة
                    من مواردها ومرافقها. تقدم هذه المؤسسة مجموعة كاملة من خدمات الاتصالات السلكية واللاسلكية
                    مثل المسح والتصميم والتركيب والتكليف و عمل الصيانة في مجال الإتصالات المتنقلة، نظام نقل
                    شبكي ثابت، تركيب برج علوي على السطح، تركيب نظام الشبكات الداخية خطوة بخطوة و أنظمة
                    الشبكات.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-8">
                    <div className="svg-item">
                        <Clock />
                        <p>تقديم الخدمات العماليه المهنيه المؤقتة</p>
                    </div>
                    <div className="svg-item">
                        <Calender />
                        <p>تقديم الخدمات العماليه المهنيه المؤقتة</p>
                    </div>
                    <div className="svg-item">
                        <International />
                        <p>تقديم الخدمات العماليه المهنيه المؤقتة</p>
                    </div>
                </div>

                <div className="my-8">
                    <p className="text-secondary font-semibold text-center text-2xl md:!text-3xl py-4">كمـا نخدم القطاعات التالية</p>
                    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-4">
                        <div className="tele-service-item">
                            <div className="relative h-[180px]">
                                <Image fill src="/assets/telecommunication-Services/1.jpg" alt="service_1" />
                            </div>
                            <div className="info">
                                <h2>تصميم وتكامل أنظمة الاتصالات اللاسلكية</h2>
                                <p className=" text-slate-700">إذا كنت منخرطًا في صناعة الاتصالات، فإننا نوصي بشدة بمناقشة احتياجاتك معنا. نحن نمتلك القدرة على تزويدك بموهبة الاتصالات التي تحتاجها، بدءًا من الموظفين الهندسيين وحتى المديرين التنفيذيين.</p>
                            </div>
                        </div>
                        <div className="tele-service-item">
                            <div className="relative h-[180px]">
                                <Image fill src="/assets/telecommunication-Services/2.jpg" alt="service_2" />
                            </div>
                            <div className="info">
                                <h2>خدمات التركيب والاختبار والتشغيل</h2>
                                <p className=" text-slate-700">إذا كنت منخرطًا في صناعة الاتصالات، فإننا نوصي بشدة بمناقشة احتياجاتك معنا. نحن نمتلك القدرة على تزويدك بموهبة الاتصالات التي تحتاجها، بدءًا من الموظفين الهندسيين وحتى المديرين التنفيذيين.</p>
                            </div>
                        </div>
                        <div className="tele-service-item">
                            <div className="relative h-[180px]">
                                <Image fill src="/assets/telecommunication-Services/3.jpg" alt="service_3" />
                            </div>
                            <div className="info">
                                <h2>دعم وصيانة موثوقة لما بعد البيع</h2>
                                <p className=" text-slate-700">إذا كنت منخرطًا في صناعة الاتصالات، فإننا نوصي بشدة بمناقشة احتياجاتك معنا. نحن نمتلك القدرة على تزويدك بموهبة الاتصالات التي تحتاجها، بدءًا من الموظفين الهندسيين وحتى المديرين التنفيذيين.</p>
                            </div>
                        </div>
                        <div className="tele-service-item">
                            <div className="relative h-[180px]">
                                <Image fill src="/assets/telecommunication-Services/4.jpg" alt="service_4" />
                            </div>
                            <div className="info">
                                <h2>خدمات بناء الاتصالات المتكاملة</h2>
                                <p className=" text-slate-700">إذا كنت منخرطًا في صناعة الاتصالات، فإننا نوصي بشدة بمناقشة احتياجاتك معنا. نحن نمتلك القدرة على تزويدك بموهبة الاتصالات التي تحتاجها، بدءًا من الموظفين الهندسيين وحتى المديرين التنفيذيين.</p>
                            </div>
                        </div>
                        <div className="tele-service-item">
                            <div className="relative h-[180px]">
                                <Image fill src="/assets/telecommunication-Services/5.jpg" alt="service_5" />
                            </div>
                            <div className="info">
                                <h2>تركيب نظام الشبكات الداخلية خطوة بخطوة</h2>
                                <p className=" text-slate-700">إذا كنت منخرطًا في صناعة الاتصالات، فإننا نوصي بشدة بمناقشة احتياجاتك معنا. نحن نمتلك القدرة على تزويدك بموهبة الاتصالات التي تحتاجها، بدءًا من الموظفين الهندسيين وحتى المديرين التنفيذيين.</p>
                            </div>
                        </div>
                        <div className="tele-service-item">
                            <div className="relative h-[180px]">
                                <Image fill src="/assets/telecommunication-Services/6.jpg" alt="service_6" />
                            </div>
                            <div className="info">
                                <h2>تركيب برج علوي</h2>
                                <p className=" text-slate-700">إذا كنت منخرطًا في صناعة الاتصالات، فإننا نوصي بشدة بمناقشة احتياجاتك معنا. نحن نمتلك القدرة على تزويدك بموهبة الاتصالات التي تحتاجها، بدءًا من الموظفين الهندسيين وحتى المديرين التنفيذيين.</p>
                            </div>
                        </div>
                        <div className="tele-service-item">
                            <div className="relative h-[180px]">
                                <Image fill src="/assets/telecommunication-Services/7.jpg" alt="service_7" />
                            </div>
                            <div className="info">
                                <h2>شبكات الميكروويف الرقمية</h2>
                                <p className=" text-slate-700">إذا كنت منخرطًا في صناعة الاتصالات، فإننا نوصي بشدة بمناقشة احتياجاتك معنا. نحن نمتلك القدرة على تزويدك بموهبة الاتصالات التي تحتاجها، بدءًا من الموظفين الهندسيين وحتى المديرين التنفيذيين.</p>
                            </div>
                        </div>
                        <div className="tele-service-item">
                            <div className="relative h-[180px]">
                                <Image fill src="/assets/telecommunication-Services/8.jpg" alt="service_8" />
                            </div>
                            <div className="info">
                                <h2>توسيع وترقية خدمات الأنظمة بما يتناسب مع العميل</h2>
                                <p className=" text-slate-700">إذا كنت منخرطًا في صناعة الاتصالات، فإننا نوصي بشدة بمناقشة احتياجاتك معنا. نحن نمتلك القدرة على تزويدك بموهبة الاتصالات التي تحتاجها، بدءًا من الموظفين الهندسيين وحتى المديرين التنفيذيين.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TelecommunicationServices;