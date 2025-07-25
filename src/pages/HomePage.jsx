import { colorPalette } from '@/data/colorData';
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { MapPin, Building2, Users, Star } from 'lucide-react';
import { campusBuildings } from '@/data/campusData';
import { logoList } from '@/data/LogoList';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import SwiperCore from 'swiper';
import { Autoplay } from 'swiper/modules';
SwiperCore.use([Autoplay]);

export default function HomePage() {
  const navigate = useNavigate();

  const handleBuildingClick = (buildingId) => {
    navigate(`/building/${buildingId}`);
  };

  return (
    <>
      <Helmet>
        <title>Journey Of Economics</title>
        <meta name="description" content="Take an immersive virtual tour of our beautiful Faculty of Economics and Business. Explore buildings, facilities, and spaces in stunning 360° panoramic views." />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-10 px-4">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="/images/logo.PNG"
                alt="Logo Acara FEB"
                className="mx-auto mb-8 w-40 h-40 object-contain"
              />
              <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
                Journey Of Economics
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Buildings Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-4 text-white">
                Explore Now!
              </h2>
              <p className="text-xl text-blue-200 max-w-2xl mx-auto">
                Click on any building to start
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {campusBuildings.map((building, index) => (
                <motion.div
                  key={building.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => handleBuildingClick(building.id)}
                >
                  <div className="glass rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25">
                    <div className="relative overflow-hidden">
                      <img
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                        alt={`${building.name} exterior view`}
                        src={building.thumbnail || "/images/logo.PNG"} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute top-4 right-4">
                        <div className="glass rounded-full p-2">
                          <Star className="w-4 h-4 text-yellow-400" />
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                        {building.name}
                      </h3>
                      <p className="text-blue-200 text-sm mb-4 line-clamp-2">
                        {building.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-blue-300">
                          <Building2 className="w-4 h-4" />
                          <span className="text-sm">
                            {building.rooms?.length || 0} Rooms
                          </span>
                        </div>
                        {building.subBuildings && (
                          <div className="flex items-center gap-2 text-purple-300">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">
                              {building.subBuildings.length} Sub-buildings
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-4 text-white">Logo Ormawa</h2>
              <div className="overflow-hidden w-full mb-8">
                <Swiper
                  slidesPerView={6}
                  spaceBetween={32}
                  loop={true}
                  autoplay={{ delay: 0, disableOnInteraction: false }}
                  speed={4000}
                  allowTouchMove={false}
                  style={{ width: '100%' }}
                  breakpoints={{
                    0: { slidesPerView: 3 },
                    640: { slidesPerView: 4 },
                    1024: { slidesPerView: 6 }
                  }}
                >
                  {(logoList.find(l => l.folder.includes('Logo Ormawa'))?.logos || []).map((logo, idx) => (
                    <SwiperSlide key={logo + '-' + idx}>
                      <img
                        src={`/images/Logo Ormawa/${logo}`}
                        alt={logo}
                        className="h-40 w-auto rounded-xl p-2"
                        style={{ objectFit: 'contain' }}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <h2 className="text-4xl font-bold mb-4 text-white">Logo UKM</h2>
              <div className="overflow-hidden w-full mb-8">
                <Swiper
                  slidesPerView={6}
                  spaceBetween={32}
                  loop={true}
                  autoplay={{ delay: 0, reverseDirection: true, disableOnInteraction: false }}
                  speed={4000}
                  allowTouchMove={false}
                  style={{ width: '100%' }}
                  breakpoints={{
                    0: { slidesPerView: 3 },
                    640: { slidesPerView: 4 },
                    1024: { slidesPerView: 6 }
                  }}
                >
                  {(logoList.find(l => l.folder.includes('Logo UKM'))?.logos || []).map((logo, idx) => (
                    <SwiperSlide key={logo + '-' + idx}>
                      <img
                        src={`/images/Logo UKM/${logo}`}
                        alt={logo}
                        className="h-40 w-auto rounded-xl p-2"
                        style={{ objectFit: 'contain' }}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </motion.div>

            {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: MapPin,
                  title: '360° Panoramic Views',
                  description: 'Experience every corner of our campus with stunning 360-degree panoramic photography'
                },
                {
                  icon: Building2,
                  title: 'Interactive Navigation',
                  description: 'Navigate seamlessly between rooms and buildings with interactive hotspots and navigation'
                },
                {
                  icon: Users,
                  title: 'Virtual Exploration',
                  description: 'Explore at your own pace with detailed information about each space and facility'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="glass rounded-2xl p-8 text-center hover:scale-105 transition-transform duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-blue-200">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div> */}
          </div>
        </section>
      </div>
    </>
  );
}
