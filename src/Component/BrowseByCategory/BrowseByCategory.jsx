import React from 'react';
import {
    ShoppingCart,
    FileText,
    Users,
    BarChart,
    Laptop,
    CreditCard,
    Briefcase,
    TrendingUp,
    ClipboardList,
    Globe,
    Settings,
} from 'lucide-react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Grid } from 'swiper/modules';  // Grid মডিউল ইমপোর্ট করলাম
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/grid'; // Grid এর CSS যুক্ত করলাম

const BrowseByCategory = () => {
    const categories = [
        { name: 'Retail & Product', jobs: 4, icon: <ShoppingCart size={20} className="text-indigo-600" /> },
        { name: 'Content Writer', jobs: 5, icon: <FileText size={20} className="text-indigo-600" /> },
        { name: 'Human Resource', jobs: 2, icon: <Users size={20} className="text-indigo-600" /> },
        { name: 'Market Research', jobs: 3, icon: <BarChart size={20} className="text-indigo-600" /> },
        { name: 'Software Development', jobs: 1, icon: <Laptop size={20} className="text-indigo-600" /> },
        { name: 'Finance', jobs: 4, icon: <CreditCard size={20} className="text-indigo-600" /> },
        { name: 'Management', jobs: 4, icon: <Briefcase size={20} className="text-indigo-600" /> },
        { name: 'Marketing & Sales', jobs: 3, icon: <TrendingUp size={20} className="text-indigo-600" /> },
        { name: 'Project Management', jobs: 6, icon: <ClipboardList size={20} className="text-indigo-600" /> },
        { name: 'Global Services', jobs: 2, icon: <Globe size={20} className="text-indigo-600" /> },
        { name: 'System Admin', jobs: 3, icon: <Settings size={20} className="text-indigo-600" /> },

        { name: 'Customer Support', jobs: 7, icon: <Users size={20} className="text-indigo-600" /> },
        { name: 'Data Science', jobs: 5, icon: <BarChart size={20} className="text-indigo-600" /> },
        { name: 'UI/UX Design', jobs: 4, icon: <Laptop size={20} className="text-indigo-600" /> },
        { name: 'Legal', jobs: 2, icon: <Briefcase size={20} className="text-indigo-600" /> },
        { name: 'Quality Assurance', jobs: 3, icon: <ClipboardList size={20} className="text-indigo-600" /> },
    ];

    return (
        <>
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Browse by category</h2>
                        <p className="text-gray-600">
                            Find the job that's perfect for you, about{' '}
                            <span className="text-indigo-600 font-medium">800+ new jobs everyday</span>
                        </p>
                    </div>

                    <Swiper
                        modules={[Pagination, Grid]} // Grid মডিউল যুক্ত করলাম
                        spaceBetween={20}
                        slidesPerView={3}          // প্রতি row তে 3টা slide দেখাবে
                        grid={{ rows: 2, fill: 'row' }}  // 2 টা row দেখাবে, fill='row' মানে পূরণ হবে row-wise
                        pagination={{ clickable: true }}
                        speed={600}
                        breakpoints={{
                            640: { slidesPerView: 2, grid: { rows: 2 } },
                            768: { slidesPerView: 3, grid: { rows: 2 } },
                            1024: { slidesPerView: 4, grid: { rows: 2 } },
                            1280: { slidesPerView: 5, grid: { rows: 2 } },
                        }}
                    >
                        {categories.map((category, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-white p-5 rounded-xl border border-gray-200 hover:border-indigo-300 shadow-sm transition cursor-pointer h-full">
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-indigo-50 mr-4">
                                            {category.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-base font-medium text-gray-800">{category.name}</h3>
                                            <p className="text-sm text-gray-500">
                                                {category.jobs} Job{category.jobs !== 1 ? 's' : ''} Available
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            <style jsx>{`
                /* Pagination ডট নিচে নামানোর জন্য */
                .swiper-pagination {
                    bottom: 15px !important;
                }
            `}</style>
        </>
    );
};

export default BrowseByCategory;
