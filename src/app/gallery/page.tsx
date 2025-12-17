import GalleryCTA from "@/components/pages/Gallery/GalleryCTA";
import GalleryFilters from "@/components/pages/Gallery/GalleryFilters";
import GalleryHero from "@/components/pages/Gallery/GalleryHero";
import LoadMoreButton from "@/components/pages/Gallery/LoadMoreButton";
import PhotoGrid from "@/components/pages/Gallery/PhotoGrid";

const GalleryPage = () => {
  return (
    <main className="relative z-10 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GalleryHero />
        <GalleryFilters />
        <PhotoGrid />
        <LoadMoreButton />
        <GalleryCTA />
      </div>
    </main>
  );
};

export default GalleryPage;
